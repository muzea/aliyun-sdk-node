export interface GetClientUserRequest {
    /**
     * 自定义身份源配置ID。
     * @example `598`
     */
    "IdpConfigId": string;
    /**
     * 用户名称。
     * @example `张三`
     */
    "Username": string;
}
