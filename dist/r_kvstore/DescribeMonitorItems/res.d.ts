export interface DescribeMonitorItemsResponse {
    /**
     * 请求ID。
     * @example `8BEB2618-9517-43F3-A233-E0B34512****`
     */
    RequestId: string;
    MonitorItems: {
        /**
         * 监控参数列表。
         * > * **memoryUsage**、**GetQps**和**PutQps**监控指标仅在4.0及以上版本的实例中支持。其中，**GetQps**和**PutQps**监控指标需要实例为最新的小版本。升级方法请参见[升级大版本](~~101764~~)和[升级小版本](~~56450~~)。
         * > * Redis实例的引擎版本为2.8版本时，如果没有展示**hit_rate**监控指标，您需要升级小版本，详情请参见[升级小版本](~~56450~~)。
         */
        KVStoreMonitorItem: {
            /**
             * 监控项使用的单位。
             * @example `Counts/s`
             */
            Unit: string;
            /**
             * 监控项。
             * @example `select`
             */
            MonitorKey: string;
        }[];
    };
}
