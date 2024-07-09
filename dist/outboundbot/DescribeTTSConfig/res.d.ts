export interface DescribeTTSConfigResponse {
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
     * tts 配置
     */
    TTSConfig: {
        /**
         * tts 模型
         * @example `xiaoyun`
         */
        Voice: string;
        /**
         * 语速
         * @example `-150`
         */
        SpeechRate: string;
        /**
         * 音量
         * @example `100`
         */
        Volume: string;
        /**
         * 实例id
         * @example `947e0875-b5d4-4b33-b18c-7b2cf85bcb4f`
         */
        InstanceId: string;
        /**
         * 服务类型
         * @example `Managed`
         */
        NlsServiceType: string;
        /**
         * 调用Tts的AppKey
         * @example `p2SjSj4zxxxxxxxx`
         */
        AppKey: string;
    };
}
