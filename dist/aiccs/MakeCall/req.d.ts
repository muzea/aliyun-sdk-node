export interface MakeCallRequest {
    /**
     * 外部账户ID。
     * @example `123456`
     */
    "OuterAccountId": string;
    /**
     * 外部账户类型。
     * @example `ALIPAY`
     */
    "OuterAccountType": string;
    /**
     * 操作码。
     * @example `outBound_Call`
     */
    "CommandCode": string;
    /**
     * 主叫号码。
     * @example `0571456****`
     */
    "CallingNumber": string;
    /**
     * 被叫号码。
     * @example `130****0000`
     */
    "CalledNumber": string;
    /**
     * 透传业务信息。
     * @example `{"bizId": 23323}`
     */
    "ExtInfo"?: string;
}
