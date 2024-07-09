export interface ListChatappTemplateResponse {
    /**
     * 请求ID。
     * @example `90E63D28-E31D-1EB2-8939-A9486641****`
     */
    RequestId: string;
    /**
     * 请求状态码。
     * - 返回OK代表请求成功。
     * - 其他错误码，请参见[错误码列表](~~196974~~)。
     * @example `OK`
     */
    Code: string;
    /**
     * 错误提示信息。
     * @example `User not authorized to operate on the specified resource.`
     */
    Message: string;
    /**
     * 列表数据。
     */
    ListTemplate: {
        /**
         * 模板名称。
         * @example `hello_whatsapp`
         */
        TemplateName: string;
        /**
         * 模板编码。
         * @example `744c4b5c79c9432497a075bdfca3****`
         */
        TemplateCode: string;
        /**
         * 审核状态。取值：
         * - **pass**：通过审核。
         * - **fail**：拒绝审核。
         * - **auditing**：审核中。
         * - **unaudit**：审核暂停处理。
         * @example `pass`
         */
        AuditStatus: string;
        /**
         * 模板语言。 详细语言代码，请参见[语言代码](~~463420~~)。
         * @example `en`
         */
        Language: string;
        /**
         * Whatsapp模板分类。取值：
         * - **UTILITY**：交易相关。
         * - **MARKETING**：营销性模板。
         * - **AUTHENTICATION**：身份验证。
         * Viber模板分类
         * - **text**：纯文本
         * - **image**：纯图片
         * - **text_image_button**：文本 + 图片 + 按钮
         * - **text_button**：文本 + 按钮
         * - **document**： 文件
         * - **video**：视频
         * - **text_video**：文本 + 视频
         * - **text_video_button**：文本 + 视频 + 按钮
         * - **text_image**：文本 + 图片
         * @example `UTILITY`
         */
        Category: string;
        /**
         * 模板类型，取值为WHATSAPP/VIBER
         * @example `WHATSAPP`
         */
        TemplateType: string;
        /**
         * 模板审核被拒的原因
         * @example `None`
         */
        Reason: string;
    }[];
    /**
     * 总记录条数。
     * @example `1`
     */
    Total: number;
    /**
     * 访问被拒绝详细信息。
     * @example `无`
     */
    AccessDeniedDetail: string;
}
