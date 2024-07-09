export interface DetectAudioForCustomizedVoiceJobResponse {
    /**
     * 请求 Id
     * @example `******11-DB8D-4A9A-875B-275798******`
     */
    RequestId: string;
    /**
     * 操作是否成功。取值：true：成功。false：失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 响应数据
     */
    Data: {
        /**
         * 是否通过检测，取值：
         * - true：检测成功。
         * - false：检测失败。
         * @example `false`
         */
        Pass: boolean;
        /**
         * 检测失败时给出具体原因
         * @example `发音错误，请准确读出文案中的内容`
         */
        Reason: string;
    };
}
