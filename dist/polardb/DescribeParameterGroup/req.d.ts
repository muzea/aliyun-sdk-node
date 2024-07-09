export interface DescribeParameterGroupRequest {
    /**
     * 地域ID。
     * > 您可以通过[DescribeRegions](~~98041~~)接口查看当前账号下的所有可用地域信息，包括地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 参数模板ID。
     * > 您可以通过[DescribeParameterGroups](~~207178~~)接口查询目标地域下所有参数模板的详细信息，包括参数模板ID。
     * @example `pcpg-**************`
     */
    "ParameterGroupId": string;
    /**
     * 资源组ID。
     * @example `rg-************`
     */
    "ResourceGroupId"?: string;
}
