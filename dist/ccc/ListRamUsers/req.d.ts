export interface ListRamUsersRequest {
    /**
     * 实例ID。
     * @example `ccc-test	`
     */
    "InstanceId": string;
    /**
     * 根据坐席登录名或坐席展示名进行模糊匹配，非必填，默认为空，为空表示不过滤。
     * @example `agent`
     */
    "SearchPattern"?: string;
    /**
     * 分页序号，范围1-1000。
     * @example `1`
     */
    "PageNumber": number;
    /**
     * 分页大小，范围1-100。
     * @example `10`
     */
    "PageSize": number;
}
