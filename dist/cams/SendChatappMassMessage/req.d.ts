export interface SendChatappMassMessageRequest {
    /**
     * 通道类型。取值：
     * - **whatsapp**。
     * - **viber**。
     * - **line**（开发中）。
     * @example `whatsapp`
     */
    "ChannelType": string;
    /**
     * 模板编码。
     * @example `744c4b5c79c9432497a075bdfca3****`
     */
    "TemplateCode"?: string;
    /**
     * 语言。详细语言代码列表，请参见[语言代码](~~463420~~)。
     * @example `en`
     */
    "Language": string;
    /**
     * 发送方号码。
     * @example `861387777****`
     */
    "From": string;
    /**
     * ISV客户wabaId。
     * > 过时的参数，请使用CustSpaceId。
     * @example `65921621816****`
     */
    "CustWabaId"?: string;
    /**
     * 回落策略ID。
     * <props="china">
     * > 中国站此字段无效。
     * </props>
     * @example `S0****`
     */
    "FallBackId"?: string;
    /**
     * 回落内容。
     * <props="china">
     * > 中国站此字段无效。
     * </props>
     * @example `回落短信`
     */
    "FallBackContent"?: string;
    /**
     * 任务ID。
     * @example `10000****`
     */
    "TaskId"?: string;
    /**
     * 接收方号码列表。
     */
    "SenderList": {
        /**
         * 接收方号码。
         * @example `861388988****`
         */
        To: string;
        /**
         * 模板参数。
         */
        TemplateParams: any;
        /**
         * 按钮的触发消息标识。
         */
        Payload: string[];
        /**
         * 商品信息。
         */
        ProductAction: {
            /**
             * 商品RetailerId。
             * @example `skkks99****`
             */
            ThumbnailProductRetailerId: string;
            /**
             * 商品列表（最多可以有10个分类，30个商品）。
             */
            Sections: {
                /**
                 * 分类名称。
                 * @example `abcd`
                 */
                Title: string;
                /**
                 * 商品列表。
                 */
                ProductItems: {
                    /**
                     * 商品RetailerId。
                     * @example `ksi3****`
                     */
                    ProductRetailerId: string;
                }[];
            }[];
        };
        /**
         * Flow消息对象。
         */
        FlowAction: {
            /**
             * flow token信息。
             * @example `kde****`
             */
            FlowToken: string;
            /**
             * flow默认参数。
             */
            FlowActionData: any;
        };
    }[];
    /**
     * ISV校验码，用于校验子账号是否由ISV授权。
     * @example `skdi3kksloslikd****`
     */
    "IsvCode"?: string;
    /**
     * 子账户空间ID。
     * @example `28251486512358****`
     */
    "CustSpaceId"?: string;
    /**
     * Viber消息发送超时时间，单位：秒，取值范围 30~1209600。
     * @example `50`
     */
    "Ttl"?: number;
    /**
     * Viber消息类型，取值：
     * - **pormotion**。
     * - **transaction**。
     * @example `promotion`
     */
    "Label"?: string;
    /**
     * Viber消息发送时tag信息。
     * @example `tag`
     */
    "Tag"?: string;
    /**
     * 消息在指定时间内没有返回已到达回执时回落, 不填代表不根据此时间判断回落，只有发送失败和有失败的状态报告时才会回落。时间单位为秒 最小值为60，最大值43200。
     * <props="china">
     * > 中国站此字段无效。
     * </props>
     * @example `120`
     */
    "FallBackDuration"?: number;
    /**
     * 回落规则。取值：
     * - **undelivered**：消息不能发送到端时回落（在发送状态时模板、参数需要校验通过，模板被封、号码被封等不做校验）。参数值为空时默认使用此规则。
     * - **sentFailed**：消息在校验模板、模板变量等参数时，校验不通过也会回落。只会强校验channelType, type, messageType, to, from(是否存在) 几个参数。
     * <props="china">
     * > 中国站此字段无效。
     * </props>
     * @example `undelivered`
     */
    "FallBackRule"?: string;
    /**
     * 模板名称。
     * @example `test_name`
     */
    "TemplateName"?: string;
}
