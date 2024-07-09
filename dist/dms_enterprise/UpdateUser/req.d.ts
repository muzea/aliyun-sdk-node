export interface UpdateUserRequest {
    /**
     * 租户ID。
     * > 取自系统右上角头像处悬停展示的租户ID信息，详情请参见[查看租户信息](~~181330~~)。
     * @example `-1`
     */
    "Tid"?: number;
    /**
     * 待更新的用户Uid。
     * @example `123456789`
     */
    "Uid": number;
    /**
     * 用户昵称。
     * @example `test`
     */
    "UserNick"?: string;
    /**
     * 用户角色列表，角色取值参考[RegisterUser](~~141565~~)。
     * @example `ADMIN,DBA`
     */
    "RoleNames"?: string;
    /**
     * 用户钉钉号（手机号码）。
     * @example `188xxxxxxxx`
     */
    "Mobile"?: string;
    /**
     * 当天查询上限次数。
     * @example `1000`
     */
    "MaxExecuteCount"?: number;
    /**
     * 当天查询上限行数。
     * @example `1000`
     */
    "MaxResultCount"?: number;
}
