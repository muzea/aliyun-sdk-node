export interface UpdateOrganizationMemberResponse {
    /**
     * 请求ID
     * @example `F7B85D1B-D1C2-140F-A039-341859F130B9`
     */
    requestId: string;
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
     * 成员信息
     */
    member: {
        /**
         * 阿里云账号ID
         * @example `292035769476261xxx`
         */
        accountId: string;
        /**
         * 企业成员名
         * @example `名字1`
         */
        organizationMemberName: string;
    };
    /**
     * 请求是否成功。
     * - true：成功
     * - false：失败
     * @example `true`
     */
    success: boolean;
}
