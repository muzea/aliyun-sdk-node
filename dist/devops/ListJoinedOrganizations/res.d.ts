export interface ListJoinedOrganizationsResponse {
    /**
     * 请求ID
     * @example `11D0EE6E-5803-5D4C-A652-E672BE1F3D8F`
     */
    requestId: string;
    /**
     * 调用是否成功
     * @example `true`
     */
    success: boolean;
    /**
     * 错误码
     * @example `""`
     */
    errorCode: string;
    /**
     * 错误信息
     * @example `""`
     */
    errorMessage: string;
    /**
     * 加入的企业列表
     */
    organizations: {
        /**
         * 企业ID
         * @example `65f25d0fa54c216dcf6b1dbd`
         */
        id: string;
        /**
         * 企业名称
         * @example `云效测试企业`
         */
        name: string;
        /**
         * 是否企业管理员
         * @example `true`
         */
        isOrgAdmin: boolean;
    }[];
}
