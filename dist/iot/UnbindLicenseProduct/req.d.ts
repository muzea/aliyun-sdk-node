export interface UnbindLicenseProductRequest {
    /**
     * 企业版实例的实例ID。您可在物联网平台控制台的**实例概览**页面，查看当前实例的**ID**。
     * @example `iot-s3***`
     */
    "IotInstanceId"?: string;
    /**
     * License类型（音视频规格），可取值：**480P**、**720P**。
     * 您可在**音视频通信服务**控制台的**License管理>产品授权**页面，查看目标产品的License类型。
     * @example `480P`
     */
    "LicenseCode": string;
    /**
     * 待取消授权的产品的ProductKey。
     * 您可在**音视频通信服务**控制台的**License管理>产品授权**页面，查看目标产品的**Product Key**。
     * @example `gq62z***`
     */
    "ProductKey": string;
}
