export interface CreateAvatarTrainingJobResponse {
    /**
     * 请求 ID
     * @example `******11-DB8D-4A9A-875B-275798******`
     */
    RequestId: string;
    /**
     * 是否成功
     * @example `true`
     */
    Success: boolean;
    /**
     * 响应数据
     */
    Data: {
        /**
         * 数字人训练任务 Id
         * @example `****d718e2ff4f018ccf419a7b71****`
         */
        JobId: string;
    };
}
