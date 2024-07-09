export interface RecognizeCarNumResponse {
    /**
     * 200表示成功。其它表示错误码。错误码详情，请参见[错误码](~~87387~~)。
     * @example `200`
     */
    Code: string;
    /**
     * 调用成功时，返回识别出的车牌信息。
     * @example `{"data":{"secondary_cls":{"type_str":"小型汽车","prob":0.955191},"data":{"车牌":"黑AF***"},"score":1.050000,"info":[{"value":"黑AF***","key":"车牌","key_prob":0.999260,"value_prob":0.999260,"key_loc":"","value_loc":"469,450,1220,419,1227,588,476,620"}]},"height":1200,"orgHeight":1200,"orgWidth":1600,"prism_keyValueInfo":[{"key":"车牌","keyProb":99,"value":"黑AF***","valuePos":[{"x":469,"y":450},{"x":1220,"y":419},{"x":1227,"y":588},{"x":476,"y":620}],"valueProb":99}],"structure_list":[{"$ref":"$.data"}],"width":1600}`
     */
    Data: string;
    /**
     * 调用失败时，返回的出错信息，如果调用成功，没有ErrorMessage字段。
     * @example `request parameter error`
     */
    ErrorMessage: string;
    /**
     * 阿里云为该请求生成的唯一标识符。
     * @example `4C717018-B6D4-5EB0-8495-2A4FF08D58CA`
     */
    RequestId: string;
    /**
     * 是否调用成功。
     * - **true**：表示调用成功。
     * - **false**：表示调用失败。
     * @example `true`
     */
    Success: boolean;
}
