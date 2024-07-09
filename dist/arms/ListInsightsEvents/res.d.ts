export interface ListInsightsEventsResponse {
    /**
     * 请求ID。
     * @example `6F1174DC-6085-5353-AAE7-D4ADCD******`
     */
    RequestId: string;
    /**
     * 事件详情。
     */
    InsightsEvents: {
        /**
         * 事件标题。
         * @example `应用服务整体平均响应时间突增`
         */
        Title: string;
        /**
         * 事件描述。
         * @example `应用【sd】【HTTP】服务整体的响应时间在【2022-07-27 10:57:00】出现突增`
         */
        Desc: string;
        /**
         * 事件类型。
         * @example `rtIncrease`
         */
        Type: string;
        /**
         * 事件关联应用ID。
         * @example `dsv9zcel92@7da413b******`
         */
        Pid: string;
        /**
         * 事件严重等级。
         * @example `P3`
         */
        Level: string;
        /**
         * 事件发生时间的时间戳。
         * @example `1658890560`
         */
        Date: number;
        /**
         * 问题标识。
         * @example `erep3o9zue@01ebe697ab70566|@1499161100890550|@cn-hangzhou|@1701841800000|@1701842040000|@daa6c51a-3c44-4d57-9548-4e212c******`
         */
        ProblemId: string;
    }[];
}
