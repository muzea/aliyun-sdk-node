export interface GetInstanceSqlOptimizeStatisticRequest {
    /**
     * 数据库实例ID。
     * > 仅支持RDS MySQL、PolarDB MySQL版数据库实例。
     * @example `pc-wz90h9560rvdz****`
     */
    "InstanceId": string;
    /**
     * 查询开始时间，格式为Unix时间戳（UTC时间），单位为毫秒。
     * @example `1661308902060`
     */
    "StartTime": string;
    /**
     * 查询结束时间，格式为Unix时间戳（UTC时间），单位为毫秒。
     * @example `1662518540764`
     */
    "EndTime": string;
    /**
     * 节点ID。
     * > 对于RDS MySQL集群系列数据库实例或PolarDB MySQL版数据库实例，需要提供节点ID。
     * @example `pi-bp12v7243x012****`
     */
    "NodeId"?: string;
    /**
     * 自动SQL优化事件的持续时间阈值。
     * 设置此参数后，只会统计持续时间不超过阈值的自动SQL优化事件。
     * > 此参数为备用参数，当前暂不生效。
     * @example `None`
     */
    "Threshold"?: string;
    /**
     * 是否过滤开启了DAS企业版的数据库实例：
     * - **true**：是。
     * - **false**：否。
     * > 取值为**true**时，只统计未开启DAS企业版的数据库实例；取值为**false**时，统计所有数据库实例。
     * @example `false`
     */
    "FilterEnable"?: string;
    /**
     * 是否合并事件：
     * - **true**：是。
     * - **false**：否。
     * > 此参数为备用参数，当前暂不生效。
     * @example `true`
     */
    "UseMerging"?: string;
}
