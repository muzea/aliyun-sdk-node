export interface ListDialogueFlowsResponse {
    /**
     * http 状态码
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 接口状态码
     * @example `OK`
     */
    Code: string;
    /**
     * 接口提示消息
     * @example `Success`
     */
    Message: string;
    /**
     * 请求id
     * @example `254EB995-DEDF-48A4-9101-9CA5B72FFBCC`
     */
    RequestId: string;
    /**
     * 是否成功
     * @example `true`
     */
    Success: boolean;
    /**
     * 对话流程数据列表
     */
    DialogueFlows: {
        /**
         * 对话流程定义数据
         * @example `{"transitions":[{"source":"cc31e02b","sourceAnchor":0,"target":"345700de","targetAnchor":0,"id":"16d37c6e","index":1}],"nodes":[{"shape":"start-html","type":"start","size":"170*34","x":180,"y":134,"id":"cc31e02b","index":0,"nodeIndex":0,"content":{"branches":[{"branchName":"发起对话","branchId":"3c50a880-a7bc-11e9-80fc-5917e4f31864"}]},"coordinates":{"x":180,"y":134}},{"shape":"function-html","type":"transfer","size":"170*34","x":606,"y":134,"id":"345700de","nodeIndex":1,"name":"功能节点","script":"你是 @name ma","content":{"action":"Hangup","actionParams":"","label":["test1","test2","test3","test4","test5"]},"coordinates":{"x":606,"y":134},"index":2,"questions":["你是 @联系人姓名 ma"]}]}`
         */
        DialogueFlowDefinition: string;
        /**
         * 对话流程类型
         * @example `MainFlow`
         */
        DialogueFlowType: string;
        /**
         * 对话流程id
         * @example `dae01529-3c3e-458e-b07a-97643d09ebb9`
         */
        DialogueFlowId: string;
        /**
         * 对话流程名字
         * @example `主流程`
         */
        DialogueFlowName: string;
        /**
         * 话术id
         * @example `2d5aa451-661f-4f08-b0c4-28eec78decc4`
         */
        ScriptId: string;
        /**
         * 话术版本
         * @example `1569220563549`
         */
        ScriptVersion: string;
    }[];
}
