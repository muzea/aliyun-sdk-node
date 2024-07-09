export interface PutBucketReplicationRequest {
    /**
     * Bucket名称。
     * @example `examplebucket`
     */
    "bucket": string;
    /**
     * 指定数据复制配置的请求体。
     */
    "body"?: {
        /**
         * 保存数据复制配置信息的容器。
         */
        ReplicationConfiguration: any;
    };
}
