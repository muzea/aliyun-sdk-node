export interface ListCustomCallTaggingRequest {
    /**
     * 实例ID。
     * @example `ccc-test`
     */
    "InstanceId": string;
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
    /**
     * 根据号码或描述进行模糊匹配，非必填，默认为空，为空表示不过滤。
     * @example `1312121****`
     */
    "SearchPattern"?: string;
    /**
     * 按号码标签名称列表过滤，非必填，默认为空，表示不过滤。格式为JSON数组的字符串，数组元素是号码标签名称。
     * @example `["TagA"]`
     */
    "CallTagNameList"?: string;
}
