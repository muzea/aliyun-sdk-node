export interface GetBucketEncryptionResponse {
    /**
     * 保存服务端加密规则的容器。
     */
    ServerSideEncryptionRule: {
        /**
         * 服务端加密规则信息。
         */
        ApplyServerSideEncryptionByDefault: any;
    };
}
