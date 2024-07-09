export interface ModifyGreetingConfigRequest {
    /**
     * 实例ID
     * @example `12f407b22cbe4890ac595f09985848d5`
     */
    "InstanceId": string;
    /**
     * 欢迎语
     * @example `你好，欢迎使用智能导航。`
     */
    "GreetingWords": string;
    /**
     * 类型
     * @example `chatbotIntent`
     */
    "SourceType": string;
    /**
     * 触发意图
     * @example `开始`
     */
    "IntentTrigger"?: string;
}
