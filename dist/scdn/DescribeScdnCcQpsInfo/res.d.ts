export interface DescribeScdnCcQpsInfoResponse {
    /**
     * 请求ID。
     * @example `FA2EE241-5E9D-488A-B36E-408BF81C077E`
     */
    RequestId: string;
    Attacks: {
        Attack: string[];
    };
    Totals: {
        Total: string[];
    };
    TimeScopes: {
        /**
         * 时间范围。
         */
        TimeScope: {
            /**
             * 时间间隔，单位毫秒。
             * @example `60000`
             */
            Interval: string;
            /**
             * 开始时间，时间戳，单位毫秒。
             * @example `1512003300000`
             */
            Start: string;
        }[];
    };
}
