export interface CreateAuthorityTemplateResponse {
    /**
     * 请求ID。
     * @example `0C1CB646-1DE4-4AD0-B4A4-7D47DD52E931`
     */
    RequestId: string;
    /**
     * 错误码。
     * @example `UnknownError`
     */
    ErrorCode: string;
    /**
     * 错误信息。
     * @example `UnknownError`
     */
    ErrorMessage: string;
    /**
     * 权限模板详细信息。
     */
    AuthorityTemplateView: {
        /**
         * 权限模板ID。
         * @example `1563`
         */
        TemplateId: number;
        /**
         * 权限模板名称。
         * @example `测试模板。`
         */
        Name: string;
        /**
         * 权限模板创建者ID。
         * @example `12***`
         */
        CreatorId: number;
        /**
         * 权限模板描述内容。
         * @example `此模板用于业务测试。`
         */
        Description: string;
        /**
         * 权限模板的创建时间，时间格式为yyyy-MM-DD HH:mm:ss。
         * @example `2023-01-11 14:17:33`
         */
        CreateTime: string;
    };
    /**
     * 请求是否成功，返回值如下：
     * - **true**：请求成功
     * - **false**：请求失败
     * @example `true`
     */
    Success: boolean;
    /**
     * 租户ID。
     * > 取自系统右上角头像处悬停展示的租户ID信息，详情请参见[查看租户信息](~~181330~~)。
     * @example `3***`
     */
    Tid: number;
}
