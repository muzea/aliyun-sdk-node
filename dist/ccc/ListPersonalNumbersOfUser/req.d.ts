export interface ListPersonalNumbersOfUserRequest {
    /**
     * 实例ID。
     * @example `ccc-test`
     */
    "InstanceId": string;
    /**
     * 坐席ID。
     * @example `user-test@ccc-test`
     */
    "UserId": string;
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
     * 是否关联坐席，若为true，则查询UserId关联的个人外呼号码列表，若为false，则查询UserId可关联但未关联的个人外呼号码列表。通常和AddPersonalNumbersToUser接口一起使用。
     * @example `true`
     */
    "IsMember": boolean;
    /**
     * 根据号码进行模糊匹配，非必填，不填默认为空。
     * @example `0833`
     */
    "SearchPattern"?: string;
}
