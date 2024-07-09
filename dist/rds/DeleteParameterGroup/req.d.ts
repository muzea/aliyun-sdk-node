export interface DeleteParameterGroupRequest {
    /**
     * 地域ID。可以通过接口DescribeRegions查看地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 参数模板ID。可以通过接口DescribeParameterGroups查看参数模板ID。
     * @example `rpg-gfs****`
     */
    "ParameterGroupId": string;
    /**
     * 资源组ID。可调用DescribeDBInstanceAttribute获取。
     * @example `rg-acfmy****`
     */
    "ResourceGroupId"?: string;
}
