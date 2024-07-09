export interface RegisterLocationResponse {
    /**
     * 请求ID
     * @example `3C2678BA-3451-14C3-90E2-D4EF5B4E7A84`
     */
    RequestId: string;
    /**
     * 请求是否成功。取值如下：
     * - true：成功
     * - false：失败
     * @example `true`
     */
    Success: boolean;
    /**
     * 返回数据
     */
    Data: {
        /**
         * Location ID
         * @example `LOC-AB8FBC17F95A4AF5`
         */
        LocationId: string;
        /**
         * 启用采集任务的结果列表
         */
        StorageCollectTaskOperationResultList: any[];
    };
}
