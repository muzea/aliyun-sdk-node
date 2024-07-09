export interface ModifyAccountDescriptionRequest {
    /**
     * 实例ID。
     * @example `drds************`
     */
    "DrdsInstanceId": string;
    /**
     * 账号名称。
     * @example `test`
     */
    "AccountName": string;
    /**
     * 账号描述。
     * @example `test`
     */
    "Description": string;
}
