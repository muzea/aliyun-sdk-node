export interface DescribeStsGrantStatusResponse {
    /**
     * 本次请求的ID。
     * @example `6623EA1F-30FB-5BC8-BEC9-74D55F6F08F1`
     */
    RequestId: string;
    /**
     * DDoS高防服务的授权状态。
     */
    StsGrant: {
        /**
         * 授权状态。取值：
         * - **0**：表示未授权DDoS高防服务访问其他云产品资源。
         * - **1**：表示已授权DDoS高防服务访问其他云产品资源。
         * @example `1`
         */
        Status: number;
    };
}
