export interface QueryMessageInfoResponse {
    /**
     * 调用失败时，返回的错误码。更多信息，请参见[错误码](~~87387~~)。
     * @example `iot.system.SystemException`
     */
    Code: string;
    /**
     * 阿里云为该请求生成的唯一标识符。
     * @example `BB71E443-4447-4024-A000-EDE09922891E`
     */
    RequestId: string;
    /**
     * 调用失败时，返回的出错信息。
     * @example `系统异常`
     */
    ErrorMessage: string;
    /**
     * 是否调用成功。
     * - **true**：调用成功，表示查询消息详情成功。
     * - **false**：调用失败，表示查询消息详情失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 调用成功后，返回的消息详情。
     */
    Message: {
        /**
         * 消息所属的Topic。
         * @example `/a1Q5XoY****​/device1/user/get`
         */
        TopicFullName: string;
        /**
         * 消息原文转换成二进制数据，并进行Base64编码后的消息内容。
         * @example `eyJsYXN0VGltZSI6IjIwMjEtMDYtMjQgMTY6Mj**`
         */
        MessageContent: string;
        /**
         * 物联网平台为消息生成的唯一标识ID。
         * @example `323455***`
         */
        UniMsgId: string;
        /**
         * 产品配置了消息解析时，转换成功后的消息内容。
         * @example `test`
         */
        TransformedMessageContent: string;
        /**
         * 消息产生的时间，单位为毫秒。
         * @example `1624419431000`
         */
        GenerateTime: number;
        /**
         * 产品配置了消息解析时，转换成功后的Topic。
         * @example `/w******j/device01/user/testmsg`
         */
        TransformedTopicFullName: string;
        /**
         * 使用MQTT 5.0版本通信协议时，用户自定义的属性列表信息。
         */
        UserProperties: {
            /**
             * 用户自定义属性的Key字段。
             * @example `key1`
             */
            Key: string;
            /**
             * 用户自定义属性**Key**字段对应的值。
             * @example `value1`
             */
            Value: string;
        }[];
        /**
         * 使用MQTT 5.0版本通信协议时，配置的特性属性列表。详细内容，请参见[MQTT 5.0特性](~~2330876~~)。
         */
        MqttProperties: {
            /**
             * 属性名称。
             * @example `attrkey`
             */
            Key: string;
            /**
             * 属性值。
             * @example `attrvalue`
             */
            Value: string;
        }[];
    };
}
