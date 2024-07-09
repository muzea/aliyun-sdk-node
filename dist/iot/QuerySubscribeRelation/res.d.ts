export interface QuerySubscribeRelationResponse {
    /**
     * 订阅类型。返回值：
     * - **MNS**
     * - **AMQP**
     * @example `AMQP`
     */
    Type: string;
    /**
     * 调用失败时，返回的出错信息。
     * @example `系统异常`
     */
    ErrorMessage: string;
    /**
     * 推送消息类型是否选择设备标签变更。可选值：
     * - **true**：是。仅当**Type**为**AMQP**时有效。
     * - **false**：否。
     * 默认值为**false**。
     * @example `true`
     */
    DeviceTagFlag: boolean;
    /**
     * 推送消息类型是否选择OTA模块版本号上报。可选值：
     * - **true**：是。仅当**Type**为**AMQP**时有效。
     * - **false**：否。
     * 默认值为**false**。
     * @example `true`
     */
    OtaVersionFlag: boolean;
    /**
     * 推送消息类型是否选择设备上报消息。
     * - **true**：是。
     * - **false**：否。
     * @example `true`
     */
    DeviceDataFlag: boolean;
    /**
     * 是否调用成功。
     * - **true**：调用成功。
     * - **false**：调用失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 标识当前订阅产品的其他类型消息。
     * - 如果订阅的是JT/T 808协议云网关产品，取值为：
     *     ```
     *     {
     *         "jt808DeviceDataFlag": true
     *     }
     *     ```
     * - 如果订阅的是设备视频流状态变更通知消息，取值为：
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
    SubscribeFlags: string;
    /**
     * 推送消息类型是否选择OTA升级状态通知。
     * - **true**：是。
     * - **false**：否。
     * @example `true`
     */
    OtaEventFlag: boolean;
    /**
     * 推送消息类型是否选择物模型历史数据上报。
     * - **true**：是。
     * - **false**：否。
     * @example `true`
     */
    ThingHistoryFlag: boolean;
    /**
     * 推送消息类型是否选择设备状态变化通知。
     * - **true**：是。
     * - **false**：否。
     * @example `true`
     */
    DeviceStatusChangeFlag: boolean;
    /**
     * 该订阅中的产品的ProductKey。
     * @example `a1fyXVF****`
     */
    ProductKey: string;
    /**
     * 阿里云为该请求生成的唯一标识符。
     * @example `21D327AF-A7DE-4E59-B5D1-ACAC8C024555`
     */
    RequestId: string;
    /**
     * **Type**为**MNS**时，返回MNS队列的配置信息。
     * 具体组成和示例，请参见下文的“MnsConfiguration定义和示例”。
     * @example `{     "queueName": "mns-test-topic1",     "regionName": "cn-shanghai",     "role": {         "roleArn": "acs:ram::5645***:role/aliyuniotaccessingmnsrole",         "roleName": "AliyunIOTAccessingMNSRole"     } }`
     */
    MnsConfiguration: string;
    /**
     * 推送消息类型是否选择设备拓扑关系变更。
     * - **true**：是。仅网关产品会返回**true**。
     * - **false**：否。
     * @example `true`
     */
    DeviceTopoLifeCycleFlag: boolean;
    /**
     * 推送消息类型是否选择设备生命周期变更。
     * - **true**：是。
     * - **false**：否。
     * @example `true`
     */
    DeviceLifeCycleFlag: boolean;
    /**
     * 调用失败时，返回的错误码。更多信息，请参见[错误码](~~87387~~)。
     * @example `iot.system.SystemException`
     */
    Code: string;
    /**
     * 推送消息类型是否选择网关子设备发现上报。
     * - **true**：是。仅网关产品会返回**true**。
     * - **false**：否。
     * @example `true`
     */
    FoundDeviceListFlag: boolean;
    /**
     * 推送消息类型是否选择OTA升级批次状态通知。可选值：
     * - **true**：是。仅当**Type**为**AMQP**时有效。
     * - **false**：否。
     * 默认值为**false**。
     * @example `true`
     */
    OtaJobFlag: boolean;
    ConsumerGroupIds: string[];
}
