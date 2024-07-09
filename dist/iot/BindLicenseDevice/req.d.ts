export interface BindLicenseDeviceRequest {
    /**
     * 企业版实例的实例ID。您可在物联网平台控制台的**实例概览**页面，查看当前实例的**ID**。
     * @example `iot-e3***`
     */
    "IotInstanceId"?: string;
    /**
     * License类型（音视频规格），可取值：**480P**、**720P**。
     * @example `720P`
     */
    "LicenseCode": string;
    /**
     * 待授权设备所属产品的**ProductKey**。
     * 您可以在物联网平台控制台或调用接口[QueryProductList](~~69271~~)，查看当前实例下所有产品的信息。
     * @example `a2YwD23***`
     */
    "ProductKey": string;
    /**
     * 待授权License的设备列表，需传入设备对应的**IotId**。
     * 您可调用接口[QueryDevice](~~69905~~)，查询指定产品下所有设备的**IotId**。
     */
    "IotIdList"?: string[];
    /**
     * 待授权License的设备列表，需传入设备对应的**DeviceName**。
     * 您可调用接口[QueryDevice](~~69905~~)，查询指定产品下所有设备的**DeviceName**。
     */
    "DeviceNameList"?: string[];
}
