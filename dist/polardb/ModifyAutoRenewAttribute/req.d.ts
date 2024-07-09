export interface ModifyAutoRenewAttributeRequest {
    /**
     * 数据库集群ID。
     * @example `pc-***************`
     */
    "DBClusterIds": string;
    /**
     * 地域ID，长度不超过50个字符。
     * > 可通过接口[DescribeRegions](~~98041~~)查看可用的地域。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 设置自动续费状态，取值范围如下：
     * - **AutoRenewal**：自动续费。
     * - **Normal**：手动续费。
     * - **NotRenewal**：不再续费。
     * 默认为**AutoRenewal**。
     * > 设置为**NotRenewal**后，系统不再发送到期提醒，只在到期前第三天发送不续费提醒。
     * @example `AutoRenewal`
     */
    "RenewalStatus"?: string;
    /**
     * 设置实例自动续费时长，取值范围如下：
     * - 当**PeriodUnit**为**Month**时，取值为`[1,2,3,6,12]`。
     * - 当**PeriodUnit**为**Year**时，取值为`[1-3]`。
     *
     * 默认为**1**。
     * @example `1`
     */
    "Duration"?: string;
    /**
     * 续费时长的单位，取值范围如下：
     * - **Year**：年。
     * - **Month**：月。
     *
     * 默认为**Month**。
     * @example `Month`
     */
    "PeriodUnit"?: string;
    /**
     * 资源组ID。
     * @example `rg-************`
     */
    "ResourceGroupId"?: string;
}
