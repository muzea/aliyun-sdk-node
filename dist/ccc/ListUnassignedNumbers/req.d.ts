export interface ListUnassignedNumbersRequest {
    /**
     * 根据号码进行模糊匹配，非必填，默认为空，为空表示不过滤。
     * @example `0833`
     */
    "SearchPattern"?: string;
    /**
     * 分页序号，范围1-100。
     * @example `1`
     */
    "PageNumber": number;
    /**
     * 分页大小，范围1-100。
     * @example `10`
     */
    "PageSize": number;
}
