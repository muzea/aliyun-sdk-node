export interface DescribeRegionsRequest {
    /**
     * 可用区ID。
     * >如果不填写，默认查询所选地域下的所有可用区。
     * @example `cn-hangzhou-h`
     */
    "ZoneId"?: string;
    /**
     * 地域ID。
     * >如果不填写，默认查询所有支持的地域。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
}
