export interface DescribeDatabasesResponse {
    /**
     * 请求ID。
     * @example `2603CA96-B17D-4903-BC04-61A2C829CD94`
     */
    RequestId: string;
    Databases: {
        /**
         * 数据库信息列表。
         */
        Database: {
            /**
             * 数据库描述。
             * @example `testdb`
             */
            DBDescription: string;
            /**
             * 数据库状态，返回值：
             * - **Creating**：创建中
             * - **Running**：使用中
             * - **Deleting**：删除中
             * - **Cold**：冷存中
             * @example `Creating`
             */
            DBStatus: string;
            /**
             * 数据库名称。
             * @example `testDB01`
             */
            DBName: string;
            /**
             * 数据库所属实例ID。
             * @example `rm-uf6wjk5****`
             */
            DBInstanceId: string;
            /**
             * 数据库实例类型。
             * @example `MySQL`
             */
            Engine: string;
            /**
             * 字符集名称。
             * @example `utf8`
             */
            CharacterSetName: string;
            /**
             * 排序规则，此处C代表本土化。
             * > 仅PostgreSQL实例返回该参数。
             * @example `C`
             */
            Collate: string;
            /**
             * 字符集类型。
             * > 仅PostgreSQL实例返回该参数。
             * @example `en_US.utf8`
             */
            Ctype: string;
            /**
             * 限制并发量，-1代表未限制。
             * > 仅PostgreSQL实例返回该参数。
             * @example `-1`
             */
            ConnLimit: string;
            /**
             * 数据库表空间。
             * > 仅PostgreSQL实例返回该参数。
             * @example `pg_default`
             */
            Tablespace: string;
            /**
             * 资源组ID。
             * @example `rg-acfmy****`
             */
            ResourceGroupId: string;
            Accounts: {
                /**
                 * 拥有数据库相关权限的账号列表。
                 */
                AccountPrivilegeInfo: {
                    /**
                     * 账号名称。
                     * @example `test`
                     */
                    Account: string;
                    /**
                     * 账号对该数据库拥有的权限，返回值：
                     * * **ReadWrite**：读写
                     * * **ReadOnly**：只读
                     * * **DMLOnly**：仅DML
                     * * **DDLOnly**：仅DDL
                     * @example `DMLOnly`
                     */
                    AccountPrivilege: string;
                    /**
                     * 账号对该数据库具有的权限。
                     * @example `SELECT`
                     */
                    AccountPrivilegeDetail: string;
                }[];
            };
            /**
             * 页码。
             * @example `1`
             */
            PageNumber: number;
            /**
             * 每页记录数。
             * @example `30`
             */
            PageSize: number;
            /**
             * 总记录数。
             * > 仅SQL Server实例返回该参数。
             * @example `5`
             */
            TotalCount: number;
            BasicInfo: {
                /**
                 * 数据库基础属性。
                 * > 仅SQL Server实例返回该参数。
                 */
                BasicDbProperty: any[];
            };
            RuntimeInfo: {
                /**
                 * 数据库运行属性。
                 * > 仅SQL Server实例返回该参数。
                 */
                RuntimeDbProperty: any[];
            };
            AdvancedInfo: {
                /**
                 * 数据库高级属性。
                 * > 仅SQL Server实例返回该参数。
                 */
                AdvancedDbProperty: any[];
            };
        }[];
    };
}
