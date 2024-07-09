export interface ModifyDBInstanceNetworkTypeRequest {
    /**
     * 实例ID。
     * @example `dds-bp11483712c1****`
     */
    "DBInstanceId": string;
    /**
     * 实例要切换的目标网络类型，取值说明：
     * - **VPC**：将网络类型切换为专有网络。
     * @example `VPC`
     */
    "NetworkType": string;
    /**
     * 专有网络ID。
     * > 当**NetworkType**参数配置为**VPC**时，需要配置该参数。
     * @example `vpc-bp1n3i15v90el48nx****`
     */
    "VpcId"?: string;
    /**
     * 专有网络中的交换机ID。
     * > 当**NetworkType**参数配置为**VPC**时，需要配置该参数。
     * @example `vsw-bp1vj604nj5a9zz74****`
     */
    "VSwitchId"?: string;
    /**
     * 切换网络类型为VPC时，设置是否保留原经典网络地址，取值说明：
     * - **True**：保留原经典网络地址。
     * - **False**：不保留原经典网络地址。
     * > - 当**NetworkType**参数配置为**VPC**时，需要配置该参数。
     * > - 当该参数配置为**True**时，还需要配置**ClassicExpiredDays**参数。
     * @example `False`
     */
    "RetainClassic"?: string;
    /**
     * 切换网络类型为VPC时，设置保留原经典网络地址的时长。取值为**14**、**30**、**60**、**120**，单位为天。
     * > 当**NetworkType**参数配置为**VPC**且**RetainClassic**参数配置为**True**时，需要配置该参数。
     * @example `30`
     */
    "ClassicExpiredDays"?: number;
    /**
     * 可用区ID，您可以通过调用[DescribeRegions](~~61933~~)接口查询可用区ID。
     * @example `cn-hangzhou-b`
     */
    "ZoneId": string;
}
