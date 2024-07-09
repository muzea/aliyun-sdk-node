export interface BindLicenseProductRequest {
    /**
     * 企业版实例的实例ID。您可在物联网平台控制台的**实例概览**页面，查看当前实例的**ID**。
     * @example `iot-23***`
     */
    "IotInstanceId"?: string;
    /**
     * License类型（音视频规格），可取值：**480P**、**720P**。
     * @example `480P`
     */
    "LicenseCode": string;
    /**
     * 待授权的产品的ProductKey。
     * 您可以在物联网平台控制台或调用接口[QueryProductList](~~69271~~)，查看当前实例下所有产品的信息。
     * @example `a1BwAGV***`
     */
    "ProductKey": string;
}
