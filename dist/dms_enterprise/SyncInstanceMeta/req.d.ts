export interface SyncInstanceMetaRequest {
    /**
     * 租户ID。
     * > 取自系统右上角头像处悬停展示的租户ID信息，详情请参见[查看租户信息](~~181330~~)。
     * @example `3***`
     */
    "Tid"?: number;
    /**
     * 实例ID。
     * @example `12***`
     */
    "InstanceId": string;
    /**
     * 是否忽略表字典元数据同步。取值：
     * - **true**
     * - **false**
     * @example `true`
     */
    "IgnoreTable"?: boolean;
}
