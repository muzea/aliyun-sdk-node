export interface EncryptPhoneNumRequest {
    /**
     * AICCS实例ID。可在智能联络中心控制台上获取。
     * @example `ccc_xp_pre***`
     */
    "InstanceId": string;
    /**
     * 号码明文。
     * @example `130****0000`
     */
    "PhoneNum": string;
}
