// Family data. Every fact cites a source id; status is one of:
//   record    – read directly from the cited scan
//   probable  – a likely reading or inference; still needs checking
//   hypothesis – family belief or deduction, no record yet
// Living people are deliberately left out.
const SOURCES = {
  "b1880": {
    title: "Birth register Oberjosbach 1880, Nr. 18 – Joseph Hofmann",
    holder: "Stadtarchiv Idstein (Standesamt Oberjosbach records)",
    scans: ["scans/1880-birth-joseph-hofmann-sen.jpg"],
    transcript: "Oberjosbach, 16 March 1880. Informant: Bürgermeister Wilhelm Hofmann, living in Vockenhausen, evangelical. His wife Elisabetha Hofmann née Wolf, Catholic, living with him, gave birth at Vockenhausen in his home on the thirteenth of March 1880, in the morning at eleven o'clock, to a boy named Joseph. Signed: Wilh. Hofmann, Bürgermeister. Registrar: Haupt [?]. Later margin note: “Gest. [?] 1944 – T Nr 7”."
  },
  "b1884": {
    title: "Birth register Oberjosbach 1884, Nr. 71 – Katharina Zimmermann (probably not our Katharina)",
    holder: "Stadtarchiv Idstein (Standesamt Oberjosbach records)",
    scans: ["scans/1884-birth-katharina-zimmermann-other.jpg"],
    transcript: "Oberjosbach, 5 October 1884. Informant: factory worker Franz Zimmermann V, living in Vockenhausen, Catholic. His wife Maria Zimmermann née Müller, Catholic, gave birth at Vockenhausen on the thirtieth of September 1884 to a girl named Katharina. Registrar (acting): Thoma.",
    note: "Birth date and parents do not match the bride of the 1903 marriage (born 22 September 1882, daughter of Georg Zimmermann III and Elisabetha Kilb). This record was probably sent for a different Katharina Zimmermann of Vockenhausen."
  },
  "m1903": {
    title: "Marriage register Oberjosbach 1903, Nr. 19 – Hofmann / Zimmermann",
    holder: "Stadtarchiv Idstein (Standesamt Oberjosbach records)",
    scans: ["scans/1903-marriage-hofmann-zimmermann-p1.jpg", "scans/1903-marriage-hofmann-zimmermann-p2.jpg"],
    transcript: "Oberjosbach, seventeenth of August 1903. (1) Factory worker Joseph Hofmann, Catholic, born 13 March 1880 at Vockenhausen, living in Vockenhausen, son of the late Bürgermeister Wilhelm Hofmann and his wife Elisabetha née Wolf, of Vockenhausen. (2) Katharina Zimmermann, no occupation, Catholic, born 22 September 1882 at Vockenhausen, living in Eppstein, Kreis Obertaunus, daughter of the carpenter (Zimmermann) Georg Zimmermann III and his wife Elisabetha née Kilb, of Vockenhausen. Witnesses: (3) carpenter Georg Zimmermann, 58, of Vockenhausen; (4) factory worker Konrad Hofmann, 35, of Vockenhausen. Signed: Joseph Hofmann, Katharina Hofmann geb. Zimmermann, Georg Zimmermann, Konrad Hofmann. Registrar: Thoma. Margin stamp: “H. Geheiratet 6.6.1942 Nr. 227, Standesamt Ffm.-Höchst [?]”, with a handwritten word above, possibly “Anna” [?].",
    note: "The 1942 margin stamp is unexplained: it is the kind of note normally added to a birth entry. Check with the archive what it refers to."
  },
  "b1903": {
    title: "Birth register Oberjosbach 1903, Nr. 102 – Josef Hofmann",
    holder: "Stadtarchiv Idstein (Standesamt Oberjosbach records)",
    scans: ["scans/1903-birth-josef-hofmann-ii.jpg"],
    transcript: "Oberjosbach, 6 December 1903. Informant: factory worker Joseph Hofmann, living in Vockenhausen, Catholic. His wife Katharina Hofmann née Zimmermann, Catholic, living with him, gave birth at Vockenhausen in his home on the third of December 1903, at eight o'clock in the afternoon [?], to a boy named Joseph. Signed: Joseph Hofmann. Registrar: Thoma.",
    note: "Oberjosbach is the registry office, not the residence: the family lived in Vockenhausen."
  },
  "m1928": {
    title: "Marriage register Vockenhausen 1928, Nr. 6 – Hofmann / Eichhorn",
    holder: "Stadtarchiv Eppstein",
    scans: ["scans/1928-marriage-hofmann-eichhorn-p1.jpg", "scans/1928-marriage-hofmann-eichhorn-p2.jpg"],
    transcript: "Vockenhausen, first of December 1928 (banns register Nr. 7). (1) Joiner [Schreiner, probable reading] Josef Hofmann, born 3 December 1903 at Vockenhausen, birth register Nr. 102 of Standesamt Oberjosbach, living in Vockenhausen. (2) Anna Margaretha Eichhorn, born 24 March 1898 at Immelborn, birth register Nr. 8 of Standesamt Immelborn, living in Vockenhausen. Witnesses: (3) factory worker Josef Hofmann, 48, of Vockenhausen; (4) factory worker Friedrich W… [surname unclear], 37, of Vockenhausen. Signed: Josef Hofmann, Anna Margarete Hofmann geb. Eichhorn, Joseph Hofmann, Friedrich W… . Blue margin stamp: “Der Ehemann ist am 11. Juli 1946 in Eppstein verstorben (St. Amt Eppstein Nr. 33/1946). Den 21. März 1977, Der Standesbeamte, Fischer [?]”.",
    note: "Earlier readings gave the year as 1926. The year word is written exactly like “acht” in the bride's birth year 1898, so 1928 is the reading here. The blue stamp records the husband's death, added in 1977 – it is not a divorce."
  },
  "d2019": {
    title: "Death certificate Bad Homburg v. d. Höhe, S 519/2019 – Maria Therese Bauer née Hofmann",
    holder: "Family papers (certificate issued 2019)",
    scans: [],
    transcript: "Maria Therese Bauer née Hofmann died 29 June 2019 at 16:10 in Bad Homburg v. d. Höhe. Last residence: Niedernhausen. Born 2 May 1929 in Vockenhausen (now Eppstein). Evangelical. Widowed. Husband: Robert Josef Bauer.",
    note: "Scan not published (recent record)."
  }
};

