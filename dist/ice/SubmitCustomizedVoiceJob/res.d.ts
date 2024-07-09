export interface SubmitCustomizedVoiceJobResponse {
    /**
     * 请求 Id
     * @example `******11-DB8D-4A9A-875B-275798******`
     */
    RequestId: string;
    /**
     * 是否调用成功，取值：
     * - true：调用成功
     * -  false：调用失败
     * @example `true`
     */
    Success: boolean;
    /**
     * 响应数据
     */
    Data: {
        /**
         * 人声克隆任务 Id
         * @example `****d718e2ff4f018ccf419a7b71****`
         */
        JobId: string;
        /**
         * 声音 Id
         * @example `xiaozhuan`
         */
        VoiceId: string;
    };
}
