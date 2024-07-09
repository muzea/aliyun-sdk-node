export interface CheckMaxYearOfServerLockRequest {
    /**
     * 待检查的域名。
     * @example `example.com`
     */
    "DomainName": string;
    /**
     * 接口返回错误信息语言。取值：
     * - zh：中文
     * - en：英文
     * 默认为en。
     * @example `en`
     */
    "Lang"?: string;
    /**
     * 用户IP。
     * @example `127.0.0.1`
     */
    "UserClientIp"?: string;
    /**
     * 购买的业务类型。取值：
     * - activate：新注
     * - renew：续费
     * @example `activate`
     */
    "CheckAction": string;
}
