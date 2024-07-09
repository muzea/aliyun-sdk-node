export interface ListEnterpriseCodeRequest {
    /**
     * 地域ID。
     * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
     * @example `cn-shanghai`
     */
    "RegionId": string;
    /**
     * 要查询的企业码。
     * @example `12P**`
     */
    "EnterpriseCode"?: string;
    /**
     * 是否只查询默认企业码。取值：
     * - **true**：是。
     * - **false**（默认值）：否。
     * @example `false`
     */
    "IsDefault"?: boolean;
    /**
     * 分批次查询时，下一次查询的Token。
     * @example `caeba0bbb2be03f84eb48b699f0*****`
     */
    "NextToken"?: string;
    /**
     * 分批次查询时每次显示的条目数。
     * 取值范围：**1**~**100**。默认值：**10**。
     * @example `2`
     */
    "MaxResults"?: number;
}
