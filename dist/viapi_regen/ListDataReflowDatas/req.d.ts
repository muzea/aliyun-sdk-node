export interface ListDataReflowDatasRequest {
    /**
     * 当前页码。默认为第1页。
     * @example `1`
     */
    "CurrentPage"?: number;
    /**
     * 每页展示的数据条数。默认为每页10条数据。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 服务ID。
     * @example `432`
     */
    "ServiceId": number;
    /**
     * 开始时间。
     * > - StartTime不能大于EndTime。
     * - 当StartTime为空，EndTime不为空时，会导出EndTime前7天的回流数据。
     * @example `1663084800000`
     */
    "StartTime"?: number;
    /**
     * 结束时间。
     * > - EndTime不能小于StartTime。
     * - 当EndTime为空，StartTime不为空时，会导出StartTime后7天的回流数据。
     * @example `1663689599000`
     */
    "EndTime"?: number;
    /**
     * 标签（支持模糊搜索）。
     * @example `Test`
     */
    "Category"?: string;
    /**
     * 文件名称（支持模糊搜索）。
     * @example `1716735326807772/275742949931921578/KiMRW_1663653105196.jpg`
     */
    "ImageName"?: string;
}
