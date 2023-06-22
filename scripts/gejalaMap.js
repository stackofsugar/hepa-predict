var gejalaAwal = [
    {
        id: "gejalaAwal1",
        name: "Berat badan menurun",
    },
    {
        id: "gejalaAwal2",
        name: "Kulit dan mata menguning",
    },
    {
        id: "gejalaAwal3",
        name: "Sakit otot dan sendi",
    },
];

var gejalaLanjutan = [
    {
        id: "hepaA",
        name: "Hepatitis A",
        next: false,
    },
    {
        id: "hepaB",
        name: "Hepatitis B",
        next: false,
    },
    {
        id: "hepaC",
        name: "Hepatitis C",
        next: false,
    },
    {
        id: "hepaD",
        name: "Hepatitis D",
        next: false,
    },
    {
        id: "hepaE",
        name: "Hepatitis E",
        next: false,
    },
    {
        id: "s1",
        name: "Demam",
        next: {
            true: "s2",
            false: "hepaA",
        },
    },
    {
        id: "s2",
        name: "Lelah dan lemas",
        next: {
            true: "s3",
            false: "hepaB",
        },
    },
    {
        id: "s3",
        name: "Koma",
        next: {
            true: "s4",
            false: "hepaE",
        },
    },
    {
        id: "s4",
        name: "Muntah-muntah",
        next: {
            true: "s5",
            false: "hepaD",
        },
    },
    {
        id: "s5",
        name: "Urin terlihat gelap",
        next: {
            true: "hepaC",
            false: "hepaD",
        },
    },
];
