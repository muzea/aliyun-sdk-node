export interface GetDoctorHBaseTableResponse {
    /**
     * 返回数据。
     */
    Data: {
        /**
         * 指标信息。
         */
        Metrics: {
            /**
             * RegionServer数量。
             */
            RegionServerCount: {
                /**
                 * 指标名称。
                 * @example `regionServerCount`
                 */
                Name: string;
                /**
                 * 使用量。
                 * @example `10`
                 */
                Value: number;
                /**
                 * 指标单位。
                 * @example `“”`
                 */
                Unit: string;
                /**
                 * 指标描述。
                 * @example `Number of region servers count`
                 */
                Description: string;
            };
            /**
             * region数量。
             */
            RegionCount: {
                /**
                 * 指标名称。
                 * @example `regionCount`
                 */
                Name: string;
                /**
                 * 指标值。
                 * @example `10`
                 */
                Value: number;
                /**
                 * 指标单位。
                 * @example `""`
                 */
                Unit: string;
                /**
                 * 指标描述。
                 * @example `Number of regions count`
                 */
                Description: string;
            };
            /**
             * 表大小。
             */
            TableSize: {
                /**
                 * 指标名称。
                 * @example `tableSize`
                 */
                Name: string;
                /**
                 * 指标值。
                 * @example `tb_item`
                 */
                Value: number;
                /**
                 * 指标单位。
                 * @example `""`
                 */
                Unit: string;
                /**
                 * 指标描述。
                 * @example `Size of the table`
                 */
                Description: string;
            };
            /**
             * store file个数。
             */
            StoreFileCount: {
                /**
                 * 指标名称。
                 * @example `storeFileCount`
                 */
                Name: string;
                /**
                 * 指标值。
                 * @example `1000`
                 */
                Value: number;
                /**
                 * 指标单位。
                 * @example `""`
                 */
                Unit: string;
                /**
                 * 指标描述。
                 * @example `Number of store files`
                 */
                Description: string;
            };
            /**
             * 单日的读请求数量。
             */
            DailyReadRequest: {
                /**
                 * 项目名称。
                 * @example `dailyReadRequest`
                 */
                Name: string;
                /**
                 * 指标值。
                 * @example `1000`
                 */
                Value: number;
                /**
                 * 指标单位。
                 * @example `""`
                 */
                Unit: string;
                /**
                 * 指标描述。
                 * @example `test-update`
                 */
                Description: string;
            };
            /**
             * 单日的写请求数量。
             */
            DailyWriteRequest: {
                /**
                 * 指标名称。
                 * @example `dailyWriteRequest`
                 */
                Name: string;
                /**
                 * 指标值。
                 * @example `1000`
                 */
                Value: number;
                /**
                 * 指标单位。
                 * @example `""`
                 */
                Unit: string;
                /**
                 * 指标描述。
                 * @example `Number of write requests per day`
                 */
                Description: string;
            };
            /**
             * region均衡度。
             */
            RegionBalance: {
                /**
                 * 指标名称。
                 * @example `regionBalance`
                 */
                Name: string;
                /**
                 * 指标值。
                 * @example `1.0`
                 */
                Value: number;
                /**
                 * 指标单位。
                 * @example `""`
                 */
                Unit: string;
                /**
                 * 指标描述。
                 * @example `The ability to evenly distribute Regions on different RegionServer nodes`
                 */
                Description: string;
            };
            /**
             * 请求均衡度。
             */
            RequestBalance: {
                /**
                 * 指标名称。
                 * @example `requestBalance`
                 */
                Name: string;
                /**
                 * 指标值。
                 * @example `1.0`
                 */
                Value: number;
                /**
                 * 指标单位。
                 * @example `""`
                 */
                Unit: string;
                /**
                 * 指标描述。
                 * @example `The balance of distributing requests`
                 */
                Description: string;
            };
            /**
             * 热数据大小。
             */
            HotDataSize: {
                /**
                 * 指标名称。
                 * @example `hotDataSize`
                 */
                Name: string;
                /**
                 * 指标值。
                 * @example `1000`
                 */
                Value: number;
                /**
                 * 指标单位。
                 * @example `MB`
                 */
                Unit: string;
                /**
                 * 指标描述。
                 * @example `Size of the hot data size`
                 */
                Description: string;
            };
            /**
             * 温数据大小。
             */
            WarmDataSize: {
                /**
                 * 指标名称。
                 * @example `warmDataSize`
                 */
                Name: string;
                /**
                 * 使用率。
                 * @example `1000`
                 */
                Value: number;
                /**
                 * 指标单位。
                 * @example `MB`
                 */
                Unit: string;
                /**
                 * 指标描述。
                 * @example `Size of the warm data size
                `
                 */
                Description: string;
            };
            /**
             * 冷数据大小。
             */
            ColdDataSize: {
                /**
                 * 指标名称。
                 * @example `coldDataSize`
                 */
                Name: string;
                /**
                 * 指标值。
                 * @example `1000`
                 */
                Value: number;
                /**
                 * 指标单位。
                 * @example `""`
                 */
                Unit: string;
                /**
                 * 指标描述。
                 * @example `Size of the cold data size`
                 */
                Description: string;
            };
            /**
             * 极冷数据大小。
             */
            FreezeDataSize: {
                /**
                 * 指标名称。
                 * @example `freezeDataSize`
                 */
                Name: string;
                /**
                 * 指标值。
                 * @example `1000`
                 */
                Value: number;
                /**
                 * 指标单位。
                 * @example `MB`
                 */
                Unit: string;
                /**
                 * 指标描述。
                 * @example `Size of the freeze data size`
                 */
                Description: string;
            };
            /**
             * 热数据访问天数配置。
             */
            WarmConfigDay: {
                /**
                 * 指标名称。
                 * @example `warmConfigDay`
                 */
                Name: string;
                /**
                 * 指标值。
                 * @example `1000`
                 */
                Value: number;
                /**
                 * 指标单位。
                 * @example `MB`
                 */
                Unit: string;
                /**
                 * 指标描述。
                 * @example `Size of the warm data size`
                 */
                Description: string;
            };
            /**
             * 冷数据访问天数配置。
             */
            ColdConfigDay: {
                /**
                 * 指标名称。
                 * @example `coldConfigDay`
                 */
                Name: string;
                /**
                 * 指标值。
                 * @example `10`
                 */
                Value: number;
                /**
                 * 指标单位。
                 * @example `day`
                 */
                Unit: string;
                /**
                 * 指标描述。
                 * @example `Cold config day`
                 */
                Description: string;
            };
            /**
             * 冷数据访问天数配置。
             */
            FreezeConfigDay: {
                /**
                 * 指标名称。
                 * @example `freezeConfigDay`
                 */
                Name: string;
                /**
                 * 指标值。
                 * @example `10`
                 */
                Value: number;
                /**
                 * 指标单位。
                 * @example `day`
                 */
                Unit: string;
                /**
                 * 指标描述。
                 * @example `Freeze config day
                `
                 */
                Description: string;
            };
            /**
             * 本地化率。
             */
            Locality: {
                /**
                 * 指标名称。
                 * @example `locality`
                 */
                Name: string;
                /**
                 * 指标值。
                 * @example `0.5`
                 */
                Value: number;
                /**
                 * 指标单位。
                 * @example `""`
                 */
                Unit: string;
                /**
                 * 指标描述。
                 * @example `The locality of data`
                 */
                Description: string;
            };
            /**
             * 表多少天没被访问。
             */
            ColdAccessDay: {
                /**
                 * 指标名称。
                 * @example `coldAccessDay`
                 */
                Name: string;
                /**
                 * 指标值。
                 * @example `3`
                 */
                Value: number;
                /**
                 * 指标单位。
                 * @example `day`
                 */
                Unit: string;
                /**
                 * 指标描述。
                 * @example `Cold access day`
                 */
                Description: string;
            };
            /**
             * region个数日增量比例。
             */
            RegionCountDayGrowthRatio: {
                /**
                 * 指标名称。
                 * @example `regionCountDayGrowthRatio`
                 */
                Name: string;
                /**
                 * 指标值。
                 * @example `0.8`
                 */
                Value: number;
                /**
                 * 指标单位。
                 * @example `""`
                 */
                Unit: string;
                /**
                 * 指标描述。
                 * @example `Day growth ratio of region count`
                 */
                Description: string;
            };
            /**
             * 表大小日增量比例。
             */
            TableSizeDayGrowthRatio: {
                /**
                 * 指标名称。
                 * @example `tableSizeDayGrowthRatio`
                 */
                Name: string;
                /**
                 * 指标值。
                 * @example `1.5`
                 */
                Value: number;
                /**
                 * 指标单位。
                 * @example `""`
                 */
                Unit: string;
                /**
                 * 指标描述。
                 * @example `Day growth ratio of table size`
                 */
                Description: string;
            };
            /**
             * store file个数日增量比例。
             */
            StoreFileCountDayGrowthRatio: {
                /**
                 * 指标名称。
                 * @example `storeFileCountDayGrowthRatio`
                 */
                Name: string;
                /**
                 * 指标值。
                 * @example `1.5`
                 */
                Value: number;
                /**
                 * 指标单位。
                 * @example `""`
                 */
                Unit: string;
                /**
                 * 指标描述。
                 * @example `Day growth ratio of store file count`
                 */
                Description: string;
            };
            /**
             * 单日读请求日增量比例。
             */
            DailyReadRequestDayGrowthRatio: {
                /**
                 * 指标名称。
                 * @example `dailyReadRequestDayGrowthRatio`
                 */
                Name: string;
                /**
                 * 指标值。
                 * @example `1.5`
                 */
                Value: number;
                /**
                 * 指标单位。
                 * @example `""`
                 */
                Unit: string;
                /**
                 * 指标描述。
                 * @example `Day growth ratio of table size`
                 */
                Description: string;
            };
            /**
             * 单日写请求日增量比例。
             */
            DailyWriteRequestDayGrowthRatio: {
                /**
                 * 指标名称。
                 * @example `dailyWriteRequestDayGrowthRatio`
                 */
                Name: string;
                /**
                 * 指标值。
                 * @example `0.5`
                 */
                Value: number;
                /**
                 * 指标单位。
                 * @example `""`
                 */
                Unit: string;
                /**
                 * 指标描述。
                 * @example `The balance of distributing requests`
                 */
                Description: string;
            };
            /**
             * 读均衡度。
             */
            ReadRequestBalance: {
                /**
                 * 指标名称。
                 * @example `readRequestBalance`
                 */
                Name: string;
                /**
                 * 指标值。
                 * @example `0.5`
                 */
                Value: number;
                /**
                 * 指标单位。
                 * @example `""`
                 */
                Unit: string;
                /**
                 * 指标描述。
                 * @example `The balance of distributing read requests`
                 */
                Description: string;
            };
            /**
             * 写均衡度。
             */
            WriteRequestBalance: {
                /**
                 * 指标名称。
                 * @example `writeRequestBalance`
                 */
                Name: string;
                /**
                 * 指标值。
                 * @example `0.5`
                 */
                Value: number;
                /**
                 * 指标单位。
                 * @example `""`
                 */
                Unit: string;
                /**
                 * 指标描述。
                 * @example `The balance of distributing write requests`
                 */
                Description: string;
            };
        };
        /**
         * 诊断结果。
         */
        Analysis: {
            /**
             * 表打分。
             * @example `85`
             */
            TableScore: number;
            /**
             * 读写不均衡描述。
             * @example `read request unbalance is <p class='report-detail-topic'>表分区总数量为14，分区平均读请求数量为5032486，以下分区存在读请求热点访问：</p><ul class='report-detail-ul'><li class='.report-detail-li'>RegionServer： emr-worker-4 Region Id： 4ac818a3ab3fd727490a5b4d4dac7667 读请求数量： 15485664</li><li class='.report-detail-li'>RegionServer： emr-worker-2 Region Id： 021b387ae92959def65041e25eade3aa 读请求数量： 7731980</li><li class='.report-detail-li'>RegionServer： emr-worker-2 Region Id： d58f33abfe857e5fd0045eaa31c93df8 读请求数量： 7705237</li><li class='.report-detail-li'>RegionServer： emr-worker-2 Region Id： 4ca84757a7d0948b8552cfeebefa25a9 读请求数量： 7703492</li><li class='.report-detail-li'>RegionServer： emr-worker-4 Region Id： 1018192dae42995fc75c6d5b5981a9b7 读请求数量： 7695284</li></ul><p style='line-height： 16px; font-size： 16px; margin： 0 auto'>&nbsp;</p>`
             */
            RequestUnbalanceSuggestion: string;
            /**
             * 读写热点region列表。
             * @example `null`
             */
            RequestHotspotRegionList: string[];
            /**
             * 读不均衡描述。
             * @example `read request unbalance is <p class='report-detail-topic'>表分区总数量为14，分区平均读请求数量为5032486，以下分区存在读请求热点访问：</p><ul class='report-detail-ul'><li class='.report-detail-li'>RegionServer： emr-worker-4 Region Id： 4ac818a3ab3fd727490a5b4d4dac7667 读请求数量： 15485664</li><li class='.report-detail-li'>RegionServer： emr-worker-2 Region Id： 021b387ae92959def65041e25eade3aa 读请求数量： 7731980</li><li class='.report-detail-li'>RegionServer： emr-worker-2 Region Id： d58f33abfe857e5fd0045eaa31c93df8 读请求数量： 7705237</li><li class='.report-detail-li'>RegionServer： emr-worker-2 Region Id： 4ca84757a7d0948b8552cfeebefa25a9 读请求数量： 7703492</li><li class='.report-detail-li'>RegionServer： emr-worker-4 Region Id： 1018192dae42995fc75c6d5b5981a9b7 读请求数量： 7695284</li></ul><p style='line-height： 16px; font-size： 16px; margin： 0 auto'>&nbsp;</p>`
             */
            ReadRequestUnbalanceSuggestion: string;
            /**
             * 读热点hotspot regions列表。
             * @example `null`
             */
            ReadRequestHotspotRegionList: string[];
            /**
             * 写不均衡度描述。
             * @example `write request unbalance is <p class='report-detail-topic'>表分区总数量为15，分区平均写请求数量为769954，以下分区存在写请求热点访问：</p><ul class='report-detail-ul'><li class='.report-detail-li'>RegionServer： emr-worker-2 Region Id： 4a938c08750869c47b7a92edeeec2ccc 写请求数量： 2115051</li><li class='.report-detail-li'>RegionServer： emr-worker-2 Region Id： b4d21974df92bdf3589e63e4da1fc923 写请求数量： 1592509</li><li class='.report-detail-li'>RegionServer： emr-worker-2 Region Id： 25eb6717470f4ddbabe9187ff0fc0cb3 写请求数量： 1585420</li></ul><p style='line-height： 16px; font-size： 16px; margin： 0 auto'>&nbsp;</p>`
             */
            WriteRequestUnbalanceSuggestion: string;
            /**
             * 写热点hotspot regions列表。
             * @example `null`
             */
            WriteRequestHotspotRegionList: string[];
        };
    };
    /**
     * 请求ID。
     * @example `DD6B1B2A-5837-5237-ABE4-FF0C8944****`
     */
    RequestId: string;
}
