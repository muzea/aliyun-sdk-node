export interface QueryMediaIndexJobRequest {
    /**
     * 搜索库名称。默认值ims-default-search-lib。
     * @example `test1`
     */
    "SearchLibName"?: string;
    /**
     * 媒资ID。
     * @example `c2e77390f75271ec802f0674a2ce6***`
     */
    "MediaId": string;
}
