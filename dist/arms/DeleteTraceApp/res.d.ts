export interface DeleteTraceAppResponse {
    /**
     * JSON格式的返回结果，包含HTTP状态码、错误码、返回消息、TraceId等。
     * @example `{\"code\":200,\"data\":\"{\\\"code\\\":200,\\\"data\\\":true,\\\"errorCode\\\":\\\"删除应用成功\\\",\\\"message\\\":\\\"删除应用成功\\\",\\\"success\\\":true,\\\"traceId\\\":\\\"0bc0594d15954826692915817e****\\\"}\",\"errorCode\":\"删除应用成功\",\"message\":\"删除应用成功\",\"success\":true,\"traceId\":\"0ab2646915954826692568137d****\"}`
     */
    Data: string;
    /**
     * 请求ID。
     * @example `46355DD8-FC56-40C5-BFC6-269DE4F9****`
     */
    RequestId: string;
    /**
     * 返回结果的提示信息。
     * @example `message`
     */
    Message: string;
    /**
     * 接口状态码：2XX：成功                                 3XX：重定向                                 4XX：请求错误                                 5XX：服务器错误
     * @example `200`
     */
    Code: number;
    /**
     * 操作是否成功：
     * - `true`：操作成功
     * - `false`：操作失败
     * @example `true`
     */
    Success: boolean;
}
