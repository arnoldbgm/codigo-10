app.get("/jugadores-balon-oro", (req, res) => {
    // winners of gold ball
    const players = [
      {
        name: "Karin Benzema",
        year: 2022,
        img: "https://e00-marca.uecdn.es/deporte/balon-de-oro/imagenes/palmares/benzema-2022.jpg",
      },
      {
        name: "Leo Messi",
        year: 2021,
        img: "https://e00-marca.uecdn.es/deporte/balon-de-oro/imagenes/palmares/messi-2021.jpg",
      },
      {
        name: "Leo Messi",
        year: 2019,
        img: "https://e00-marca.uecdn.es/deporte/balon-de-oro/imagenes/palmares/messi-2019.jpg",
      },
      {
        name: "Luka Modric",
        year: 2018,
        img: "https://e00-marca.uecdn.es/deporte/balon-de-oro/imagenes/palmares/modric-2018.jpg",
      },
    ];
    res.json(players);
  });xvr