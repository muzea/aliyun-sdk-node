export interface CreateRuleRequest {
    /**
     * 实例ID。您可在物联网平台控制台的**实例概览**页面，查看当前实例的**ID**。
     * ><notice>
     * - 若有ID值，必须传入该ID值，否则调用会失败。
     * - 若无**实例概览**页面或ID值，则无需传入。
     * ></notice>
     * 实例的更多信息，请参见[实例概述](~~356505~~)。
     * @example `iot-cn-0pp1n8t****`
     */
    "IotInstanceId"?: string;
    /**
     * 要执行的SQL SELECT语句。具体内容参照[SQL表达式](~~30554~~)。
     * > 此处传入的是SELECT下的内容。例如，如果SELECT语句为`SELECT a,b,c`，则此处传入`a,b,c`。
     * @example `deviceName() as deviceName, items.Humidity.value as Humidity, items.Temperature.value as Temperature`
     */
    "Select"?: string;
    /**
     * 应用该规则的具体Topic，格式一般为：`${deviceName}/topicShortName`。其中，`${deviceName}`是具体设备的名称，`topicShortName`是Topic短名称。
     * - 基础通信Topic或物模型通信Topic的ShortTopic，格式一般为：`${deviceName}/topicShortName`。其中，`${deviceName}`可以使用通配符`+`代替，表示产品下所有设备名称。`topicShortName`取值如下：
     *     - `/thing/event/property/post `设备上报的属性消息。
     *     - `/thing/event/${tsl.event.identifier}/post`设备上报的事件消息，`${}`中是产品物模型中事件identifier。
     *     - `/thing/lifecycle` 设备生命周期变更消息。
     *     - `/thing/downlink/reply/message`设备响应云端指令的结果消息。
     *     - `/thing/list/found`网关上报发现子设备消息。
     *     - `/thing/topo/lifecycle`设备拓扑关系变更消息。
     *     - `/thing/event/property/history/post`设备历史属性上报消息。
     *     - `/thing/event/${tsl.event.identifier}/history/post`设备历史事件上报消息，`${}`中是产品物模型中事件identifier。
     *     - `/ota/upgrade`设备OTA升级状态通知消息。
     *     - `/ota/version/post`设备OTA模块版本号上报消息。
     *     - `/thing/deviceinfo/update`设备标签变更消息。
     *     - `/edge/driver/${driver_id}/point_post`物联网边缘计算的透传模式Topic消息，`${}`中是物联网边缘计算的设备接入驱动ID。
     *  OTA升级批次状态通知Topic也属于基础通信Topic，ShortTopic格式为：`${packageId}/${jobId}/ota/job/status`。其中，`${packageId}`是升级包ID，`${jobId}`是升级批次ID。
     * - 自定义Topic的ShortTopic，如：`${deviceName}/user/get`。
     *   调用[QueryProductTopic](~~69647~~)接口，可以查看产品下的所有自定义Topic类。
     *     指定自定义Topic时，可以使用通配符`+`和`#`。
     *     - `${deviceName}`可以使用通配符`+`代替，表示产品下所有设备；
     *     - 之后字段可以用`/user/#`，`#`表示`/user`层级之后的所有层级名称。
     *     使用通配符，请参见[Topic类中的通配符](~~85539~~)。
     * - 设备状态变化通知Topic的ShortTopic：`${deviceName}`。
     *  可以直接使用通配符`+`，表示产品下所有设备的状态变化通知。
     * @example `+/thing/event/property/post`
     */
    "ShortTopic"?: string;
    /**
     * 规则的触发条件。具体内容参照[SQL表达式](~~30554~~)。
     * > 此处传入的是**Where**中的内容。例如，如果**Where**语句为`Where a>10`，则此处传入`a>10`。
     * @example `Temperature>35`
     */
    "Where"?: string;
    /**
     * 应用该规则的产品ProductKey。
     * @example `a1T27vz****`
     */
    "ProductKey"?: string;
    /**
     * 规则名称。支持中文、英文字母、日文、数字、下划线（_）和短划线（-），长度为1~30个字符，一个中文或日文占2个字符。
     * @example `iot_test1`
     */
    "Name": string;
    /**
     * 规则的描述信息。长度限制为100个字符，一个中文字符计为1个字符。
     * @example `rule test`
     */
    "RuleDesc"?: string;
    /**
     * 规则处理的数据格式，需与待处理的设备数据格式一致。取值：
     * - **JSON**（默认）：JSON数据。
     * - **BINARY**：二进制数据。
     * > 若选择为**BINARY**，**TopicType**不能选择为0（基础通信Topic或物模型通信Topic），且不支持将数据转发至<props="china"><ph>实例内的时序数据存储、时序数据库、</ph></props>表格存储和云数据库RDS版。
     * @example `JSON`
     */
    "DataType"?: string;
    /**
     * - **0**：**ShortTopic**参数描述中的基础通信Topic或物模型通信Topic，包含OTA升级批次状态通知Topic。
     * - **1**：自定义Topic。
     * - **2**：设备状态变化通知Topic：`/as/mqtt/status/${productKey}/${deviceName}`。
     * @example `1`
     */
    "TopicType"?: number;
    /**
     * 资源组ID。
     * ><notice>
     * - 目前，物联网平台仅支持实例维度的资源组管理。请求参数**ResourceGroupId**配置已无效，无需再传入。
     * - 历史调用本API设置的资源组仍有效。
     * ></notice>
     * @example `rg-acfmxazb4ph****`
     */
    "ResourceGroupId"?: string;
    /**
     * 待添加规则的完整Topic。
     * 如果传入此参数，无需再传入参数**ShortTopic**和**TopicType**。
     * @example `/sys/g18l***​/device1/thing/event/property/post`
     */
    "Topic"?: string;
}
