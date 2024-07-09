export interface ListDatabasesRequest {
    /**
     * 租户ID。
     * > 取自系统右上角头像处悬停展示的租户ID信息，详情请参见[查看租户信息](~~181330~~)。
     * @example `3***`
     */
    "Tid"?: number;
    /**
     * 实例ID，取值来自ListInstances接口返回的实例信息中的实例ID，注意不是RDS的实例ID。
     * @example `12***`
     */
    "InstanceId": string;
    /**
     * 第几页。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 每页记录数。
     * @example `10`
     */
    "PageSize"?: number;
}
