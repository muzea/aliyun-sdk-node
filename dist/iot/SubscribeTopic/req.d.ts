export interface SubscribeTopicRequest {
    /**
     * 实例ID。您可在物联网平台控制台的**实例概览**页面，查看当前实例的**ID**。
     * ><notice>
     * - 若有ID值，必须传入该ID值，否则调用会失败。
     * - 若无<props="intl"><ph>**实例概览**页面或</ph></props>ID值，则无需传入。
     * ></notice>
     * 实例的更多信息，请参见[实例概述](~~356505~~)。
     * @example `iot-06***`
     */
    "IotInstanceId"?: string;
    /**
     * 设备所属产品的**ProductKey**。
     * @example `a1Q5XoY***`
     */
    "ProductKey": string;
    /**
     * 指定要订阅Topic所属设备的**DeviceName**。
     * @example `device1`
     */
    "DeviceName": string;
    /**
     * 要订阅的Topic，最多订阅10个Topic。
     * Topic的操作权限必须为**订阅**或**发布和订阅**。
     * @example `/a1Q5XoY***​/device1/user/get`
     */
    "Topic": string[];
}
