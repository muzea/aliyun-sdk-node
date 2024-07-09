export interface WriteDevicesHotStorageDataRequest {
    /**
     * 实例ID。您可在物联网平台控制台的**实例概览**页面，查看当前实例的**ID**。
     * @example `iot-2w****`
     */
    "IotInstanceId": string;
    /**
     * 设备所属的产品**ProductKey**。
     * ><notice> 如果传入该参数，需同时传入**DeviceName**。
     * ></notice>
     * @example `a1BwAGV****`
     */
    "ProductKey"?: string;
    /**
     * 设备的名称。
     * ><notice> 如果传入该参数，需同时传入**ProductKey**。
     * ></notice>
     * @example `device1`
     */
    "DeviceName"?: string;
    /**
     * 设备ID。
     * ><notice> **IotId**作为设备唯一标识符，和**ProductKey**与**DeviceName**组合是一一对应的关系。如果传入该参数，则无需传入**ProductKey**和**DeviceName**。如果您同时传入**IotId**和**ProductKey**与**DeviceName**组合，则以**IotId**为准。
     * ></notice>
     * @example `y4u2weAI********HMle1234`
     */
    "IotId"?: string;
    /**
     * 自定义Topic。从`user`类目开始，输入自定义Topic的后续所有类目。
     * 自定义Topic详细说明，请参见[自定义Topic](~~85539~~)。
     * @example `user/a***​/b***`
     */
    "UserTopic": string;
    /**
     * 写入的数据，固定为如下JSON数据结构。
     * ```
     * {
     *     "key1": {
     *         "value":xxx1
     *         "time":yyy1
     *     },
     *     "key2": {
     *         "value":xxx2
     *         "time":yyy2
     *     }
     * }
     * ```
     * - **key1**、**key2**为字段标识符，每个**Items**可包含多个字段。
     * - **value**为字段对应的值，支持数据类型为int32、float、double、text、date、bool、enum、struct和array。详细说明，请参见[支持的数据类型](~~358843~~)。
     * - **time**：字段值对应的UTC时间戳，单位为毫秒。
     * @example `{ "Power": { "value": "on", "time": 1524448722000 }, "WF": { "value": 23.6, "time": 1524448722000 } }`
     */
    "Items": string;
}
