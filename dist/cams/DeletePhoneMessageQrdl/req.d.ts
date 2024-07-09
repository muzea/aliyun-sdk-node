export interface DeletePhoneMessageQrdlRequest {
    /**
     * 号码，输入国家/地区码+号码。
     * @example `86138009****`
     */
    "PhoneNumber": string;
    /**
     * 二维码编码。
     * @example `29338838`
     */
    "QrdlCode": string;
    /**
     * ISV子客户的SpaceId/实例ID。
     * @example `883873773`
     */
    "CustSpaceId"?: string;
}
