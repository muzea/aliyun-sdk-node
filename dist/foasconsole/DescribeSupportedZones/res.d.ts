export interface DescribeSupportedZonesResponse {
    /**
     * 请求ID。
     * @example `23A9C718-DDAB-1696-B025-18FBC830F7C5`
     */
    RequestId: string;
    /**
     * 是否成功。
     * @example `true`
     */
    Success: boolean;
    /**
     * 可用区个数。
     * @example `8`
     */
    TotalCount: number;
    /**
     * 总页数
     * @example `1`
     */
    TotalPage: number;
    /**
     * 当前页数。
     * @example `1`
     */
    PageIndex: number;
    /**
     * 每页包含的条目数
     * @example `10`
     */
    PageSize: number;
    /**
     * 可用区信息。
     */
    ZoneIds: string[];
}
