export interface DescribeKmsAssociateResourcesResponse {
    /**
     * 请求ID。
     * @example `38F6B598-A6D7-508A-8401-12BB9936****`
     */
    RequestId: string;
    /**
     * 是否存在关联的RDS实例。
     * - **true**：是。
     * - **false**：否。
     * @example `true`
     */
    AssociateStatus: boolean;
    /**
     * 关联的RDS实例信息列表。
     */
    AssociateDBInstances: {
        /**
         * 实例ID。
         * @example `pgm-bp16p6f68130****`
         */
        DBInstanceName: string;
        /**
         * 数据库引擎，返回值：
         * - **MySQL**
         * - **SQLServer**
         * - **PostgreSQL**
         * @example `PostgreSQL`
         */
        Engine: string;
        /**
         * 实例状态，返回值：
         * - **CREATING**：实例创建中
         * - **ACTIVATION**：实例运行中
         * - **DELETING**：实例删除中
         * - **RESTARTING**：实例重启中
         * - **CLASS_CHANGING**：规格变配中
         * - **INS_MAINTAINING**：实例维护中
         * - **BACKUP_RECOVERING**：备份恢复中
         * - **NET_MODIFYING**：网络变更中
         * @example `ACTIVATION`
         */
        Status: string;
        /**
         * 密钥使用途径，返回值：
         * - **DiskEncryption**：云盘加密
         * - **TDE**：透明数据加密
         * @example `DiskEncryption`
         */
        KeyUsedBy: string;
    }[];
}
