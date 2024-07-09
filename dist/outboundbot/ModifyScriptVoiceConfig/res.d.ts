export interface ModifyScriptVoiceConfigResponse {
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
     * @example `254EB995-DEDF-48A4-9101-9CA5B72FFBCC`
     */
    RequestId: string;
    /**
     * 是否成功
     * @example `true`
     */
    Success: boolean;
    /**
     * 话术录音配置信息
     */
    ScriptVoiceConfig: {
        /**
         * 播音类型
         * @example `WAVEFORM`
         */
        Type: string;
        /**
         * 录音配置id
         * @example `4ddea690-6534-4c88-9cbd-0b5882ec64c0`
         */
        ScriptVoiceConfigId: string;
        /**
         * 语音对应文本
         * @example `你好`
         */
        ScriptContent: string;
        /**
         * 实例id
         * @example `bdd49242-114c-4045-b1d1-25ccc1756c75`
         */
        InstanceId: string;
        /**
         * 话术id
         * @example `1d7a26e0-628b-4c3c-9918-7f2e23273f54`
         */
        ScriptId: string;
        /**
         * 录音对应关系数据
         * @example `[{"ScriptContent":"你好","ScriptWaveformId":"6facc560-9f25-420f-bb0b-99f4299ad0d5"},{"ScriptContent":"吗","ScriptWaveformId":"76f48266-e253-4f44-ab4f-f64f7d38f1b4"}]`
         */
        ScriptWaveformRelation: string;
        /**
         * 话术源
         * @example `DIALOGUE_FLOW`
         */
        Source: string;
    };
}
