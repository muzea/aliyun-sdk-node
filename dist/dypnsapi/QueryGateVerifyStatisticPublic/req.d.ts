export interface QueryGateVerifyStatisticPublicRequest {
    /**
     * 方案号。
     * @example `FC100000038194004`
     */
    "SceneCode"?: string;
    /**
     * 起始日期。格式为YYYYMMDD，例如20220101。
     * @example `20220101`
     */
    "StartDate": string;
    /**
     * 结束日期。格式为YYYYMMDD，例如20220106。
     * @example `20220106`
     */
    "EndDate": string;
    /**
     * 认证方式。取值：
     * - **1**：一键登录。
     * - **2**：本机号码校验（含H5本机号码校验）。
     * - **3**：短信认证。
     * - **4**：活体认证。
     * @example `1`
     */
    "AuthenticationType": number;
    /**
     * 系统类型。取值：
     * - **Android**。
     * - **iOS**。
     * @example `Android`
     */
    "OsType"?: string;
}
