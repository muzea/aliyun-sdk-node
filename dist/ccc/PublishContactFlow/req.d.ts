export interface PublishContactFlowRequest {
    /**
     * 实例ID。
     * @example `ccc-test`
     */
    "InstanceId": string;
    /**
     * 联系流ID。
     * @example `b0a063bf-f138-42a4-ad9f-9babe3ec1a9e`
     */
    "ContactFlowId": string;
    /**
     * 草稿ID，当前联系流对应的草稿版本ID。
     * @example `0e0b8e78-af3e-4360-a5c5-f9bb5c2b8af2`
     */
    "DraftId": string;
}
