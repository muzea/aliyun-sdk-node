export interface ListAssistDevicesRequest {
    /**
     * 项目ID
     * @example `PZ1HK7JZ`
     */
    "ProjectId": string;
    /**
     * 分页页码
     * @example `1`
     */
    "PageIndex": number;
    /**
     * 查询条件
     * @example `{"vin":"LVFAG7A31HK000029"}`
     */
    "Condition"?: string;
    /**
     * 每页个数
     * @example `20`
     */
    "PerPage": number;
}
