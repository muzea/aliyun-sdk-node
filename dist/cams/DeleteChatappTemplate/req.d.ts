export interface DeleteChatappTemplateRequest {
    /**
     * 模板编码。
     * @example `744c4b5c79c9432497a075bdfca3****`
     */
    "TemplateCode"?: string;
    /**
     * ISV客户WabaId。
     * > 过时的参数，请使用CustSpaceId
     * @example `65921621816****`
     */
    "CustWabaId"?: string;
    /**
     * ISV校验码，用于校验子账号是否由ISV授权。
     * @example `skdi3kksloslikdkkdk`
     */
    "IsvCode"?: string;
    /**
     * ISV子客户的SpaceId。
     * @example `28251486512358****`
     */
    "CustSpaceId"?: string;
    /**
     * 模板名称。
     * @example `test_name`
     */
    "TemplateName"?: string;
    /**
     * 语言。
     * @example `zh_CN`
     */
    "Language"?: string;
    /**
     * 模板类型，当带语言删除时templateType为必填。
     * @example `WHATSAPP`
     */
    "TemplateType"?: string;
}
