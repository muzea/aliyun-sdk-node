export interface ListPhoneNumbersRequest {
    /**
     * 实例ID。
     * @example `ccc-test`
     */
    "InstanceId": string;
    /**
     * 根据号码进行模糊匹配，非必填，默认为空，为空表示不过滤。
     * @example `0833`
     */
    "SearchPattern"?: string;
    /**
     * 号码的用途，非必填，默认为空，为空表示不过滤。
     * @example `Bidirection`
     */
    "Usage"?: string;
    /**
     * 号码是否可用，非必填，默认为空，为空表示不过滤。
     * @example `true`
     */
    "Active"?: boolean;
    /**
     * 分页序号，范围1-100。
     * @example `1`
     */
    "PageNumber": number;
    /**
     * 分页大小，范围1-100。
     * @example `20`
     */
    "PageSize": number;
}
