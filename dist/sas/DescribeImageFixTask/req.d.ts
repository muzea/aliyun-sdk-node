export interface DescribeImageFixTaskRequest {
    /**
     * 要查询的修复任务开始的时间戳，单位为毫秒。
     * @example `1634725571000`
     */
    "StartTime"?: number;
    /**
     * 要查询的修复任务结束的时间戳，单位为毫秒。
     * @example `1635575219000`
     */
    "EndTime"?: number;
    /**
     * 要查询的镜像修复任务的状态。取值：
     * - **1**：修复中
     * - **2**：修复成功
     * - **3**：修复失败
     * @example `1`
     */
    "Status"?: string;
    /**
     * 设置从返回结果的第几页开始显示查询结果。默认值为**1**，表示从第1页开始显示。
     * @example `1`
     */
    "CurrentPage": number;
    /**
     * 设置分页查询时，每页中显示的修复任务的数量。默认值为**20**，表示每页显示20条修复任务。
     * @example `20`
     */
    "PageSize": number;
}
