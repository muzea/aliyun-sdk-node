export interface DescribeParameterGroupRequest {
    /**
     * 参数模板ID。可以通过接口DescribeParameterGroups查看参数模板ID。
     * @example `rpg-dp****`
     */
    "ParameterGroupId": string;
    /**
     * 地域ID。可以通过接口DescribeRegions查看地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
}
