export interface DescribeZonesRequest {
    /**
     * 地域ID。可以调用[DescribeRegions](~~196646~~)获取无影云电脑支持的地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 查询可用区的类型。默认取值为`AvailabilityZone`，即普通云上可用区。
     * @example `AvailabilityZone`
     */
    "ZoneType"?: string;
}
