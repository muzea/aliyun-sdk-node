export interface DescribeDatabasesResponse {
    /**
     * 本页记录数。
     * @example `1`
     */
    PageRecordCount: number;
    Databases: {
        /**
         * 数据库信息详情。
         */
        Database: {
            /**
             * 数据库备注。
             * @example `test_des`
             */
            DBDescription: string;
            /**
             * 数据库状态，取值范围如下：
             * - **Creating**：创建中
             * - **Running**：使用中
             * - **Deleting**：删除中
             * @example `Running`
             */
            DBStatus: string;
            /**
             * 数据库名称。
             * @example `test_db`
             */
            DBName: string;
            /**
             * 数据库引擎类型，取值范围如下：
             * * **MySQL**
             * * **Oracle**
             * * **PostgreSQL**
             * @example `MySQL`
             */
            Engine: string;
            /**
             * 多主集群（库表）版的数据库所对应的主节点ID。
             * @example `2`
             */
            MasterID: string;
            /**
             * 字符集，详情请参见[字符集表](~~99716~~)。
             * @example `utf8mb4`
             */
            CharacterSetName: string;
            Accounts: {
                /**
                 * 数据库账号信息详情。
                 * > 当集群为PolarDB MySQL版时，不含高权限账号。
                 */
                Account: {
                    /**
                     * 授权状态，取值范围如下：
                     * - **Empowering**：授权中
                     * - **Empowered**：授权完成
                     * - **Removing**：移除权限中
                     * @example `Empowered`
                     */
                    PrivilegeStatus: string;
                    /**
                     * 账号状态，取值范围如下：
                     * - **Creating**：创建中
                     * - **Available**：可用
                     * - **Deleting**：删除中
                     * @example `Available`
                     */
                    AccountStatus: string;
                    /**
                     * 账号权限，取值范围如下：
                     * * **ReadWrite**：读写
                     * * **ReadOnly**：只读
                     * * **DMLOnly**：只允许DML
                     * * **DDLOnly**：只允许DDL
                     * * **ReadIndex**：只读+索引
                     * @example `ReadOnly`
                     */
                    AccountPrivilege: string;
                    /**
                     * 账号名称。
                     * > 当集群为PolarDB MySQL版时，不含高权限账号。
                     * @example `test_acc`
                     */
                    AccountName: string;
                }[];
            };
        }[];
    };
    /**
     * 请求ID。
     * @example `E1DF8CA6-2300-448B-9ABF-760C4B******`
     */
    RequestId: string;
    /**
     * 页码。
     * @example `1`
     */
    PageNumber: number;
}
