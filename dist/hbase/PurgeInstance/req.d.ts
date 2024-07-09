export interface PurgeInstanceRequest {
    /**
     * 要清理的已删除的集群Id，可通过DescribeDeletedInstances接口获取。
     * @example `hb-m5ek15uzs7613xxxx`
     */
    "ClusterId": string;
}
