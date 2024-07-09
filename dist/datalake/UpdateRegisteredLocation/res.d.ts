export interface UpdateRegisteredLocationResponse {
    /**
     * 请求ID
     * @example `8030C902-C25B-1839-867D-E6F70A5B9810`
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
         * 修改采集任务的结果列表
         */
        StorageCollectTaskOperationResultList: any[];
    };
}
