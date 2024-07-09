export interface DescribeModifyPGHbaConfigLogResponse {
    /**
     * 实例ID。
     * @example `pgm-bp1lymyn1v3i****`
     */
    DBInstanceId: string;
    /**
     * 请求ID。
     * @example `6D797E6B-E157-510C-A27F-6F9E6DA40633`
     */
    RequestId: string;
    /**
     * 历史记录数。
     * @example `1`
     */
    LogItemCount: number;
    HbaLogItems: {
        /**
         * 修改记录列表。
         */
        HbaLogItem: {
            /**
             * 修改状态。
             * - **success**：已生效
             * - **failed**：未生效
             * - **setting**：设置中
             * @example `success`
             */
            ModifyStatus: string;
            /**
             * 未生效原因。
             * @example `null`
             */
            StatusReason: string;
            /**
             * 修改时间（UTC时间）。
             * @example `2021-11-25T06:00:40Z`
             */
            ModifyTime: string;
            BeforeHbaItems: {
                /**
                 * 修改前pg_hba.conf文件的配置列表。
                 */
                HbaItem: {
                    /**
                     * 连接类型。
                     * @example `host`
                     */
                    Type: string;
                    /**
                     * 掩码。
                     * @example `null`
                     */
                    Mask: string;
                    /**
                     * 数据库名。
                     * @example `all`
                     */
                    Database: string;
                    /**
                     * 优先级。
                     * @example `0`
                     */
                    PriorityId: number;
                    /**
                     * IP地址。
                     * @example `0.0.0.0/0`
                     */
                    Address: string;
                    /**
                     * 认证方式对应的配置参数。
                     * @example `null`
                     */
                    Option: string;
                    /**
                     * 认证方式。
                     * @example `md5`
                     */
                    Method: string;
                    /**
                     * 用户名。
                     * @example `all`
                     */
                    User: string;
                }[];
            };
            AfterHbaItems: {
                /**
                 * 修改后pg_hba.conf文件的配置列表。
                 */
                HbaItem: {
                    /**
                     * 连接类型。
                     * @example `host`
                     */
                    Type: string;
                    /**
                     * 掩码。
                     * @example `null`
                     */
                    Mask: string;
                    /**
                     * 数据库名。
                     * @example `all`
                     */
                    Database: string;
                    /**
                     * 优先级。
                     * @example `0`
                     */
                    PriorityId: number;
                    /**
                     * IP地址。
                     * @example `0.0.0.0/0`
                     */
                    Address: string;
                    /**
                     * 认证方式对应的对应参数。
                     * @example `ldapserver=192.168.XX.XX ldapbasedn="CN=Users,DC=pgsqldomain,DC=net" ldapbinddn="CN=pgadminuser,CN=Users,DC=pgsqldomain,DC=net" ldapbindpasswd="Test123!" ldapsearchattribute="sAMAccountName"
                    `
                     */
                    Option: string;
                    /**
                     * 认证方式。
                     * @example `ldap`
                     */
                    Method: string;
                    /**
                     * 用户名。
                     * @example `ldapuser`
                     */
                    User: string;
                }[];
            };
        }[];
    };
}
