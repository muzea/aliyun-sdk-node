export interface GisSearchDeviceTraceRequest {
    /**
     * 是否结合地图进行位置纠偏。可取值：
     * - **0**：否，不进行轨迹纠偏。
     * - **1**：是，进行轨迹纠偏。
     * @example `0`
     */
    "MapMatch": number;
    /**
     * 实例ID。<props="china"><ph>您可在物联网平台控制台的**实例概览**页面，查看当前实例的**ID**。</ph></props>
     * ><notice>
     * - 若有ID值，必须传入该ID值，否则调用会失败。
     * - 若无ID值，则无需传入。
     * ></notice>
     * <props="china">实例的更多信息，请参见[如何获取实例ID](~~267533~~)。</props>
     * @example `iot-a****13l`
     */
    "IotInstanceId"?: string;
    /**
     * 轨迹结束时间戳（毫秒）。
     * @example `1645071254000`
     */
    "EndTime": number;
    /**
     * 轨迹开始时间戳（毫秒）。
     * @example `1645071254000`
     */
    "StartTime": number;
    /**
     * 要查询设备所属产品的ProductKey。
     * ProductKey是物联网平台为新建产品颁发的全局唯一标识符。您可以在物联网平台控制台或调用[QueryProductList](~~69271~~)，查看当前账号下所有产品的信息。
     * @example `g3r****Vjta`
     */
    "ProductKey": string;
    /**
     * 设备名称。
     * @example `mock_device_name`
     */
    "DeviceName": string;
}
