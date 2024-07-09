export interface InsertSwimmingLaneRequest {
    /**
     * 自定义命名空间的RegionId。
     * 格式为：`物理Region:自定义命名空间标识符`，例如`cn-hangzhou:test`。
     * @example `cn-beijing:test`
     */
    "LogicalRegionId": string;
    /**
     * 泳道名称。
     * @example `test1`
     */
    "Name": string;
    /**
     * 标签。
     * @example `tag`
     */
    "Tag": string;
    /**
     * 泳道组ID。
     * @example `95`
     */
    "GroupId": number;
    /**
     * 流控条件。
     * @example `[{"priority":1,"path":"/traffic","condition":"AND","restItems":[{"type":"header","name":"testheader","value":"testvalue","cond":"==","operator":"rawvalue"}]}]`
     */
    "EntryRules": string;
    /**
     * 是否启用流控规则。
     * @example `true`
     */
    "EnableRules"?: boolean;
    /**
     * 泳道涉及应用信息。
     * @example `[{"appId":"f72deaac-26ba-429a-948d-5fa47c4a****"},{"appId":"5049d2c8-f997-4fc9-92a2-153506a6****"}]`
     */
    "AppInfos"?: string;
}
