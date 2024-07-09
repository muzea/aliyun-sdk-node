export interface ListEdgeTranscodeTemplateRequest {
    /**
     * 机房ID。
     * @example `******3b-4d18-395c-8106-ff21a6******`
     */
    "ClusterId": string;
    /**
     * 边缘转码类型，枚举：
     * - **common** 通用（普通+窄带高清1.0）。
     * - **nbhd-2** 窄带高清2.0。
     * - **ultra-hd** 超高清。
     * > 当该参数不填写时，系统会展示用户拥有的转码类型权限的转码模板。
     * @example `nbhd-2`
     */
    "Type"?: string;
    /**
     * 视频编码格式，枚举：
     * - H.264。
     * - H.265。
     * > 当该参数不填写时，系统会展示用户拥有的视频编码格式权限的转码模板。
     * @example `H.264`
     */
    "VideoCodec"?: string;
    /**
     * 当前页码，默认值为1。
     * @example `1`
     */
    "PageNo"?: number;
    /**
     * 分页大小，每页显示条数。默认值为10，最大值为100。
     * @example `20`
     */
    "PageSize"?: number;
    /**
     * 排序规则，按模板创建时间（CreateTime）排序。默认是desc，枚举：
     * - desc 降序排序。
     * - asc 升序排序。
     * @example `desc`
     */
    "SortBy"?: string;
    /**
     * 搜索关键词，枚举：
     * - 模板ID，模板ID支持精确匹配。
     * - 模板名称，模板名称支持模糊搜索。
     * @example `baseline`
     */
    "Keyword"?: string;
}
