function importAll(r) {
    return r.keys().map(r);
}
let jobImgs = {}

jobImgs["Mukesoft IT Consultants"] = importAll(require.context('./Mukesoft IT Consultants/', false, /\.(png|jpe?g|svg|jfif)$/));
jobImgs["Edelweiss Financial Product Distribution"] = importAll(require.context('./Edelweiss Financial Product Distribution/', false, /\.(png|jpe?g|svg|webp)$/));

export default jobImgs