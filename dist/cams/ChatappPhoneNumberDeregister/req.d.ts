export interface ChatappPhoneNumberDeregisterRequest {
    /**
     * 待取消注册的号码。
     * @example `861380000****`
     */
    "PhoneNumber": string;
    /**
     * ISV子客户的SpaceId。
     * @example `93928389****`
     */
    "CustSpaceId": string;
}
