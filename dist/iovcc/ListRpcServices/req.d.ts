export interface ListRpcServicesRequest {
    /**
     * iovcc项目工程ID
     * @example `sfgsghd6`
     */
    "ProjectId": string;
    /**
     * 分页查询页码
     * @example `1`
     */
    "PageIndex"?: number;
    /**
     * 分页查询每页数据集数量
     * @example `20`
     */
    "PageSize"?: number;
}
