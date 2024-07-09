export interface VerifyAuthenticationRequest {
    /**
     * 您主账号的ID。
     * @example `12345678123*****`
     */
    "Uid"?: number;
    /**
     * 是否只检查授权情况。取值范围：
     * - true：只检查授权，不创建服务关联角色。
     * - false（默认）：检查授权和资源使用情况。
     * @example `false`
     */
    "OnlyCheck"?: boolean;
}
