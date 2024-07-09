export interface InitBucketAntiDDosInfoRequest {
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
     * 高防实例类型。取值固定为AntiDDosPremimum。
     * @example `AntiDDosPremimum`
     */
    "x-oss-defender-type": string;
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
