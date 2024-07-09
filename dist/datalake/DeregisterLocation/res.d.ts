export interface DeregisterLocationResponse {
    /**
     * 请求ID
     * @example `E47920CD-BAE6-1305-88DF-FBDD3D300845`
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
         * 关闭采集任务的结果列表
         */
        StorageCollectTaskOperationResultList: any[];
    };
}
