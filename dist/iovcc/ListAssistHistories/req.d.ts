export interface ListAssistHistoriesRequest {
    /**
     * 每页数目
     * @example `20`
     */
    "PerPage": number;
    /**
     * 页码
     * @example `1`
     */
    "PageIndex": number;
    /**
     * 查询条件
     * @example `{"vin":"LVFAG7A31HK000029"}`
     */
    "Condition"?: string;
    /**
     * 项目ID
     * @example `PZ1HK7JZ`
     */
    "ProjectId": string;
}
