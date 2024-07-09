export interface DeleteBucketReplicationRequest {
    /**
     * Bucket名称。
     * @example `examplebucket`
     */
    "bucket": string;
    /**
     * 保存需要删除的数据复制规则的请求体。
     */
    "body"?: {
        /**
         * 保存需要删除的数据复制规则的容器。
         */
        ReplicationRules: {
            /**
             * 需要删除的数据复制规则的名称。
             * @example `first-rule`
             */
            ID: string;
        };
    };
}
