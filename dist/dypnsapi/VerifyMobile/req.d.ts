export interface VerifyMobileRequest {
    /**
     * App端SDK获取AccessCode参数值，即Token。
     * @example `Dfafdafad542****`
     */
    "AccessCode": string;
    /**
     * 手机号。
     * @example `13800****00`
     */
    "PhoneNumber": string;
    /**
     * 外部流水号。
     * @example `123456`
     */
    "OutId"?: string;
}
