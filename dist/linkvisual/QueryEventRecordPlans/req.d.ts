export interface QueryEventRecordPlansRequest {
    /**
     * 指定从返回结果中的第几页开始显示，默认值为1。
     * @example `1`
     */
    "CurrentPage"?: number;
    /**
     * 每页显示的条数。最小值为1，最大值为50，默认值为10。
     * @example `10`
     */
    "PageSize"?: number;
}
