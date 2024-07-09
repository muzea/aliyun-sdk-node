export interface UpdateProjectMemberResponse {
    /**
     * 请求id，每次请求都是唯一值，便于后续排查问题
     * @example `ASSDS-ASSASX-XSAXSA-XSAXSAXS`
     */
    requestId: string;
    /**
     * 错误信息
     * @example `error`
     */
    errorMsg: string;
    /**
     * 错误码
     * @example `Openapi.RequestError`
     */
    errorCode: string;
    /**
     * true或者false
     * @example `true`
     */
    success: boolean;
    /**
     * 成员信息
     */
    member: {
        /**
         * id，暂时无用
         * @example `1124382`
         */
        id: string;
        /**
         * 角色id
         * @example `project.admin`
         */
        roleIdentifier: string;
        /**
         * 用户id，阿里云账号id，即aliyunPk
         * @example `19xx7043xxxxxxx914`
         */
        userIdentifier: string;
        /**
         * 用户类型
         * @example `user`
         */
        userType: string;
        /**
         * 资源类型
         * @example `Space`
         */
        targetType: string;
        /**
         * 创建时间
         * @example `1623916393000`
         */
        gmtCreate: number;
        /**
         * 修改时间
         * @example `1623916393000`
         */
        gmtModified: number;
        /**
         * 资源id，也就是项目id
         * @example `5e70xxxxxxcd000xxxxe96`
         */
        targetIdentifier: string;
    };
}
