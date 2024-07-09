export interface ListInterventionDictionaryEntriesRequest {
    /**
     * 干预词典名称
     * @example `my_dict`
     */
    "name": string;
    /**
     * 词条
     * @example `测试`
     */
    "word"?: string;
    /**
     * 页码，默认 pageNumber=1
     * @example `1`
     */
    "pageNumber"?: number;
    /**
     * 每页返回数目，默认 pageSize=10
     * @example `10`
     */
    "pageSize"?: number;
}
