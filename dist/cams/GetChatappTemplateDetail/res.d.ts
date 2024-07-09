export interface GetChatappTemplateDetailResponse {
    /**
     * 请求ID。
     * @example `744c4b5c79c9432497a075bdfca3****`
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
     * 返回数据。
     * @example `{ 		"category": "ACCOUNT_UPDATE", 		"name": "account_notice", 		"language": "en_US", 		"templateCode": "744c4b5c79c9432497a075bdfca3****", 		"auditStatus": "APPROVED", 		"components": "[{\"type\":\"BODY\",\"text\":\"body_text$(textVariable)\"},{\"type\":\"HEADER\",\"formate\":\"IMAGE\",\"url\":\"$(linkVariable)\"},{\"type\":\"FOOTER\",\"text\":\"footer-text\"},{\"type\":\"BUTTONS\",\"buttons\":[{\"type\":\"PHONE_NUMBER\",\"text\":\"phone-button-text\",\"phone_number\":\"+861388888****\"},{\"type\":\"URL\",\"text\":\"url-button-text\",\"url\":\"https://www.website.com/\"}]}]", 		"example": "{\"textVariable\": \"text\", \"linkVariable\": \"link\"}" 	}`
     */
    Data: {
        /**
         * Whatsapp模板分类。取值：
         * - **UTILITY**：交易相关。
         * - **MARKETING**：营销性模板。
         * - **AUTHENTICATION**：身份验证。
         * Viber模板分类
         * - **text**：纯文本
         * - **image**：纯图片
         * - **text\_image_button**：文本 + 图片 + 按钮
         * - **text_button**：文本 + 按钮
         * - **document**： 文件
         * - **video**：视频
         * - **text_video**：文本 + 视频
         * - **text\_video_button**：文本 + 视频 + 按钮
         * - **text_image**：文本 + 图片
         * > 当Viber模板取值为text_video_button时，按钮并不能打开网页，只是在网页中打开当前消息的视频，所以按钮的URL中不需要填写任何地址信息
         * @example `UTILITY`
         */
        Category: string;
        /**
         * 模板Code。
         * @example `744c4b5c79c9432497a075bdfca3****`
         */
        TemplateCode: string;
        /**
         * 模板名称。
         * @example `hello_whatsapp`
         */
        Name: string;
        /**
         * 模板语言。 详细语言代码，请参见[语言代码](~~463420~~)。
         * @example `en_US`
         */
        Language: string;
        /**
         * 变量举例。
         */
        Example: any;
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
         * 消息模板组件列表。
         */
        Components: {
            /**
             * 组件类型。
             * - **BODY**
             * - **HEADER**
             * - **FOOTER**
             *  - **BUTTONS**
             * - **CAROUSEL**
             * - **LIMITED_TIME_OFFER**
             * > - WhatsApp类型模板时，**BODY**组件的字符长度不超度是1024个字符。**HEADER**和**FOOTER**组件的字符长度不超过60个字符。
             * > - Viber类型模板时，**FOOTER**，**CAROUSEL**，**LIMITED_TIME_OFFER** 类型无效。
             * > - Viber类型模板中，图片、视频、文件都是放在**HEADER**中（终端将图片显示在文本之下）。
             * @example `BODY`
             */
            Type: string;
            /**
             * 素材路径。
             * @example `https://image.developer.aliyundoc.com`
             */
            Url: string;
            /**
             * 发送消息的文本。
             * @example `你好`
             */
            Text: string;
            /**
             * 文件的描述。
             * @example `新文件已上传`
             */
            Caption: string;
            /**
             * 文件的名称。
             * @example `快递文件`
             */
            FileName: string;
            /**
             * 格式。
             * @example `TEXT`
             */
            Format: string;
            /**
             * 按钮列表，仅适用于**BUTTONS**组件。
             * > Whatsapp按钮数量说明
             * > - Whatsapp在类型为MARKETING/UTILITY时，最多允许10个按钮
             * > - PHONE_NUMBER类型的按钮只允许存在1个
             * > - URL类型的按钮最多允许存在2个
             * > - QUICK_REPLY按钮不允许和PHONE_NUMBER/URL按钮乱序出现
             */
            Buttons: {
                /**
                 * 按钮类型。
                 * - **PHONE_NUMBER**：拨打电话按钮
                 * - **URL**：网页按钮
                 * - **QUICK_REPLY**：快速回复按钮
                 * - **COPY_CODE**：复制验证码、优惠码
                 * - **ONE_TAP**：AUTHENTICATION模板时回填按钮
                 * > - WhatsApp类型模板且Category为AUTHENTICATION时，按钮只允许存在一个，并且类型只能是COPY_CODE/ONE_TAP, 当类型选择COPY_CODE时，Text为必填。当类型选择ONE_TAP时，Text（在终端没有装目标应用时显示，表示采用复制验证码按钮的名称）必填，SignatureHash, PackageName, AutofillText属性必填。
                 * > - Viber类型的模板只允许一个Button且只能是URL类型。
                 * @example `PHONE_NUMBER`
                 */
                Type: string;
                /**
                 * 按钮显示的名称。
                 * @example `打电话`
                 */
                Text: string;
                /**
                 * 电话号码，仅按钮类型为**PHONE_NUMBER**时有效。
                 * @example `+861398745****`
                 */
                PhoneNumber: string;
                /**
                 * 点击链接按钮将访问的网址。
                 * @example `https://example.com
                `
                 */
                Url: string;
                /**
                 * 网址类型。
                 * - **static**：静态。
                 * - **dynamic**：动态。
                 * @example `static`
                 */
                UrlType: string;
                /**
                 * WhatsApp模板，Category为Authentication，并且Button Type为ONE_TAP时必填，表示Whatsapp调起应用的签名Hash值。
                 * @example `2993839`
                 */
                SignatureHash: string;
                /**
                 * WhatsApp模板，Category为Authentication，并且Button Type为ONE_TAP时必填，表示Whatsapp调起应用的包名。
                 * @example `com.aliyun`
                 */
                PackageName: string;
                /**
                 * WhatsApp模板，Category为Authentication，并且Button Type为ONE_TAP时必填，Whatsap Autofill操作的按钮文本。
                 * @example `Autofill`
                 */
                AutofillText: string;
                /**
                 * WhatsApp模板，在Category为Marketing,并且Button type为QUICK_REPLY时有效，表示按钮为营销退订按钮，客户如果点击了此按钮，并且在chatapp平台上配置了发送控制操作，则后续Marketing消息则不会发送到客户。
                 * @example `false`
                 */
                IsOptOut: boolean;
                /**
                 * 扩展字段。
                 */
                ExtendAttrs: {
                    /**
                     * 下一个模板编码。
                     * @example `20939920093993`
                     */
                    NextTemplateCode: string;
                    /**
                     * 下一个模板名称。
                     * @example `abc`
                     */
                    NextTemplateName: string;
                    /**
                     * 下一个模板语言。
                     * @example `en`
                     */
                    NextLanguageCode: string;
                    /**
                     * 事件类型。
                     * @example `nextCard`
                     */
                    Action: string;
                    /**
                     * 意图编码。
                     * @example `test`
                     */
                    IntentCode: string;
                };
                /**
                 * 优惠券码。
                 * @example `202039ksjs`
                 */
                CouponCode: string;
                /**
                 * Flow ID。
                 * @example `3838292983`
                 */
                FlowId: string;
                /**
                 * Flow数据事件类型，取值：
                 * - NAVIGATE：导航
                 * - DATA_EXCHANGE：数据交换
                 * @example `NAVIGATE`
                 */
                FlowAction: string;
                /**
                 * 跳转屏，在FlowAction=NAVIGATE时必填。
                 * @example `DETAILS`
                 */
                NavigateScreen: string;
                /**
                 * 验证码ONE_TAP/ZERO_TAP支持的应用。
                 */
                SupportedApps: {
                    /**
                     * 包签名HASH。
                     * @example `29kdkeik939`
                     */
                    SignatureHash: string;
                    /**
                     * 包名。
                     * @example `com.test`
                     */
                    PackageName: string;
                }[];
            }[];
            /**
             * Viber带视频消息的缩略图。
             * @example `https://img.png`
             */
            ThumbUrl: string;
            /**
             * Viber视频消息的视频时长，取值范围：0~600。
             * @example `50`
             */
            Duration: number;
            /**
             * Viber文件消息的文件类型。
             * @example `docx`
             */
            FileType: string;
            /**
             * 位置纬度属性。
             * @example `28.001`
             */
            Latitude: string;
            /**
             * 位置经度属性。
             * @example `120.002`
             */
            Longitude: string;
            /**
             * 位置名称。
             * @example `杭州`
             */
            LocationName: string;
            /**
             * 位置地址。
             * @example `杭州`
             */
            LocationAddress: string;
            /**
             * WhatsApp类型模板，Category为Authentication，并且Component Type为Body时有效，表示在Body上面显示不要将验证码信息提供给其它人的提示信息。
             * @example `false`
             */
            AddSecretRecommendation: boolean;
            /**
             * WhatsApp Authentication模板验证码有效期（分钟），只在Whatsapp类型消息，Category为Authentication并且Component Type为Footer时有效（此信息显示在Footer位置）。
             * @example `5`
             */
            CodeExpirationMinutes: number;
            /**
             * LTO模板中，优惠码是否有过期时间。
             * @example `true`
             */
            hasExpiration: boolean;
            /**
             * LTO模板时，优惠码过期变量。
             * @example `$(offerExpirationTimeMs)`
             */
            OfferExpirationTimeMs: string;
            /**
             * 轮播卡片列表。
             */
            Cards: {
                /**
                 * 卡片控件列表。
                 */
                CardComponents: {
                    /**
                     * 组件类型。
                     * @example `HEADER`
                     */
                    Type: string;
                    /**
                     * 卡片文本内容。
                     * @example `Body`
                     */
                    Text: string;
                    /**
                     * 网页地址。
                     * @example `https://aliyun.com`
                     */
                    Url: string;
                    /**
                     * Carousel模板中Header的类型，只支持IMAGE/VIDEO，所有卡片的Header必须一致。
                     * @example `HEADER`
                     */
                    Format: string;
                    /**
                     * 卡片按钮列表
                     */
                    Buttons: {
                        /**
                         * Carousel模板的按钮类型
                         * 取值：URL/PHONE_NUMBER/QUICK_REQLY
                         * @example `URL`
                         */
                        Type: string;
                        /**
                         * 按钮内容。
                         * @example `按钮文本`
                         */
                        Text: string;
                        /**
                         * 点击按钮后将访问的网址。
                         * @example `https://aliyun.com`
                         */
                        Url: string;
                        /**
                         * 网址类型。取值：
                         *
                         * - static：静态
                         * - dynamic：动态。
                         * @example `static`
                         */
                        UrlType: string;
                        /**
                         * 号码。
                         * @example `+861380005****`
                         */
                        PhoneNumber: string;
                    }[];
                }[];
            }[];
        }[];
        /**
         * 模板类型。
         * - **WHATSAPP**
         * - **VIBER**
         * @example `WHATSAPP`
         */
        TemplateType: string;
        /**
         * 模板质量。
         * @example `GREEN`
         */
        QualityScore: string;
        /**
         * Whatsapp中Authentication类型模板发送消息时的消息有效期。
         * @example `120`
         */
        MessageSendTtlSeconds: number;
        /**
         * 模板审核被拒的原因。
         * @example `None`
         */
        Reason: string;
    };
    /**
     * 访问被拒绝详细信息。
     * @example `无`
     */
    AccessDeniedDetail: string;
}
