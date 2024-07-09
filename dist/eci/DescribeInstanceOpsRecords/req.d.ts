export interface DescribeInstanceOpsRecordsRequest {
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * ECI实例ID。
     * @example `eci-bp1dvysdafbh00t7****`
     */
    "ContainerGroupId": string;
    /**
     * 运维任务类型。取值范围：
     * - coredump
     * - tcpdump
     * @example `coredump`
     */
    "OpsType": string;
}
