export interface ListTrendForSourceEventRequest {
    /**
     * A short description of struct
     */
    "body"?: {
        /**
         * 请求ID
         * @example `xxxx`
         */
        requestId: string;
        /**
         * 报警或者事件ID
         * @example `1000`
         */
        instanceId: number;
        /**
         * 类型
         * @example `INCIDENT`
         */
        instanceType: string;
        /**
         * 开始时间
         * @example `2020-10-10 00:00:00`
         */
        startTime: string;
        /**
         * 结束时间
         * @example `2020-10-10 23:59:59`
         */
        endTime: string;
        /**
         * 时间单位毫秒
         * @example `1000`
         */
        timeUnit: number;
    };
}
