export interface TransferDeviceInstanceRequest {
    /**
     * 待迁移的设备名称列表。最多包含100个设备名称。
     * @example `RepeatList`
     */
    "DeviceNameList": string[];
    /**
     * 设备所属产品的ProductKey，创建产品时，物联网平台为该产品生成的唯一标识。
     * @example `a1BwAGV****`
     */
    "ProductKey": string;
    /**
     * 设备所属的源实例ID：
     * - 公共实例ID：iotx-oxssharez200。
     *     > 目前仅支持华东2（上海）地域，其实例ID为iotx-oxssharez200。
     * - 企业版实例ID：登录物联网平台控制台，在**实例概览**页面，单击实例名称，在**实例详情**页面的**实例基本信息**中查看**实例ID**。
     * @example `iotx-oxssharez200`
     */
    "SourceInstanceId"?: string;
    /**
     * 设备迁移的目标实例ID。目标实例仅支持企业版实例。
     * 您可登录物联网平台控制台，在**实例概览**页面，单击实例名称，在**实例详情**页面的**实例基本信息**中查看**实例ID**。
     * @example `iot-060***`
     */
    "TargetInstanceId": string;
}
