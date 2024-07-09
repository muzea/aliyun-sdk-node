export interface SearchMediaByHybridRequest {
    /**
     * 搜索库。
     * @example `test-1`
     */
    "SearchLibName"?: string;
    /**
     * 媒资类型。
     * @example `video`
     */
    "MediaType"?: string;
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
     * @example `两只熊猫在打架`
     */
    "Text"?: string;
    /**
     * 媒资ID。
     * @example `****c469e944b5a856828dc2****
    `
     */
    "MediaId"?: string;
}
