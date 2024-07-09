export interface ListRolesResponse {
    /**
     * 请求id。
     * @example `0a06dfe716686526652451361e80ae`
     */
    requestId: string;
    /**
     * 返回数据。
     */
    data: {
        /**
         * 角色列表
         */
        roles: {
            /**
             * 角色名称。
             * @example `roleA`
             */
            name: string;
            /**
             * 角色类型
             * @example `admin`
             */
            type: string;
            /**
             * 角色的Policy授权信息
             * @example `{
                  "Statement": [
                        {
                              "Action": [
                                    "odps:*"
                              ],
                              "Effect": "Allow",
                              "Resource": [
                                    "acs:odps:*:projects/{projectname}/authorization/packages"
                              ]
                        }
                  ],
                  "Version": "1"
            }`
             */
            policy: string;
            /**
             * 角色的ACL授权信息
             */
            acl: {
                /**
                 * 表
                 */
                table: {
                    /**
                     * 表名称。
                     * @example `tableA`
                     */
                    name: string;
                    /**
                     * 表操作
                     */
                    actions: string[];
                }[];
                /**
                 * 资源
                 */
                resource: {
                    /**
                     * 资源名称。
                     * @example `resourceA`
                     */
                    name: string;
                    /**
                     * 资源操作
                     */
                    actions: string[];
                }[];
                /**
                 * 函数
                 */
                function: {
                    /**
                     * 函数名称。
                     * @example `functionA`
                     */
                    name: string;
                    /**
                     * 函数操作
                     */
                    actions: string[];
                }[];
                /**
                 * Package
                 */
                package: {
                    /**
                     * package名称
                     * @example `packageA`
                     */
                    name: string;
                    /**
                     * package操作
                     */
                    actions: string[];
                }[];
                /**
                 * 项目
                 */
                project: {
                    /**
                     * maxcompute项目名称
                     * @example `projectA`
                     */
                    name: string;
                    /**
                     * 项目操作
                     */
                    actions: string[];
                }[];
                /**
                 * 实例
                 */
                instance: {
                    /**
                     * 实例名称。
                     * @example `instanceA`
                     */
                    name: string;
                    /**
                     * 实例操作
                     */
                    actions: string[];
                }[];
            };
        }[];
    };
}
