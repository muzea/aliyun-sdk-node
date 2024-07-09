export interface UpdateLiveAISubtitleRequest {
    /**
     * 字幕模板名称，仅支持数字、大小写字母或短横线-，短横线不和位于首位。
     * @example `live AI subtitle template`
     */
    "SubtitleName"?: string;
    /**
     * 源语言，取值：
     * - 中文：zh-CN
     * @example `zh-CN`
     */
    "SrcLanguage"?: string;
    /**
     * 翻译目标语言，取值：
     * - 英文：en-US
     * - 中文：zh-CN
     * - 西班牙文：es-ES
     * - 俄文：ru-RU
     * - 不翻译：不翻译传空
     * @example `zh-CN`
     */
    "DstLanguage"?: string;
    /**
     * 字体颜色，RGBA值。
     * @example `0xFFFFFF`
     */
    "FontColor"?: string;
    /**
     * 字体，取值：
     * - KaiTi-楷体，默认
     * - AlibabaPuHuiTi-Regular-阿里巴巴普惠体-常规
     * - AlibabaPuHuiTi-Bold-阿里巴巴普惠体-粗体
     * - AlibabaPuHuiTi-Light-阿里巴巴普惠体-细体
     * - NotoSansHans-Regular-思源黑体-常规
     * - NotoSansHans-Bold-思源黑体-粗体
     * - NotoSansHans-Light-思源黑体-细体
     * @example `KaiTi`
     */
    "FontName"?: string;
    /**
     * 字幕背景颜色，RGBA值。
     * @example `0xFF0000`
     */
    "BgColor"?: string;
    /**
     * 字幕位置信息
     */
    "PositionNormalized"?: number[];
    /**
     * 是否显示源语言，ShowSourceLan默认为false。
     * @example `true`
     */
    "ShowSourceLan"?: boolean;
    /**
     * 显示行数
     * @example `2`
     */
    "MaxLines"?: number;
    /**
     * 每行显示字数，取值范围：支持输入【1,500】内的整数
     * @example `20`
     */
    "WordPerLine"?: number;
    /**
     * 字体尺寸，取值范围：【0,1】
     * @example `0.037`
     */
    "FontSizeNormalized"?: number;
    /**
     * 字体粗细，取值范围：【0,1】
     * @example `0.05`
     */
    "BorderWidthNormalized"?: number;
    /**
     * 字幕背景尺寸，取值范围：【0,1】
     * @example `0.09`
     */
    "BgWidthNormalized"?: number;
    /**
     * 字幕模板ID
     * @example `597991f3-6ef9-4100-9238-82951de1****`
     */
    "SubtitleId": string;
    /**
     * 自定义字幕描述信息。可包含中英文、数字、字符，不超过128位。
     * @example `live AI subtitle template`
     */
    "Description"?: string;
    /**
     * 预览画面宽度，单位：px
     * @example `1280`
     */
    "Width"?: string;
    /**
     * 预览画面高度，单位：px
     * @example `720`
     */
    "Height"?: string;
}
