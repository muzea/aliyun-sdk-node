export interface ModifySilenceTimeoutConfigRequest {
    /**
     * 实例ID
     * @example `12f407b22cbe4890ac595f09985848d5`
     */
    "InstanceId": string;
    /**
     * 静默超时提示语
     * @example `不好意思，听不见您说什么`
     */
    "Prompt": string;
    /**
     * 静默超时时间
     * @example `20`
     */
    "Timeout": number;
    /**
     * 静默超时最大次数
     * @example `3`
     */
    "Threshold": number;
    /**
     * 最后一次静默提示语
     * @example `再见`
     */
    "FinalPrompt": string;
    /**
     * 提示后的动作
     * @example `TransferToAgent`
     */
    "FinalAction": string;
    /**
     * 动作参数
     * @example `{}`
     */
    "FinalActionParams"?: string;
    /**
     * 类型
     * @example `chatbotIntent`
     */
    "SourceType": string;
    /**
     * 触发的意图
     * @example `Timeout`
     */
    "IntentTrigger"?: string;
}
