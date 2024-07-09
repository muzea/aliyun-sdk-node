export interface CreateChatappMigrationInitiateRequest {
    /**
     * ISV子客户的SpaceId。
     * @example `293483938849493****`
     */
    "CustSpaceId": string;
    /**
     * 手机号码，不需要带国家编码。
     * @example `1390000****`
     */
    "MobileNumber": string;
    /**
     * 国家编码。
     * @example `86`
     */
    "CountryCode": string;
}
