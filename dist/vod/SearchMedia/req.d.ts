export interface SearchMediaRequest {
    /**
     * 搜索媒资数据类型。取值范围：
     * - **video**（默认值）：视频。
     * - **audio**：音频。
     * - **image**：图片。
     * - **attached**：辅助媒资。
     * > 当本参数取值为**video**或**audio**，且需要遍历搜索条件命中的所有数据时，必须设置ScrollToken参数。
     * @example `video`
     */
    "SearchType"?: string;
    /**
     * 搜索结果中返回的媒资字段。
     * 默认只返回基本媒资字段，可指定返回更多媒资字段，请参见[使用示例](~~99179~~)。
     * @example `Title,CoverURL`
     */
    "Fields"?: string;
    /**
     * 过滤条件。语法规则，请参见[搜索协议语法](~~86991~~)。
     * @example `field = value`
     */
    "Match"?: string;
    /**
     * 排序字段和排序顺序。多个使用半角逗号（,）分隔。取值：
     * - **CreationTime:Desc**（默认值）：按创建时间倒序。
     * - **CreationTime:Asc**：按创建时间升序。
     * > - 排序字段示例：[排序字段](~~99179~~)。
     * > - 获取搜索条件是前5000条的数据时，最多支持三个排序字段。
     * > - 获取搜索条件是所有数据时，仅支持一个排序字段。
     * @example `CreationTime:Desc`
     */
    "SortBy"?: string;
    /**
     * 当前页码。默认值为**1**。
     * > 当本参数取值超过**200**时，建议同时设置ScrollToken参数。
     * @example `1`
     */
    "PageNo"?: number;
    /**
     * 每页返回的数据条数。默认值为**10**，最大值为**100**。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 翻页标识。长度为32个字符。
     * 第一次执行搜索请求时不用设置本参数。搜索请求命中数据时，服务端会返回该参数值，用于记录当前搜索数据的位置地址。请记录返回的参数值，下一次搜索时按下述要求或建议设置本参数：
     * - 当SearchType参数取值为**video**或**audio**，且需要遍历搜索条件命中的所有数据时，本参数必须设置。
     * - 当PageNo参数取值超过**200**时，建议设置本参数优化搜索性能。
     * @example `24e0fba7188fae707e146esa54****`
     */
    "ScrollToken"?: string;
}
