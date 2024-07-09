export interface ListDIJobsRequest {
    /**
     * 工作空间的ID。
     * @example `1967`
     */
    "ProjectId": number;
    /**
     * 任务名称，不填代表不限制，填写支持模糊查询。
     * @example `mysql_to_holo_sync_8772`
     */
    "JobName"?: string;
    /**
     * 源端数据源类型，不填代表不限制。
     * @example `MySQL`
     */
    "SourceDataSourceType"?: string;
    /**
     * 目标端数据源类型，不填代表不限制。
     * @example `Hologres`
     */
    "DestinationDataSourceType"?: string;
    /**
     * 页码，默认为1。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 分页大小，默认为10，最大支持100。
     * @example `10`
     */
    "PageSize"?: number;
}
