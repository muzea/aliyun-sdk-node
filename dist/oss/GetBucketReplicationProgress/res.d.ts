export interface GetBucketReplicationProgressResponse {
    /**
     * 保存每个复制规则进度条目的列表。
     */
    ReplicationProgress: {
        /**
         * 保存复制规则进度信息的容器。
         */
        Rule: any[];
    };
}
