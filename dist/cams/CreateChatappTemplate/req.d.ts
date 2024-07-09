export interface CreateChatappTemplateRequest {
    /**
     * Whatsapp模板分类：
     * - **UTILITY**：交易相关。
     * - **MARKETING**：营销性模板。
     * - **AUTHENTICATION**：身份验证。
     * Viber模板分类：
     * - **text**：纯文本
     * - **image**：纯图片
     * - **text_image_button**：文本 + 图片 + 按钮
     * - **text_button**：文本 + 按钮
     * - **document**：文件
     * - **video**：视频
     * - **text_video**：文本 + 视频
     * - **text_video_button**：文本 + 视频 + 按钮
     * - **text_image**：文本 + 图片
     * @example `UTILITY`
     */
    "Category": string;
    /**
     * 消息模板组件列表。
     * > 在Category=AUTHENTICATION时，Components不允许出现Type=HEADER的节点，并且Type=BODY或FOOTER时，Text内容应该为空。
     */
    "Components": {
        /**
         * 组件类型。取值：
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
         * 发送消息的文本。
         * > 在Category=AUTHENTICATION中，此属性值为空。
         * @example `hello whatsapp`
         */
        Text: string;
        /**
         * 媒体资源类型。
         * - **TEXT**：文本
         *
         * - **IMAGE**：图片
         * - **DOCUMENT**：文档
         * - **VIDEO**：视频
         * @example `TEXT`
         */
        Format: string;
        /**
         * 素材路径。
         * > Viber类型时图片建议大小：800px * 800px。
         * @example `https://image.developer.aliyundoc.com`
         */
        Url: string;
        /**
         * 文件的描述。
         * @example `这是一个视频`
         */
        Caption: string;
        /**
         * 文件的名称。
         * @example `快递视频`
         */
        FileName: string;
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
             * > - Whatsapp类型模板且Category为AUTHENTICATION时，按钮只允许存在一个，并且类型只能是COPY_CODE/ONE_TAP, 当类型选择COPY_CODE时，Text为必填。当类型选择ONE_TAP时，Text（在终端没有装目标应用时显示，表示采用复制验证码按钮的名称）必填，SignatureHash, PackageName, AutofillText属性必填。
             * > - Viber类型的模板只允许一个Button且只能是URL类型。
             * @example `PHONE_NUMBER`
             */
            Type: string;
            /**
             * 按钮显示的名称。
             * @example `Call Me`
             */
            Text: string;
            /**
             * 电话号码，仅按钮类型为**PHONE_NUMBER**时有效。
             * @example `+861368897****`
             */
            PhoneNumber: string;
            /**
             * 点击链接按钮将访问的网址。
             * @example `https://example.com`
             */
            Url: string;
            /**
             * 网址类型。
             * - **static**：静态
             * - **dynamic**：动态
             * @example `static`
             */
            UrlType: string;
            /**
             * Whatsapp模板，Category为AUTHENTICATION且Button Type为ONE_TAP时必填，表示Whatsapp调起应用的签名Hash值。
             * @example `wi299382`
             */
            SignatureHash: string;
            /**
             * Whatsapp模板，Category为AUTHENTICATION且Button Type为ONE_TAP/ZERO_TAP时必填，表示Whatsapp调起应用的包名。
             * @example `com.demo`
             */
            PackageName: string;
            /**
             * Whatsapp模板，Category为AUTHENTICATION且Button Type为ONE_TAP/ZERO_TAP时必填，Whatsap Autofill操作的按钮文本。
             * @example `Autofill`
             */
            AutofillText: string;
            /**
             * Whatsapp模板，在Category为Marketing,并且Button type为QUICK_REPLY时有效，表示按钮为营销退订按钮，客户如果点击了此按钮，且在ChatApp已配置了发送控制操作，则后续Marketing消息则不会发送到客户。
             * @example `false`
             */
            IsOptOut: boolean;
            /**
             * 优惠码值，只支持字母+数字，可以传入变量如$(couponCode)，在发送时再传入优惠码
             * @example `120293`
             */
            CouponCode: string;
            /**
             * Flow ID。
             * @example `479884093605****`
             */
            FlowId: string;
            /**
             * Flow数据事件类型。取值：
             * - DATA_EXCHANGE：数据交换。
             * - NAVIGATE：导航，
             * @example `NAVIGATE`
             */
            FlowAction: string;
            /**
             * 跳转屏，在FlowAction=NAVIGATE时必填。
             * @example `DETAILS`
             */
            NavigateScreen: string;
            /**
             * 支持的APP列表。
             */
            SupportedApps: {
                /**
                 * WhatsApp模板，Category为AUTHENTICATION且Button Type为ONE_TAP/ZERO_TAP时必填，表示Whatsapp调起应用的签名Hash值。
                 * @example `ieid83kdiek`
                 */
                SignatureHash: string;
                /**
                 * WhatsApp模板，Category为AUTHENTICATION且Button Type为ONE_TAP/ZERO_TAP时必填，表示Whatsapp调起应用的包名。
                 * @example `com.kuaidian.waimaistaff`
                 */
                PackageName: string;
            }[];
        }[];
        /**
         * Viber带视频消息的缩略图。
         * @example `https://cdn.multiplymall.mobiapp.cloud/yunmall/B-LM-LMALL202207130001/20220730/d712a057-a6af-4513-bbe6-7ee57ea60983.png?x-oss-process=image/resize,w_100`
         */
        ThumbUrl: string;
        /**
         * Viber视频消息的视频时长(秒)，取值范围为0~600。
         * @example `120`
         */
        Duration: number;
        /**
         * Viber文件消息的文件类型。
         * @example `docx`
         */
        FileType: string;
        /**
         * Whatsapp AUTHENTICATION模板验证码有效期（分钟），只在Whatsapp类型消息，Category为AUTHENTICATION并且Component Type为Footer时有效（此信息显示在Footer位置）。
         * @example `5`
         */
        CodeExpirationMinutes: number;
        /**
         * Whatsapp类型模板，Category为AUTHENTICATION且Component Type为Body时有效，表示在Body上面显示不要将验证码信息提供给其它人的提示信息。
         * @example `true`
         */
        AddSecretRecommendation: boolean;
        /**
         * 优惠码是否存在过期时间，在type = LIMITED_TIME_OFFER时使用。
         * @example `true`
         */
        HasExpiration: boolean;
        /**
         * Carousel模板卡片列表。
         */
        Cards: {
            /**
             * Carousel卡片中控件列表。
             */
            CardComponents: {
                /**
                 * 组件类型。取值：
                 * - **BODY**
                 * - **HEADER**
                 * - **BUTTONS**
                 * @example `BODY`
                 */
                Type: string;
                /**
                 * 媒体资源类型，在Type = HEADER时有效。
                 * - **IMAGE**：图片
                 * - **VIDEO**：视频
                 * @example `IMAGE`
                 */
                Format: string;
                /**
                 * Carousel卡片中BODY的内容。
                 * @example `Who is the very powerful team`
                 */
                Text: string;
                /**
                 * 素材路径。
                 * @example `https://alibaba.com/img.png`
                 */
                Url: string;
                /**
                 * 按钮列表，仅适用于BUTTONS组件。Carousel每个卡片最多只能有两个按钮。
                 */
                Buttons: {
                    /**
                     * 按钮文本。
                     * @example `Call me`
                     */
                    Text: string;
                    /**
                     * 按钮类型。
                     * - **PHONE_NUMBER**：拨打电话按钮
                     * - **URL**：网页按钮
                     * - **QUICK_REPLY**：快速回复按钮
                     * @example `PHONE_NUMBER`
                     */
                    Type: string;
                    /**
                     * 点击按钮后将访问的网址。
                     * @example `https://alibaba.com/xx`
                     */
                    Url: string;
                    /**
                     * 网址类型
                     * - **static**: 静态
                     * - **dynamic**: 动态
                     * @example `static`
                     */
                    UrlType: string;
                    /**
                     * 电话号码。
                     * @example `+86138007****`
                     */
                    PhoneNumber: string;
                }[];
            }[];
        }[];
    }[];
    /**
     * 模板名称。
     * @example `hello_whatsapp`
     */
    "Name": string;
    /**
     * 模板语言。 详细语言代码，请参见[语言代码](~~463420~~)。
     * @example `en`
     */
    "Language": string;
    /**
     * 创建模板的示例。
     */
    "Example"?: any;
    /**
     * 模板类型。
     * - **WHATSAPP**
     * - **VIBER**
     * @example `WHATSAPP`
     */
    "TemplateType": string;
    /**
     * ISV客户WabaId。
     * > 过时的参数，请使用CustSpaceId。
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
     * @example `293483938849493`
     */
    "CustSpaceId"?: string;
    /**
     * 是否允许facebook自动变更模板的目录（这样能提高模板的审核通过率）此属性只对TemplateType=WHATSAPP有效。
     * @example `true`
     */
    "AllowCategoryChange"?: boolean;
    /**
     * WhatsApp中Authentication模板消息发送时的有效期。
     * > 此属性需要提前提供waba给阿里运营人员开白名单，不然会导致模板送审失败。
     * @example `120`
     */
    "MessageSendTtlSeconds"?: number;
}
