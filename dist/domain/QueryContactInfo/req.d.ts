export interface QueryContactInfoRequest {
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
     * @example `example.com`
     */
    "DomainName": string;
    /**
     * 联系人类型。取值：
     * - **registrant**：域名持有者。
     * - **tech**：技术者。
     * - **admin**：管理者。
     * - **billing**：付费者。
     *
     * @example `admin`
     */
    "ContactType": string;
}
