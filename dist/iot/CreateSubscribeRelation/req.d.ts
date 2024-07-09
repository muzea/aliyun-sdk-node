export interface CreateSubscribeRelationRequest {
    /**
     * 实例ID。您可在物联网平台控制台的**实例概览**页面，查看当前实例的**ID**。
     * ><notice>
     * - 若有ID值，必须传入该**ID**值，否则调用会失败。
     * - 若无**实例概览**页面或**ID**值，则无需传入。
     * ></notice>
     * 实例的更多信息，请参见[实例概述](~~356505~~)。
     * @example `iot-cn-0pp1n8t****`
     */
    "IotInstanceId"?: string;
    /**
     * 该订阅中的产品的**ProductKey**。
     * @example `a1fyXVF****`
     */
    "ProductKey": string;
    /**
     * 推送消息类型是否选择设备上报消息。可选值：
     * - **true**：是。
     * - **false**（默认）：否。
     * @example `true`
     */
    "DeviceDataFlag"?: boolean;
    /**
     * 推送消息类型是否选择设备生命周期变更。可选值：
     * - **true**：是。
     * - **false**（默认）：否。
     * @example `true`
     */
    "DeviceLifeCycleFlag"?: boolean;
    /**
     * 推送消息类型是否选择设备状态变化通知。可选值：
     * - **true**：是。
     * - **false**（默认）：否。
     * @example `true`
     */
    "DeviceStatusChangeFlag"?: boolean;
    /**
     * 推送消息类型是否选择设备拓扑关系变更。可选值：
     * - **true**：是。仅对网关产品有效。
     * - **false**（默认）：否。
     * @example `true`
     */
    "DeviceTopoLifeCycleFlag"?: boolean;
    /**
     * 推送消息类型是否选择网关子设备发现上报。可选值：
     * - **true**：是。仅对网关产品有效。
     * - **false**（默认）：否。
     * @example `true`
     */
    "FoundDeviceListFlag"?: boolean;
    /**
     * MNS队列的配置信息，**Type**为**MNS**时必填。
     * 具体要求和示例见下文“MnsConfiguration定义”。
     * @example `{     "queueName": "mns-test-topic1",     "regionName": "cn-shanghai",     "role": {         "roleArn": "acs:ram::5645***:role/aliyuniotaccessingmnsrole",         "roleName": "AliyunIOTAccessingMNSRole"     } }`
     */
    "MnsConfiguration"?: string;
    /**
     * 订阅类型：
     * - **MNS**。
     * - **AMQP**。
     * @example `AMQP`
     */
    "Type"?: string;
    /**
     * 推送消息类型是否选择OTA升级状态通知。可选值：
     * - **true**：是。
     * - **false**（默认）：否。
     * @example `true`
     */
    "OtaEventFlag"?: boolean;
    /**
     * 推送消息类型是否选择物模型历史数据上报。可选值：
     * - **true**：是。
     * - **false**（默认）：否。
     * @example `true`
     */
    "ThingHistoryFlag"?: boolean;
    /**
     * 推送消息类型是否选择设备标签变更。可选值：
     * - **true**：是。仅当**Type**为**AMQP**时有效。
     * - **false**（默认）：否。
     * @example `true`
     */
    "DeviceTagFlag"?: boolean;
    /**
     * 推送消息类型是否选择OTA模块版本号上报。可选值：
     * - **true**：是。仅当**Type**为**AMQP**时有效。
     * - **false**（默认）：否。
     * @example `true`
     */
    "OtaVersionFlag"?: boolean;
    /**
     * 推送消息类型是否选择OTA升级批次状态通知。可选值：
     * - **true**：是。仅当**Type**为**AMQP**时有效。
     * - **false**（默认）：否。
     * @example `true`
     */
    "OtaJobFlag"?: boolean;
    /**
     * 标识当前订阅产品的其他类型消息，数据格式为JSON String。
     * - 如果订阅的是JT/T 808协议云网关产品，必须传入**SubscribeFlags**，取值为：
     *     ```
     *     {
     *         "jt808DeviceDataFlag": true
     *     }
     *     ```
     * - 如果订阅的是设备视频流状态变更通知消息，必须传入**SubscribeFlags**，取值为：
     *     ```
     *     {
     *         "lvDeviceStatusFlag": true
     *     }
     *     ```
     *     配置AMQP服务端订阅**设备视频流状态变更通知**消息的详细内容，请参见[AMQP服务端订阅](~~2698782~~)。
     * - 如果同时订阅以上消息，取值为：
     *     ```
     *     {
     *         "lvDeviceStatusFlag": true,
     *         "jt808DeviceDataFlag": true
     *     }
     *     ```
     * @example `{     "jt808DeviceDataFlag": true }`
     */
    "SubscribeFlags"?: string;
    /**
     * 创建的AMQP订阅中的消费组ID，**Type**为**AMQP**时必填。
     * 调用[CreateConsumerGroup](~~170388~~)创建消费组成功后，会返回消费组ID。您可以调用[QueryConsumerGroupList](~~170419~~)按消费组名称查询消费组ID，也可以在物联网平台控制台<props="china"><ph>对应实例下</ph></props>，选择**消息转发**>**服务端订阅**>**消费组列表**，查看消费组ID。
     * @example `nJRaJPn5U1JITGfjBO9l00****`
     */
    "ConsumerGroupIds"?: string[];
}
