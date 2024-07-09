export interface DescribeJobHistoryRequest {
    /**
     * 任务模板ID。
     * @example `e1a7a07-abcb-4652-a1d3-2d57f415****`
     */
    "AppId": string;
    /**
     * 当前页码。
     * @example `1`
     */
    "CurrentPage"?: number;
    /**
     * 分页查询时设置的每页数量。取值范围\[0,10000\]。
     * @example `20`
     */
    "PageSize"?: number;
    /**
     * 任务的运行状态。取值说明如下：
     * - **0**：未执行。
     * - **1**：执行成功。
     * - **2**：执行失败。
     * - **3**：正在执行。
     * @example `1`
     */
    "State"?: string;
}
