export interface CreateDialogueFlowRequest {
    /**
     * 实例id
     * @example `174952ab-9825-4cc9-a5e2-de82d7fa4cdd`
     */
    "InstanceId": string;
    /**
     * 对话流程名字
     * @example `主流程`
     */
    "DialogueName": string;
    /**
     * 话术id
     * @example `d0bf93dd-1a54-4f00-819e-c75502d38681`
     */
    "ScriptId": string;
    /**
     * 流程类型，子流程类型 SubFlow， 主流程类型 MainFlow
     * @example `MainFlow`
     */
    "DialogueFlowType": string;
}
