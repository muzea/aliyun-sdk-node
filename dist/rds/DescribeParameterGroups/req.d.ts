export interface DescribeParameterGroupsRequest {
    /**
     * 地域ID，可以通过DescribeRegions查看地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 资源组ID。
     * @example `rg-acfmy****`
     */
    "ResourceGroupId"?: string;
    /**
     * 参数概览信息。
     * - **false**：返回参数概览信息，默认值。
     * - **true**：不返回参数概览信息。
     * @example `false`
     */
    "EnableDetail"?: boolean;
}
