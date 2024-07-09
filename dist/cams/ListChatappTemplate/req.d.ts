export interface ListChatappTemplateRequest {
    /**
     * 模板名称。
     * @example `hello_whatsapp`
     */
    "Name"?: string;
    /**
     * 模板语言。 详细语言代码，请参见[语言代码](~~463420~~)。
     * @example `en`
     */
    "Language"?: string;
    /**
     * 审核状态。取值：
     * - **pass**：通过审核。
     * - **fail**：拒绝审核。
     * - **auditing**：审核中。
     * - **unaudit**：审核暂停处理。
     * @example `pass`
     */
    "AuditStatus"?: string;
    /**
     * 分页字段。
     * @example `"page": "{\"index\": 1,\"size\": 20}`
     */
    "Page"?: {
        /**
         * 页码，默认为1。
         * @example `1`
         */
        Index: number;
        /**
         * 每次查询模板数量，默认为10。
         * @example `10`
         */
        Size: number;
    };
    /**
     * ISV客户WabaId
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
     * ISV子客户的SpaceId
     * @example `28251486512358****`
     */
    "CustSpaceId"?: string;
    /**
     * 模板类型。
     * - **WHATSAPP**
     * - **VIBER**
     * - LINE（开发中）
     * @example `WHATSAPP`
     */
    "TemplateType"?: string;
    /**
     * 模板编码
     * @example `838888822*****`
     */
    "Code"?: string;
}
