export interface ListOrganizationsRequest {
    /**
     * 个人访问令牌。
     * 使用阿里云AK+SK或使用STS临时授权方式不需要传该字段
     * @example `agp_adf6bc4433173ab3cb43195b6ff9213d`
     */
    "accessToken"?: string;
    /**
     * 用户权限，用于查询指定权限的企业列表
     * - 5：企业外部成员
     * - 15：企业成员
     * - 60：企业管理员
     * - 70：企业拥有者
     * @example `5`
     */
    "accessLevel"?: number;
    /**
     * 最小用户权限，用于查询用户权限大于等于该字段设置的企业列表
     * - 5：企业外部成员
     * - 15：企业成员
     * - 60：企业管理员
     * - 70：企业拥有者
     * >  `minAccessLevel优先生效，不传minAccessLevel时accessLevel参数生效`
     * @example `60`
     */
    "minAccessLevel"?: number;
}
