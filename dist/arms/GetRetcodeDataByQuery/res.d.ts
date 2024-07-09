export interface GetRetcodeDataByQueryResponse {
    /**
     * 请求ID。
     * @example `2A0CEDF1-06FE-44AC-8E21-21A5BE65****`
     */
    RequestId: string;
    /**
     * 接口状态，取值说明如下：
     * - 2XX：成功。
     * - 3XX：重定向。
     * - 4XX：请求错误。
     * - 5XX：服务器错误。
     * @example `200`
     */
    Code: string;
    /**
     * 调用失败时返回的信息。
     * @example `-`
     */
    Message: string;
    /**
     * 查询是否成功：
     * - true：成功。
     * - false：失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 查询成功后返回的前端监控数据。
     * @example `{
        "total": 1,
        "auth": false,
        "pageSize": 20,
        "completed": true,
        "page": 1,
        "items": [
          {
            "date": "1701820800000",
            "__time__": 1701410567,
            "uv": "64",
            "__source__": "",
            "pv": "890"
          }
        ]
        }`
     */
    Data: string;
}
