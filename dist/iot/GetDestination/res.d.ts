export interface GetDestinationResponse {
    /**
     * 调用失败时，返回的错误码。更多信息，请参见[错误码](~~87387~~)。
     * @example `iot.system.SystemException`
     */
    Code: string;
    /**
     * 调用失败时，返回的出错信息。
     * @example `系统异常`
     */
    ErrorMessage: string;
    /**
     * 阿里云为该请求生成的唯一标识符。
     * @example `E4C0FF92-2A86-41DB-92D3-73B60310D25E`
     */
    RequestId: string;
    /**
     * 表示是否调用成功。
     * - **true**：调用成功。
     * - **false**：调用失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 返回的数据目的信息。
     */
    Destination: {
        /**
         * 数据目的对应的状态。返回值：
         * - **INIT**：初始配置中。
         * - **NORMAL**：配置完成，正常可用。
         * - **INVALID**：配置存在异常，不可用。
         * - **SHORTCUT**：云产品流转服务发生异常，导致流转熔断。
         * @example `NORMAL`
         */
        Status: string;
        /**
         * 数据目的的操作类型。
         * - **REPUBLISH**：将解析器脚本处理后的Topic数据转发至物联网平台的另一个通信Topic。
         * - **AMQP**：将解析器脚本处理后的Topic数据流转到AMQP消费组。
         * - **DATAHUB**：将解析器脚本处理后的Topic数据转发至阿里云DataHub，进行流式数据处理。
         * - **ONS**：将解析器脚本处理后的Topic数据转发至阿里云消息队列RocketMQ，进行消息分发。
         * - **MNS**：将解析器脚本处理后的Topic数据发送至阿里云消息服务中，进行消息传输。
         * - **FC**：将解析器脚本处理后的Topic数据发送至阿里云函数计算服务，进行事件计算。
         * - **OTS**：将解析器脚本处理后的Topic数据发送至阿里云表格存储（Tablestore），进行NoSQL数据存储。
         * @example `REPUBLISH`
         */
        Type: string;
        /**
         * 数据目的ID。
         * @example `1003`
         */
        DestinationId: string;
        /**
         * 数据目的对应的配置信息。
         * @example `{"topic":"/a1POX0c****​/device1/user/get","topicType":1}`
         */
        Configuration: string;
        /**
         * 数据目的名称。
         * @example `DataPurpose`
         */
        Name: string;
        /**
         * 创建数据目的对应的UTC时间。格式为`yyyy-MM-dd'T'HH:mm:ss.SSS'Z'`。
         * @example `2022-03-27T12:45:43.000Z`
         */
        UtcCreated: string;
        /**
         * 该数据目的配置是否为转发错误操作数据，即转发流转到其他云产品失败且重试失败的数据。
         * - **true**：是转发错误操作数据。
         * - **false**：不是转发错误操作数据，而是正常转发操作。
         * 默认值为**false**。
         * @example `false`
         */
        IsFailover: boolean;
    };
}
