export interface ListDoNotCallNumbersRequest {
    /**
     * 实例ID。
     * @example `ccc-test`
     */
    "InstanceId": string;
    /**
     * 根据电话号码或备注进行模糊匹配，非必填，默认为空，为空表示不过滤。
     * @example `RemarkA`
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
    /**
     * 应用范围，包括SYSTEM和INSTANCE，分别对应系统级禁止外呼和客户自定义禁止外呼，SYSTEM是关联实例所属的阿里云主账号的，INSTANCE只和当前实例关联，非必填，默认值INSTANCE。
     * @example `INSTANCE`
     */
    "Scope"?: string;
}
