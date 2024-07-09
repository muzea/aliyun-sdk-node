export interface UpdateAvatarTrainingJobResponse {
    /**
     * 请求 ID
     * @example `******11-DB8D-4A9A-875B-275798******`
     */
    RequestId: string;
    /**
     * 表示是否调用成功：
     * - true：调用成功
     * - false：调用失败
     * @example `true`
     */
    Success: boolean;
    /**
     * 响应数据
     */
    Data: {
        /**
         * 数字人训练任务 ID
         * @example `****d718e2ff4f018ccf419a7b71****`
         */
        JobId: string;
    };
}
