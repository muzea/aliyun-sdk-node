export interface MigrateSecurityIPModeResponse {
    /**
     * 切换后的白名单模式，即高安全白名单模式。
     * @example `safety`
     */
    SecurityIPMode: string;
    /**
     * 实例ID。
     * @example `rm-uf6wjk5****`
     */
    DBInstanceId: string;
    /**
     * 请求ID。
     * @example `EF1E53AB-5625-49C7-ADF1-FBD0B6640D19`
     */
    RequestId: string;
}
