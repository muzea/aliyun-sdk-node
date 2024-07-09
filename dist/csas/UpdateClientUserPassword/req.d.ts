export interface UpdateClientUserPasswordRequest {
    /**
     * 用户ID。
     * @example `1128`
     */
    "Id"?: string;
    /**
     * 用户名称。
     * @example `张三`
     */
    "Username"?: string;
    /**
     * 密码。若为空则自动生成随机密码。
     * @example `kehudiyidj`
     */
    "Password"?: string;
}
