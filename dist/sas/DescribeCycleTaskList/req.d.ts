export interface DescribeCycleTaskListRequest {
    /**
     * 任务名称。取值：
     * - **VIRUS\_VUL\_SCHEDULE\_SCAN**：病毒扫描。
     * - **IMAGE_SCAN**：镜像扫描。
     * - **EMG\_VUL\_SCHEDULE\_SCAN**：应急漏洞扫描。
     * @example `IMAGE_SCAN`
     */
    "TaskName"?: string;
    /**
     * 任务类型。取值：
     * - **VIRUS\_VUL\_SCHEDULE\_SCAN**：病毒扫描。
     * - **IMAGE_SCAN**：镜像扫描。
     * - **EMG\_VUL\_SCHEDULE\_SCAN**：应急漏洞扫描。
     * @example `IMAGE_SCAN`
     */
    "TaskType": string;
    /**
     * 分页查询时，当前页的页码。
     * @example `1`
     */
    "CurrentPage"?: number;
    /**
     * 分页查询时，显示的每页数据的最大条数，默认值20。
     * @example `20`
     */
    "PageSize"?: number;
}
