export interface GetClassificationTemplateResponse {
    /**
     * 请求ID。用于定位日志，排查问题。
     * @example `427688B8-ADFB-4C4E-9D45-EF5C1FD6E23D`
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
     * 实例绑定的分类分级模板信息。
     */
    ClassificationResourceTemplateMap: {
        /**
         * 分类分级模板ID。
         * @example `3***`
         */
        TemplateId: number;
        /**
         * 分类分级模板类型。取值：
         * - **INNER**：内置模板。
         * - **USER_DEFINE**：自定义模板。
         * @example `INNER`
         */
        TemplateType: string;
        /**
         * 资源ID。目前支持的资源类型为INSTANCE，该ID对应为实例的InstanceId，可调用[ListInstances](~~141936~~)接口获取该参数的值。
         * @example `24****`
         */
        ResourceId: number;
        /**
         * 资源类型。取值为**INSTANCE**（实例）。
         * @example `INSTANCE`
         */
        ResourceType: string;
    };
    /**
     * 请求是否成功，返回值说明如下：
     * - **true**：请求成功。
     * - **false**：请求失败。
     * @example `true`
     */
    Success: boolean;
}
