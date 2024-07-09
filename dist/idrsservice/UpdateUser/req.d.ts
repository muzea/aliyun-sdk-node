export interface UpdateUserRequest {
    /**
     * 邮箱
     * @example `xxx@xxx.com`
     */
    "Email"?: string;
    /**
     * 姓名
     * @example `用户姓名`
     */
    "Name"?: string;
    /**
     * 手机号
     * @example `手机号`
     */
    "PhoneNumber"?: string;
    /**
     * 角色
     * @example `user`
     */
    "Role"?: string;
    /**
     * 用户 ID
     * @example `59b0bbfe-929b-4a8c-9833-3ce70b4bad38`
     */
    "Id": string;
}
