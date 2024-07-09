export interface DiscardEditingContactFlowRequest {
    /**
     * 实例ID。
     * @example `ccc-test`
     */
    "InstanceId": string;
    /**
     * 联系流ID。
     * @example `3ff4e021-fd63-4572-ad8c-10ed69972965`
     */
    "ContactFlowId": string;
    /**
     * 草稿ID。
     * @example `0aa493d6-58eb-4290-9ba2-e1c2c615b46b`
     */
    "DraftId": string;
}
