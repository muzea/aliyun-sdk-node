export interface DescribeCacheAnalysisJobResponse {
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
                 * Key过期时间，格式为 Unix 时间戳，单位为毫秒（ms），0表示不过期。
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
        KeyPrefixes: {
            /**
             * Key前缀列表。
             */
            Prefix: {
                /**
                 * 该前缀Key的数量。
                 * @example `123`
                 */
                KeyNum: number;
                /**
                 * Redis数据结构类型。
                 * @example `hash`
                 */
                Type: string;
                /**
                 * Key占用字节数。
                 * @example `12345`
                 */
                Bytes: number;
                /**
                 * Key的前缀。
                 * @example `task_`
                 */
                Prefix: string;
                /**
                 * Key的元素个数。
                 * @example `127`
                 */
                Count: number;
            }[];
        };
        BigKeysOfNum: {
            /**
             * 大Key详细信息，根据Key数量降序排列。
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
                 * Key过期时间，格式为 Unix 时间戳，单位为毫秒（ms），0表示不过期。
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
        UnexBigKeysOfBytes: {
            /**
             * 永不过期Key的详细信息，根据Key占用字节数降序排列。
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
                 * Key过期时间，格式为 Unix 时间戳，单位为毫秒（ms），0表示不过期。
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
                 * 实例的数据节点ID
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
        UnexBigKeysOfNum: {
            /**
             * 永不过期Key的详细信息，根据Key数量降序排列。
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
                 * Key过期时间，格式为 Unix 时间戳，单位为毫秒（ms），0表示不过期。
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
        ExpiryKeysLevelCount: {
            /**
             * 按过期时间分类的Key统计信息。
             */
            ExpiryLevel: {
                /**
                 * 分析完成的时间，格式为 Unix 时间戳，单位为毫秒（ms）。
                 * @example `1717469347000`
                 */
                AnalysisTs: number;
                /**
                 * 过期时间级别。取值：
                 * - **0**：不过期。
                 * - **1**：已过期。
                 * - **2**：过期0~1小时。
                 * - **3**：过期1~3小时。
                 * - **4**：过期3~12小时。
                 * - **5**：过期12~24小时。
                 * - **6**：过期1~2天。
                 * - **7**：过期3~7天。
                 * - **8**：过期超过7天。
                 * @example `0`
                 */
                Level: number;
                /**
                 * 按过期时间分类统计的Key占用的字节数。
                 * @example `8064`
                 */
                TotalBytes: number;
                /**
                 * 按过期时间分类统计的Key总数。
                 * @example `62`
                 */
                TotalKeys: number;
            }[];
        };
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
