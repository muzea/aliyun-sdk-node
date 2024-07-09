export interface PreCheckCreateOrderForDeleteDBNodesResponse {
    /**
     * 预检结果。
     * @example `True`
     */
    PreCheckResult: boolean;
    /**
     * 请求ID。
     * @example `9B415BC6-FE84-5323-A255-42CF330DB99C`
     */
    RequestId: string;
    Failures: {
        /**
         * 失败的订单信息
         */
        Failures: {
            /**
             * 响应码。各取值含义如下：
             * - **200**：正常
             * - **400**：客户端错误
             * - **401**：身份验证失败
             * - **404**：找不到请求页面
             * - **500**：服务端错误
             * @example `200`
             */
            Code: string;
            /**
             * 返回结果的提示信息。
             * @example `success`
             */
            Message: string;
        }[];
    };
}
