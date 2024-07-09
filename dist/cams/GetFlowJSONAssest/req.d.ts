export interface GetFlowJSONAssestRequest {
    /**
     * Flow ID。
     * @example `92675332812643****`
     */
    "FlowId": string;
    /**
     * ISV子客户的SpaceId/实例ID。
     * @example `8388****`
     */
    "CustSpaceId"?: string;
}
