export interface DescribeLiveAISubtitleRequest {
    /**
     * 字幕模板ID。
     * @example `445409ec-7eaa-461d-8f29-4bec2eb9****`
     */
    "SubtitleId"?: string;
    /**
     * 字幕模板名称，仅支持数字、大小写字母或短横线-，短横线不和位于首位。
     * @example `sub01`
     */
    "SubtitleName"?: string;
    /**
     * 分页的页数。取值范围【1,100】
     * @example `1`
     */
    "PageNumber"?: string;
    /**
     * 每页模板数值。取值范围【1,100】
     * @example `100`
     */
    "PageSize"?: string;
    /**
     * 是否查询字幕默认模版，取值范围：
     * - true，查询。
     * - false，不查询。
     * > 默认模版：系统预先内置的参数集，用户可以通过AddLiveAISubtitle接口的copyFrom参数使用。
     * @example `false`
     */
    "IsDefault"?: boolean;
}
