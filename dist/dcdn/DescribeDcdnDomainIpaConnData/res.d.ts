export interface DescribeDcdnDomainIpaConnDataResponse {
    /**
     * 结束时间。
     * @example `2015-02-22T15:00:00Z`
     */
    EndTime: string;
    /**
     * 开始时间。
     * @example `2015-02-21T15:00:00Z`
     */
    StartTime: string;
    /**
     * 请求ID。
     * @example `A2A1EEF8-043E-43A1-807C-BEAC18EA1807`
     */
    RequestId: string;
    ConnectionDataPerInterval: {
        /**
         * 每个时间间隔的用户连接数。
         */
        DataModule: {
            /**
             * 时间片起始时刻。
             * @example `2022-02-21T15:00:00+08:00`
             */
            TimeStamp: string;
            /**
             * 加速域名。
             * @example `example1.com`
             */
            Domain: string;
            /**
             * IPA用户连接数。
             * @example `189095`
             */
            Connections: number;
        }[];
    };
}
