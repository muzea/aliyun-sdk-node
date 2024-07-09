export interface UnsubscribeTopicRequest {
    /**
     * 实例ID。您可在物联网平台控制台的**实例概览**页签，查看当前实例的ID。
     * ><notice>
     * - 若有ID值，必须传入该**ID**值，否则调用会失败。
     * - 若无ID值，则无需传入。
     * ></notice>
     * 实例的更多信息，请参见[实例概述](~~356505~~)。
     * @example `iot-cn-n6w1y59****`
     */
    "IotInstanceId"?: string;
    /**
     * 设备所属产品的**ProductKey**。
     * @example `a1BwAGV****`
     */
    "ProductKey": string;
    /**
     * 设备的名称。
     * @example `device1`
     */
    "DeviceName": string;
    /**
     * 要取消订阅的Topic列表。
     * @example `/a1BwAGV****​/device1/user/get`
     */
    "Topic": string[];
}
