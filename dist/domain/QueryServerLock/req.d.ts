export interface QueryServerLockRequest {
    /**
     * 接口返回错误信息语言。取值：
     * - zh：中文
     * - en：英文
     * 默认为en。
     * @example `en`
     */
    "Lang"?: string;
    /**
     * 域名实例ID。
     * @example `S20181*****85212`
     */
    "InstanceId"?: string;
    /**
     * 用户IP，可设置为**127.0.0.1**。
     * @example `127.0.0.1`
     */
    "UserClientIp"?: string;
}
