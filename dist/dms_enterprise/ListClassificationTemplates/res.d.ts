export interface ListClassificationTemplatesResponse {
    /**
     * 请求ID。
     * @example `90260530-565C-42B9-A6E8-893481FE6AB6`
     */
    RequestId: string;
    /**
     * 请求是否成功，返回值如下：
     * - **true**：请求成功
     * - **false**：请求失败
     * @example `true`
     */
    Success: boolean;
    /**
     * 错误信息。
     * @example `UnknownError`
     */
    ErrorMessage: string;
    /**
     * 错误码。
     * @example `UnknownError`
     */
    ErrorCode: string;
    /**
     * 模板列表。
     */
    TemplateList: {
        /**
         * 分类分级模板ID。
         * @example `3**`
         */
        TemplateId: number;
        /**
         * 分类分级模板名称。
         * @example `test`
         */
        Name: string;
        /**
         * 分类分级模板类型。取值：
         * - **INNER**：内置
         * - **USER_DEFINE**：自定义
         * @example `USER_DEFINE`
         */
        TemplateType: string;
        /**
         * 备注信息。
         * @example `test`
         */
        Remark: string;
    }[];
}
