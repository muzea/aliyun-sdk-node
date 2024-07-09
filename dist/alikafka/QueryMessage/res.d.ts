export interface QueryMessageResponse {
    /**
     * 返回码。返回200代表成功。
     * @example `200`
     */
    Code: number;
    /**
     * 返回信息。
     * @example `operation success.`
     */
    Message: string;
    /**
     * 请求 ID。
     * @example `ABA4A7FD-E10F-45C7-9774-A5236015****`
     */
    RequestId: string;
    /**
     * 是否调用成功。
     * - **true**：调用成功。
     * - **false**：调用失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 查询到的消息结果
     */
    MessageList: {
        /**
         * Topic名称。
         * @example `dqc_test2`
         */
        Topic: string;
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
        /**
         * 消息创建时间。用UNIX时间戳表示，单位：毫秒。
         * @example `1705482172640`
         */
        Timestamp: number;
        /**
         * 时间类型
         * @example `CreateTime`
         */
        TimestampType: string;
        /**
         * 链码校验值
         * @example `0`
         */
        Checksum: number;
        /**
         * key 序列化后的大小，单位为 Bytes。
         * @example `11`
         */
        SerializedKeySize: number;
        /**
         * value 序列化后的大小，单位为 Bytes。
         * @example `20`
         */
        SerializedValueSize: number;
        /**
         * 消息的 key。
         * @example `this is key`
         */
        Key: string;
        /**
         * 消息的 value
         * @example `Welcome to Ali kafka`
         */
        Value: string;
        /**
         * key 是否截断。
         * @example `false`
         */
        KeyTruncated: boolean;
        /**
         * value 是否截断。
         * @example `false`
         */
        ValueTruncated: boolean;
        /**
         * key 截断消息的大小，单位为 Bytes。
         * > 查询到的每条消息最多显示1 KB的内容，超过1 KB的部分将自动截断。
         * [更多详情请参见文档](~~113172~~)。
         * @example `0`
         */
        TruncatedKeySize: number;
        /**
         * value 截断消息的大小，单位为 Bytes。
         * > 查询到的每条消息最多显示1 KB的内容，超过1 KB的部分将自动截断。
         * [更多详情请参见文档](~~113172~~)。
         * @example `0`
         */
        TruncatedValueSize: number;
    }[];
}
