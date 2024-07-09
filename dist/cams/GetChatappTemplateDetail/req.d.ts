export interface GetChatappTemplateDetailRequest {
    /**
     * 模板Code。
     * @example `****4b5c79c9432497a075bdfca36bf5`
     */
    "TemplateCode"?: string;
    /**
     * 模板语言。 详细语言代码，请参见[语言代码](~~463420~~)。
     * @example `en_US`
     */
    "Language": string;
    /**
     * ISV客户WabaId。
     * > 过时的参数，请使用CustSpaceId
     * @example `65921621816****
    `
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
     * 模板类型。
     * - **WHATSAPP**
     * - **VIBER**
     * @example `WHATSAPP`
     */
    "TemplateType"?: string;
    /**
     * 模板名称。
     * @example `test_name`
     */
    "TemplateName"?: string;
}
