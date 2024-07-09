export interface CreateAccessPointRequest {
    /**
     * Bucket名称。
     * @example `examplebucket
    `
     */
    "bucket": string;
    /**
     * 保存接入点信息的容器。
     */
    "body"?: {
        /**
         * 保存接入点配置的容器。
         */
        CreateAccessPointConfiguration: any;
    };
}
