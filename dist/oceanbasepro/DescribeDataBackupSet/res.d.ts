export interface DescribeDataBackupSetResponse {
    /**
     * 总记录数。
     * @example `2`
     */
    TotalCount: number;
    /**
     * 请求 ID。
     * @example `EE205C00-30E4-****-****-87E3A8A2AA0C`
     */
    RequestId: string;
    /**
     * 备份集详情。
     */
    Data: {
        /**
         * 备份结束时间。
         * @example `2023-04-13T03:38:10Z`
         */
        EndTime: string;
        /**
         * 备份集状态。
         * @example `RUNNING`
         */
        Status: string;
        /**
         * 备份类型。
         * @example `manual`
         */
        Type: string;
        /**
         * 备份开始时间。
         * @example `2020-05-22T17:04:18`
         */
        StartTime: string;
        /**
         * 备份集数据大小。
         * @example `31457280`
         */
        DataSize: number;
        /**
         * 备份策略。
         * @example `automated`
         */
        Policy: string;
        /**
         * 备份集 ID。
         * @example `imm-test-set-cb****ee-b7d7-11ed-956f-****3e10bd70`
         */
        SetId: number;
        /**
         * 备份方法。
         * @example `logical`
         */
        Method: string;
        /**
         * 位点时间。
         * @example `2023-05-15T07:11:08Z`
         */
        Checkpoint: string;
        /**
         * 数据版本号。
         * @example `1678847020352`
         */
        DataVersion: number;
        /**
         * 备份对象类型。
         * @example `cluster`
         */
        BackupObjectType: string;
        /**
         * 备份对象列表。
         */
        BackupObjects: {
            /**
             * 集群名称。
             * @example `test-****way`
             */
            ClusterName: string;
            /**
             * 租户名称。
             * @example `ob2mr3oae0****`
             */
            TenantName: string;
            /**
             * 备份集列表。
             */
            DatabaseTablesList: {
                /**
                 * 数据库名称。
                 * @example `sms_pre`
                 */
                Database: string;
                /**
                 * 表列表。
                 */
                Tables: string[];
            }[];
        }[];
        /**
         * 备份结果。
         */
        BackupResults: {
            /**
             * 集群名称。
             * @example `container-opa-****-02`
             */
            ClusterName: string;
            /**
             * 租户名称。
             * @example `ob2mr3oae0****
            `
             */
            TenantName: string;
            /**
             * 表恢复结果。
             */
            TableBackupResults: {
                /**
                 * 数据库名称。
                 * @example `order_ce****_online`
                 */
                Database: string;
                /**
                 * 表名称。
                 * @example `tr_sale_order_****`
                 */
                Table: string;
                /**
                 * 备份状态。
                 * @example `RUNNING`
                 */
                Status: string;
                /**
                 * 错误描述。
                 * @example `Create tag success`
                 */
                Message: string;
            }[];
        }[];
        /**
         * 目标备份集所对应的备份任务状态。
         * @example `not_exist`
         */
        DownloadTaskStatus: string;
        /**
         * 目标备份集所对应的备份任务 ID。
         * @example `100***012`
         */
        DownloadTaskId: number;
        /**
         * 有效性，可空。
         * @example `VALID`
         */
        Validity: string;
        /**
         * 备份进度。
         * @example `52`
         */
        Progress: string;
        /**
         * 备份集类型。
         * - standard：一级备份。
         * - archive：归档（二级）备份。
         * @example `standard`
         */
        StorageClass: string;
    }[];
}
