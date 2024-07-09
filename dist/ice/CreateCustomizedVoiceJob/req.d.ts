export interface CreateCustomizedVoiceJobRequest {
    /**
     * 自定义的声音 Id （声音的英文或拼音）
     * - 不能和您其他的定制声音 Id 重名
     * - 不超过 32 个字符
     * - 仅支持字母和数字
     * @example `xiaozhuan`
     */
    "VoiceId": string;
    /**
     * 声音名字（一般为中文名）
     * - 不超过 32 个字符
     * @example `小专`
     */
    "VoiceName"?: string;
    /**
     * 声音描述
     * - 不超过 256 个字符
     * @example `这是一个个性化声音`
     */
    "VoiceDesc"?: string;
    /**
     * 性别，取值范围：
     * - female：女性
     * - male：男性
     * @example `female`
     */
    "Gender": string;
    /**
     * 场景，取值范围：
     * - story：故事
     * - interaction：交互
     * - navigation：导航
     * @example `story`
     */
    "Scenario": string;
}
