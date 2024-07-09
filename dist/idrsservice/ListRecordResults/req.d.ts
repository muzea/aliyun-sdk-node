export interface ListRecordResultsRequest {
    /**
     * 双录 ID
     * @example `A1899517-BB99-5D3E-A71B-97524DCB0942`
     */
    "RecordId"?: string;
    /**
     * 查询起始日期，格式 yyyy-MM-dd
     * @example `2020-10-10`
     */
    "CreateDateFrom"?: string;
    /**
     * 查询结束日期，格式 yyyy-MM-dd
     * @example `2020-10-11`
     */
    "CreateDateTo"?: string;
    /**
     * 部门 ID
     * @example `90c2459a-4c73-4ab7-8a6b-e550d62fbd8c`
     */
    "DepartmentId"?: string;
    /**
     * 标识本地双录和远程双录（LOCAL 或 REMOTE）
     * @example `LOCAL`
     */
    "Type"?: string;
    /**
     * 页码
     * @example `1`
     */
    "PageIndex"?: number;
    /**
     * 页大小
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 业务ID，用户自定义
     * @example `ads32efef43`
     */
    "OuterBusinessId"?: string;
}
