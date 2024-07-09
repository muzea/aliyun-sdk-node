export interface ModifyIpDefenseThresholdRequest {
    /**
     * 公网IP资产所在地域ID。
     * > 您可以调用[DescribeRegions](~~353250~~)查询所有地域ID。
     * @example `cn-hangzhou`
     */
    "DdosRegionId": string;
    /**
     * 公网IP资产的实例类型。取值：
     * - **ecs**：表示云服务器ECS实例。
     * - **slb**：表示负载均衡SLB实例。
     * - **eip**：表示弹性公网IP实例。
     * @example `ecs`
     */
    "InstanceType": string;
    /**
     * 公网IP资产的实例ID。
     * > 您可以调用[DescribeInstance](~~354191~~)查询当前阿里云账号拥有的ECS、SLB、EIP实例的ID。
     * @example `i-uf6idy3c57psf7vu****`
     */
    "InstanceId": string;
    /**
     * 设置流量清洗阈值，单位：Mbps。该阈值不能超过当前实例的公网数据流量峰值。修改Bps时，Pps必填，否则不会生效。
     * 您可以使用实例自带的监控工具，查询实例的公网数据流量：
     * - 如果您使用ECS实例，请参见[查看实例监控信息](~~25482~~)。
     * - 如果您使用SLB实例，请参见[查看监控数据](~~85982~~)。
     * - 如果您使用EIP实例，请参见[查看监控数据](~~85354~~)。
     * @example `100`
     */
    "Bps"?: number;
    /**
     * 设置报文数量清洗阈值，单位：pps。修改Pps时，Bps必填，否则不会生效。
     * 该阈值不能超过当前实例的数据包流量峰值。您可以使用实例自带的监控工具，查询实例的数据包流量：
     * - 如果您使用ECS实例，请参见[查看实例监控信息](~~25482~~)。
     * - 如果您使用SLB实例，请参见[查看监控数据](~~85982~~)。
     * - 如果您使用EIP实例，请参见[查看监控数据](~~85354~~)。
     * @example `70000`
     */
    "Pps"?: number;
    /**
     * 是否启用自动设置，即根据实例的流量负载，自动调整清洗阈值。取值：
     * - **true**：表示是，无需手动设置**Bps**、**Pps**参数。
     * - **false**（默认值）：表示否，需要手动设置**Bps**、**Pps**参数。
     * @example `false`
     */
    "IsAuto"?: boolean;
    /**
     * 公网IP资产的IP地址。
     * @example `192.0.XX.XX`
     */
    "InternetIp": string;
}
