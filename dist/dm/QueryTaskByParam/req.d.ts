export interface QueryTaskByParamRequest {
    /**
     * 当前页码，默认为1
     * @example `1`
     */
    "PageNo"?: number;
    /**
     * 每页大小，默认为10
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 关键词，默认所有信息
     * @example `mesh-notification-788717`
     */
    "KeyWord"?: string;
    /**
     * 状态，默认所有状态
     * @example `0`
     */
    "Status"?: number;
}
