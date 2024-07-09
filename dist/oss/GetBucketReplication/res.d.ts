export interface GetBucketReplicationResponse {
    /**
     * 保存复制规则的列表。
     */
    ReplicationConfiguration: {
        /**
         * 保存复制规则的容器。
         */
        Rule: any[];
    };
}
