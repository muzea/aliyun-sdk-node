export interface DescribeElasticDailyPlanResponse {
    /**
     * 请求ID。
     * @example `1AD222E9-E606-4A42-BF6D-8A4442913CEF`
     */
    RequestId: string;
    /**
     * 当天弹性计划的信息列表。
     */
    ElasticDailyPlanList: {
        /**
         * 当天弹性计划执行状态，同时查询多个状态用半角逗号（,）分隔，取值说明：
         * - **1**：未执行。
         * - **2**：执行中。
         * - **3**：执行成功。
         * - **4**：执行失败。
         * @example `3`
         */
        Status: number;
        /**
         * 当天弹性计划的起始日期，格式：yyyy-MM-dd。
         * @example `2022-12-02`
         */
        Day: string;
        /**
         * 资源组名称。
         * @example `test`
         */
        ResourcePoolName: string;
        /**
         * 实际扩容时间。格式：yyyy-MM-dd hh:mm:ss（UTC时间）。
         * @example `2022-12-02 16:00:00`
         */
        StartTs: string;
        /**
         * 计划还原时间。格式：yyyy-MM-dd hh:mm:ss（UTC时间）。
         * @example `2022-12-02 16:00:00`
         */
        PlanEndTs: string;
        /**
         * 计划扩容时间。格式：yyyy-MM-dd hh:mm:ss（UTC时间）。
         * @example `2022-12-02 15:00:00`
         */
        PlanStartTs: string;
        /**
         * 弹性计划节点数。
         * - 当ElasticPlanType为**worker**时，该参数不返回或返回结果为0。
         * - 当ElasticPlanType为**executorcombineworker**或**executor**时，该参数返回结果为大于0的数字。
         * @example `0`
         */
        ElasticNodeNum: number;
        /**
         * 实际还原时间。格式：yyyy-MM-dd hh:mm:ss（UTC时间）。
         * @example `2022-12-02 16:00:00`
         */
        EndTs: string;
        /**
         * 弹性计划名称。
         * @example `realtimeplan`
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
         * 弹性计划支持扩容的资源规格。取值说明：
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
