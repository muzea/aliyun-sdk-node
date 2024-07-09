export interface SubmitStandardCustomizedVoiceJobResponse {
    /**
     * 请求 Id
     * @example `****63E8B7C7-4812-46AD-0FA56029AC86****`
     */
    RequestId: string;
    /**
     * 是否请求成功。取值：
     * - true： 成功
     * - false：失败
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
    };
}
