export interface ListSchemaSubscribesRequest {
    /**
     * 项目ID
     * @example `PIC3UA0V`
     */
    "ProjectId": string;
    /**
     * 机型信息
     * @example `model_2nd`
     */
    "DeviceModel"?: string;
    /**
     * 查询的页码
     * @example `1`
     */
    "PageIndex"?: number;
    /**
     * 查询的每页数量
     * @example `10`
     */
    "PageSize"?: number;
}
