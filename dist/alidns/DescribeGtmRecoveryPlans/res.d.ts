export interface DescribeGtmRecoveryPlansResponse {
    RecoveryPlans: {
        /**
         * 容灾预案列表。
         */
        RecoveryPlan: {
            /**
             * 预案状态。其中：
             * - **UNEXECUTED**：未执行
             * - **EXECUTED**：已执行
             * - **ROLLED_BACK**：已回滚
             * @example `UNEXECUTED`
             */
            Status: string;
            /**
             * 最近回滚时间（时间戳）。
             * @example `1565505919000`
             */
            LastRollbackTimestamp: number;
            /**
             * 更新时间。
             * @example `2019-08-11T06:45Z`
             */
            UpdateTime: string;
            /**
             * 备注。
             * @example `remark-example`
             */
            Remark: string;
            /**
             * 创建时间。
             * @example `2019-08-11T06:45Z`
             */
            CreateTime: string;
            /**
             * 容灾预案ID。
             * @example `55`
             */
            RecoveryPlanId: number;
            /**
             * 更新时间（时间戳）。
             * @example `1565505919000`
             */
            UpdateTimestamp: number;
            /**
             * 最近执行时间（时间戳）。
             * @example `1565505898000`
             */
            LastExecuteTimestamp: number;
            /**
             * 最近执行时间。
             * @example `2019-08-11T06:44Z`
             */
            LastExecuteTime: string;
            /**
             * 最近回滚时间。
             * @example `2019-08-11T06:45Z`
             */
            LastRollbackTime: string;
            /**
             * 容灾预案名称。
             * @example `name-example`
             */
            Name: string;
            /**
             * 故障地址池个数。
             * @example `0`
             */
            FaultAddrPoolNum: number;
            /**
             * 创建时间（时间戳）。
             * @example `1565499867000`
             */
            CreateTimestamp: number;
        }[];
    };
    /**
     * 分页查询时设置的每页行数，最大值**100**，默认为**20**。
     * @example `20`
     */
    PageSize: number;
    /**
     * 唯一请求识别码。
     * @example `2BA072CF-CA21-4A34-B6C2-227BE2C58079`
     */
    RequestId: string;
    /**
     * 当前页数，起始值为**1**，默认为**1**。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 总页数。
     * @example `1`
     */
    TotalPages: number;
    /**
     * 总个数。
     * @example `10`
     */
    TotalItems: number;
}
