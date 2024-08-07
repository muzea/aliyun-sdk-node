export interface ListDestinationRequest {
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
     * 指定返回结果中每页显示的记录数量，最大值不超过100。
     * @example `10`
     */
    "PageSize": number;
    /**
     * 传入数据目的名称中任意字符串，根据该字符串可检索能匹配的数据目的名称。
     * @example `DataPurpose`
     */
    "SearchName"?: string;
    /**
     * 指定显示返回结果中的第几页，取值范围为1~100。
     * @example `1`
     */
    "Page": number;
    /**
     * 数据目的操作类型列表，可取值：
     * - **REPUBLISH**：将解析器脚本处理后的Topic数据转发至物联网平台的另一个通信Topic。
     * - **AMQP**：将解析器脚本处理后的Topic数据流转到AMQP消费组。
     * - **DATAHUB**：将解析器脚本处理后的Topic数据转发至阿里云DataHub，进行流式数据处理。
     * - **ONS**：将解析器脚本处理后的Topic数据转发至阿里云消息队列RocketMQ，进行消息分发。
     * - **MNS**：将解析器脚本处理后的Topic数据发送至阿里云消息服务中，进行消息传输。
     * - **FC**：将解析器脚本处理后的Topic数据发送至阿里云函数计算服务，进行事件计算。
     * - **OTS**：将解析器脚本处理后的Topic数据发送至阿里云表格存储（Tablestore），进行NoSQL数据存储。
     * @example `["REPUBLISH", "OTS"]`
     */
    "Types"?: string[];
}
