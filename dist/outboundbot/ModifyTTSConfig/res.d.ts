export interface ModifyTTSConfigResponse {
    /**
     * http 状态码
     * @example `200`
     */
    HttpStatusCode: number;
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
     * 请求id
     * @example `f765d3ee-ec03-4765-b235-6877501d99d1`
     */
    RequestId: string;
    /**
     * 是否成功
     * @example `true`
     */
    Success: boolean;
    /**
     * tts 配置信息
     */
    TTSConfig: {
        /**
         * 播音模型
         * @example `xiaoyun`
         */
        Voice: string;
        /**
         * 配置id
         * @example `2a07b634-e15d-445f-bbcb-fc4ea2df7b87`
         */
        TTSConfigId: string;
        /**
         * 语速
         * @example `50`
         */
        SpeechRate: string;
        /**
         * 音量
         * @example `100`
         */
        Volume: string;
        /**
         * 实例id
         * @example `291cfc6a-8703-4bdd-a99d-9cba32d5288a`
         */
        InstanceId: string;
        /**
         * 话术id
         * @example `947e0875-b5d4-4b33-b18c-7b2cf85bcb4f`
         */
        ScriptId: string;
        /**
         * 语调
         * [-500,500]之间整数。默认值为0。
         * 大于0表示升高音高。
         * 小于0表示降低音高。
         * @example `0`
         */
        PitchRate: string;
    };
}
