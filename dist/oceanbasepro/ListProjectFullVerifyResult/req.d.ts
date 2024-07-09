export interface ListProjectFullVerifyResultRequest {
    /**
     * 项目的 ID。
     * @example `np_4w5abs****`
     */
    "ProjectId": string;
    /**
     * 源端数据库集合。
     */
    "SourceSchemas"?: string[];
    /**
     * 目标端数据库集合。
     */
    "DestSchemas"?: string[];
    /**
     * 项目的状态。
     * @example `FINISHED`
     */
    "Status"?: string;
    /**
     * 页序号，分页查询时生效。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 分页参数，每页个数
     * @example `页大小，分页查询时生效。`
     */
    "PageSize"?: number;
}
