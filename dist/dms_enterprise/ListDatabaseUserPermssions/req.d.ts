export interface ListDatabaseUserPermssionsRequest {
    /**
     * 租户ID。
     * > 取自系统右上角头像处悬停展示的租户ID信息，详情请参见[查看租户信息](~~181330~~)。
     * @example `-1`
     */
    "Tid"?: number;
    /**
     * 权限类型，取值和说明如下：
     * - DATABASE： 库权限
     * - TABLE：表权限
     * - COLUMN：列权限
     * @example `DATABASE`
     */
    "PermType": string;
    /**
     * 数据库ID。
     * @example `123`
     */
    "DbId": string;
    /**
     * 是否逻辑库。
     * @example `false`
     */
    "Logic"?: boolean;
    /**
     * 用户昵称。
     * @example `search_user_name`
     */
    "UserName"?: string;
    /**
     * 第几页。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 每页数据量。
     * @example `10`
     */
    "PageSize"?: number;
}
