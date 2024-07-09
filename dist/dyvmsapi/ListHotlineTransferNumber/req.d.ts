export interface ListHotlineTransferNumberRequest {
    /**
     * 资质ID。您可以通过[GetHotlineQualificationByOrder](~~393548~~)接口获取。
     * @example `100***`
     */
    "QualificationId": string;
    /**
     * 页码。默认取值**1**。
     * @example `1`
     */
    "PageNo"?: number;
    /**
     * 页数。取值范围：**1~10**。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 400号码。
     * @example `400****`
     */
    "HotlineNumber": string;
}
