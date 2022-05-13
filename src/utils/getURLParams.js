
const queryParams = new URLSearchParams(window.location.search);
export default {
    grade: queryParams.get('grade') ? queryParams.get('grade') : 1,
    gameName: queryParams.get('gameName') ? queryParams.get('gameName') : "ascorder",
    limit: queryParams.get('limit') ? queryParams.get('limit') : 5,
    dif: queryParams.get('dif') ? queryParams.get('dif') : 'b', // b = begginer, i= intermediate, m = master
    cid: queryParams.get('cid'), // course id
    crcid: queryParams.get('crcid'), // curriculumn id
    sid: queryParams.get('sid'), // subject id
    uid: queryParams.get('uid'), // unit id
    id: queryParams.get('id'), // user id
    type: queryParams.get('type'), // for saad : mcqs,fb : fill blanks, i: image related
    // type : c for content, a for assessment
    gender: queryParams.get('gender') ? queryParams.get('gender') : "m",
    lang: queryParams.get('lang') ? queryParams.get('lang') : 'e',  // possible values u (for urdu), e (for english)
    learn: queryParams.get('learn') ? queryParams.get('learn') : true // 
}
