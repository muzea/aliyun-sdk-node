export interface CreateCustomTemplateRequest {
    /**
     * 模板名称。
     * @example `test-template`
     */
    "Name": string;
    /**
     * 模板类型。
     * - 1：转码模板
     * - 2：截图模板
     * - 3：动图模板
     * - 4：图片水印模板
     * - 5：文字水印模板
     * - 6：字幕模板
     * - 7：AI智能审核
     * - 8：AI智能封面
     * - 9：AI智能擦除
     * - 10：AI智能DNA模板
     * - 11：AI智能标签模板
     * @example `1`
     */
    "Type": number;
    /**
     * 模板子类型。
     * 转码模板子类型：
     * - 1：普通转码模板（Normal）
     * - 2：音频转码模板（AudioTranscode）
     * - 3：转封装（Remux）
     * - 4：窄带高清1.0（NarrowBandV1）
     * - 5：窄带高清2.0（NarrowBandV2）
     * 截图模板子类型：
     * - 1：普通截图/静态截图（Normal）
     * - 2：雪碧图（Sprite）
     * - 3：WebVtt截图（WebVtt）
     * AI审核模板子类型：
     * - 1：视频审核（Video）
     * -  2：音频审核（Audio）
     * - 3：图片审核（Image）
     * AI智能擦除模板子类型：
     * - 1：图标擦除（VideoDelogo）
     * - 2：字幕擦除（VideoDetext）
     * @example `1`
     */
    "Subtype"?: number;
    /**
     * 模板配置。详细参数说明请参见[模板参数](~~448291~~)。
     * @example `{"Container":{"Format":"flv"},"Video":{},"Audio":{}}`
     */
    "TemplateConfig": string;
}
