import bcrypt from "bcryptjs";

const users = [
  {
    name: "Robert Baratheon",
    email: "mark_addy@gameofthron.es",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Margaery Tyrell",
    email: "natalie_dormer@gameofthron.es",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Jorah Mormont",
    email: "iain_glen@gameofthron.es",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Jaime Lannister",
    email: "nikolaj_coster-waldau@gameofthron.es",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Daenerys Targaryen",
    email: "emilia_clarke@gameofthron.es",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Viserys Targaryen",
    email: "harry_lloyd@gameofthron.es",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Davos Seaworth",
    email: "liam_cunningham@gameofthron.es",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Tyrion Lannister",
    email: "peter_dinklage@gameofthron.es",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Theon Greyjoy",
    email: "alfie_allen@gameofthron.es",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Joffrey Baratheon",
    email: "jack_gleeson@gameofthron.es",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Samwell Tarly",
    email: "john_bradley-west@gameofthron.es",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Cersei Lannister",
    email: "lena_headey@gameofthron.es",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Jeor Mormont",
    email: "james_cosmo@gameofthron.es",
    password: bcrypt.hashSync("123456", 10),
  },
];

export default users;
