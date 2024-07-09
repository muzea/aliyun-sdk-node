export interface DescribeScdnDDoSTrafficInfoResponse {
    /**
     * 请求ID。
     * @example `8EEEA133-B4E4-4BE4-B00D-93B60387D8FD`
     */
    RequestId: string;
    PpsTotals: {
        PpsTotal: string[];
    };
    PpsDrops: {
        PpsDrop: string[];
    };
    BpsDrops: {
        BpsDrop: string[];
    };
    BpsTotals: {
        BpsTotal: string[];
    };
    TimeScopes: {
        /**
         * 时间范围。
         */
        TimeScope: {
            /**
             * 时间间隔，单位为毫秒。
             * @example `60000`
             */
            Interval: string;
            /**
             * 开始时间，时间戳，单位为毫秒。
             * @example `1512003360000`
             */
            Start: string;
        }[];
    };
}
