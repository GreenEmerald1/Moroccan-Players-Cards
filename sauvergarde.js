const BestSeasons = {"Achraf Hakimi 🇲🇦⚡" : ["Paris Saint-Germain - France","2023-2024", "hakimi.PNG" ], "Yassine Bounou 🧤🦁":["Sevilla - Spain", "2022 - 2023", "bounou.PNG"], "Nayef Aguerd 🛡️🔥":["Westham - England", "2022 - 2023", "aguerd.PNG"], "Romain Saïss 🏋️‍♂️🦁" :["Wolverhampton - England", "2019 - 2020", "Saiss.PNG"],"Noussair Mazraoui 🚀🎯":["Ajax - Netherlands" , "2017 - 2018", "mazraoui.PNG"],"Sofyan Amrabat 💪🛡️":["Manchester United - England", "2023 - 2024", "amrabat.PNG"], "Azzedine Ounahi 🌟🔥":["Angers Sporting - France", "2021 - 2022", "ounahi.PNG"], "Selim Amallah ⚽💥":["Valladolid - Spain", "2022 - 2023", "amallah.PNG"], "Hakim Ziyech 🎯⚽":["Ajax - Netherlands", "2016 - 2017", "ziyech.PNG"], "Youssef En-Nesyri ⚽🔥":["Sevilla - Spain", "2022 - 2023", "ennesyri.PNG"] , "Boufal Sofiane 🦋🎨ne Boufal":["Lille LOSC - France", "2010 - 2011", "boufal.PNG"]}
const quotes = {"Achraf Hakimi 🇲🇦⚡" :'"Hakimi’s speed and technique make him one of the best full-backs in the world." ✨', "Yassine Bounou 🧤🦁" : '"Bounou’s composure and reflexes make him a world-class goalkeeper." 🏅', "Nayef Aguerd 🛡️🔥" : '"Aguerd’s defensive intelligence and composure make him a key asset." 💪', "Romain Saïss 🏋️‍♂️🦁" : '"Saïss is a true leader with a strong defensive presence." 👊', "Noussair Mazraoui 🚀🎯" : '"Mazraoui’s technical skills and attacking mindset make him a crucial full-back." 🔥', "Hakim Ziyech 🎯⚽" : '"Ziyech’s creativity and vision make him one of the most dangerous playmakers." ✨', "Sofyan Amrabat 💪🛡️" : '"Amrabat’s work rate and ball recovery skills are key to his team’s midfield dominance." 🏅', "Youssef En-Nesyri ⚽🔥" : '"En-Nesyri’s speed and finishing ability make him a constant threat in the box." 🔥', "Azzedine Ounahi 🌟🔥" :'"Ounahi’s dribbling and composure under pressure make him an exciting talent." ✨', "Boufal Sofiane 🦋🎨" : '"Boufal’s flair and creativity make him a magician with the ball at his feet." ✨', "Selim Amallah ⚽💥" : '"Amallah’s composure in front of goal and vision on the field make him a key player." ✨' }
const sucess = {"Achraf Hakimi 🇲🇦⚡" :'🏆 Success: Ligue 1 🏅, Serie A 🏆, La Liga 🏆, CAF Youth Player of the Year 🌍', "Yassine Bounou 🧤🦁" : '🏆 Success: UEFA Europa League 🏆 (2020, 2023), Zamora Trophy 🏆 (Best La Liga Goalkeeper)', "Nayef Aguerd 🛡️🔥" : '🏆 Success: UEFA Europa Conference League 🏆 (2023)', "Romain Saïss 🏋️‍♂️🦁" : '🏆 Success: Led Morocco 🇲🇦 to a historic World Cup semi-final 🌍⚽ (2022), EFL Championship 🏆 with Wolves (2017-18)', "Noussair Mazraoui 🚀🎯" : '🏆 Success: Eredivisie 🏆 with Ajax, Bundesliga 🏆 with Bayern Munich', "Hakim Ziyech 🎯⚽" : '🏆 Success: Eredivisie 🏆 with Ajax, UEFA Champions League 🏆 with Chelsea, Super Cup 🏆', "Sofyan Amrabat 💪🛡️" : '🏆 Success: Playing Serie A 🏆 with Fiorentina (Coppa Italia finalist)', "Youssef En-Nesyri ⚽🔥" : '🏆 Success:  Playing La Liga 🏆 with Sevilla, Winning UEFA Europa League 🏆 (2020, 2023)', "Azzedine Ounahi 🌟🔥" :'🏆 Success: Ranking 4th in Ligue 1 🏆 with Angers (2021-22)', "Boufal Sofiane 🦋🎨" : '🏆 Success: Coupe de France 🏆 with Lille (2010-2011)', "Selim Amallah ⚽💥" : '🏆 Success: Belgian Pro League 🏆 with Standard Liège' }
function execute(player){
  if (BestSeasons[player]) {
      const [team, season, image] = BestSeasons[player];

      document.documentElement.innerHTML = `
          <head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title> Hakim Ziyech ProfileCard </title>
  <!---Custom Css File!--->
  <link rel="stylesheet" href="playerCarddesign.css">
  
</head>
<body>
  <div class="wrapper">
    <div class="profilecard">
      <div class="img">
        <img src=${image} alt="" class="image">
      </div>
      <div class="infos">
        <h1 class="name">${player}</h1>
        <p style ="color : white ; font-weight: bold;"> Professional football player </p>
      </div>
      <div class="annee">
        <h2 id ="team">${team}</h2>
        <p>${season}</p>
      </div>
      <div class="descriptionplayer">${quotes[player]}</div>
      <div class ="sucess">${sucess[player]}</div>
      <div class="buttoncontainer">
      <button id="exit" onclick ="goBack()">return</button>
      </div>
    </div>
  </div>
</body>
      `;
  } else {
      alert("Joueur non trouvé !");
  }
}
function goBack() {
  document.querySelector(".profile-container").innerHTML = ""; // Réinitialiser l'affichage
}