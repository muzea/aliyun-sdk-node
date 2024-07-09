export interface CreateCacheAnalysisJobResponse {
    /**
     * 请求返回消息。
     * >请求成功时该参数返回**Successful**，请求失败时会返回请求异常信息（如错误码等）。
     * @example `Successful`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `B6D17591-B48B-4D31-9CD6-9B9796B2****`
     */
    RequestId: string;
    /**
     * 详细信息列表。
     */
    Data: {
        /**
         * 缓存分析任务的状态：
         * - **BACKUP**：备份中。
         * - **ANALYZING**：分析中。
         * - **FINISHED**：分析完成。
         * - **FAILED**：出现错误。
         * @example `BACKUP`
         */
        TaskState: string;
        /**
         * 缓存分析任务ID。
         * >此参数可用于查询缓存分析任务使用，当您调用该API时，由于创建缓存分析任务需要一定的时间，不会立即返回分析结果，您需要通过此参数，结合[DescribeCacheAnalysisJob](~~180983~~)接口，查询具体的分析结果。
         * @example `sf79-sd99-sa37-****`
         */
        JobId: string;
        /**
         * 请求返回消息。
         * >请求成功时该参数返回**Successful**，请求失败时会返回请求异常信息（如错误码等）。
         * @example `Successful`
         */
        Message: string;
        BigKeys: {
            /**
             * 大Key详细信息，根据Key占用字节数降序排列。
             */
            KeyInfo: {
                /**
                 * Redis数据结构类型。
                 * @example `hash`
                 */
                Type: string;
                /**
                 * 数据库名称。
                 * @example `0`
                 */
                Db: number;
                /**
                 * Key过期时间，单位：毫秒（ms），0表示不过期。
                 * @example `1596256542547`
                 */
                ExpirationTimeMillis: number;
                /**
                 * Key的名称。
                 * @example `task_x****`
                 */
                Key: string;
                /**
                 * Key内部数据类型。
                 * @example `hashtable`
                 */
                Encoding: string;
                /**
                 * Key占用字节数。
                 * @example `12345`
                 */
                Bytes: number;
                /**
                 * 实例的数据节点ID。
                 * @example `r-x****-db-0`
                 */
                NodeId: string;
                /**
                 * Key的元素个数。
                 * @example `127`
                 */
                Count: number;
            }[];
        };
        /**
         * 实例ID。
         * @example `r-bp18ff4a195d****`
         */
        InstanceId: string;
        /**
         * 实例的数据节点ID。
         * @example `r-x****-db-0`
         */
        NodeId: string;
    };
    /**
     * 返回的状态码。
     * @example `200`
     */
    Code: string;
    /**
     * 请求是否执行成功：
     * - **true**：执行成功。
     * - **false**：执行失败。
     * @example `true`
     */
    Success: string;
}
