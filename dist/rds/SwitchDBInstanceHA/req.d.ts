export interface SwitchDBInstanceHARequest {
    /**
     * 实例ID。可调用DescribeDBInstances获取。
     * @example `rm-uf6wjk5****`
     */
    "DBInstanceId": string;
    /**
     * 备库的唯一标识，通过接口DescribeDBInstanceHAConfig可查询该值。
     * @example `349054`
     */
    "NodeId": string;
    /**
     * 切换方式，取值：
     * * **Yes**：强制
     * * **No**：非强制
     * 默认值：**No**。
     * @example `No`
     */
    "Force"?: string;
    /**
     * 生效时间，取值：
     * * **Immediate**：立即执行
     * * **MaintainTime**：可维护时间内执行
     * 默认值：**Immediate**。
     * @example `Immediate`
     */
    "EffectiveTime"?: string;
}
