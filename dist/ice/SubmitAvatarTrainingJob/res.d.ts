export interface SubmitAvatarTrainingJobResponse {
    /**
     * 请求 ID
     * @example `*****ACB-44F2-5F2D-88D7-1283E70*****`
     */
    RequestId: string;
    /**
     * 请求是否成功
     * @example `true`
     */
    Success: boolean;
    /**
     * 响应数据
     */
    Data: {
        /**
         * 数字人任务 ID
         * @example `****29faef8144638ba42eb8e037****`
         */
        JobId: string;
    };
}
