export interface GetFlowPreviewUrlRequest {
    /**
     * Flow ID。
     * @example `92675332812643****`
     */
    "FlowId": string;
    /**
     * ISV子客户的SpaceId/实例ID。
     * @example `93939****`
     */
    "CustSpaceId"?: string;
}
