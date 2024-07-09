export interface StartPrivacyCallRequest {
    /**
     * 呼叫中心实例ID
     * @example `ccc-test`
     */
    "InstanceId": string;
    /**
     * 应用ID。
     * @example `ALIPUBB7A727C170949`
     */
    "AppId": string;
    /**
     * 主叫号码。
     * @example `0109810****`
     */
    "Caller": string;
    /**
     * 被叫号码。
     * @example `1888888****`
     */
    "Callee": string;
}
