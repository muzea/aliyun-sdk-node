export interface UpdateMediaToSearchLibRequest {
    /**
     * 搜索库名称。默认值ims-default-search-lib。
     * @example `test1`
     */
    "SearchLibName"?: string;
    /**
     * 媒资ID。
     * @example `****019b82e24b37a1c2958dec38****`
     */
    "MediaId": string;
    /**
     * 媒资信息消息体。
     * @example `{}`
     */
    "MsgBody": string;
}
