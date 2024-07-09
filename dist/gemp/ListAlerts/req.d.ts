export interface ListAlertsRequest {
    /**
     * A short description of struct
     */
    "body"?: {
        /**
         * 报警等级
         * @example `P1`
         */
        alertLevel: string;
        /**
         * 关联服务ID
         * @example `1`
         */
        relatedServiceId: number;
        /**
         * 报警名称
         * @example `报警`
         */
        alertName: string;
        /**
         * 当前页
         * @example `1`
         */
        pageNumber: number;
        /**
         * 分页大小
         * @example `10`
         */
        pageSize: number;
        /**
         * 报警来源
         * @example `流转规则A`
         */
        alertSourceName: string;
        /**
         * 2020-09-10 13:00:00
         * @example `开始时间`
         */
        startTime: string;
        /**
         * 2020-09-10 21:00:00
         * @example `结束时间`
         */
        endTime: string;
        /**
         * 报警规则名称
         * @example `规则名称`
         */
        ruleName: string;
        /**
         * 监控源ID
         * @example `C4BE3837`
         */
        monitorSourceId: string;
    };
}
