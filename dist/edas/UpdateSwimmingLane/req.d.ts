export interface UpdateSwimmingLaneRequest {
    /**
     * 泳道ID。
     * @example `224`
     */
    "LaneId": number;
    /**
     * 泳道名称。
     * @example `test-swimlane`
     */
    "Name"?: string;
    /**
     * 流控规则是否开启。
     * @example `true`
     */
    "EnableRules": boolean;
    /**
     * 流控泳道涉及应用列表。
     * @example `[{"appId":"8e7689af-6ddd-4676-8ee6-5fbecdf2****"},{"appId":"f72deaac-26ba-429a-948d-5fa47c4a****"},{"appId":"99a2d4b5-99a5-4e25-a964-1bd03a17****"}]`
     */
    "AppInfos"?: string;
    /**
     * 流控规则配置。
     * @example `[{"priority":1,"path":"/traffictest","condition":"AND","restItems":[{"type":"header","name":"testheader","value":"testheadervalue","cond":"==","operator":"rawvalue"}]}]`
     */
    "EntryRules"?: string;
}
