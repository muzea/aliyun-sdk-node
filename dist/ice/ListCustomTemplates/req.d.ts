export interface ListCustomTemplatesRequest {
    /**
     * 模板类型。
     * - 1：转码模板
     * - 2：截图模板
     * - 3：动图模板
     * - 4：图片水印模板
     * - 5：文字水印模板
     * - 6：字幕模板
     * - 7：AI 智能审核
     * - 8：AI 智能封面
     * - 9：AI 智能擦除
     * @example `1`
     */
    "Type": string;
    /**
     * 模板子类型ID。
     * - 转码模板子类型：
     *     - 1：普通转码模板（Normal）
     *     - 2：音频转码模板（AudioTranscode）
     *     - 3：转封装（Remux）
     *     - 4：窄带高清 1.0（NarrowBandV1）
     *     - 5：窄带高清 2.0（NarrowBandV2）
     * - 截图模板子类型（Subtype）：
     *     - 1：普通截图/静态截图（Normal）
     *     - 2：雪碧图（Sprite）
     *     - 3：WebVtt 截图（WebVtt）
     * - AI 审核模板子类型（Subtype）：
     *     - 1：视频审核（Video）
     *     - 2：音频审核（Audio）
     *     - 3：图片审核（Image）
     * - AI 智能擦除模板子类型（Subtype）：
     *     - 1：图标擦除（VideoDelogo）
     *     - 2：字幕擦除（VideoDetext）
     * @example `2`
     */
    "Subtype"?: string;
    /**
     * 模板名称。
     * @example `test-template`
     */
    "Name"?: string;
    /**
     * 模板ID。
     * @example `****96e8864746a0b6f3****`
     */
    "TemplateId"?: string;
    /**
     * 分页数目。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 分页大小。
     * @example `20`
     */
    "PageSize"?: number;
    /**
     * 排序顺序。取值：
     * - CreateTimeDesc（按照创建时间逆序排列）
     * - CreateTimeAsc（按照创建时间顺序排列）
     * @example `CreateTimeDesc`
     */
    "OrderBy"?: string;
}
