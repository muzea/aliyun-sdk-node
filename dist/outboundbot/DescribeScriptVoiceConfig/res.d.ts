export interface DescribeScriptVoiceConfigResponse {
    /**
     * http状态码
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 接口状态码
     * @example `OK`
     */
    Code: string;
    /**
     * 接口提示信息
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
     * 录音信息
     */
    ScriptVoiceConfig: {
        /**
         * 语音类型
         * @example `WAVEFORM`
         */
        Type: string;
        /**
         * 话术语音配置id
         * @example `2a07b634-e15d-445f-bbcb-fc4ea2df7b87`
         */
        ScriptVoiceConfigId: string;
        /**
         * 话术内容
         * @example `你的花呗欠款逾期了需要处理，你现在能处理一下吗？`
         */
        ScriptContent: string;
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
         * 话术录音对应关系数据
         * @example `"[{\"ScriptContent\":\"你好\",\"ScriptWaveformId\":\"6facc560-9f25-420f-bb0b-99f4299ad0d5\"},{\"ScriptContent\":\"吗\",\"ScriptWaveformId\":\"76f48266-e253-4f44-ab4f-f64f7d38f1b4\"}]"`
         */
        ScriptWaveformRelation: string;
        /**
         * 话术源
         * @example `DIALOGUE_FLOW`
         */
        Source: string;
    };
}
