export interface ModifyInstanceVpcAuthModeRequest {
    /**
     * 实例ID。
     * @example `dds-bpxxxxxxxx`
     */
    "DBInstanceId": string;
    /**
     * 分片集群实例的Mongos节点ID。
     * > 实例类型为分片集群实例时，本参数才可用。
     * @example `s-bpxxxxxxxx`
     */
    "NodeId"?: string;
    /**
     * 关闭专有网络免密访问功能，取值**Close**。
     * @example `Close`
     */
    "VpcAuthMode"?: string;
}
