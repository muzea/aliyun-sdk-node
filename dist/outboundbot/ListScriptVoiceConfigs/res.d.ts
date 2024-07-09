export interface ListScriptVoiceConfigsResponse {
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
     * 话术录音列表
     */
    ScriptVoiceConfigs: {
        /**
         * 页号
         * @example `1`
         */
        PageNumber: number;
        /**
         * 个数
         * @example `10`
         */
        PageSize: number;
        /**
         * 总计个数
         * @example `100`
         */
        TotalCount: number;
        /**
         * 话术录音数据数组
         */
        List: {
            /**
             * 语音类型
             * @example `TTS`
             */
            Type: string;
            /**
             * 语音配置id
             * @example `2c8fa91f-9856-4145-90f2-08252f09bc18`
             */
            ScriptVoiceConfigId: string;
            /**
             * 话术文本内容
             * @example `请问你是 @name 吗`
             */
            ScriptContent: string;
            /**
             * 实例id
             * @example `bdd49242-114c-4045-b1d1-25ccc1756c75`
             */
            InstanceId: string;
            /**
             * 话术id
             * @example `a7441a05-43bb-4a2d-acb0-365f245d7a5b`
             */
            ScriptId: string;
            /**
             * 话录音配置关系数据
             * @example `""`
             */
            ScriptWaveformRelation: string;
            /**
             * 话术源
             * @example `DIALOGUE_FLOW`
             */
            Source: string;
        }[];
    };
}
