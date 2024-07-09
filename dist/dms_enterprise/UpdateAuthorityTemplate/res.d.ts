export interface UpdateAuthorityTemplateResponse {
    /**
     * 请求ID。
     * @example `4E1D2B4D-3E53-4ABC-999D-1D2520B3471A`
     */
    RequestId: string;
    /**
     * 错误码。
     * @example `UnknownError`
     */
    ErrorCode: string;
    /**
     * 错误消息。
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
         * 权限模板创建者ID。
         * @example `12***`
         */
        CreatorId: number;
        /**
         * 权限模板名称。
         * @example `测试模板。`
         */
        Name: string;
        /**
         * 权限模板描述信息。
         * @example `此模板用于业务测试。`
         */
        Description: string;
    };
    /**
     * 请求是否成功，返回值说明如下：
     * - **true**：请求成功。
     * - **false**：请求失败。
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
