export interface IsUserAdminResponse {
    /**
     * 是否可以使用云工作站：
     * * true
     * * false
     * @example `false`
     */
    IsAllow: boolean;
    /**
     * 是否为 admin 用户：
     * * true
     * * false
     * @example `true`
     */
    IsAdmin: boolean;
    /**
     * 请求 id
     * @example `XXXX`
     */
    RequestId: string;
}
