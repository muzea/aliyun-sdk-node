export interface DeleteAppListResponse {
    /**
     * Id of the request
     * @example `4B446DF2-3DDD-4B5B-8E3F-D5225120****`
     */
    RequestId: string;
    /**
     * 返回信息。
     * @example `"{\"code\":200,\"data\":\"{\\\"code\\\":200,\\\"data\\\":true,\\\"errorCode\\\":\\\"删除应用成功\\\",\\\"message\\\":\\\"删除应用成功\\\",\\\"success\\\":true,\\\"traceId\\\":\\\"0bc1667516940677164677396d0088\\\"}\",\"errorCode\":\"批量删除应用成功\",\"message\":\"批量删除应用成功\",\"success\":true,\"traceId\":\"210f470416940677161213505e0e7a\"}"`
     */
    Data: string;
    /**
     * 请求参数错误时返回的信息
     * @example `“批量删除应用成功”`
     */
    Message: string;
    /**
     * 是否删除成功。取值：
     * - `true`：删除成功
     * - `false`：删除失败
     * @example `true`
     */
    Success: boolean;
    /**
     * 接口状态码：2XX：成功                                 3XX：重定向                                 4XX：请求错误                                 5XX：服务器错误
     * @example `200`
     */
    Code: number;
}
