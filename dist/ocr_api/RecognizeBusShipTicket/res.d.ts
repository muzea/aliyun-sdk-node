export interface RecognizeBusShipTicketResponse {
    /**
     * 请求唯一 ID
     * @example `43A29C77-405E-4CC0-BC55-EE694AD00655`
     */
    RequestId: string;
    /**
     * 返回数据
     * @example `{"angle":0,"data":{"title":"南通汽运实业集团有限公司旅客运输专用发票","formType":"发票联","invoiceCode":"132061981313","invoiceNumber":"05591493","date":"2020-01-20","time":"12:30","departureStation":"南通东站","arrivalStation":"上海总站","totalAmount":"56.00","passengerName":"颜跃第","idcardNo":"3210****2218"},"ftype":0,"height":541,"orgHeight":541,"orgWidth":936,"prism_keyValueInfo":[{"key":"title","keyProb":97,"value":"南通汽运实业集团有限公司旅客运输专用发票","valuePos":[{"x":508,"y":16},{"x":509,"y":94},{"x":91,"y":95},{"x":90,"y":18}],"valueProb":98},{"key":"formType","keyProb":100,"value":"发票联","valuePos":[{"x":388,"y":119},{"x":388,"y":157},{"x":209,"y":157},{"x":209,"y":118}],"valueProb":100},{"key":"invoiceCode","keyProb":100,"value":"132061981313","valuePos":[{"x":929,"y":127},{"x":929,"y":161},{"x":699,"y":162},{"x":698,"y":128}],"valueProb":100},{"key":"invoiceNumber","keyProb":100,"value":"05591493","valuePos":[{"x":851,"y":167},{"x":851,"y":199},{"x":696,"y":201},{"x":695,"y":168}],"valueProb":100},{"key":"date","keyProb":100,"value":"2020-01-20","valuePos":[{"x":185,"y":356},{"x":186,"y":384},{"x":62,"y":385},{"x":62,"y":358}],"valueProb":100},{"key":"time","keyProb":100,"value":"12:30","valuePos":[{"x":186,"y":385},{"x":186,"y":358},{"x":264,"y":359},{"x":264,"y":386}],"valueProb":100},{"key":"departureStation","keyProb":100,"value":"南通东站","valuePos":[{"x":66,"y":304},{"x":66,"y":271},{"x":187,"y":274},{"x":186,"y":308}],"valueProb":100},{"key":"arrivalStation","keyProb":100,"value":"上海总站","valuePos":[{"x":205,"y":306},{"x":205,"y":273},{"x":326,"y":276},{"x":325,"y":308}],"valueProb":100},{"key":"totalAmount","keyProb":100,"value":"56.00","valuePos":[{"x":402,"y":278},{"x":402,"y":306},{"x":366,"y":306},{"x":366,"y":278}],"valueProb":100},{"key":"passengerName","keyProb":97,"value":"颜跃第","valuePos":[{"x":426,"y":466},{"x":427,"y":434},{"x":516,"y":435},{"x":516,"y":468}],"valueProb":97},{"key":"idcardNo","keyProb":100,"value":"3210****2218","valuePos":[{"x":729,"y":441},{"x":729,"y":468},{"x":548,"y":468},{"x":548,"y":441}],"valueProb":100}],"sliceRect":{"x0":0,"y0":14,"x1":934,"y1":18,"x2":936,"y2":541,"x3":0,"y3":541},"width":936}`
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
