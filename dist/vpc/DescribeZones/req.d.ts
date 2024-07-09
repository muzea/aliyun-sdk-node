export interface DescribeZonesRequest {
    /**
     * 可用区所在的地域ID。您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 查询可用区的类型，默认取值为**AvailabilityZone**即普通云上可用区。
     * @example `AvailabilityZone`
     */
    "ZoneType"?: string;
    /**
     * 返回值可用区名称**LocalName**的显示语言。取值：
     * - **zh-cn**：中文。
     * - **en-us**：英文。
     * - **ja**：日文。
     * @example `zh-cn`
     */
    "AcceptLanguage"?: string;
}
