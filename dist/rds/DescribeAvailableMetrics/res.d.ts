export interface DescribeAvailableMetricsResponse {
    /**
     * 实例支持的增强指标总数。
     * @example `4`
     */
    TotalRecordCount: number;
    /**
     * 请求ID。
     * @example `5CD61041-35F7-10F7-BE94-33A48B221218`
     */
    RequestId: string;
    /**
     * 增强监控指标列表。
     */
    Items: {
        /**
         * 增强指标所在分组的Key。
         * @example `os.cpu_usage`
         */
        GroupKey: string;
        /**
         * 增强指标编号。
         * @example `1`
         */
        SortRule: number;
        /**
         * 增强指标描述信息。
         * @example `sys cpu使用率，sys cpu使用量 / cpu总量`
         */
        Description: string;
        /**
         * 增强指标单位。
         * @example `%`
         */
        Unit: string;
        /**
         * 增强指标的Key。
         * @example `os.cpu_usage.sys.avg`
         */
        MetricsKey: string;
        /**
         * 增强指标所在分组的名称。
         * @example `CPU使用率`
         */
        GroupKeyType: string;
        /**
         * 增强指标别名。
         * @example `cpu_sys_per_core`
         */
        MetricsKeyAlias: string;
        /**
         * 增强指标统计方法。返回值：
         * - **avg**：统计平均值。
         * - **min**：统计最小值。
         * - **max**：统计最大值。
         * @example `avg`
         */
        Method: string;
        /**
         * 增强指标类别。返回值：
         * - **os**：操作系统指标。
         * - **db**：数据库指标。
         * @example `os`
         */
        Dimension: string;
    }[];
    /**
     *
     * 实例ID。
     * @example `rm-bp1****`
     */
    DBInstanceName: string;
}