const PEOPLE = [
  { id: "wilhelm-hofmann", name: "Wilhelm Hofmann", gen: 1,
    facts: [
      ["Mayor (Bürgermeister) of Vockenhausen, evangelical, 1880", "record", "b1880"],
      ["Died before 17 August 1903 (“the late Bürgermeister”)", "record", "m1903"]
    ], spouse: "elisabetha-wolf" },
  { id: "elisabetha-wolf", name: "Elisabetha Hofmann, née Wolf", gen: 1,
    facts: [["Catholic; living in Vockenhausen 1880 and 1903", "record", "b1880"]],
    spouse: "wilhelm-hofmann" },
  { id: "georg-zimmermann", name: "Georg Zimmermann III", gen: 1,
    facts: [
      ["Carpenter (Zimmermann) in Vockenhausen, 1903", "record", "m1903"],
      ["Probably the witness “Georg Zimmermann, 58” at his daughter's wedding, so born about 1845", "probable", "m1903"]
    ], spouse: "elisabetha-kilb" },
  { id: "elisabetha-kilb", name: "Elisabetha Zimmermann, née Kilb", gen: 1,
    facts: [["Living in Vockenhausen, 1903", "record", "m1903"]], spouse: "georg-zimmermann" },

  { id: "joseph-hofmann-sen", name: "Joseph Hofmann (senior)", gen: 2,
    parents: ["wilhelm-hofmann", "elisabetha-wolf"],
    facts: [
      ["Born 13 March 1880 in Vockenhausen", "record", "b1880"],
      ["Factory worker (Fabrikarbeiter), Catholic", "record", "m1903"],
      ["Married Katharina Zimmermann 17 August 1903, Standesamt Oberjosbach", "record", "m1903"],
      ["Witness at his son's wedding in 1928, aged 48", "record", "m1928"],
      ["Died 1944 (margin note “Gest. 1944, T Nr 7” – reading uncertain)", "probable", "b1880"]
    ], spouse: "katharina-zimmermann" },
  { id: "katharina-zimmermann", name: "Katharina Hofmann, née Zimmermann", gen: 2,
    parents: ["georg-zimmermann", "elisabetha-kilb"],
    facts: [
      ["Born 22 September 1882 in Vockenhausen", "record", "m1903"],
      ["Catholic; living in Eppstein before her marriage", "record", "m1903"],
      ["The 1884 birth record supplied under her name is probably someone else", "probable", "b1884"]
    ], spouse: "joseph-hofmann-sen" },

  { id: "josef-hofmann-ii", name: "Josef Hofmann (II)", gen: 3,
    parents: ["joseph-hofmann-sen", "katharina-zimmermann"],
    facts: [
      ["Born 3 December 1903 in Vockenhausen (registered at Oberjosbach, Nr. 102)", "record", "b1903"],
      ["Joiner (Schreiner) in 1928 – reading of occupation probable", "probable", "m1928"],
      ["Married Anna Margaretha Eichhorn 1 December 1928 in Vockenhausen", "record", "m1928"],
      ["Died 11 July 1946 in Eppstein (Standesamt Eppstein Nr. 33/1946)", "record", "m1928"]
    ], spouse: "anna-margaretha-eichhorn" },
  { id: "anna-margaretha-eichhorn", name: "Anna Margaretha Hofmann, née Eichhorn", gen: 3,
    facts: [
      ["Born 24 March 1898 in Immelborn (Thuringia), birth register Nr. 8", "record", "m1928"],
      ["Living in Vockenhausen, 1928", "record", "m1928"],
      ["Signed as “Anna Margarete”; parents not yet known", "record", "m1928"]
    ], spouse: "josef-hofmann-ii" },

  { id: "maria-therese-hofmann", name: "Maria Therese Bauer, née Hofmann", gen: 4,
    parents: ["josef-hofmann-ii", "anna-margaretha-eichhorn"], parentsStatus: "hypothesis",
    facts: [
      ["Born 2 May 1929 in Vockenhausen", "record", "d2019"],
      ["Daughter of Josef Hofmann II and Anna Margaretha Eichhorn – family understanding; her birth record is needed to prove it", "hypothesis", "d2019"],
      ["Evangelical; widow of Robert Josef Bauer", "record", "d2019"],
      ["Died 29 June 2019 in Bad Homburg v. d. Höhe", "record", "d2019"]
    ], spouse: "robert-josef-bauer" },
  { id: "robert-josef-bauer", name: "Robert Josef Bauer", gen: 4,
    facts: [["Husband of Maria Therese; died before her (she was widowed by 2019)", "record", "d2019"]],
    spouse: "maria-therese-hofmann" }
];

const OPEN_QUESTIONS = [
  "Maria Therese Hofmann's birth record (Vockenhausen/Eppstein, 2 May 1929) – proves her parents.",
  "Anna Margaretha Eichhorn's full birth record (Immelborn 1898, Nr. 8) – request forwarded to the Barchfeld-Immelborn archive; would give her parents.",
  "Katharina Zimmermann's correct birth record (Vockenhausen, 22 September 1882) – the one supplied (1884, Nr. 71) does not match.",
  "Death entries: Joseph Hofmann senior (1944?), Josef Hofmann II (Eppstein 1946, Nr. 33/1946), Anna Margaretha, Katharina.",
  "What the 1942 “Geheiratet” stamp on the 1903 marriage entry refers to.",
  "Visit the Stadtarchiv Eppstein: civil records and Dr. Bertold Picard's books “Geschichte von Vockenhausen” (Rad und Sparren 24, 1993) and “Vockenhausen. Eine Ortsgeschichte” (2008).",
  "Bauer line: records for Robert Josef Bauer and his parents; two family photographs are still unidentified."
];
