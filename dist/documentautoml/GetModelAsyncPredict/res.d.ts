export interface GetModelAsyncPredictResponse {
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
      "RequestId": "A9796F06-F1C4-1E89-8AFD-596583FF4B16",
      "Message": "",
      "Data": {
        "result": "https://doc-automl-public.oss-cn-hangzhou.aliyuncs.com/3/stage/data/XXXX/asyncPredict/713908/oss-933bbdf4-fa10-4c56-b6ab-9c85f32bbd0e.json?Expires=1991115127&OSSAccessKeyId=XXXX&Signature=5zYLY9yR%2B9Ok1WuRgHYdqtXHK10%3D",
        "asyncPredictId": 713908,
        "errorCode": 200,
        "errorMsg": "",
        "status": 2
      },
      "Code": 200
    }`
     */
    Data: string;
}
