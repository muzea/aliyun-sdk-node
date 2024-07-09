export interface GetPartitionsHeatmapRequest {
    /**
     * 备用参数。
     * @example `None`
     */
    "ConsoleContext"?: string;
    /**
     * 实例ID。
     * @example `pxc-hzrciqy62c****`
     */
    "InstanceId"?: string;
    /**
     * 需要查询的时间范围：
     * - **LAST\_ONE\_HOURS**：过去一小时。
     * - **LAST\_SIX\_HOURS**：过去六小时。
     * - **LAST\_ONE\_DAYS**：过去一天。
     * - **LAST\_THREE\_DAYS**：过去三天。
     * - **LAST\_SEVEN\_DAYS**：过去七天。
     * @example `LAST_SIX_HOURS`
     */
    "TimeRange"?: string;
    /**
     * 需要查询的数据类型：
     * - **READ_ROWS**：读行数。
     * - **WRITTEN_ROWS**：写行数。
     * - **READ\_WRITTEN\_ROWS**：读写行数。
     * - **UPDATE_ROWS**：更新行数。
     * - **INSERTED_ROWS**：插入行数。
     * - **DELETED_ROWS**：删除行数。
     * - **READ\_ROWS\_WITH\_DN**：以DN视角返回的读行数。
     * - **WRITTEN\_ROWS\_WITH\_DN**：以DN视角返回的写行数。
     * - **READ\_WRITTEN\_ROWS\_WITH\_DN**：以DN视角返回的读写行数。
     * @example `WRITTEN_ROWS_WITH_DN`
     */
    "Type"?: string;
}
