export interface DescribeBackupPlansResponse {
    /**
     * 请求ID。
     * @example `200FB963-9359-4CAD-90B7-96395C88FD9D`
     */
    RequestId: string;
    BackupPlans: {
        /**
         * 备份计划列表。
         */
        BackupPlan: {
            /**
             * 备份计划是否激活。
             * @example `true`
             */
            Active: boolean;
            /**
             * 备份周期。取值范围Monday,Tuesday,Wednesday,Thursday,Friday,Saturday,Sunday。
             * @example `Monday`
             */
            BackupPeriod: string;
            /**
             * 创建备份计划保留天数取值范围：1-7天。
             * @example `5`
             */
            RetentionPeriod: number;
            /**
             * 备份计划创建时间。格式：yyyy-MM-ddTHH:mm:ssZ（UTC 通用标准时，以Z来标识）。
             * @example `2020-02-26T01:56Z`
             */
            CreatedTime: string;
            /**
             * 每天开始备份的时间。格式：HH:mmZ（UTC 通用标准时，以Z来标识）。
             * @example ` 00:30Z`
             */
            BackupTime: string;
            /**
             * 备份集群ID。
             * @example `cds-uf6m0bod****6159`
             */
            ClusterId: string;
            /**
             * 备份集群数据中心ID。
             * @example `cn-hangzhou-g`
             */
            DataCenterId: string;
        }[];
    };
}
