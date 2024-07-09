export interface ListOrganizationsResponse {
    /**
     * 请求ID
     * @example `95FE5953-FF5B-5F80-94AD-FFF97D990FE0`
     */
    requestId: string;
    /**
     * 错误码
     * @example `SYSTEM_UNKNOWN_ERROR`
     */
    errorCode: string;
    /**
     * 错误信息
     * @example `""`
     */
    errorMessage: string;
    /**
     * 总记录数
     * @example `2`
     */
    total: number;
    /**
     * 调用是否成功
     * @example `true`
     */
    success: boolean;
    /**
     * 返回的企业列表
     */
    result: {
        /**
         * 企业主键ID
         * > 无业务实际意义，且在企业未开通Codeup时，该值为空
         * @example `5240`
         */
        id: number;
        /**
         * 用户在企业中的权限
         * - 5：企业外部成员
         * - 15：企业成员
         * - 60：企业管理员
         * - 70：企业拥有者
         * @example `60`
         */
        accessLevel: number;
        /**
         * 企业标识，也称企业id，字符串形式，可在云效访问链接中获取，如https://devops.aliyun.com/organization/【OrganizationId】
         * @example `60de7a6852743a5162b5f957`
         */
        organizationId: string;
        /**
         * 企业名称
         * @example `云效Codeup`
         */
        organizationName: string;
        /**
         * 用户在企业中的角色
         * - ORG_EXTERNAL_MEMBER：企业外部成员
         * - ORG_MEMBER：企业成员
         * - ORG_ADMIN：企业管理员
         * - ORG_OWNER：企业拥有者
         * @example `ORG_ADMIN`
         */
        organizationRole: string;
        /**
         * 企业别名
         * > 若企业开通了Codeup，那么企业别名一般有值；若没有开通，则为空
         * @example `alias-云效Codeup`
         */
        organizationAlias: string;
        /**
         * 企业空间ID
         * @example `600002`
         */
        namespaceId: string;
    }[];
}
