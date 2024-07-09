export interface CreateCustomizedVoiceJobResponse {
    /**
     * 请求 Id
     * @example `******11-DB8D-4A9A-875B-275798******`
     */
    RequestId: string;
    /**
     * 表示是否调用成功。true：调用成功。false：调用失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 响应数据
     */
    Data: {
        /**
         * 声音 Id
         * @example `xiaozhuan`
         */
        VoiceId: string;
        /**
         * 人声克隆任务 Id
         * @example `****29faef8144638ba42eb8e037****`
         */
        JobId: string;
    };
}
