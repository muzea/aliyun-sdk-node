export interface CreateDataSourceItemRequest {
    /**
     * 实例ID。您可在物联网平台控制台的**实例概览**页面，查看当前实例的**ID**。
     * ><notice>
     * - 若有ID值，必须传入该**ID**值，否则调用会失败。
     * - 若无**实例概览**页面或**ID**值，则无需传入。
     * ></notice>
     * 实例的更多信息，请参见[实例概述](~~356505~~)。
     * @example `iot-0pp1n8t***`
     */
    "IotInstanceId"?: string;
    /**
     * 数据源ID。
     * @example `1002`
     */
    "DataSourceId": number;
    /**
     * 应用到规则引擎的具体Topic，格式一般为：`/${productKey}/${deviceName}/topicShortName`。其中，`${productKey}`是设备所属产品的**ProductKey**，`${deviceName}`是具体设备的名称，`topicShortName`是Topic剩余部分。
     * - 基础通信Topic或物模型通信Topic的格式一般为：`/${productKey}/${deviceName}/topicShortName`。其中，`${deviceName}`可以使用通配符`+`代替，表示产品下所有设备名称。`topicShortName`取值如下：
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
     *     OTA升级批次状态通知Topic也属于基础通信Topic,格式为：`/${productKey}/${packageId}/${jobId}/ota/job/status`。其中，`${packageId}`是升级包ID，`${jobId}`是升级批次ID。
     * - 自定义消息Topic为：`/${productKey}/${deviceName}/user/#`，如：`/${productKey}/${deviceName}/user/get`。
     *   调用[QueryProductTopic](~~69647~~)接口，可以查看产品下的所有自定义Topic类。
     *     指定自定义Topic时，可以使用通配符`+`和`#`。
     *     - `${deviceName}`可以使用通配符`+`代替，表示产品下所有设备；
     *     - 之后字段可以用`/user/#`，`#`表示`/user`层级之后的所有层级名称。
     *
     * - 设备状态变化通知Topic为：`/as/mqtt/status/${productKey}/${deviceName}`。
     *  可以直接使用通配符`+`，表示产品下所有设备的状态变化通知。
     * 使用通配符，请参见[Topic类中的通配符](~~85539~~)。
     * Topic数据格式的详细说明，请参见[数据格式](~~73736~~)。
     * ><notice>对于开源MQTT托管形态产品和设备，及MQTT云网关产品和设备，仅支持自定义的消息Topic、设备状态变化通知Topic和设备生命周期变更Topic。自定义的消息Topic说明，请参见消息通信说明。若输入自定义的消息Topic，需同时传入**ScopeType**和**ProductKey**。若**ScopeType**为**DEVICE**，还需传入**DeviceName**。
     * ></notice>
     * @example `/as/mqtt/status/gy***z/+`
     */
    "Topic": string;
    /**
     * 自定义的消息Topic所属产品的**ProductKey**。
     * ><notice>对于开源MQTT托管形态产品和设备，及MQTT云网关产品和设备，必须设置此参数。
     * ></notice>
     * @example `gy***z`
     */
    "ProductKey"?: string;
    /**
     * 自定义的消息Topic所属的设备名称。
     * ><notice>对于开源MQTT托管形态产品和设备，及MQTT云网关产品和设备，**Topic**为自定义的消息Topic时，**scopeType**为**DEVICE**时，必须设置此参数。
     * ></notice>
     * @example `device1`
     */
    "DeviceName"?: string;
    /**
     * 自定义的消息Topic订阅的作用域，可取值：
     * - **PRODUCT **：产品维度，表示作用在产品下的所有设备上。即需同时传入**ProductKey**。
     * - **DEVICE **：设备维度，表示作用在产品下指定的设备上。即需同时传入**DeviceName**。
     * ><notice>对于开源MQTT托管形态产品和设备，及MQTT云网关产品和设备，**Topic**为自定义的消息Topic时，必须设置此参数。
     * ></notice>
     * @example `PRODUCT`
     */
    "ScopeType"?: string;
}
