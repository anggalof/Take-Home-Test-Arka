export const mockEducation = {
  tierEducation: [
    {
      id: "tier01",
      eduTierName: "Pendidikan Pra Sekolah",
      preSchool: "levelPraSekolah"
    },
    {
      id: "tier02",
      eduTierName: "Pendidikan Dasar",
      preSchool: "levelDasar"
    },
    {
      id: "tier03",
      eduTierName: "Pendidikan Menengah",
      preSchool: "levelMenengah"
    },
    {
      id: "tier04",
      eduTierName: "Pendidikan Tinggi",
      preSchool: "levelTinggi"
    }
  ],
  levelEducation: [
    {
      id: "level01",
      eduLevelName: [
        {
          id: "subLevel01",
          eduName: "PAUD (Pendidikan Anak Usia Dini)",
        },
        {
          id: "subLevel02",
          eduName: "TK (Taman Kanak-kanak)",
        },
        {
          id: "subLevel03",
          eduName: "RA (Raudhatul Athfal)"
        }
      ],
      preSchool: "levelPraSekolah"
    },
    {
      id: "level02",
      eduLevelName: [
        {
          id: "subLevel01",
          eduName: "SD (Sekolah Dasar)",
        },
        {
          id: "subLevel02",
          eduName: "MI (Madrasah Ibtidaiyah)",
        },
        {
          id: "subLevel03",
          eduName: "SMP (Sekolah Menengah Pertama)"
        },
        {
          id: "subLevel04",
          eduName: "MTs (Madrasah Tsanawiyah)"
        }
      ],
      preSchool: "levelDasar"
    },
    {
      id: "level03",
      eduLevelName: [
        {
          id: "subLevel01",
          eduName: "SMA (Sekolah Menengah Atas)",
        },
        {
          id: "subLevel02",
          eduName: "MA (Madrasah Aliyah)",
        },
        {
          id: "subLevel03",
          eduName: "SMK (Sekolah Menengah Kejuruan)"
        }
      ],
      preSchool: "levelMenengah"
    },
    {
      id: "level04",
      eduLevelName: [
        {
          id: "subLevel01",
          eduName: "D3 Diploma",
        },
        {
          id: "subLevel02",
          eduName: "S1/D4 Sarjana",
        },
        {
          id: "subLevel03",
          eduName: "S2 Magister"
        },
        {
          id: "subLevel04",
          eduName: "S3 Doktoral"
        }
      ],
      preSchool: "levelTinggi"
    }
  ],
};
