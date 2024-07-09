export interface DescribeCustomBlockRecordsRequest {
    /**
     * 设置从返回结果的第几页开始显示查询结果。默认值为**1**，表示从第1页开始显示。
     * @example `1`
     */
    "CurrentPage"?: number;
    /**
     * 暴力破解防御规则的状态。
     * 取值：
     * - **0**：失效
     * - **1**：启用
     * - **2**：失败
     * @example `1`
     */
    "Status"?: number;
    /**
     * 防暴力破解需要阻断的IP地址。
     * @example `117.66.XX.XX`
     */
    "BlockIp"?: string;
    /**
     * 设置分页查询时，每页显示的记录的数量。默认值为**20**，表示每页显示20条记录。
     * @example `20`
     */
    "PageSize"?: number;
}
