export interface ListSensitivityLevelResponse {
    /**
     * 请求ID。用于定位日志，排查问题。
     * @example `4E1D2B4D-3E53-4ABC-999D-1D2520B3471A`
     */
    RequestId: string;
    /**
     * 请求是否成功，返回值如下：
     * - **true**：请求成功。
     * - **false**：请求失败。
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
     * 敏感序列列表。
     */
    SensitivityLevelList: {
        /**
         * 敏感序列名称。
         * @example `S2`
         */
        Name: string;
        /**
         * 分类分级模板ID。
         * @example `1070`
         */
        TemplateId: string;
        /**
         * 分类分级模板类型。取值：
         * - **INNER**：内置模板。
         * - **USER_DEFINE**：自定义模板。
         * @example `INNER`
         */
        TemplateType: string;
        /**
         * 标注该敏感序列的字段是否以明文展示。
         * @example `true`
         */
        IsPlain: boolean;
    }[];
}
