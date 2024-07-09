export interface QueryRIUtilizationDetailRequest {
    /**
     * 筛选查询的预留实例ID，为空时返回所有的使用的预留实例明细。
     * @example `dsudfgdsjh`
     */
    "RIInstanceId"?: string;
    /**
     * 预留实例对应的规格。
     * @example `Instancetyp`
     */
    "InstanceSpec"?: string;
    /**
     * 取值：
     * - ecsRi（默认值）：ECS的预留实例。
     * - scu_bag：存储容量单位包。
     * @example `ecsRi`
     */
    "RICommodityCode": string;
    /**
     * 被抵扣实例的ID，为空时返回所有实例的明细数据。
     * @example `jsdgfsdhgsdjh`
     */
    "DeductedInstanceId"?: string;
    /**
     * 开始时间，格式：YYYY-MM-dd HH:mm:ss。
     * @example `2019-05-23 12:00:00`
     */
    "StartTime": string;
    /**
     * 结束时间，格式：YYYY-MM-dd HH:mm:ss。
     * @example `2019-05-23 12:00:00`
     */
    "EndTime": string;
    /**
     * 页码，默认为1。
     * @example `1`
     */
    "PageNum"?: number;
    /**
     * 每页条数，默认为20，最大值为300。
     * @example `20`
     */
    "PageSize"?: number;
}
