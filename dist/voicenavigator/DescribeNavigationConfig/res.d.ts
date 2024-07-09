export interface DescribeNavigationConfigResponse {
    /**
     * 请求id
     * @example `14C39896-AE6D-4643-9C9A-E0566B2C2DDD`
     */
    RequestId: string;
    /**
     * 静默超时配置
     */
    SilenceTimeoutConfig: {
        /**
         * 静默超时时间
         * @example `10`
         */
        Timeout: number;
        /**
         * ""
         * @example `""`
         */
        IntentTrigger: string;
        /**
         * 最后一次静默提示语
         * @example `抱歉，听不到您说话，请您稍后致电`
         */
        FinalPrompt: string;
        /**
         * 配置源类型
         * @example `chatbotIntent`
         */
        SourceType: string;
        /**
         * 提示后的动作：TransferToAgent / TransferToIVR / RedirectToPage / HangUp
         * @example `HangUp`
         */
        FinalAction: string;
        /**
         * 静默超时提示语
         * @example `抱歉，我没听到您说话`
         */
        Prompt: string;
        /**
         * 静默超时最大次数
         * @example `3`
         */
        Threshold: number;
        /**
         * 动作参数，如：跳转目标
         * @example `{}`
         */
        FinalActionParams: string;
    };
    /**
     * 问候语配置
     */
    GreetingConfig: {
        /**
         * 触发意图
         * @example `你好`
         */
        IntentTrigger: string;
        /**
         * 问候语
         * @example `您好，欢迎致电智能导航`
         */
        GreetingWords: string;
        /**
         * 配置类型
         * @example `chatbotIntent`
         */
        SourceType: string;
    };
    /**
     * Unrecognizing对象 | 据识配置
     */
    UnrecognizingConfig: {
        /**
         * 最后一次拒识提示语
         * @example `抱歉，我暂时无法处理您的问题，即将为您转接人工`
         */
        FinalPrompt: string;
        /**
         * 拒识动作：TransferToAgent / TransferToIVR / RedirectToPage / HangUp
         * @example `TransferToAgent`
         */
        FinalAction: string;
        /**
         *  动作参数，如：跳转目标
         * @example `{ \"skillGroupId\": \"fallbackSkillGroup\" }`
         */
        FinalActionParams: string;
        /**
         * 拒识最大次数
         * @example `3`
         */
        Threshold: number;
        /**
         * 拒识提示语
         * @example `抱歉，我无法理解您的意思`
         */
        Prompt: string;
    };
}
