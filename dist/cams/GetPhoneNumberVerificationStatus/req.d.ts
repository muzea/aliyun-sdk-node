export interface GetPhoneNumberVerificationStatusRequest {
    /**
     * 手机号码。
     * @example `861390000****`
     */
    "PhoneNumber": string;
    /**
     * ISV子客户的SpaceId。
     * @example `229393838****`
     */
    "CustSpaceId": string;
}
