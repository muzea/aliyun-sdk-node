export interface GetWorkitemRelationsResponse {
    /**
     * Id of the request
     * @example `ASSDS-ASSASX-XSAXSA-XSAXSAXS`
     */
    requestId: string;
    /**
     * 错误描述信息。
     * @example `error`
     */
    errorMsg: string;
    /**
     * - 当success为false，返回业务错误码；
     *
     * - 当success为true，返回空值。
     * @example `InvalidGroup.IdNotFound`
     */
    errorCode: string;
    /**
     * 请求是否成功。
     * - true：成功
     * - false：失败
     * @example `true`
     */
    success: boolean;
    /**
     * 置顶关联项信息
     */
    relationList: {
        /**
         * 工作项id
         * @example `deafe5f33xxxxx6a259d8dafd`
         */
        identifier: string;
        /**
         * 工作项标题
         * @example `标题内容`
         */
        subject: string;
        /**
         * 负责人aliyunPk
         * @example ` aliyun_1384605`
         */
        assignedTo: string;
        /**
         * 所属项目id
         * @example `2b856dxxxxxxb61d93676255ba`
         */
        spaceIdentifier: string;
        /**
         * 工作项的类型id
         * @example `Req`
         */
        categoryIdentifier: string;
        /**
         * 工作项类型id
         * @example `9uy29901re573f561d69jn40`
         */
        workitemTypeIdentifier: string;
        /**
         * 创建时间
         * @example `1667205617061`
         */
        gmtCreate: string;
        /**
         * 修改时间
         * @example `1667205617089`
         */
        gmtModified: string;
    }[];
}
