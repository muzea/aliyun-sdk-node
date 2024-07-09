export interface RecognizeSocialSecurityCardResponse {
    /**
     * 请求唯一 ID
     * @example `43A29C77-405E-4CC0-BC55-EE694AD00655`
     */
    RequestId: string;
    /**
     * 返回数据
     * @example `{'RequestId': 'FFCFEB42-DE16-1B36-A2B0-1B90CB7EB24E', 'Data': '{"angle":0,"data":{"title":"湖南省人力资源和社会保障厅","name":"徐某某","idNumber":"123456789012345678","cardNumber":"123456789","bankAccount":"8888888888888888888","issueDate":"2012年XX月","validPeriod":""},"ftype":0,"height":179,"orgHeight":179,"orgWidth":282,"prism_keyValueInfo":[{"key":"title","keyProb":100,"value":"湖南省人力资源和社会保障厅","valuePos":[{"x":64,"y":8},{"x":170,"y":8},{"x":170,"y":17},{"x":64,"y":17}],"valueProb":100},{"key":"name","keyProb":100,"value":"徐某某","valuePos":[{"x":144,"y":47},{"x":144,"y":58},{"x":116,"y":58},{"x":116,"y":47}],"valueProb":100},{"key":"idNumber","keyProb":100,"value":"123456789012345678","valuePos":[{"x":238,"y":62},{"x":238,"y":71},{"x":153,"y":71},{"x":153,"y":62}],"valueProb":100},{"key":"cardNumber","keyProb":100,"value":"123456789","valuePos":[{"x":196,"y":77},{"x":196,"y":86},{"x":154,"y":86},{"x":154,"y":77}],"valueProb":100},{"key":"bankAccount","keyProb":100,"value":"8888888888888888888","valuePos":[{"x":253,"y":129},{"x":253,"y":144},{"x":52,"y":144},{"x":52,"y":129}],"valueProb":100},{"key":"issueDate","keyProb":100,"value":"2012年XX月","valuePos":[{"x":133,"y":91},{"x":180,"y":91},{"x":180,"y":101},{"x":133,"y":101}],"valueProb":100},{"key":"validPeriod","keyProb":100,"value":"","valueProb":100}],"sliceRect":{"x0":0,"y0":0,"x1":281,"y1":0,"x2":281,"y2":179,"x3":0,"y3":178},"width":282}'}`
     */
    Data: string;
    /**
     * 错误码
     * @example `noPermission`
     */
    Code: string;
    /**
     * 错误提示
     * @example `You are not authorized to perform this operation.`
     */
    Message: string;
}
