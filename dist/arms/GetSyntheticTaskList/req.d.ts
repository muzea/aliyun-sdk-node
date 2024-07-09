export interface GetSyntheticTaskListRequest {
    /**
     * 地域id。默认为**cn-hangzhou**。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 任务类型：
     * 1. 3：网页性能-IE
     * 2. 34：网页性能-Chrome
     * 3. 0：网络质量
     * 4. 40：文件下载
     * 5. 7：API性能
     * @example `0`
     */
    "TaskType"?: string;
    /**
     * 拨测地址。
     * @example `https://www.example.com
    `
     */
    "Url"?: string;
    /**
     * 任务名称。
     * @example `net-test`
     */
    "TaskName"?: string;
    /**
     * 任务启停状态。取值：
     * - **0**：停止任务。
     * - **1**：开始任务。
     * - **9**：结束任务。
     * @example `1`
     */
    "TaskStatus"?: string;
    /**
     * 分页查询的页码。
     * @example `1`
     */
    "PageNum"?: number;
    /**
     * 查询结果分页的每页项目数量。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 排序字段。
     * @example `CreateTime`
     */
    "Order"?: string;
    /**
     * 排序方向。取值：
     * - **asc**：升序
     * - **desc**：降序
     * @example `asc`
     */
    "Direction"?: string;
}
