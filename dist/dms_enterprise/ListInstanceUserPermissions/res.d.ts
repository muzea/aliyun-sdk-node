export interface ListInstanceUserPermissionsResponse {
    /**
     * 数据总数。
     * @example `1`
     */
    TotalCount: number;
    /**
     * 请求ID。
     * @example `7D162AAE-6501-5691-BF14-D7018F662895`
     */
    RequestId: string;
    /**
     * 请求错误码。
     * @example `UnknownError`
     */
    ErrorCode: string;
    /**
     * 请求错误信息。
     * @example `UnknownError`
     */
    ErrorMessage: string;
    UserPermissions: {
        /**
         * 实例对应的用户权限列表。
         */
        UserPermission: {
            /**
             * 用户ID。
             * @example `51****`
             */
            UserId: string;
            /**
             * 用户昵称。
             * @example `test_nick_name`
             */
            UserNickName: string;
            /**
             * 实例ID。
             * @example `174****`
             */
            InstanceId: string;
            PermDetails: {
                /**
                 * 权限详情列表。
                 */
                PermDetail: {
                    /**
                     * 权限授予来源信息。
                     * @example `XXX授权`
                     */
                    OriginFrom: string;
                    /**
                     * 权限类型，返回值如下：
                     * - LOGIN：登录权限
                     * - PERF：实例性能查看权限
                     * @example `LOGIN`
                     */
                    PermType: string;
                    /**
                     * 授权到期时间。
                     * @example `2020-12-12 00:00:00`
                     */
                    ExpireDate: string;
                    /**
                     * 权限授予时间。
                     * @example `2019-12-12 00:00:00`
                     */
                    CreateDate: string;
                    /**
                     * 用户权限记录ID。
                     * @example `773****`
                     */
                    UserAccessId: string;
                    /**
                     * 额外数据，预留参数。
                     * @example `XXX`
                     */
                    ExtraData: string;
                }[];
            };
        }[];
    };
    /**
     * 请求是否成功，返回值如下：
     * - true：请求成功
     * - false：请求失败
     * @example `true`
     */
    Success: boolean;
}
