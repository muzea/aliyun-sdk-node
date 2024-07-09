export interface SearchMediaByAILabelRequest {
    /**
     * 搜索库名称
     * @example `test-1`
     */
    "SearchLibName"?: string;
    /**
     * 媒资类型。取值：
     * - image：图片
     * - video：视频
     * - audio：音频
     * @example `video`
     */
    "MediaType"?: string;
    /**
     * 查询结果排序。取值：
     * - CreationTime:Desc（默认值）：按创建时间倒序。
     * - CreationTime:Asc：按创建时间升序。
     * @example `CreationTime:Desc
    `
     */
    "SortBy"?: string;
    /**
     * 当前页码。默认值为1。
     * @example `1`
     */
    "PageNo"?: number;
    /**
     * 每页返回的数据条数。默认值为10，最大值为50。
     * @example `20`
     */
    "PageSize"?: number;
    /**
     * 搜索内容。
     * @example `风筝`
     */
    "Text"?: string;
    /**
     * 多模搜索类型。默认为全文搜索。取值：
     * - PersonName：人名搜
     * - Ocr：字幕搜
     * - AiCategory ：AI分类
     * - FullSearch：全文搜
     * @example `Ocr`
     */
    "MultimodalSearchType"?: string;
    /**
     * 是否精搜。取值：
     * - true： 精搜
     * - false：粗搜
     * @example `true`
     */
    "SpecificSearch"?: boolean;
    /**
     * 媒资ID。精搜时必须携带。
     * @example `****c469e944b5a856828dc2****
    `
     */
    "MediaId"?: string;
}
