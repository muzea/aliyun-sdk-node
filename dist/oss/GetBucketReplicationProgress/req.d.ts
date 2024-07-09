export interface GetBucketReplicationProgressRequest {
    /**
     * Bucket名称。
     * @example `examplebucket`
     */
    "bucket": string;
    /**
     * 复制规则对应的ID。此ID可从GetBucketReplication中获取。
     * @example `test_replication_1`
     */
    "rule-id": string;
}
