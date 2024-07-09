export interface ListUpstreamAppServersRequest {
    /**
     * iovcc项目工程ID。
     * @example `fsgtd5y5r`
     */
    "ProjectId": string;
    /**
     * 分页查询页码。
     * @example `1`
     */
    "PageIndex"?: string;
    /**
     * 分页查询每页数据集大小。
     * @example `20`
     */
    "PageSize"?: string;
}
