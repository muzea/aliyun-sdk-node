export interface ListProjectAppsRequest {
    /**
     * 项目ID。
     * @example `11`
     */
    "ProjectId": string;
    /**
     * 当前页码，从**1**开始。
     * @example `1`
     */
    "PageIndex"?: number;
    /**
     * 每页记录条数，默认为**10**。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 应用名称或包名关键字。
     * @example `app`
     */
    "Keywords"?: string;
}
