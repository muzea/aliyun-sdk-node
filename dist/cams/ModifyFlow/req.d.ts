export interface ModifyFlowRequest {
    /**
     * Flow名称。
     * @example `flow_001`
     */
    "FlowName": string;
    /**
     * Flow的目录信息。
     */
    "Categories": string[];
    /**
     * Flow ID。
     * @example `92675332812643****
    `
     */
    "FlowId"?: string;
    /**
     * ISV子客户的SpaceId/实例ID。
     * @example `94938**`
     */
    "CustSpaceId"?: string;
}
