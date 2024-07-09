export interface TtsTaskResponse {
    /**
     * 唯一请求识别码
     * @example `16A4A091-98BE-55F4-92D1-21590658***`
     */
    RequestId: string;
    /**
     * 状态码
     * @example `OK`
     */
    Code: number;
    /**
     * 错误信息
     * @example `-`
     */
    Message: string;
    /**
     * 数据
     */
    Data: {
        /**
         * 问题
         * @example `北京的天气如何`
         */
        Question: string;
        /**
         * 回复
         * @example `晴朗`
         */
        Answer: string;
        /**
         * 合成的音频时长，单位毫秒
         * @example `727`
         */
        Duration: number;
        /**
         * 语速
         * @example `64`
         */
        SpeechRate: number;
    };
    /**
     * 给 pop 使用的
     * @example `True`
     */
    Success: boolean;
    /**
     * http状态码
     * @example `200`
     */
    HttpCode: number;
}
