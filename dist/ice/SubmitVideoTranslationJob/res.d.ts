export interface SubmitVideoTranslationJobResponse {
    /**
     * 请求 ID
     * @example `******3B-0E1A-586A-AC29-742247******`
     */
    RequestId: string;
    /**
     * 调用是否成功。
     * 取值：
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
         * 视频翻译任务 ID
         * @example `****d718e2ff4f018ccf419a7b71****`
         */
        JobId: string;
    };
}
