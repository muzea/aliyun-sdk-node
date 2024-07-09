export interface DescribeSiteMonitorISPCityListRequest {
    /**
     * 运营商探测点的名称或ID。
     * > 运营商名称支持模糊查询。
     * @example `联通`
     */
    "Isp"?: string;
    /**
     * 运营商探测点所在城市的名称或ID。
     * > 城市名称支持模糊查询。
     * @example `贵阳市`
     */
    "City"?: string;
    /**
     * 是否查询IPv6探针。取值：
     * - true（默认值）：查询IPv6探针。
     * - false：不查询IPv6探针。
     * @example `true`
     */
    "IPV6"?: boolean;
    /**
     * 是否查询IPv4探针。取值：
     * - true（默认值）：查询IPv4探针。
     * - false：不查询IPv4探针。
     * @example `true`
     */
    "IPV4"?: boolean;
    /**
     * 是否返回所有探测点。取值：
     * - true（默认值）：返回所有探测点。
     * - false：只返回可用探测点。
     * @example `true`
     */
    "ViewAll"?: boolean;
}
