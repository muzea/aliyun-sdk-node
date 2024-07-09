export interface GetBucketLifecycleResponse {
    /**
     * 存储Bucket生命周期规则的容器。
     */
    LifecycleConfiguration: {
        /**
         * 存储生命周期规则的容器。
         */
        Rule: any[];
    };
}
