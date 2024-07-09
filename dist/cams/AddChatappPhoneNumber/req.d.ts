export interface AddChatappPhoneNumberRequest {
    /**
     * 号码。
     * @example `1380000****`
     */
    "PhoneNumber": string;
    /**
     * ISV子客户的SpaceId。
     * @example `93928389****`
     */
    "CustSpaceId": string;
    /**
     * 国家区号。
     * @example `86`
     */
    "Cc": string;
    /**
     * 预校验号码。
     * @example `1020****`
     */
    "PreValidateId"?: string;
    /**
     * 号码名称。
     * @example `Alibaba`
     */
    "VerifiedName": string;
}
