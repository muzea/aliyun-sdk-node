export interface GetCodeupOrganizationResponse {
    /**
     * 错误信息
     * @example `""`
     */
    errorMessage: string;
    /**
     * 请求ID
     * @example `ASSDS-ASSASX-XSAXSA-XSAXSAXS`
     */
    requestId: string;
    /**
     * 错误码
     * @example `InvalidTagGroup.IdNotFound`
     */
    errorCode: string;
    /**
     * 调用是否成功
     * @example `true`
     */
    success: boolean;
    /**
     * 返回结果
     */
    result: {
        /**
         * 库所属组或者企业空间ID
         * @example `100003`
         */
        namespaceId: number;
        /**
         * 用户在企业中的角色
         * - ORG_MEMBER：企业内成员
         * - ORG_ADMIN：企业管理员
         * - ORG_OWNER：企业拥有者
         * - ORG_EXTERNAL_MEMBER：企业外部成员
         * - NO_ACCESS：无权限
         * - ADMIN：超级管理员
         * @example `ORG_MEMBER`
         */
        userRole: string;
        /**
         * 代码库路径
         * @example `test-codeup`
         */
        path: string;
        /**
         * 创建时间
         * @example `2022-03-12 12:00:00`
         */
        createdAt: string;
        /**
         * 更新时间
         * @example `2022-03-18 14:24:54`
         */
        updatedAt: string;
        /**
         * 主键ID
         * @example `3624`
         */
        id: number;
        /**
         * 企业标识，也称企业ID，字符串形式，可在云效访问链接中获取，如https://devops.aliyun.com/organization/【OrganizationId】
         * @example `60de7a6852743a5162b5f957`
         */
        organizationId: string;
    };
}
