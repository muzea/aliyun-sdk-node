export interface CreateModelAsyncPredictResponse {
    /**
     * Id of the request
     * @example `3EAC98E6-8DD6-511F-8764-DEE8B6EB6BB4`
     */
    RequestId: string;
    /**
     * 请求结果状态，200为成功
     * @example `200`
     */
    Code: number;
    /**
     * 错误信息。
     * @example `success`
     */
    Message: string;
    /**
     * 返回数据
     * @example `{
      "RequestId": "292D1584-134C-1221-B9BB-1B847C623D41",
      "Message": "",
      "Data": 1,
      "Code": 200
    }`
     */
    Data: string;
}
