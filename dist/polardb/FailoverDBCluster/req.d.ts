export interface FailoverDBClusterRequest {
    /**
     * 数据库集群ID。
     * @example `pc-**************`
     */
    "DBClusterId": string;
    /**
     * 将要切换为主节点的节点ID，如果不填，则系统自动选举。您可以通过接口[DescribeDBClusters](~~98094~~)查询节点ID等信息。
     * > - 自动选举主节点： 系统找出当前可以被选举的所有只读节点。选择优先级最高的一个或多个只读节点。如果切换第一个节点失败（例如，网络原因、复制状态异常等），则会尝试切换下一个，直至成功。
     * >- 当集群为PolarDB PostgreSQL版（兼容Oracle）或PolarDB PostgreSQL版时，该参数必填；当集群为PolarDB MySQL版时，该参数非必填。
     * @example `pi-***********`
     */
    "TargetDBNodeId"?: string;
    /**
     * 是否是故障切换后的回切至原主可用区，取值范围如下：
     * - true：是。
     * - false：不是。
     * @example `false`
     */
    "RollBackForDisaster"?: boolean;
    /**
     * 用于保证请求的幂等性，防止重复提交请求。由客户端生成该参数值，保证在不同请求间唯一，大小写敏感、不超过64个ASCII字符。
     * @example `6000170000591aed949d0f54a343f1a4233c1e7d1c5******`
     */
    "ClientToken"?: string;
}
