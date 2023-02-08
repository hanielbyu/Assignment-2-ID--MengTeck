<table id="leaderboard"></table>


  const leaderboardTable = document.getElementById("leaderboard");
  const APIKEY = "63b64979969f06502871aa45";
  // Function to retrieve the leaderboard data from RestDB
  const getLeaderboardData = async () => {
    const response = await fetch("https://mtinteractivedev-900a.restdb.io/rest/contact?max=2", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "x-apikey": APIKEY
      }
    });
    const data = await response.json();
    return data;
  };

  // Function to display the leaderboard data in the table
  const displayLeaderboard = async () => {
    const leaderboardData = await getLeaderboardData();

    leaderboardData.forEach((entry, index) => {
      const row = leaderboardTable.insertRow(index);
      const nameCell = row.insertCell(0);
      const scoreCell = row.insertCell(1);
      const dateCell = row.insertCell(2);

      nameCell.innerHTML = entry.name;
      scoreCell.innerHTML = entry.score;
      dateCell.innerHTML = entry.date;
    });
  };

  // Call the display function to display the leaderboard data when the page loads
  displayLeaderboard();

