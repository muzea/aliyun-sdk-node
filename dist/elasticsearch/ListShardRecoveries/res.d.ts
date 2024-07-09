export interface ListShardRecoveriesResponse {
    /**
     * 请求ID。
     * @example `F99407AB-2FA9-489E-A259-40CF6DCC47D9`
     */
    RequestId: string;
    /**
     * 返回结果。
     */
    Result: {
        /**
         * 索引名称。
         * @example `my-index-000001`
         */
        index: string;
        /**
         * 源节点IP。
         * @example `192.168.XX.XX`
         */
        sourceHost: string;
        /**
         * 源节点。
         * @example `2Kni3dJ`
         */
        sourceNode: string;
        /**
         * 文件总数。
         * @example `79`
         */
        filesTotal: number;
        /**
         * 数据恢复进度。
         * @example `80%`
         */
        bytesPercent: string;
        /**
         * 待恢复的Translog操作的数量。
         * @example `12086`
         */
        translogOps: number;
        /**
         * 恢复Translog操作的进度。
         * @example `80%`
         */
        translogOpsPercent: string;
        /**
         * 数据恢复总量。
         * @example `12086`
         */
        bytesTotal: number;
        /**
         * 目标节点IP。
         * @example `192.168.XX.XX`
         */
        targetHost: string;
        /**
         * 目标节点。
         * @example `YVVKLmW`
         */
        targetNode: string;
        /**
         * 文件执行进度。
         * @example `80.0%`
         */
        filesPercent: string;
        /**
         * 数据恢复阶段状态。取值含义如下：
         * - done：执行完毕。
         * - finalize：清理工作。
         * - index：读取索引元数据并将字节从源复制到目标。
         * - init：恢复尚未开始。
         * - start：开始恢复。
         * - translog：重做事务日志。
         * @example `done`
         */
        stage: string;
    }[];
}
