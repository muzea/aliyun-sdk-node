export interface ListGeographicSubRegionsResponse {
    /**
     * 请求ID。
     * @example `0ED8D006-F706-4D23-88ED-E11ED28DCAC0`
     */
    RequestId: string;
    /**
     * 需要查询的地域列表。
     */
    GeographicSubRegions: string[];
    /**
     * 列表条目数。
     * @example `10`
     */
    Count: number;
}
