export interface CheckBindLicenseDeviceProgressRequest {
    /**
     * 实例ID。您可在物联网平台控制台的**实例概览**页面，查看当前实例的**ID**。
     * ><notice>
     * - 对于新版公共实例或企业版实例，实例有ID值，必须传入该ID值，否则调用会失败。
     * - 对于旧版公共实例，实例无ID值，无需传入。
     * ></notice>
     * 实例的更多信息，请参见[实例概述](~~356505~~)。
     * @example `iot-2ws****`
     */
    "IotInstanceId"?: string;
    /**
     * License类型（音视频规格），可取值：**480P**、**720P**。
     * @example `720P`
     */
    "LicenseCode": string;
    /**
     * 设备所属产品的**ProductKey**。
     * 您可以在物联网平台控制台或调用接口[QueryProductList](~~69271~~)，查看当前实例下所有产品的信息。
     * @example `uhf5****`
     */
    "ProductKey": string;
    /**
     * 查询批量授权设备进度的唯一ID。
     * @example `23****`
     */
    "CheckProgressId": string;
}
