export interface CreateTenantReadOnlyConnectionRequest {
    /**
     * 租户 ID。
     * @example `ob2mr3oae0****`
     */
    "TenantId": string;
    /**
     * Oceanbase 集群 ID。
     * @example `ob317v4uif****`
     */
    "InstanceId": string;
    /**
     * 可用区的 ZoneId。
     * 详细参见 DescribeInstance 中的 AvailableZones。
     * @example `cn-hangzhou-i`
     */
    "ZoneId": string;
    /**
     * 专有网络（VPC） ID。
     * @example `vpc-bp1d2q3mhg9i23ofi****`
     */
    "VpcId"?: string;
    /**
     * 虚拟交换机（VSwitch）ID。
     * @example `vsw-bp11k1aypnzu1l3whi****`
     */
    "VSwitchId": string;
}
