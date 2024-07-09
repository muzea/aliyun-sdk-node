export interface CreateRestorePlanRequest {
    /**
     * HBase增强版集群ID。
     * @example `ld-bp150tns0sjxs****`
     */
    "ClusterId": string;
    /**
     * 恢复到指定HBase增强版集群，也可以恢复到当前备份的集群。
     * > 指定HBase增强版集群和备份的HBase增强版集群需要满足以下要求：<ul>
     * <li>版本相同。</li>
     * <li>处于同一个Region。</li>
     * <li>与BDS集群相关联。</li></ul>
     * @example `ld-bp169l540vc6c****`
     */
    "TargetClusterId": string;
    /**
     * 是否恢复所有表，取值：
     * - **true**：恢复HBase增强版集群的所有表。
     * - **false**：不恢复HBase增强版集群的所有表。
     * > 取值为**true**时，**Tables**参数无效。取值为**false**时，**Tables**参数必须填写。
     * @example `false`
     */
    "RestoreAllTable": boolean;
    /**
     * 通过复制方法恢复数据，固定取值为**true**。
     * @example `true`
     */
    "RestoreByCopy": boolean;
    /**
     * 恢复到指定时间点，时间点的设置需要在恢复时间段内，恢复时间段可调用[DescribeRecoverableTimeRange](~~188365~~)接口查看。
     * @example `2020-11-05T05:49:42Z`
     */
    "RestoreToDate": string;
    /**
     * 表名称。需要⼀⾏写⼀个表名称，不支持通配符（*）。
     * - 如果恢复至当前表，填写格式为：`namespace:table`，例如：`default:testTable`。
     * - 如果恢复至其他表，填写格式为：`namespace:table/namespace:table2`，例如：`default:testTable/default:testTable2`。
     * @example `test_ns:test_table/test_ns:test_table2`
     */
    "Tables"?: string;
}
