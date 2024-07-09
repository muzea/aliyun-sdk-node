export interface CreateRuleActionRequest {
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
     * 要为其创建动作的规则ID。可在物联网平台控制台<props="china"><ph>对应实例下</ph></props>，**规则引擎**>**云产品流转**页查看规则ID，或调用[ListRule](~~69486~~)从返回结果中查看。
     * @example `100000`
     */
    "RuleId": number;
    /**
     * 规则动作类型，取值：
     * - **REPUBLISH**：将根据规则处理后的Topic数据转发至另一个物联网平台 Topic。
     * - **AMQP**：数据流转到AMQP消费组。
     * <props="china">- **DATAHUB**：将根据规则处理后的Topic数据转发至阿里云DataHub，进行流式数据处理。</props>
     * <props="china">- **ONS**：将根据规则处理后的Topic数据转发至阿里云消息队列RocketMQ，进行消息分发。</props>
     * - **MNS**：将根据规则处理后的Topic数据发送至阿里云消息服务中，进行消息传输。
     * - **FC**：将根据规则处理后的Topic数据发送至阿里云函数计算服务，进行事件计算。
     * - **OTS**：将根据规则处理后的Topic数据发送至阿里云表格存储（Tablestore），进行NoSQL数据存储。
     * > 数据格式为二进制的规则（即规则的**DataType**参数是**BINARY**）不支持转发数据至OTS（表格存储）。
     * @example `REPUBLISH`
     */
    "Type": string;
    /**
     * 该规则动作的配置信息，传入格式为JSON String。不同规则动作类型所需内容不同，具体要求和示例见下文请求参数补充说明。
     * @example `{"topic":"/a1POX0c****​/device1/user/get","topicType":1}`
     */
    "Configuration": string;
    /**
     * 该规则动作是否为转发错误操作数据的转发动作，即转发流转到其他云产品失败且重试失败的数据。 可选值：
     * - **true**：该规则动作转发错误操作数据。
     * - **false**：该规则动作不转发错误操作数据，而是正常转发操作。
     * 默认值为**false**。
     * @example `false`
     */
    "ErrorActionFlag"?: boolean;
}
