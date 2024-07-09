export interface QueryChatappPhoneNumbersRequest {
    /**
     * Isv校验码，用于校验子账号是否由ISV授权。
     * @example `aksik93kdkkxmwol9****`
     */
    "IsvCode"?: string;
    /**
     * ISV子客户的SpaceId。
     * @example `29348393884****`
     */
    "CustSpaceId"?: string;
    /**
     * 号码状态。
     * @example `VERIFIED`
     */
    "Status"?: string;
}
