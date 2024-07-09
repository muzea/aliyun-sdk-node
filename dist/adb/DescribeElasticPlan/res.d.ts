export interface DescribeElasticPlanResponse {
    /**
     * 请求ID。
     * @example `1AD222E9-E606-4A42-BF6D-8A4442913CEF`
     */
    RequestId: string;
    /**
     * 弹性计划列表。
     */
    ElasticPlanList: {
        /**
         * 弹性计划还原时间，与弹性计划扩容时间的间隔不能超过24小时。格式：HH:mm:ss。
         * @example `10:00:00`
         */
        EndTime: string;
        /**
         * 执行弹性计划的周期。0～6表示周日到周六，多个日期用半角逗号（,）分隔。
         * @example `3,4,5,6`
         */
        WeeklyRepeat: string;
        /**
         * 执行弹性计划的周期。表示每个月的几号，多个日期用半角逗号（,）分隔。
         * @example `1,15,25`
         */
        MonthlyRepeat: string;
        /**
         * 弹性计划扩容时间，格式：HH:mm:ss。
         * @example `08:00:00`
         */
        StartTime: string;
        /**
         * 资源组名称。
         * @example `USER_DEFAULT`
         */
        ResourcePoolName: string;
        /**
         * 弹性计划起始日期，只有设置了弹性计划起始日期才会返回参数值。格式：yyyy-MM-dd。
         * @example `2022-12-02`
         */
        StartDay: string;
        /**
         * 弹性计划节点数。
         * - 当ElasticPlanType为**worker**时，该参数不返回或返回结果为0。
         * - 当ElasticPlanType为**executorcombineworker**或**executor**时，该参数返回结果为大于0的数字。
         * @example `0`
         */
        ElasticNodeNum: number;
        /**
         * 弹性计划是否生效，取值说明：
         * - **true**（默认值）：生效。
         * - **false**：不生效。
         * @example `true`
         */
        Enable: boolean;
        /**
         * 弹性计划结束日期，只有设置了弹性计划结束日期才会返回参数值。格式：yyyy-MM-dd。
         * @example `2022-12-09`
         */
        EndDay: string;
        /**
         * 弹性计划名称。
         * @example `realtime`
         */
        PlanName: string;
        /**
         * 弹性计划资源类型，取值说明：
         * - **worker**：弹性IO资源单独弹性。
         * - **executor**：计算资源单独弹性。
         * - **executorcombineworker**（默认值）：计算，弹性IO资源按默认比例弹性。
         * @example `worker`
         */
        ElasticPlanType: string;
        /**
         * 弹性计划支持扩容的资源规格，取值说明：
         * - 8 Core 64 GB（默认规格）
         * - 16 Core 64 GB
         * - 32 Core 64 GB
         * - 64 Core 128 GB
         * - 12 Core 96 GB
         * - 24 Core 96 GB
         * - 52 Core 86 GB
         * @example `16 Core 64 GB`
         */
        ElasticPlanWorkerSpec: string;
    }[];
}
