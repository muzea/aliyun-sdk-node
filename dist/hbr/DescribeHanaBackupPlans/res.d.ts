export interface DescribeHanaBackupPlansResponse {
    /**
     * 请求ID。
     * @example `F029C1C7-26B6-5ADD-A73E-D85CCD7C73A9`
     */
    RequestId: string;
    /**
     * 请求是否成功。
     * - true：成功
     * - false：失败
     * @example `true`
     */
    Success: boolean;
    /**
     * 返回码，200表示成功。
     * @example `200`
     */
    Code: string;
    /**
     * 返回信息描述，成功一般返回successful，错误时会返回相应错误信息。
     * @example `successful`
     */
    Message: string;
    /**
     * 分页页码。从1开始，默认值为1。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 分页大小。最小值为1，最大值为99，默认值为10。
     * @example `10`
     */
    PageSize: number;
    /**
     * 总记录数。
     * @example `6`
     */
    TotalCount: number;
    HanaBackupPlans: {
        /**
         * 备份计划详情。
         */
        HanaBackupPlan: {
            /**
             * 备份仓库ID。
             * @example `v-000csihw82pqkd7hcjws`
             */
            VaultId: string;
            /**
             * 备份前缀。
             * @example `COMPLETE_DATA_BACKUP`
             */
            BackupPrefix: string;
            /**
             * 备份策略。可选格式：`I|{startTime}|{interval}`。表示从{startTime}开始每隔{interval}的时间执行一次备份任务。不会补偿已过去时间的备份任务。如果上一次备份任务没有完成，不会触发下一次备份任务。例如`I|1631685600|P1D`表示从2021-09-15 14:00:00开始每隔一天备份一次。
             * * startTime：备份起始时间，UNIX时间，单位为秒。
             * * interval： ISO8601时间间隔。例如：PT1H表示间隔一小时。P1D表示间隔一天。
             * @example `I|1602673264|P1D`
             */
            Schedule: string;
            /**
             * 数据库的名称。
             * @example `SYSTEMDB`
             */
            DatabaseName: string;
            /**
             * 备份类型。
             * * COMPLETE：全量备份。
             * * INCREMENTAL：增量备份。
             * * DIFFERENTIAL：差量备份。
             * @example `COMPLETE`
             */
            BackupType: string;
            /**
             * 备份计划是否属于暂停状态。
             * - true：暂停
             * - false：未暂停
             * @example `false`
             */
            Disabled: boolean;
            /**
             * 备份计划ID。
             * @example `pl-0000tnyndg3ne5m4ubeu`
             */
            PlanId: string;
            /**
             * SAP HANA实例ID。
             * @example `cl-0002scknka*****`
             */
            ClusterId: string;
            /**
             * 备份计划名称。
             * @example `plan-20220118-141153`
             */
            PlanName: string;
        }[];
    };
}
