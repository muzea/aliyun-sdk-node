export interface PromoteResourceAccountRequest {
    /**
     * 需要升级的资源账号ID。
     * @example `12323344****`
     */
    "AccountId": string;
    /**
     * 升级后的云账号登录邮箱。
     * @example `someone@example.com`
     */
    "Email": string;
}
