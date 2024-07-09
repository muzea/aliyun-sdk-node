export interface ListPublicMediaBasicInfosRequest {
    /**
     * 媒资标签，根据此mediaTagId进行匹配,返回所有包含此标签的媒资。取值：
     * - sticker（贴纸类型）
     *     - sticker-atmosphere：气氛
     *     - sticker-bubble：气泡
     *     - sticker-cute：可爱
     *     - sticker-daily：日常
     *     - sticker-expression：表情
     *     - sticker-gif：动图
     * - bgm（背景音乐类型）
     *     - bgm-romantic：浪漫
     *     - bgm-cuisine：美食
     *     - bgm-chinese-style：国风
     *     - bgm-upbeat：轻快
     *     - bgm-dynamic：动感
     *     - bgm-relaxing：舒缓
     *     - bgm-quirky：搞怪
     *     - bgm-beauty：时尚/美妆
     * - bgi（背景图片类型）
     *     - bgi-grad：渐变背景
     *     - bgi-solid：纯色背景
     *     - bgi-pic：图片背景
     * @example `sticker-atmosphere`
     */
    "MediaTagId"?: string;
    /**
     * 用来表示当前调用返回读取到的位置，空代表数据已经读取完毕。
     * @example `pSa1SQ0wCe5pzVrQ6mWZEw==`
     */
    "NextToken"?: string;
    /**
     * 本次请求所返回的最大记录条数。
     * 最大值：100，默认值：10
     * @example `5`
     */
    "MaxResults"?: number;
    /**
     * 当前页码。默认值为1
     * @example `1`
     */
    "PageNo"?: number;
    /**
     * 分页大小，每页显示条数。默认值为10，最大值为100。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 如果为true，返回值中包含文件基础信息。
     * @example `true`
     */
    "IncludeFileBasicInfo"?: boolean;
    /**
     * 媒资业务类型。取值范围：
     * - sticker：贴纸
     * - bgm：背景音乐
     * - bgi：背景图片
     * @example `sticker`
     */
    "BusinessType"?: string;
}
