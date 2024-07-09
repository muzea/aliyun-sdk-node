export interface GetImageTranslateRequest {
    /**
     * 需要翻译的图片链接
     * @example `http://xxxxxxx.oss-cn-shenzhen.aliyuncs.com/xxxxxx.jpg`
     */
    "Url": string;
    /**
     * 图片中的文字语种，<props="intl">[语向支持以及语言代码](https://www.alibabacloud.com/help/zh/doc-detail/182310.html)</props>
     * <props="china">[语向支持以及语言代码](https://help.aliyun.com/document_detail/182310.html?spm=a2c4g.11186623.6.543.106340eblV3QUo)</props>
     * @example `zh`
     */
    "SourceLanguage": string;
    /**
     * 图片中文字翻译后的语种，<props="intl">[语向支持以及语言代码](https://www.alibabacloud.com/help/zh/doc-detail/182310.html)</props>
     * <props="china">[语向支持以及语言代码](https://help.aliyun.com/document_detail/182310.html?spm=a2c4g.11186623.6.543.106340eblV3QUo)</props>
     * @example `en`
     */
    "TargetLanguage": string;
    /**
     * - 以下JSON内容格式，不关注的都可以不用传递，都是可选参数
     * - JSON 格式内容：
     * ```
     * {
     *   "have_ocr": "false",
     *   "without_text":"true",
     *   "have_psd": "false",
     *   "ignore_entity": "false"
     * }
     * ```
     * - have_ocr 通过true/false 控制是否返回ocr结果，true：需要，false：不需要
     * - without_text 控制是否需要擦除图片中的文字，true：需要，false：不需要
     * - have_psd 用于图片编辑器，psd数据渲染编辑器
     * - ignore_entity 是否忽略实体识别，true：忽略实体识别，false：不忽略
     * @example `{"have_ocr": "false", "without_text":"true", "have_psd": "false", "ignore_entity": "false"}`
     */
    "Extra"?: string;
}
