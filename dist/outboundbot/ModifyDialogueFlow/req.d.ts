export interface ModifyDialogueFlowRequest {
    /**
     * 实例id
     * @example `da37319b-6c83-4268-9f19-814aed62e401`
     */
    "InstanceId": string;
    /**
     * 话术id
     * @example `b0f35dd1-0337-402e-9c4f-3a6c2426950a`
     */
    "ScriptId": string;
    /**
     * 对话流id
     * @example `390515b5-6115-4ccf-83e2-52d5bfaf2ddf`
     */
    "DialogueFlowId": string;
    /**
     * 对话流程数据
     * @example `{"transitions":[{"id":"a91c4023","index":1,"source":"cc31e02b","sourceAnchor":0,"target":"946045be","targetAnchor":0}],"nodes":[{"collectedNumberEnabled":false,"content":{"branches":[{"branchId":"f5450420-09ab-11ea-b107-e9059c6a79d8","branchName":"发起对话"}]},"coordinates":{"x":180,"y":134},"id":"cc31e02b","index":0,"interruptible":false,"nodeIndex":0,"shape":"start-html","size":"170*34","type":"start","x":180,"y":134},{"collectedNumberEnabled":false,"content":{"actionParams":"","action":"Hangup"},"coordinates":{"x":487.65625,"y":155},"id":"946045be","index":2,"interruptible":false,"labels":[],"name":"功能节点","nodeIndex":1,"questions":["好的同学，您的情况已了解了，稍后我们会安排资深顾问老师给您做更详细的留学评估以及升学指导，请留意电话接听"],"script":"好的同学，您的情况已了解了，稍后我们会安排资深顾问老师给您做更详细的留学评估以及升学指导，请留意电话接听","shape":"function-html","size":"170*34","type":"transfer","x":500,"y":182}]}`
     */
    "DialogueFlowDefinition": string;
    /**
     * 是否草稿态
     * @example `true`
     */
    "IsDrafted"?: boolean;
}
