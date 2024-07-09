export interface ListDialogueFlowsRequest {
    /**
     * 实例id
     * @example `361c8a53-0e29-42f3-8aa7-c7752d010399`
     */
    "InstanceId": string;
    /**
     * 话术id，对话流程数据来自这个话术
     * @example `d7c28efb-47f7-4a85-a522-5038e30a0b98`
     */
    "ScriptId": string;
}
