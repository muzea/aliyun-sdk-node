export interface DescribeWebLockProcessListRequest {
    /**
     * 进程名称。
     * @example `cron`
     */
    "ProcessName"?: string;
    /**
     * 进程加白状态。
     * - **1**：已加白
     * - **0**：未加白
     * @example `0`
     */
    "Status"?: number;
    /**
     * 设置从返回结果的第几页开始显示查询结果。默认值为1，表示从第1页开始显示。
     * @example `1`
     */
    "CurrentPage"?: number;
    /**
     * 指定分页查询时，每页显示的数据最大条数。每页默认显示的数据条数为20条，PageSize参数值为空时，将默认返回20条数据。
     * > 建议PageSize取值不要为空。
     * @example `20`
     */
    "PageSize"?: number;
}
