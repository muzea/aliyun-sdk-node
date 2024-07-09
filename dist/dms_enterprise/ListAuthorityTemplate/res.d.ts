export interface ListAuthorityTemplateResponse {
    /**
     * 请求ID，用于定位日志，排查问题。
     * @example `31853A2B-DC9D-5B39-8492-D2AC8BCF550E`
     */
    RequestId: string;
    /**
     * 错误码，请求异常时返回。
     * @example `UnknownError`
     */
    ErrorCode: string;
    /**
     * 调用失败时，返回的错误信息。
     * @example `UnknownError`
     */
    ErrorMessage: string;
    /**
     * 请求是否成功。返回值如下：
     * - **true**：请求成功。
     * - **false**：请求失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 租户ID。
     * @example `3***`
     */
    Tid: number;
    AuthorityTemplateViewList: {
        /**
         * 权限模板列表。
         */
        AuthorityTemplateView: {
            /**
             * 权限模板ID。
             * @example `2592`
             */
            TemplateId: number;
            /**
             * 权限模板创建者ID。
             * @example `522****`
             */
            CreatorId: number;
            /**
             * 权限模板名称。
             * @example `权限模板测试`
             */
            Name: string;
            /**
             * 权限模板描述信息。
             * @example `该模板为测试使用。`
             */
            Description: string;
            /**
             * 权限模板的创建时间，时间格式为yyyy-MM-DD HH:mm:ss。
             * @example `2023-10-26 11:37:47`
             */
            CreateTime: string;
        }[];
    };
    /**
     * 权限模板总数。
     * @example `10`
     */
    TotalCount: number;
}
