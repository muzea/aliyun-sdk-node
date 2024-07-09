export interface GetContactFlowRequest {
    /**
     * 实例ID。
     * @example `ccc-test`
     */
    "InstanceId": string;
    /**
     * 联系流ID。
     * @example `274601be-a6d5-4429-bcef-32b51d031c6e`
     */
    "ContactFlowId": string;
    /**
     * 草稿ID，当前联系流对应的可编辑草稿版本ID。
     * @example `566399d7-5558-447c-a72f-9be2768b6a82`
     */
    "DraftId": string;
}
