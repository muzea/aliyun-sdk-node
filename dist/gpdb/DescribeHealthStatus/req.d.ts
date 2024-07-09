export interface DescribeHealthStatusRequest {
    /**
     * 实例ID。
     * > 您可以调用[DescribeDBInstances](~~86911~~)接口查看目标地域下所有的AnalyticDB PostgreSQL实例的详情，包括实例ID。
     * @example `gp-bp12ga6v69h86****`
     */
    "DBInstanceId": string;
    /**
     * 性能参数名称，多个指标用英文半角（,）分隔，具体信息，请参见[性能参数表](~~86943~~)。
     * @example `node_master_status,node_master_connection_status,node_segment_connection_status,node_segment_disk_status`
     */
    "Key": string;
}
