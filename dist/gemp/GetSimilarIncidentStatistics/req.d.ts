export interface GetSimilarIncidentStatisticsRequest {
    /**
     * A short description of struct
     */
    "body"?: {
        /**
         * 事件id
         * @example `32`
         */
        incidentId: number;
        /**
         * 事件标题
         * @example `xxx事件`
         */
        incidentTitle: string;
        /**
         * 触发时间
         * @example `2021-09-09 09:09:09`
         */
        createTime: string;
        /**
         * 关联服务id
         * @example `23`
         */
        relatedServiceId: number;
        /**
         * 事件告警内容
         */
        events: string[];
        /**
         * 幂等标识
         * @example `7C56D225-7C34-40BB-9624-C8BA449260E6`
         */
        clientToken: string;
    };
}
