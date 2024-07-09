export interface CloneParameterGroupRequest {
    /**
     * 源参数模板地域ID。可以通过接口DescribeRegions查看地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 目标地域ID。可以通过接口DescribeRegions查看地域ID。
     * @example `cn-qingdao`
     */
    "TargetRegionId": string;
    /**
     * 源参数模板ID。可以通过DescribeParameterGroups查看参数模板ID。
     * @example `rpg-13ppdh****`
     */
    "ParameterGroupId": string;
    /**
     * 目标地域复制的参数模板名称。
     * @example `tartestgroup`
     */
    "ParameterGroupName": string;
    /**
     * 目标地域复制的参数模板描述。
     * @example `CloneGroup1`
     */
    "ParameterGroupDesc"?: string;
    /**
     * 资源组ID，可以为空。
     * @example `rg-acfmy****`
     */
    "ResourceGroupId"?: string;
}
