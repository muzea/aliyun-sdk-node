export interface ModifyUnrecognizingConfigRequest {
    /**
     * 实例ID
     * @example `12f407b22cbe4890ac595f09985848d5`
     */
    "InstanceId": string;
    /**
     * 拒识提示语
     * @example `我不理解您的意思，请再说一遍`
     */
    "Prompt": string;
    /**
     * 拒识最大次数
     * @example `3`
     */
    "Threshold": number;
    /**
     * 最后一次拒识提示语
     * @example `再见`
     */
    "FinalPrompt": string;
    /**
     * 拒识动作
     * @example `TransferToAgent`
     */
    "FinalAction": string;
    /**
     * 动作参数
     * @example `{}`
     */
    "FinalActionParams"?: string;
}
