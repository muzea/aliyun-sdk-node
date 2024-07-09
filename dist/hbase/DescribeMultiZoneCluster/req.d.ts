export interface DescribeMultiZoneClusterRequest {
    /**
     * 多可用区实例的Id，可通过[DescribeInstances](~~144595~~)获取列表，列表中**DbType**为hbaseue且**ModuleStackVersion**为2.0的多可用区实例。
     * @example `ld-t4nn71xa0yn****`
     */
    "ClusterId": string;
}
