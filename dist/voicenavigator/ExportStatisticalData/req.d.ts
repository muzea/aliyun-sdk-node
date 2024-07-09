export interface ExportStatisticalDataRequest {
    /**
     * 实例id
     * @example `29b52d70-d9fe-4fe0-8476-8aaacbcfdc84`
     */
    "InstanceId": string;
    /**
     * 时间单元
     * @example `Hour`
     */
    "TimeUnit": string;
    /**
     * 导出类型
     * @example `statistical`
     */
    "ExportType": string;
    /**
     * 开始时间
     * @example `1582266750353`
     */
    "BeginTimeLeftRange"?: number;
    /**
     * 过滤条件，结束时间
     * @example `1582266750353`
     */
    "BeginTimeRightRange"?: number;
}
