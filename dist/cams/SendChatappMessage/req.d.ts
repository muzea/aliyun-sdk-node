export interface SendChatappMessageRequest {
    /**
     * 类型。取值：
     * - **whatsapp**。
     * - **viber**。
     * - **line**（开发中）。
     * @example `whatsapp`
     */
    "ChannelType": string;
    /**
     * 消息类型。取值：
     * - **template**：在控制台已被审核通过的消息模板，可以在任意时间发送。
     * - **message**：任意格式的消息，Whatsapp类型消息时，时间限制为在收到用户最后一条消息后的24小时内可发送此类消息。Viber消息无此限制。
     * @example `template`
     */
    "Type": string;
    /**
     * 当Type为**message**时，指定消息的详细类型。
     * **Whatsapp消息类型：**
     * - **text**，纯文本消息。
     * - **image**，图片消息。
     * - **video**，视频消息。
     * - **audio**，音频消息。
     * - **document**，文档消息。
     * - **interactive** ，交互消息。
     * - **contacts**，联系人消息。
     * - **location**，位置消息。
     * - **sticker**，贴纸消息。
     * - **reaction**，心情消息。
     * **Viber消息类型：**
     * - **text**，文本消息。
     * - **image**，图片消息。
     * - **video**， 视频消息。
     * - **document**， 文件消息。
     * - **text_button**， 文本+按钮消息。
     * - **text\_image_button**， 文本+图片+按钮消息。
     * - **text_video**， 文本+视频消息。
     * - **text\_video_button**， 文本+视频+按钮消息。
     * - **text_image**， 文本+图片消息。
     * > 详细字段说明，请参见[字段说明](~~454530~~)。
     * @example `text `
     */
    "MessageType"?: string;
    /**
     * 模板Code。Type为**template**时此字段必填。
     * @example `744c4b5c79c9432497a075bdfca3****`
     */
    "TemplateCode"?: string;
    /**
     * 模板语言。Type为**template**时此字段必填，详细语言代码列表，请参见[语言代码](~~463420~~)。
     * @example `en`
     */
    "Language"?: string;
    /**
     * 消息发送方号码。
     * > 当前支持WhatsApp账号且在控制台审核通过的号码。
     * @example `861360000****`
     */
    "From": string;
    /**
     * 消息接收方号码。
     * @example `861390000****`
     */
    "To": string;
    /**
     * 消息模板变量。
     */
    "TemplateParams"?: any;
    /**
     * 消息内容。
     * **Whatsapp消息备注：**
     * -  当**messageType**为**text**时，**text**字段为必填，**Caption**禁止填写。
     * - 当**messageType**为**image**时，**Link**必填。
     * - 当**messageType**为**video**时，**Link**必填。
     * - 当**messageType**为**audio**时，**Link**必填，**Caption**字段无效。
     * - 当**messageType**为**document**时，**Link**和**FileName**字段必填，**Caption**字段无效。
     * - 当**messageType**为**interactive**时，**type**和**action**字段必填。
     * - 当**messageType**为**contacts**时，**name**字段必填。
     * - 当**messageType**为**location**时，**longitude**和**latitude**字段必填。
     * - 当**messageType**为**sticker**时，**Link**字段必填，**Caption**和**FileName**字段无效。
     * - 当**messageType**为**reaction**时，**messageId**和**emoji**字段必填。
     * **Viber消息备注：**
     * - 当**messageType**为**text**时，**text**字段必填。
     * - 当**messageType**为**image**时，**link**字段必填。
     * - 当**messageType**为**video**时，**link**, **thumbnail**, **fileSize**, **duration**字段必填。
     * - 当**messageType**为**document**时，**link**, **fileName**, **fileType**字段为必填。
     * - 当**messageType**为**text_button**时，**text**, **caption**, **action**字段为必填。
     * - 当**messageType**为**text_image_button**时，**text**, **link**, **caption**, **action**字段为必填。
     * - 当**messageType**为**text_video**时，**text**, **link**, **thumbnail**, **fileSize**, **duration**字段为必填。
     * - 当**messageType**为**text_video_button**时，**text**, **link**, **thumbnail**, **fileSize**, **duration**, **caption**字段为必填，**action**字段不能为值。
     * @example `{"text": "hello whatsapp", "link": "", "caption": "", "fileName": "" }`
     */
    "Content"?: string;
    /**
     * 按钮的触发消息。
     * @example `payloadtext1,payloadtext2,payloadtext3`
     */
    "Payload"?: string[];
    /**
     * ISV客户wabaId。
     * > 过时的参数，请使用CustSpaceId。
     * @example `65921621816****`
     */
    "CustWabaId"?: string;
    /**
     * 失败回落策略ID。可以在控制台创建相关策略并查看。
     * <props="china">
     * > 中国站此字段无效。
     * </props>
     * @example `S_00****`
     */
    "FallBackId"?: string;
    /**
     * 失败回落消息内容。
     * <props="china">
     * > 中国站此字段无效。
     * </props>
     * @example `This is a fallback message.`
     */
    "FallBackContent"?: string;
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
     * 回复的消息ID。
     * @example `61851ccb2f1365b16aee****`
     */
    "ContextMessageId"?: string;
    /**
     * Viber消息跟踪数据值。
     * @example `tracking_id:12****`
     */
    "TrackingData"?: string;
    /**
     * Viber消息类型。当ChannelType=viber时为必填，取值：
     * - **pormotion**。
     * - **transaction**。
     * @example `promotion`
     */
    "Label"?: string;
    /**
     * Viber消息发送超时时间，单位：秒，取值范围 30~1209600。
     * @example `50`
     */
    "Ttl"?: number;
    /**
     * Viber消息发送时tag信息。
     * @example `tag`
     */
    "Tag"?: string;
    /**
     * 任务ID。
     * @example `10000****`
     */
    "TaskId"?: string;
    /**
     * 消息在指定时间内没有返回已到达回执时回落, 不填代表不根据此时间判断回落，仅**发送失败**和**有失败的状态报告**时才会回落。时间单位为秒，最小值为60，最大值43200。
     * <props="china">
     * > 中国站此字段无效。
     * </props>
     * @example `120`
     */
    "FallBackDuration"?: number;
    /**
     * Whatsapp CATALOG/MPM 消息发送是商品信息。
     */
    "ProductAction"?: {
        /**
         * 商品RetailerId。
         * @example `S238SK****`
         */
        ThumbnailProductRetailerId: string;
        /**
         * 商品列表（最多可以有10个分类，30个商品）。
         */
        Sections: {
            /**
             * 分类名称。
             * @example `测试`
             */
            Title: string;
            /**
             * 商品列表。
             */
            ProductItems: {
                /**
                 * 商品RetailerId。
                 * @example `9I39E****`
                 */
                ProductRetailerId: string;
            }[];
        }[];
    };
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
     * Flow发送数据。
     */
    "FlowAction"?: {
        /**
         * flow token信息。
         * @example `1122***`
         */
        FlowToken: string;
        /**
         * flow默认参数。
         */
        FlowActionData: any;
    };
    /**
     * 模板名称。
     * @example `test_name`
     */
    "TemplateName"?: string;
}
