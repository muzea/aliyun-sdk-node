export interface DeleteMediaFromSearchLibRequest {
    /**
     * 搜索库名称。默认值ims-default-search-lib。
     * @example `test1`
     */
    "SearchLibName"?: string;
    /**
     * 媒资ID。
     * @example `****20b48fb04483915d4f2cd8ac****`
     */
    "MediaId": string;
    /**
     * 媒资信息消息体。
     * @example `{}`
     */
    "MsgBody"?: string;
}
