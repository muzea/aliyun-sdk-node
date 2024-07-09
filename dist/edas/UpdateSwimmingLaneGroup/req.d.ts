export interface UpdateSwimmingLaneGroupRequest {
    /**
     * 泳道组ID。
     * @example `98`
     */
    "GroupId": number;
    /**
     * 泳道组名称。
     * @example `test-swimlanegroup`
     */
    "Name"?: string;
    /**
     * 入口应用。格式为：EDAS:{应用ID}。
     * @example `EDAS:dd2690a7-3fe4-4975-9a4c-5a60ffd6****`
     */
    "EntryApp"?: string;
    /**
     * 泳道组涉及应用ID列表。
     * @example `8e7689af-6ddd-4676-8ee6-5fbecdf2****,f72deaac-26ba-429a-948d-5fa47c4a****,5049d2c8-f997-4fc9-92a2-153506a6****,99a2d4b5-99a5-4e25-a964-1bd03a17****`
     */
    "AppIds"?: string;
}
