export interface ReBindLicenseDeviceRequest {
    /**
     * 实例ID。您可在物联网平台控制台的**实例概览**页面，查看当前实例的**ID**。
     * ><notice>
     * - 对于新版公共实例或企业版实例，实例有ID值，必须传入该ID值，否则调用会失败。
     * - 对于旧版公共实例，实例无ID值，无需传入。
     * ></notice>
     * 实例的更多信息，请参见[实例概述](~~356505~~)。
     * @example `iot-e3***`
     */
    "IotInstanceId"?: string;
    /**
     * License类型，暂时只支持千里传音，可取值：**LINK_SPEECH_COMMON_LICENSE**。
     * @example `LINK_SPEECH_COMMON_LICENSE`
     */
    "LicenseCode": string;
    /**
     * 待授权设备所属产品的**ProductKey**。
     * 您可以在物联网平台控制台或调用接口[QueryProductList](~~69271~~)，查看当前实例下所有产品的信息。
     * @example `a2YwD23***`
     */
    "ProductKey": string;
    /**
     * 待授权License的设备列表，需传入设备对应的**deviceName**。
     * 您可调用接口[QueryDevice](~~69905~~)，查询指定产品下所有设备的**DeviceName**。
     * @example `test`
     */
    "DeviceNameList": string[];
}
