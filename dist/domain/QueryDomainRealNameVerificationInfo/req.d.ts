export interface QueryDomainRealNameVerificationInfoRequest {
    /**
     * 用户IP。
     * @example `127.0.0.1`
     */
    "UserClientIp"?: string;
    /**
     * 接口返回错误信息语言。取值：
     * - **zh**：中文。
     * - **en**：英文。
     * 默认为**en**。
     * @example `en`
     */
    "Lang"?: string;
    /**
     * 域名。
     * @example `aliyundoc.com`
     */
    "DomainName": string;
    /**
     * 是否获取实名认证图片。取值：
     * - **true**：获取。
     * - **false**：不获取。
     * @example `false`
     */
    "FetchImage"?: boolean;
}
