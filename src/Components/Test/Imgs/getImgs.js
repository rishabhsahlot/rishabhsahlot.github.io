function importAll(r) {
    return r.keys().map(r);
}
let extraCurricularImgs = {}

extraCurricularImgs["Competitive Coding"] = importAll(require.context('./Competitive Coding/', false, /\.(png|jpe?g|svg|jfif)$/));
extraCurricularImgs["Hackathons"] = importAll(require.context('./Hackathons/', false, /\.(png|jpe?g|svg|jfif)$/));

export default extraCurricularImgs