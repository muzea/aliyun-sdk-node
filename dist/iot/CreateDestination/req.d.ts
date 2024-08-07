export interface CreateDestinationRequest {
    /**
     * 数据目的对应的配置信息，传入格式为JSON String。不同规则动作类型所需内容不同，具体要求和示例请参见本表格下方的参数补充说明。
     * @example `{"topic":"/a1POX0c****​/device1/user/get","topicType":1}`
     */
    "Configuration": string;
    /**
     * 实例ID。您可在物联网平台控制台的**实例概览**页面，查看当前实例的**ID**。
     * ><notice>
     * - 若有ID值，必须传入该ID值，否则调用会失败。
     * - 若无**实例概览**页面或ID值，则无需传入。
     * ></notice>
     * 实例的更多信息，请参见[实例概述](~~356505~~)。
     * @example `iot-2w****`
     */
    "IotInstanceId"?: string;
    /**
     * 数据目的操作类型，可取值：
     * - **REPUBLISH**：将解析器脚本处理后的Topic数据转发至物联网平台的另一个通信Topic。
     * - **AMQP**：将解析器脚本处理后的Topic数据流转到AMQP消费组。
     * - **DATAHUB**：将解析器脚本处理后的Topic数据转发至阿里云DataHub，进行流式数据处理。
     * - **ONS**：将解析器脚本处理后的Topic数据转发至阿里云消息队列RocketMQ，进行消息分发。
     * - **MNS**：将解析器脚本处理后的Topic数据发送至阿里云消息服务中，进行消息传输。
     * - **FC**：将解析器脚本处理后的Topic数据发送至阿里云函数计算服务，进行事件计算。
     * - **OTS**：将解析器脚本处理后的Topic数据发送至阿里云表格存储（Tablestore），进行NoSQL数据存储。
     * @example `REPUBLISH`
     */
    "Type": string;
    /**
     * 数据目的名称。
     * @example `DataPurpose`
     */
    "Name": string;
    /**
     * 数据目的描述信息。
     * @example `数据流转至数据库。`
     */
    "Description"?: string;
}
