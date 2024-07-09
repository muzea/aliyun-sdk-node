export interface ListByUserGroupIdRequest {
    /**
     * 要查询的用户组ID，批量查询时用半角逗号（,）隔开。
     * @example `34fe-***-6dcb,84q9-****-4a274`
     */
    "UserGroupIds": string;
}
