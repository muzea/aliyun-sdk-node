export interface GetUserGatewaysRequest {
    /**
     * 分页大小。
     * @example `100`
     */
    "PageSize"?: number;
    /**
     * 当前页码。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 搜索关键字。
     * @example `网关。`
     */
    "SearchKey"?: string;
    /**
     * 网关所在地域。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
}
