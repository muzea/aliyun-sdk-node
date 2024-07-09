export interface ListUpstreamAppKeyRelationsRequest {
    /**
     * 分页查询每页数据集大小。
     * @example `20`
     */
    "PageSize"?: number;
    /**
     * iovcc项目工程ID。
     * @example `fsgtd5y5r`
     */
    "ProjectId": string;
    /**
     * 服务端应用ID。
     * @example `2`
     */
    "AppServerId": number;
    /**
     * 分页查询页码。
     * @example `1`
     */
    "PageIndex"?: number;
}
