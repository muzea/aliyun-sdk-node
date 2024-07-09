export interface ModifyGlobalQuestionRequest {
    /**
     * 实例id
     * @example `8fa1953f-4a84-46d8-b80c-8ce9cf684fb3`
     */
    "InstanceId": string;
    /**
     * 话术id
     * @example `19ac2375-53e3-477f-abe9-6cd334227981`
     */
    "ScriptId": string;
    /**
     * 全局问题id
     * @example `ad80de88-1661-445a-92ec-bf88dc45d581`
     */
    "GlobalQuestionId": string;
    /**
     * 全局问题名字
     * @example `你是谁`
     */
    "GlobalQuestionName": string;
    /**
     * 全局问题类型
     * @example `COMMON`
     */
    "GlobalQuestionType": string;
    /**
     * 问题列表
     * @example `["你是谁","你叫什么"]`
     */
    "Questions": string;
    /**
     * 全局问题的回复
     * @example `["你好,我是你的专属客服顾问."]`
     */
    "Answers": string;
}
