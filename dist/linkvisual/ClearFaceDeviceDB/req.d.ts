export interface ClearFaceDeviceDBRequest {
    /**
     * 业务隔离ID。
     * @example `ZheJiangHZ`
     */
    "IsolationId": string;
    /**
     * 实例ID。
     * 您可在物联网平台控制台的**实例概览**页面，查看当前实例的**ID**。若有ID值，必须传入该ID值，否则调用会失败。
     * > 如果公共实例没有ID值，请参见[如何获取实例ID](~~267533~~)。
     * @example `iot_instc_pu****_c*-v64********`
     */
    "IotInstanceId"?: string;
    /**
     * V系列边缘一体机对应的设备所属产品唯一标识。在边缘计算控制台V系列边缘一体机的**主机详情**页面**基本信息**页签，找到**视频网关**信息，获取**ProductKey**值。
     * @example `a1Wmy******`
     */
    "ProductKey": string;
    /**
     * V系列边缘一体机对应的设备名称。在边缘计算控制台V系列边缘一体机的**主机详情**页面**基本信息**页签，找到**视频网关**信息，获取**DeviceName**值。
     * @example `TestDevice_1`
     */
    "DeviceName": string;
}
