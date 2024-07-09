export interface CreateImageTranslateTaskRequest {
    /**
     * 图片翻译链接，多张图片通过英文逗号分隔，图片数量不能超过20张
     * @example `http://xxx,http://yyy`
     */
    "UrlList": string;
    /**
     * 图片原始语种
     * @example `zh`
     */
    "SourceLanguage": string;
    /**
     * 图片翻译目标语种
     * @example `en`
     */
    "TargetLanguage": string;
    /**
     * - 以下JSON内容格式，不关注的都可以不用传递，都是可选参数
     * - 样例JSON格式内容：
     * ```
     * {
     *   "have_ocr": "false",
     *   "without_text": "false",
     *   "have_psd": "true",
     *   "ignore_entity": "false"
     * }
     * ```
     * - `have_ocr`，控制是否返回 OCR 结果，true：需要，false：不需要
     * - `without_text`，控制是否需要擦除图片中的文字，true：需要，false：不需要
     * - `have_psd`，控制是否返回图片编辑器数据，渲染编辑器，true：需要，false：不需要
     * - `ignore_entity`，是否忽略实体识别，true：忽略，false：不忽略
     * @example `{"have_ocr":"false","without_text":"false","have_psd":"true","ignore_entity":"false"}`
     */
    "Extra"?: string;
    /**
     * 提供幂等能力，3分钟内，相同的值只会生效一次
     * @example `1`
     */
    "ClientToken"?: string;
}
