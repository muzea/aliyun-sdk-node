export interface ListRoleResponse {
    /**
     * 接口状态或POP错误码
     * @example `200`
     */
    Code: number;
    /**
     * 附加信息
     * @example `success`
     */
    Message: string;
    /**
     * 请求ID
     * @example `57609587-DFA2-41EC-****-*********`
     */
    RequestId: string;
    RoleList: {
        /**
         * 角色列表
         */
        RoleItem: {
            ActionList: {
                /**
                 * 操作权限集合
                 */
                Action: {
                    /**
                     * 权限码
                     * @example `1`
                     */
                    Code: string;
                    /**
                     * 权限描述
                     * @example `操作记录`
                     */
                    Description: string;
                    /**
                     * 权限组ID
                     * @example `31`
                     */
                    GroupId: string;
                    /**
                     * 权限名称
                     * @example `操作记录`
                     */
                    Name: string;
                }[];
            };
            /**
             * 角色列表
             */
            Role: {
                /**
                 * 角色更新时间的时间戳
                 * @example `1542717260156`
                 */
                UpdateTime: number;
                /**
                 * 是否是默认生成的角色
                 * @example `false`
                 */
                IsDefault: boolean;
                /**
                 * 云账号ID
                 * @example `test**@aliyun.com`
                 */
                AdminUserId: string;
                /**
                 * 角色创建时间的时间戳
                 * @example `1542717260156`
                 */
                CreateTime: number;
                /**
                 * 角色名称
                 * @example `Super Admin(All privileges)`
                 */
                Name: string;
                /**
                 * 角色ID
                 * @example `1`
                 */
                Id: number;
            };
        }[];
    };
}
