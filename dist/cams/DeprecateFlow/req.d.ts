export interface DeprecateFlowRequest {
    /**
     * Flow ID。
     * @example `92675332812643****`
     */
    "FlowId": string;
    /**
     * ISV子客户的SpaceId/实例ID。
     * @example `28251486512358****`
     */
    "CustSpaceId"?: string;
}
