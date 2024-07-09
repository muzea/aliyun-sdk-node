export interface RecognizeCarNumberResponse {
    /**
     * 请求唯一 ID
     * @example `请求唯一 ID`
     */
    RequestId: string;
    /**
     * 返回数据
     * @example `"{"data":{"secondary_cls":{"type_str":"小型汽车","prob":0.955191},"data":{"车牌":"黑AF6655"},"score":1.050000,"info":[{"value":"黑AF6655","key":"车牌","key_prob":0.999260,"value_prob":0.999260,"key_loc":"","value_loc":"469,450,1220,419,1227,588,476,620"}]},"height":1200,"orgHeight":1200,"orgWidth":1600,"prism_keyValueInfo":[{"key":"车牌","keyProb":99,"value":"黑AF6655","valuePos":[{"x":469,"y":450},{"x":1220,"y":419},{"x":1227,"y":588},{"x":476,"y":620}],"valueProb":99}],"structure_list":[{"$ref":"$.data"}],"width":1600}"`
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
