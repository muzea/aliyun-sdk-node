export interface UpdateBucketAntiDDosInfoRequest {
    /**
     * Bucket名称。
     * @example `examplebucket
    `
     */
    "bucket": string;
    /**
     * 高防实例ID。
     * @example `cbcac8d2-4f75-4d6d-9f2e-c3447f73****`
     */
    "x-oss-defender-instance": string;
    /**
     * 更新高防实例状态。取值如下：
     * - Init：初始化防护状态。该状态下需要传入待防护的自定义域名。
     * - Defending：防护中状态。该状态下可以选择是否传入待防护的自定义域名。
     * - HaltDefending：解除防护状态。该状态下不需要传入待防护的自定义域名。
     * @example `Init`
     */
    "x-oss-defender-status": string;
    /**
     * 保存高防实例配置信息的请求体。
     */
    "body"?: {
        /**
         * 保存高防实例配置信息的容器。
         */
        AntiDDOSConfiguration: any;
    };
}
