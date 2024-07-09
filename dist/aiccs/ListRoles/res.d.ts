export interface ListRolesResponse {
    /**
     * 状态码描述。
     * @example `xxxx`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `EE338D98-9BD3-4413-B165`
     */
    RequestId: string;
    /**
     * 状态码。返回200表示请求成功。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 角色信息。
     */
    Data: {
        /**
         * 角色ID。
         * @example `1`
         */
        RoleId: number;
        /**
         * 创建时间。格式为：<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
         * @example `2020-01-03T20:25:33Z`
         */
        CreateTime: string;
        /**
         * 租户ID。
         * @example `1`
         */
        BuId: number;
        /**
         * 角色名称。
         * @example `企业管理员`
         */
        Title: string;
        /**
         * 角色Code。
         * @example `admin`
         */
        Code: string;
        /**
         * 角色描述。
         * @example `Admin`
         */
        Description: string;
        /**
         * 所属角色组ID。
         * @example `0`
         */
        RoleGroupId: number;
        /**
         * 所属角色组名称。
         * @example `角色组名称`
         */
        RoleGroupName: string;
    }[];
    /**
     * 接口调用是否成功。
     * @example `true`
     */
    Success: boolean;
}
