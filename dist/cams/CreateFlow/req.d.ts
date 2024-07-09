export interface CreateFlowRequest {
    /**
     * Flow名称。
     * @example `flow_001`
     */
    "FlowName": string;
    /**
     * 目录列表。
     */
    "Categories": string[];
    /**
     * ISV子客户的SpaceId/实例ID。
     * @example `93994848`
     */
    "CustSpaceId"?: string;
}
