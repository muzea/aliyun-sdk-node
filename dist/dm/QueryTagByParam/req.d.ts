export interface QueryTagByParamRequest {
    /**
     * 页码
     * @example `1`
     */
    "PageNo"?: number;
    /**
     * 每页大小
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 标签名称，长度1-50，默认为所有标签。
     * @example `1aTag`
     */
    "KeyWord"?: string;
}
