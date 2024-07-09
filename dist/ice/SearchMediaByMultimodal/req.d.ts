export interface SearchMediaByMultimodalRequest {
    /**
     * 搜索库。
     * @example `test-1`
     */
    "SearchLibName"?: string;
    /**
     * 媒资类型。默认值video。
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
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 搜索内容。可以是自然语言描述。
     * @example `两只熊猫在打架`
     */
    "Text"?: string;
}
