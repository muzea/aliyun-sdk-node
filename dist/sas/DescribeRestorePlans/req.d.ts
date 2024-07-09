export interface DescribeRestorePlansRequest {
    /**
     * 指定要查询的服务器名称。
     * @example `sql-test-001`
     */
    "InstanceName"?: string;
    /**
     * 指定分页查询时，每页显示的数据最大条数。每页默认显示的数据条数为20条，PageSize参数值为空时，将默认返回20条数据。
     * > 建议PageSize取值不要为空。
     * @example `20`
     */
    "PageSize"?: number;
    /**
     * 设置从返回结果的第几页开始显示查询结果。默认值为**1**，表示从第1页开始显示。
     * @example `1`
     */
    "CurrentPage"?: number;
    /**
     * 备份计划状态。取值包括：
     * - **init**：初始化中
     * - **created**：创建中
     * - **running**：执行中
     * - **completed**：执行成功
     * - **error**：执行失败
     * - **restoring**：恢复中
     * @example `running`
     */
    "Status"?: string;
}
