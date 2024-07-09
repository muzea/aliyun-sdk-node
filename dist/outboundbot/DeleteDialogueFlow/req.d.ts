export interface DeleteDialogueFlowRequest {
    /**
     * 实例id
     * @example `361c8a53-0e29-42f3-8aa7-c7752d010399`
     */
    "InstanceId": string;
    /**
     * 对话流程所在的话术id
     * @example `d7c28efb-47f7-4a85-a522-5038e30a0b98`
     */
    "ScriptId": string;
    /**
     * 对话流程的uuid
     * @example `40a1457a-d2f3-43cf-ac81-c9e14cf07d88`
     */
    "DialogueFlowId": string;
}
