export interface QueryChatappBindWabaRequest {
    /**
     * ISV子客户的SpaceId。
     * @example `293483938849493`
     */
    "CustSpaceId"?: string;
    /**
     * ISV校验码，用于校验子账号是否由ISV授权。
     * @example `aksik93kdkkxmwol93939`
     */
    "IsvCode"?: string;
}
