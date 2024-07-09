export interface SignalCallResponse {
    /**
     * 访问被拒绝详细信息。
     * @example `""`
     */
    AccessDeniedDetail: string;
    /**
     * 请求ID。
     * @example `D9CB****-****-****-****-********9D23
    `
     */
    RequestId: string;
    /**
     * 返回信息描述。
     * @example `OK
    `
     */
    Message: string;
    /**
     * 请求结果数据
     */
    Model: {
        /**
         * 任务ID，可以通过此ID查询任务的详情。
         * @example `550E****-****-****-****-********0CA0
        `
         */
        CallId: string;
    };
    /**
     * 请求状态码。  返回OK代表请求成功。 其他错误码，请参见API错误码。
     * @example `OK`
     */
    Code: string;
    /**
     * 请求是否成功，成功：true，失败：false。
     * @example `true`
     */
    Success: boolean;
}
