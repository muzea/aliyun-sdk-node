export interface ListSourceEventsRequest {
    /**
     * A short description of struct
     */
    "body"?: {
        /**
         * 报警或者事件ID
         * @example `1`
         */
        instanceId: number;
        /**
         * INCIDENT 事件、ALERT 报警、PROBLEM 故障
         * @example `INCIDENT`
         */
        instanceType: string;
        /**
         * 起始key
         * @example `9223370410626682599-1344383-78954515-1-0a6e01a1701447fd9ef18b079edd2c6d`
         */
        startRowKey: string;
        /**
         * 终止key
         * @example `9223370410626682599-1344383-78954515-1-0a6e01a1701447fd9ef18b079edd2c6d`
         */
        stopRowKey: string;
        /**
         * 页大小
         * @example `20`
         */
        pageSize: number;
        /**
         * 幂等号
         * @example `C4BE3837-1A13-413B-A225-2C88188E8A43`
         */
        clientToken: string;
        /**
         * 当前页
         * @example `1`
         */
        pageNumber: number;
        /**
         * 2020-09-10 13:00:00
         * @example `开始时间`
         */
        startTime: string;
        /**
         * 2020-09-18 13:00:00
         * @example `结束时间`
         */
        endTime: string;
    };
}
