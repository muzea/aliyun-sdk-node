export interface CreateScriptRequest {
    /**
     * 实例id
     * @example `c46001bc-3ead-4bfd-9a69-4b5b66a4a3f4`
     */
    "InstanceId": string;
    /**
     * 话术名字
     * @example `课程满意度回访`
     */
    "ScriptName": string;
    /**
     * 话术描述
     * @example `课程回复话术`
     */
    "ScriptDescription"?: string;
    /**
     * 话术涉及的行业
     * @example `教育`
     */
    "Industry": string;
    /**
     * 话术场景
     * @example `回访`
     */
    "Scene": string;
    /**
     * 当Instance的NluServiceType为Authorized或Provided时，需要通过此字段指定话术需要绑定的对话机器人实例id
     * @example `chatbot-cn-IfaUfqaUnb`
     */
    "ChatbotId"?: string;
    /**
     * asr配置，参数定义
     * - **appKey**：阿里云账号appKey。
     * - **maxEndSilence**：语音端点检测时长。
     * - **silenceTimeout**：静默超时，单位秒，用户静默N秒后超时。
     * @example `{\"appKey\":\"kknxKIhTTUcpCzYX\",\"maxEndSilence\":\"400\",\"silenceTimeout\":\"5\"}`
     */
    "AsrConfig"?: string;
    /**
     * tts配置，参数定义
     * - **voice**：发音人。
     * - **volume**：音量，取值范围：0～100。默认值：50。
     * - **speechRate**：语速，取值范围：-500～500，默认值：0。
     * - **pitchRate**：语调，取值范围：-500～500，默认值：0。
     * @example `{\"voice\":\"aixia\",\"volume\":\"50\",\"speechRate\":\"-150\",\"pitchRate\":\"0\"}`
     */
    "TtsConfig"?: string;
    /**
     * 通知类实例，传入话术列表。
     * 已废弃。
     * @example `[]`
     */
    "ScriptContent"?: string[];
    /**
     * 通知类实例，传入话术声音列表。
     * 已废弃。
     * @example `[]`
     */
    "ScriptWaveform"?: string[];
    /**
     * 承接语配置开关
     * @example `true`
     */
    "MiniPlaybackEnable"?: boolean;
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
     * 情绪识别配置开关
     * @example `true`
     */
    "EmotionEnable"?: boolean;
    "AgentKey"?: string;
    "AgentLlm"?: boolean;
    "AgentId"?: number;
}
