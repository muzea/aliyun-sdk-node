export interface PutBucketResourceGroupRequest {
    /**
     * 要修改的目标Bucket
     * @example `example-bucket`
     */
    "bucket"?: string;
    /**
     * 配置资源组ID的请求体。
     */
    "body"?: {
        /**
         * 配置资源组ID的容器。
         */
        BucketResourceGroupConfiguration: any;
    };
}
