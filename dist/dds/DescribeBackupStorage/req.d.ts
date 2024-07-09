export interface DescribeBackupStorageRequest {
    /**
     * 实例所属的地域ID，您可以通过调用[DescribeDBInstanceAttribute](~~62010~~)进行查询。
     * @example `cn-bejing`
     */
    "RegionId"?: string;
    /**
     * 实例ID。
     * @example `dds-2zeb2d64cb46xxxx`
     */
    "DBInstanceId": string;
    /**
     * 分片集群实例中Shard节点ID。
     * > 当**DBInstanceId**参数传入的是分片集群实例ID时，本参数为必填。
     * @example `d-2zee48956b4axxxx`
     */
    "NodeId"?: string;
}
