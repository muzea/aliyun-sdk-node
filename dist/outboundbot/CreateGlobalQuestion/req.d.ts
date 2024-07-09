export interface CreateGlobalQuestionRequest {
    /**
     * 实例id
     * @example `174952ab-9825-4cc9-a5e2-de82d7fa4cdd`
     */
    "InstanceId": string;
    /**
     * 话术id
     * @example `36fea72b-d6fa-4974-ace7-19ffe3f622fb`
     */
    "ScriptId": string;
    /**
     * 全局话术名字
     * @example `未识别全局问题`
     */
    "GlobalQuestionName": string;
    /**
     * 话术类型，一般设置为 COMMON
     * @example `COMMON`
     */
    "GlobalQuestionType": string;
    /**
     * 用户的触发话术
     * @example `["未识别的用户问题"]`
     */
    "Questions": string;
    /**
     * 回复话术列表
     * @example `["你好,您可以再说一遍吗","不好意思我刚才没有听清"]`
     */
    "Answers": string;
}
