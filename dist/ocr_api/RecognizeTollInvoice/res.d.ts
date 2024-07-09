export interface RecognizeTollInvoiceResponse {
    /**
     * 请求唯一 ID
     * @example `43A29C77-405E-4CC0-BC55-EE694AD00655`
     */
    RequestId: string;
    /**
     * 返回数据
     * @example `{"angle":0,"data":{"title":"苏宁用打发","formType":"发票联","invoiceCode":"132001681414","invoiceNumber":"53184969","date":"","time":"","vehicleType":"客1","entranceName":"江","exitName":"","totalAmount":"0.00"},"ftype":0,"height":254,"orgHeight":254,"orgWidth":199,"prism_keyValueInfo":[{"key":"title","keyProb":98,"value":"苏宁用打发","valuePos":[{"x":174,"y":20},{"x":174,"y":35},{"x":24,"y":34},{"x":24,"y":19}],"valueProb":98},{"key":"formType","keyProb":89,"value":"发票联","valuePos":[{"x":50,"y":41},{"x":131,"y":37},{"x":131,"y":52},{"x":50,"y":56}],"valueProb":89},{"key":"invoiceCode","keyProb":100,"value":"132001681414","valuePos":[{"x":150,"y":94},{"x":150,"y":105},{"x":63,"y":105},{"x":63,"y":94}],"valueProb":100},{"key":"invoiceNumber","keyProb":100,"value":"53184969","valuePos":[{"x":119,"y":109},{"x":119,"y":120},{"x":63,"y":120},{"x":63,"y":109}],"valueProb":100},{"key":"date","keyProb":100,"value":"","valueProb":100},{"key":"time","keyProb":100,"value":"","valueProb":100},{"key":"vehicleType","keyProb":95,"value":"客1","valuePos":[{"x":40,"y":180},{"x":40,"y":192},{"x":28,"y":192},{"x":28,"y":180}],"valueProb":95},{"key":"entranceName","keyProb":98,"value":"江","valuePos":[{"x":96,"y":128},{"x":96,"y":140},{"x":39,"y":140},{"x":39,"y":128}],"valueProb":98},{"key":"exitName","keyProb":100,"value":"","valueProb":100},{"key":"totalAmount","keyProb":85,"value":"0.00","valuePos":[{"x":70,"y":181},{"x":70,"y":190},{"x":55,"y":190},{"x":55,"y":181}],"valueProb":85}],"sliceRect":{"x0":0,"y0":2,"x1":196,"y1":1,"x2":198,"y2":251,"x3":0,"y3":252},"width":199}`
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
