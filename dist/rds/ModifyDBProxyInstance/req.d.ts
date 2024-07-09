export interface ModifyDBProxyInstanceRequest {
    /**
     * 实例ID。可调用DescribeDBInstances获取。
     * @example `rm-t4n3a****`
     */
    "DBInstanceId": string;
    /**
     * 数据库代理实例类型，取值：
     * - **common**：通用型代理
     * - **exclusive**：独享型代理（默认）
     * @example `exclusive`
     */
    "DBProxyInstanceType": string;
    /**
     * 设置代理实例数量。当取值为0的时候，表示这个实例关闭此种类型代理服务。取值：**1**~**16**。
     * >更多的代理实例能处理更多的请求，您可以根据监控数据了解代理实例的负载，然后设置合理的代理实例数量。
     * @example `2`
     */
    "DBProxyInstanceNum": string;
    /**
     * 生效时间，取值：
     * * **Immediate**：立即生效。
     * * **MaintainTime**：在可运维时间段内生效，请参见ModifyDBInstanceMaintainTime。
     * * **SpecificTime**：指定时间生效。
     * 默认值：**MaintainTime**。
     * @example `MaintainTime`
     */
    "EffectiveTime"?: string;
    /**
     * 指定时间生效。格式：<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
     * >**EffectiveTime**为**SpecificTime**时，该参数必传。
     * @example `2019-07-10T13:15:12Z`
     */
    "EffectiveSpecificTime"?: string;
    /**
     * 地域ID。可调用DescribeRegions获取。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 废弃参数，无需配置。
     * @example `normal`
     */
    "DBProxyEngineType"?: string;
    /**
     * 指定迁移至目标可用区对应的交换机ID。可通过调用[DescribeVSwitches](~~610431~~)接口查询已创建的交换机。
     * > 当前仅支持RDS MySQL云盘版代理实例迁移可用区
     * @example ` vsw-uf6adz52c2p****`
     */
    "VSwitchIds"?: string;
}
