export interface UpdateConsumerOffsetRequest {
    /**
     * 实例 ID。
     * @example `alikafka_post-cn-mp91inkw****`
     */
    "InstanceId": string;
    /**
     * Topic 的名称。
     * - 只能包含字母、数字、下划线（_）和短横线（-）。
     * - 长度为 **3-64** 个字符，多于 **64** 个字符将被自动截取。
     * - 一旦创建后不能再修改。
     * **若需针对当前消费者所订阅的所有主题设置消费位点，请传入空字符串。**
     * @example `topic_name`
     */
    "Topic": string;
    /**
     * Group所属实例的地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * Consumer Group 名称。
     * - 只能包含字母、数字、短横线（-）、下划线（_）。
     * - 长度限制在 **3-64** 个字符，多于 **64** 个字符将被自动截取。
     * - 一旦创建后不能再修改。
     * @example `kafka-test`
     */
    "ConsumerId": string;
    /**
     * 重置消费者组消费位点的类型，支持以下两种：
     * - **timestamp**（默认）
     * - **offset**
     * @example `timestamp`
     */
    "ResetType"?: string;
    /**
     * 传入的时间参数，格式为Unix时间戳，单位为毫秒。
     * 参数范围应**小于0**或**在消费位点的保留时间范围内**，仅在resetType为timestamp时作用生效。
     * - 若希望重置为最新的消费位点，请传入-1。
     * - 若希望重置为最早的消费位点，请传入-2。
     * @example `-1`
     */
    "Time"?: string;
    /**
     * 当resetType为offset时，用于设置消费者组对于某一主题下各个分区的消费位点。
     */
    "Offsets"?: {
        /**
         * 分区ID。
         * @example `0`
         */
        Partition: number;
        /**
         * 分区位点。
         * @example `1`
         */
        Offset: number;
    }[];
}
