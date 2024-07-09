export interface ModifyScriptRequest {
    /**
     * 实例id
     * @example `c6320d3c-fa45-4011-b3b1-acdfabe3a8c6`
     */
    "InstanceId": string;
    /**
     * 话术id
     * @example `c153d0d8-ba04-41c0-8632-453944c9dd0b`
     */
    "ScriptId": string;
    /**
     * 话术名字
     * @example `续费提醒`
     */
    "ScriptName": string;
    /**
     * 话术描述
     * @example `返工回访话术`
     */
    "ScriptDescription"?: string;
    /**
     * 行业
     * @example `电商`
     */
    "Industry": string;
    /**
     * 场景信息
     * @example `回访`
     */
    "Scene": string;
    /**
     * 机器人id
     * @example `chatbot-cn-iFZfi7eq6e`
     */
    "ChatbotId"?: string;
    /**
     * asr配置
     * @example `{\"AppKey\":\"kknxKIhTTUcpCzYX\"}`
     */
    "AsrConfig"?: string;
    /**
     * tts配置信息
     * @example `{\"voice\":\"siyue\",\"volume\":\"50\",\"speechRate\":\"-150\",\"pitchRate\":\"0\"}`
     */
    "TtsConfig"?: string;
    /**
     * 通知类实例，传入话术列表。
     * 已作废。
     */
    "ScriptContent"?: string[];
    /**
     * 通知类实例，传入话术声音列表。
     * 已作废。
     */
    "ScriptWaveform"?: string[];
    /**
     * 优雅打断配置开关
     * @example `true`
     */
    "NewBargeInEnable"?: boolean;
    /**
     * 智能断句配置开关
     * @example `true`
     */
    "LongWaitEnable"?: boolean;
    /**
     * 承接语配置开关
     * @example `true`
     */
    "MiniPlaybackEnable"?: boolean;
    /**
     * 语气承接配置，暂时不支持自定义，默认无需传递该参数。（已作废）
     * @example `无`
     */
    "MiniPlaybackConfigListJsonString"?: string;
    /**
     * 已作废
     * @example `无`
     */
    "NlsConfig"?: string;
    /**
     * 情绪识别配置开关
     * @example `true`
     */
    "EmotionEnable"?: boolean;
    "AgentKey"?: string;
    "AgentLlm"?: boolean;
    "AgentId"?: number;
}
