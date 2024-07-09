export interface RecognizeRideHailingItineraryResponse {
    /**
     * 请求唯一 ID
     * @example `43A29C77-405E-4CC0-BC55-EE694AD00655`
     */
    RequestId: string;
    /**
     * 返回数据
     * @example `{"data":{"serviceProvider":"滴滴出行","applicationDate":"","startTime":"","endTime":"","phoneNumber":"","totalAmount":"","rideDetails":[{"Number":"","carType":"","pickUpTime":"","city":"","startPlace":"","endPlace":"","mileage":"","amount":"","remarks":""}]},"ftype":0,"height":260,"orgHeight":260,"orgWidth":194,"prism_keyValueInfo":[{"key":"serviceProvider","keyProb":99,"value":"滴滴出行","valuePos":[{"x":120,"y":11},{"x":120,"y":21},{"x":57,"y":20},{"x":57,"y":10}],"valueProb":99},{"key":"applicationDate","keyProb":100,"value":"","valueProb":100},{"key":"startTime","keyProb":91,"value":"","valuePos":[{"x":94,"y":46},{"x":94,"y":50},{"x":75,"y":50},{"x":75,"y":46}],"valueProb":91},{"key":"endTime","keyProb":65,"value":"","valuePos":[{"x":112,"y":46},{"x":112,"y":50},{"x":95,"y":50},{"x":95,"y":46}],"valueProb":65},{"key":"phoneNumber","keyProb":100,"value":"","valueProb":100},{"key":"totalAmount","keyProb":100,"value":"","valueProb":100},{"key":"rideDetails","keyProb":100,"value":"[{\"Number\":\"\",\"carType\":\"\",\"pickUpTime\":\"\",\"city\":\"\",\"startPlace\":\"\",\"endPlace\":\"\",\"mileage\":\"\",\"amount\":\"\",\"remarks\":\"\"}]","valueProb":100}],"sliceRect":{"x0":6,"y0":72,"x1":186,"y1":72,"x2":186,"y2":156,"x3":6,"y3":156},"width":194}`
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
