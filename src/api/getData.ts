import axios from "axios";

export const getData = async () => {
  axios.get("https://www.betman.co.kr/betcoach/request", {
    data: { hello: "world" },
  });
};

// https://www.betman.co.kr/betcoach/request?sportsItem=BS&gameLeagueCode=BS002&homeCode=LA&awayCode=AN&targetId=mi_tabs-1-1&bcReqClCd=2&notAsync=true&_sbmInfo%5BdebugMode%5D=false
