export interface GetExecuteOperationResultResponse {
    /**
     * 错误信息
     * @example `" "`
     */
    Message: string;
    /**
     * 请求ID
     * @example `A3488F1D-xxxx-xxxx-xxxx-5374BA0F3562`
     */
    RequestId: string;
    /**
     * 返回异步操作结果详细信息。
     */
    Data: {
        /**
         * 操作ID
         * @example `op_xxxxxxxx`
         */
        OperationId: string;
        /**
         * 当前操作状态
         * @example `初始化：INIT；运行中：RUNNING； 成功：SUCCESS；失败：FAILURE;
        `
         */
        Status: string;
        /**
         * 操作相关信息
         * @example `"[{"vServerGroupId":"rsp-xxxx","healthCheckHttpVersion":"http1.0","status":"running","gzip":"on","requestId":"89xxxx","description":"abcxxx","bandwidth":-1,"healthCheckTimeout":10,"healthCheckType":"http","aclStatus":"off","unhealthyThreshold":3,"xForwardedFor_SLBID":"off","healthCheckHttpCode":"http_3xx,http_2xx","listenerForward":"off","xForwardedFor":"on","idleTimeout":15,"requestTimeout":60,"listenerPort":80,"healthCheckInterval":2,"healthCheckURI":"/","scheduler":"rr","healthyThreshold":3,"xForwardedFor_proto":"off","xForwardedFor_SLBIP":"off","stickySession":"off","healthCheckMethod":"head","healthCheck":"on","rules":[],"aclIds":[]}]"`
         */
        Message: string;
        /**
         * 操作相关输出结果
         * @example `{
            "tagMap"：{
                "cadt": [
                  "12xxxxxxx",
                  "34xxxxxxx"
                ]
            }
        }`
         */
        Arguments: string;
    };
    /**
     * 结果码，200代表成功
     * @example `200`
     */
    Code: number;
}
