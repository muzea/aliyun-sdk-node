export interface RecognizeVehicleLicenseResponse {
    /**
     * 请求唯一 ID
     * @example `43A29C77-405E-4CC0-BC55-EE694AD00655`
     */
    RequestId: string;
    /**
     * 返回数据
     * @example `{"algo_version":"7a6241b9ccce3746da42ff09ee692b27721728bb","data":{"face":{"algo_version":"1cef3d8e5c2d82e6180feca6bba3591559c2dc55","angle":0,"data":{"address":"成都市龙泉驿区山泉镇联合村","engineNumber":"8B213508","issueDate":"2015-06-04","model":"北京现代牌BH7164MX","owner":"叶晴晴","licensePlateNumber":"川A7809C","registrationDate":"2008-07-08","useNature":"非营运","vehicleType":"小型轿车","vinCode":"LBEHDAEB58Y038860","issueAuthority":"四川省成都市公安局交通警察支队"},"ftype":0,"height":293,"orgHeight":293,"orgWidth":427,"prism_keyValueInfo":[{"key":"address","keyProb":100,"value":"成都市龙泉驿区山泉镇联合村","valuePos":[{"x":79,"y":121},{"x":323,"y":125},{"x":322,"y":144},{"x":79,"y":139}],"valueProb":100},{"key":"engineNumber","keyProb":99,"value":"8B213508","valuePos":[{"x":201,"y":228},{"x":277,"y":230},{"x":277,"y":246},{"x":200,"y":244}],"valueProb":99},{"key":"issueDate","keyProb":100,"value":"2015-06-04","valuePos":[{"x":325,"y":266},{"x":419,"y":268},{"x":419,"y":286},{"x":324,"y":283}],"valueProb":100},{"key":"model","keyProb":100,"value":"北京现代牌BH7164MX","valuePos":[{"x":228,"y":159},{"x":398,"y":161},{"x":397,"y":180},{"x":227,"y":177}],"valueProb":100},{"key":"owner","keyProb":100,"value":"叶晴晴","valuePos":[{"x":80,"y":85},{"x":131,"y":85},{"x":131,"y":103},{"x":80,"y":103}],"valueProb":100},{"key":"licensePlateNumber","keyProb":100,"value":"川A7809C","valuePos":[{"x":81,"y":52},{"x":160,"y":52},{"x":160,"y":71},{"x":81,"y":71}],"valueProb":100},{"key":"registrationDate","keyProb":100,"value":"2008-07-08","valuePos":[{"x":175,"y":262},{"x":269,"y":265},{"x":269,"y":282},{"x":174,"y":278}],"valueProb":100},{"key":"useNature","keyProb":100,"value":"非营运","valuePos":[{"x":80,"y":155},{"x":135,"y":156},{"x":134,"y":175},{"x":79,"y":174}],"valueProb":100},{"key":"vehicleType","keyProb":100,"value":"小型轿车","valuePos":[{"x":268,"y":53},{"x":343,"y":56},{"x":342,"y":75},{"x":267,"y":73}],"valueProb":100},{"key":"vinCode","keyProb":100,"value":"LBEHDAEB58Y038860","valuePos":[{"x":215,"y":192},{"x":375,"y":196},{"x":375,"y":214},{"x":214,"y":209}],"valueProb":100},{"key":"issueAuthority","keyProb":100,"value":"四川省成都市公安局交通警察支队","valuePos":[{"x":17,"y":190},{"x":102,"y":190},{"x":102,"y":271},{"x":17,"y":271}],"valueProb":100}],"sliceRect":{"x0":0,"y0":0,"x1":427,"y1":0,"x2":427,"y2":293,"x3":0,"y3":293},"width":427}},"height":293,"orgHeight":293,"orgWidth":427,"width":427}`
     */
    Data: string;
    /**
     * 状态码
     * @example `200`
     */
    Code: string;
    /**
     * 详细信息
     * @example `message`
     */
    Message: string;
}
