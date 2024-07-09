export interface DescribeAvailableMemResourceRequest {
    /**
     * Oceanbase 集群 ID。
     * @example `ob317v4uif****`
     */
    "InstanceId": string;
    /**
     * 租户 ID。
     * @example `ob2mr3oae0****`
     */
    "TenantId"?: string;
    /**
     * 租户的资源分布节点数。
     * 其与集群的部署模式相耦合，如集群模式为 2-2-2，则最后分布节点数最多为 2 个。
     * @example `2`
     */
    "UnitNum": number;
    /**
     * cpu 数量。
     * @example `14`
     */
    "CpuNum": number;
}
