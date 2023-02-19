let lyrics = 'tere ehsaso me vige lamhatto me mujhko dubaa tishnagi si hae, tere adao se dilkash khatao se in lamho me jindegi si hae, haya ko jara vul jao, mere hi tara pesh ao, kho vi do khudko tum, rato me meri rato me, rato me meri rato me, meri rato me';

lyrics = lyrics.toLowerCase();
let searchKeyword = 't';
searchKeyword = searchKeyword.toLowerCase();
const searchResult = lyrics.startsWith(searchKeyword);

console.log(searchResult);