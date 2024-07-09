export interface DeleteAvatarTrainingJobResponse {
    /**
     * 请求 ID
     * @example `******11-DB8D-4A9A-875B-275798******`
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
         * 数字人训练任务 ID
         * @example `****d718e2ff4f018ccf419a7b71****`
         */
        JobId: string;
    };
}
