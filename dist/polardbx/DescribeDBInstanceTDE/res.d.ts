export interface DescribeDBInstanceTDEResponse {
    /**
     * 请求ID。
     * @example `C458B1E8-1683-3645-B154-6BA32080EEA`
     */
    RequestId: string;
    /**
     * 数据结构体。
     */
    Data: {
        /**
         * 是否开启TDE：
         * - 0 = 未开启；
         * - 1 = 已开启。
         * @example `0`
         */
        TDEStatus: string;
    };
}
