export interface DeleteParameterGroupRequest {
    /**
     * 地域ID。
     * > 您可以通过接口[DescribeRegions](~~98041~~)查看可用地域。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 参数模板ID。
     * > 您可以通过接口[DescribeParameterGroups](~~207178~~)查看参数模板ID。
     * @example `pcpg-**************`
     */
    "ParameterGroupId": string;
    /**
     * 资源组ID。
     * @example `rg-************`
     */
    "ResourceGroupId"?: string;
}
