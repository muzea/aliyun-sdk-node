export interface UpdateRuleActionRequest {
    /**
     * 实例ID。您可在物联网平台控制台的**实例概览**页面，查看当前实例的**ID**。
     * ><notice>
     * - 若有ID值，必须传入该ID值，否则调用会失败。
     * - 若无<props="intl"><ph>**实例概览**页面或</ph></props>ID值，则无需传入。
     * ></notice>
     * 实例的更多信息，请参见[实例概述](~~356505~~)。
     * @example `iot-cn-0pp1n8t****`
     */
    "IotInstanceId"?: string;
    /**
     * 要修改的规则动作ID。
     * 调用[CreateRuleAction](~~69586~~)创建规则动作成功后，返回的规则动作ID，您也可以调用[ListRuleActions](~~69517~~)，从返回结果中查看对应的规则动作ID。
     * @example `1000003`
     */
    "ActionId": number;
    /**
     * 规则动作类型，取值：
     * <props="china">- **DATAHUB**：流转规则处理后的Topic数据至阿里云DataHub，进行流式数据处理。</props>
     * <props="china">- **ONS**：流转规则处理后的Topic数据至阿里云消息队列RocketMQ，进行消息分发。</props>
     * - **MNS**：流转规则处理后的Topic数据至阿里云消息服务中，进行消息传输。
     * - **FC**：流转规则处理后的Topic数据至阿里云函数计算服务，进行事件计算。
     * - **REPUBLISH**：流转规则处理后的Topic数据至另一个物联网平台 Topic。
     * - **AMQP**：数据流转到AMQP消费组。
     * - **OTS**：流转规则处理后的Topic数据至阿里云表格存储，进行NoSQL数据存储。
     * > - 数据格式为二进制的规则（即规则的**DataType**参数是**BINARY**）不支持转发数据至OTS（表格存储）。
     * - 服务地域不同，规则引擎所支持的数据转发目标云产品不同。具体请参见规则引擎相关[地域和可用区](~~85669~~)。
     * @example `REPUBLISH`
     */
    "Type": string;
    /**
     * 该规则动作的配置信息。不同规则动作类型所需配置内容不同。具体要求，请参见[CreateRuleAction](~~69586~~)的请求参数补充说明中的各规则动作类型的Configuration描述。
     * @example `{"topic":"/a1iYSOl****​/device5/user/get","topicType":1}`
     */
    "Configuration": string;
}
