export interface ListPhoneMessageQrdlRequest {
    /**
     * 号码，输入国家/地区码+号码。
     * @example `86138009****`
     */
    "PhoneNumber": string;
    /**
     * ISV子客户的SpaceId/实例ID。
     * @example `9383883`
     */
    "CustSpaceId"?: string;
}
