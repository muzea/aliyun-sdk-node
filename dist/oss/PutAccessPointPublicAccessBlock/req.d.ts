export interface PutAccessPointPublicAccessBlockRequest {
    /**
     * Bucket名称。
     * @example `examplebucket`
     */
    "bucket": string;
    /**
     * 接入点名称。
     * @example `ap-01`
     */
    "x-oss-access-point-name": string;
    /**
     * 接口请求体。
     */
    "body"?: {
        /**
         * 保存阻止公共访问配置信息的容器。
         */
        PublicAccessBlockConfiguration: any;
    };
}
