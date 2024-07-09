export interface DescribeScriptResponse {
    /**
     * http状态码
     * @example `200`
     */
    HttpStatusCode: number;
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
     * 话术
     * @example `{}`
     */
    Script: {
        /**
         * 话术状态
         * @example `DRAFTED`
         */
        Status: string;
        /**
         * 更新时间
         * @example `1578881227000`
         */
        UpdateTime: number;
        /**
         * 对话机器人id
         * @example `chatbot-cn-EJfqqa***`
         */
        ChatbotId: string;
        /**
         * 话术id
         * @example `810b5872-57f0-4b27-80ab-7b3f4d8a6374`
         */
        ScriptId: string;
        /**
         * 调试版本是否为草稿态
         * @example `true`
         */
        IsDebugDrafted: boolean;
        /**
         * 行业
         * @example `金融`
         */
        Industry: string;
        /**
         * 话术描述
         * @example `催收话术`
         */
        ScriptDescription: string;
        /**
         * 语气承接配置开关
         * @example `true`
         */
        MiniPlaybackEnable: boolean;
        /**
         * 是否是草稿状态
         * @example `true`
         */
        IsDrafted: boolean;
        /**
         * 话术的tts配置
         * @example `{\"voice\":\"xiaobei\",\"volume\":\"50\",\"speechRate\":\"-150\",\"pitchRate\":\"0\"}`
         */
        TtsConfig: string;
        /**
         * 调试话术的状态
         * @example `DRAFTED`
         */
        DebugStatus: string;
        /**
         * asr配置
         * @example `{\"AppKey\":\"3GHttnsvir1FeWWb\"}`
         */
        AsrConfig: string;
        /**
         * 场景
         * @example `催收`
         */
        Scene: string;
        /**
         * 话术名字
         * @example `催收话术`
         */
        ScriptName: string;
        /**
         * 优雅打断配置开关
         * @example `true`
         */
        NewBargeInEnable: boolean;
        /**
         * 智能断句配置开关
         * @example `true`
         */
        LongWaitEnable: boolean;
        /**
         * 情绪识别配置开关
         * @example `true`
         */
        EmotionEnable: boolean;
        AgentId: number;
        AgentKey: string;
        AgentLlm: boolean;
    };
    /**
     * 已作废
     * @example `none`
     */
    NlsConfig: string;
}
