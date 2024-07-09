export interface UpdateUserDescriptionRequest {
    /**
     * 实例ID。
     * @example `idaas_ue2jvisn35ea5lmthk267xxxxx`
     */
    "InstanceId": string;
    /**
     * 账户ID。
     * @example `user_d6sbsuumeta4h66ec3il7yxxxx`
     */
    "UserId": string;
    /**
     * 描述信息，最大限制长度256字符。
     * @example `this is a test.`
     */
    "Description"?: string;
}
