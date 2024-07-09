export interface ListDoctorHBaseTablesResponse {
    /**
     * 返回数据。
     */
    Data: {
        /**
         * 表名。
         * @example `tb_item`
         */
        TableName: string;
        /**
         * 指标信息。
         */
        Metrics: {
            /**
             * 表在几个region server上。
             */
            RegionServerCount: {
                /**
                 * 指标名称。
                 * @example `regionServerCount`
                 */
                Name: string;
                /**
                 * 指标值。
                 * @example `2`
                 */
                Value: number;
                /**
                 * 指标单位。
                 * @example `""`
                 */
                Unit: string;
                /**
                 * 指标描述。
                 * @example `Number of region servers count`
                 */
                Description: string;
            };
            /**
             * 表在几个region上。
             */
            RegionCount: {
                /**
                 * 指标名称。
                 * @example `regionCount`
                 */
                Name: string;
                /**
                 * 指标值。
                 * @example `3`
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
                 * @example `678`
                 */
                Value: number;
                /**
                 * 指标单位。
                 * @example `MB`
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
                 * @example `36`
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
             * 表单日读取总量。
             */
            DailyReadRequest: {
                /**
                 * 指标名称。
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
                 * @example `“”`
                 */
                Unit: string;
                /**
                 * 指标描述。
                 * @example `Number of read requests per day`
                 */
                Description: string;
            };
            /**
             * 表单日写总量。
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
                 * @example `“”`
                 */
                Unit: string;
                /**
                 * 指标描述。
                 * @example `Number of write requests per day`
                 */
                Description: string;
            };
            /**
             * 均衡度。
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
                 * @example `“”`
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
                 * @example `0.9`
                 */
                Value: number;
                /**
                 * 指标单位。
                 * @example `“”`
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
                 * @example `100`
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
                 * 指标值。
                 * @example `100`
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
                 * @example `100`
                 */
                Value: number;
                /**
                 * 指标单位。
                 * @example `MB`
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
                 * @example `100`
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
             * 温数据访问天数配置。
             */
            WarmConfigDay: {
                /**
                 * 指标名称。
                 * @example `warmConfigDay`
                 */
                Name: string;
                /**
                 * 指标值。
                 * @example `1`
                 */
                Value: number;
                /**
                 * 指标单位。
                 * @example `day`
                 */
                Unit: string;
                /**
                 * 指标描述。
                 * @example `Warm config day`
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
                 * @example `1`
                 */
                Value: number;
                /**
                 * 指标单位。
                 * @example `dat`
                 */
                Unit: string;
                /**
                 * 指标描述。
                 * @example `Cold config day`
                 */
                Description: string;
            };
            /**
             * 极冷数据访问天数配置。
             */
            FreezeConfigDay: {
                /**
                 * 指标名称。
                 * @example `freezeConfigDay`
                 */
                Name: string;
                /**
                 * 指标值。
                 * @example `1`
                 */
                Value: number;
                /**
                 * 指标单位。
                 * @example `day`
                 */
                Unit: string;
                /**
                 * 指标描述。
                 * @example `Freeze config day`
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
                 * @example `0`
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
                 * @example `1`
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
                 * @example `1.0`
                 */
                Value: number;
                /**
                 * 指标单位。
                 * @example `'"`
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
                 * @example `0.7`
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
                 * @example `Day growth ratio of read requests`
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
                 * @example `1.0`
                 */
                Value: number;
                /**
                 * 指标单位。
                 * @example `""`
                 */
                Unit: string;
                /**
                 * 指标描述
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
             * @example `67`
             */
            TableScore: number;
            /**
             * 读写不均衡描述。
             * @example `ead request unbalance is <p class='report-detail-topic'>表分区总数量为15，分区平均读请求数量为764361，以下分区存在读请求热点访问：</p><ul class='report-detail-ul'><li class='.report-detail-li'>RegionServer： emr-worker-2 Region Id： f1c922d41529785e21b61cf4c672b98a 读请求数量： 1543919</li><li class='.report-detail-li'>RegionServer： emr-worker-2 Region Id： 5f019e8cf7c16be9768634cb99ccbe05 读请求数量： 1512817</li><li class='.report-detail-li'>RegionServer： emr-worker-2 Region Id： d113992fea3a457f60b8b8aa5d6fa037 读请求数量： 1504293</li></ul><p style='line-height： 16px; font-size： 16px; margin： 0 auto'>&nbsp;</p>`
             */
            RequestUnbalanceSuggestion: string;
            /**
             * 读写热点region列表。
             * @example `null`
             */
            RequestHotspotRegionList: string[];
            /**
             * 读不均衡描述。
             * @example `ead request unbalance is <p class='report-detail-topic'>表分区总数量为15，分区平均读请求数量为764361，以下分区存在读请求热点访问：</p><ul class='report-detail-ul'><li class='.report-detail-li'>RegionServer： emr-worker-2 Region Id： f1c922d41529785e21b61cf4c672b98a 读请求数量： 1543919</li><li class='.report-detail-li'>RegionServer： emr-worker-2 Region Id： 5f019e8cf7c16be9768634cb99ccbe05 读请求数量： 1512817</li><li class='.report-detail-li'>RegionServer： emr-worker-2 Region Id： d113992fea3a457f60b8b8aa5d6fa037 读请求数量： 1504293</li></ul><p style='line-height： 16px; font-size： 16px; margin： 0 auto'>&nbsp;</p>`
             */
            ReadRequestUnbalanceSuggestion: string;
            /**
             * 读热点hotspot regions列表。
             * @example `null`
             */
            ReadRequestHotspotRegionList: string[];
            /**
             * 写不均衡度描述。
             * @example `write request unbalance is <p class='report-detail-topic'>表分区总数量为15，分区平均写请求数量为786142，以下分区存在写请求热点访问：</p><ul class='report-detail-ul'><li class='.report-detail-li'>RegionServer： emr-worker-2 Region Id： f1c922d41529785e21b61cf4c672b98a 写请求数量： 1588305</li><li class='.report-detail-li'>RegionServer： emr-worker-2 Region Id： 5f019e8cf7c16be9768634cb99ccbe05 写请求数量： 1556984</li><li class='.report-detail-li'>RegionServer： emr-worker-2 Region Id： d113992fea3a457f60b8b8aa5d6fa037 写请求数量： 1548764</li></ul><p style='line-height： 16px; font-size： 16px; margin： 0 auto'>&nbsp;</p>`
             */
            WriteRequestUnbalanceSuggestion: string;
            /**
             * 写热点hotspot regions列表。
             * @example `null`
             */
            WriteRequestHotspotRegionList: string[];
        };
    }[];
    /**
     * 请求ID。
     * @example `DD6B1B2A-5837-5237-ABE4-FF0C8944****`
     */
    RequestId: string;
    /**
     * 返回读取到的数据位置。
     * @example `DD6B1B2A-5837-5237-ABE4-FF0C89568980`
     */
    NextToken: string;
    /**
     * 本次请求所返回的最大记录条数。
     * @example `20`
     */
    MaxResults: number;
    /**
     * 本次请求条件下的数据总量。
     * @example `200`
     */
    TotalCount: number;
}
