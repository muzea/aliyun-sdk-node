export interface CreateTopicRequest {
    /**
     * 需创建的topic的名称。
     * @example `test`
     */
    "TopicName": string;
    /**
     * 是否开启日志管理功能。取值说明如下：
     * - True：启用。
     * - False：停用。
     * 默认值：False。
     * @example `true`
     */
    "EnableLogging"?: boolean;
    /**
     * 发送到该主题的消息体最大长度。
     * 取值范围：1024~ 65536，单位为Byte。
     * 默认值：65536。
     * @example `10240`
     */
    "MaxMessageSize"?: number;
    /**
     * 标签列表。
     */
    "Tag"?: {
        /**
         * 标签的key
         * @example `tag1`
         */
        Key: string;
        /**
         * 标签值
         * @example `joyce.wang`
         */
        Value: string;
    }[];
}
