export interface DescribeBackupPlanResponse {
    /**
     * 请求ID。
     * @example `0EA95AA2-860C-42CB-97CF-78CA3937E0D5`
     */
    RequestId: string;
    /**
     * 备份计划详情列表。
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
         *
         * 创建备份计划保留天数取值范围：1-7天。
         * @example `7`
         */
        RetentionPeriod: number;
        /**
         * 备份计划创建时间。UTC 通用标准时，以Z来标识。
         * @example `2020-02-26T01:56Z`
         */
        CreatedTime: string;
        /**
         * 每天开始备份的时间，UTC 通用标准时，以Z来标识。
         * @example `00:30Z`
         */
        BackupTime: string;
        /**
         * 备份集群ID。
         * @example `cds-uf6m0b****7v6159`
         */
        ClusterId: string;
        /**
         * 备份集群数据中心ID。
         * @example `cn-shanghai-e`
         */
        DataCenterId: string;
    };
}
