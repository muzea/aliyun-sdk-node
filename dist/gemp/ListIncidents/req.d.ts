export interface ListIncidentsRequest {
    /**
     * body
     */
    "body"?: {
        /**
         * 事件级别：P1、P2、P3、P4
         * @example `P1`
         */
        incidentLevel: string;
        /**
         * 页
         * @example `1`
         */
        pageNumber: number;
        /**
         * 行
         * @example `10`
         */
        pageSize: number;
        /**
         * 影响等级：HIGH 、LOW
         * @example `LOW`
         */
        effect: string;
        /**
         * 关联服务ID
         * @example `12312`
         */
        relationServiceId: number;
        /**
         * 事件状态：ASSIGNED（已分派）、RESPONDED（已响应）、FINISHED（已完结）
         * @example `ASSIGNED`
         */
        incidentStatus: string;
        /**
         * 是否自己
         * @example `true`
         */
        me: number;
        /**
         * 幂等校验token
         * @example `FD200FAE-E98F-496E-BFE6-4CE61E59A2E1`
         */
        clientToken: string;
        /**
         * 创建开始时间
         * @example `2021-11-01 00:00:00`
         */
        createStartTime: string;
        /**
         * 创建结束时间
         * @example `2021-11-10 00:00:00`
         */
        createEndTime: string;
        /**
         * 流转规则名称
         * @example `sa`
         */
        ruleName: string;
    };
}
