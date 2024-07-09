export interface ResetLoginPasswordRequest {
    /**
     * 实例ID
     * @example `cri-kmsiwlxxdcva****`
     */
    "InstanceId": string;
    /**
     * 登录密码，8-32位，必须包含字母、符号或数字中的至少两项
     * @example `test`
     */
    "Password": string;
}
