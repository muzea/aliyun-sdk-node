export interface DescribeCacheAnalysisJobsResponse {
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
     * 信息列表。
     */
    Data: {
        List: {
            /**
             * 信息详情。
             */
            CacheAnalysisJob: {
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
                     * 大Key详细信息。
                     * >当前已不再返回该参数的子参数及其内容，请调用[DescribeCacheAnalysisJob](~~180983~~)接口查询缓存分析任务的详细信息。
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
                         * @example `task_*****`
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
                         * @example `r-****-db-0`
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
            }[];
        };
        /**
         * 页码，取值大于0且不超过Integer数据类型的最大值，默认值为1。
         * @example `1`
         */
        PageNo: number;
        /**
         * 每页最大记录数，默认值为10。
         * @example `10`
         */
        PageSize: number;
        /**
         * 备用参数。
         * @example `None`
         */
        Extra: string;
        /**
         * 结果数量。
         * @example `4`
         */
        Total: number;
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
