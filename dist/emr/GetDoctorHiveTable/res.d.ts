export interface GetDoctorHiveTableResponse {
    /**
     * Hive表分析数据。
     */
    Data: {
        /**
         * 表格式数据。
         */
        Formats: {
            /**
             * 存储格式名称。
             * @example `TextInputFormat`
             */
            FormatName: string;
            /**
             * 格式数据量。
             * @example `506930200`
             */
            FormatSize: number;
            /**
             * 格式数据量单位。
             * @example `MB`
             */
            FormatSizeUnit: string;
            /**
             * 格式占比。
             * @example `0.23`
             */
            FormatRatio: number;
            /**
             * 格式数据量日增量。
             * @example `1232124`
             */
            FormatDayGrowthSize: number;
            /**
             * 格式数据量日环比。
             * @example `0.04`
             */
            FormatSizeDayGrowthRatio: number;
        }[];
        /**
         * 属主。
         * @example `DW`
         */
        Owner: string;
        /**
         * 指标信息。
         */
        Metrics: {
            /**
             * 分区数。
             */
            PartitionNum: {
                /**
                 * 指标名称。
                 * @example `partitionNum`
                 */
                Name: string;
                /**
                 * 指标值。
                 * @example `441`
                 */
                Value: number;
                /**
                 * 指标单位。
                 * @example `“”`
                 */
                Unit: string;
                /**
                 * 指标描述。
                 * @example `number of partitions`
                 */
                Description: string;
            };
            /**
             * 大文件个数。大文件指的是1 GB以上大小的文件。
             */
            LargeFileCount: {
                /**
                 * 指标名称。
                 * @example `largeFileCount`
                 */
                Name: string;
                /**
                 * 指标值。
                 * @example `123`
                 */
                Value: number;
                /**
                 * 指标单位。
                 * @example `“”`
                 */
                Unit: string;
                /**
                 * 指标描述。
                 * @example `Number of large files`
                 */
                Description: string;
            };
            /**
             * 中文件个数。中文件指的是128 MB以上，1 GB以下大小的文件。
             */
            MediumFileCount: {
                /**
                 * 指标名称。
                 * @example `mediumFileCount`
                 */
                Name: string;
                /**
                 * 指标值。
                 * @example `5`
                 */
                Value: number;
                /**
                 * 指标单位。
                 * @example `“”`
                 */
                Unit: string;
                /**
                 * 指标描述。
                 * @example `Number of medium files`
                 */
                Description: string;
            };
            /**
             * 小文件个数。小文件指的是10 MB以上，128 MB以下大小的文件。
             */
            SmallFileCount: {
                /**
                 * 指标名称。
                 * @example `smallFileCount`
                 */
                Name: string;
                /**
                 * 指标值。
                 * @example `18`
                 */
                Value: number;
                /**
                 * 指标单位。
                 * @example `"“`
                 */
                Unit: string;
                /**
                 * 指标描述。
                 * @example `Number of small files`
                 */
                Description: string;
            };
            /**
             * 极小文件个数。极小文件指的是0 MB以上，10 MB以下大小的文件。
             */
            TinyFileCount: {
                /**
                 * 指标名称。
                 * @example `tinyFileCount`
                 */
                Name: string;
                /**
                 * 指标值。
                 * @example `451`
                 */
                Value: number;
                /**
                 * 指标单位。
                 * @example `”“`
                 */
                Unit: string;
                /**
                 * 指标描述。
                 * @example `Number of tiny files`
                 */
                Description: string;
            };
            /**
             * 空文件个数。空文件指的是0 MB大小的文件。
             */
            EmptyFileCount: {
                /**
                 * 指标名称。
                 * @example `emptyFileCount`
                 */
                Name: string;
                /**
                 * 指标值。
                 * @example `3123`
                 */
                Value: number;
                /**
                 * 指标单位。
                 * @example `”“`
                 */
                Unit: string;
                /**
                 * 指标描述。
                 * @example `Number of empty files`
                 */
                Description: string;
            };
            /**
             * 总文件个数。
             */
            TotalFileCount: {
                /**
                 * 指标名称。
                 * @example `totalFileCount`
                 */
                Name: string;
                /**
                 * 指标值。
                 * @example `123`
                 */
                Value: number;
                /**
                 * 指标单位。
                 * @example `”“`
                 */
                Unit: string;
                /**
                 * 指标描述。
                 * @example `Number of total files`
                 */
                Description: string;
            };
            /**
             * 大文件个数占比。大文件指的是1 GB以上大小的文件。
             */
            LargeFileRatio: {
                /**
                 * 指标名称。
                 * @example `largeFileRatio`
                 */
                Name: string;
                /**
                 * 指标值。
                 * @example `0.02`
                 */
                Value: number;
                /**
                 * 指标单位。
                 * @example `”“`
                 */
                Unit: string;
                /**
                 * 指标描述。
                 * @example `Ratio of large files`
                 */
                Description: string;
            };
            /**
             * 中文件个数占比。中文件指的是128 MB以上，1 GB以下大小的文件。
             */
            MediumFileRatio: {
                /**
                 * 指标名称。
                 * @example `mediumFileRatio`
                 */
                Name: string;
                /**
                 * 指标值。
                 * @example `0.80`
                 */
                Value: number;
                /**
                 * 指标单位。
                 * @example `”“`
                 */
                Unit: string;
                /**
                 * 指标描述。
                 * @example `Ratio of medium files`
                 */
                Description: string;
            };
            /**
             * 小文件个数占比。小文件指的是10 MB以上，128 MB以下大小的文件。
             */
            SmallFileRatio: {
                /**
                 * 指标名称。
                 * @example `smallFileRatio`
                 */
                Name: string;
                /**
                 * 指标值。
                 * @example `0.04`
                 */
                Value: number;
                /**
                 * 指标单位。
                 * @example `”“`
                 */
                Unit: string;
                /**
                 * 指标描述。
                 * @example `Ratio of small files`
                 */
                Description: string;
            };
            /**
             * 极小文件个数占比。极小文件指的是0 MB以上，10 MB以下大小的文件。
             */
            TinyFileRatio: {
                /**
                 * 指标名称。
                 * @example `tinyFileRatio`
                 */
                Name: string;
                /**
                 * 指标值。
                 * @example `0.96`
                 */
                Value: number;
                /**
                 * 指标单位。
                 * @example `""`
                 */
                Unit: string;
                /**
                 * 指标描述。
                 * @example `Ratio of tiny files`
                 */
                Description: string;
            };
            /**
             * 空文件个数占比。空文件指的是0 MB大小的文件。
             */
            EmptyFileRatio: {
                /**
                 * 指标名称。
                 * @example `emptyFileRatio`
                 */
                Name: string;
                /**
                 * 指标值。
                 * @example `0.01`
                 */
                Value: number;
                /**
                 * 指标单位。
                 * @example `""`
                 */
                Unit: string;
                /**
                 * 指标描述。
                 * @example `Ratio of empty files`
                 */
                Description: string;
            };
            /**
             * 热数据的数据量大小。热数据指的是7日内有访问的数据。
             */
            HotDataSize: {
                /**
                 * 指标名称。
                 * @example `hotDataSize`
                 */
                Name: string;
                /**
                 * 指标值。
                 * @example `203431`
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
             * 温数据的数据量大小。温数据指的是7日内没有访问的数据，但是30日以内有访问的数据。
             */
            WarmDataSize: {
                /**
                 * 指标名称。
                 * @example `warmDataSize`
                 */
                Name: string;
                /**
                 * 指标值。
                 * @example `14981`
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
             * 冷数据的数据量大小。冷数据指的是30日内没有访问的数据，但是90日以内有访问的数据。
             */
            ColdDataSize: {
                /**
                 * 指标名称。
                 * @example `coldDataSize`
                 */
                Name: string;
                /**
                 * 指标值。
                 * @example `217715`
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
             * 极冷数据的数据量大小。极冷数据指的是90日以内都没有访问的数据。
             */
            FreezeDataSize: {
                /**
                 * 指标名称。
                 * @example `freezeDataSize`
                 */
                Name: string;
                /**
                 * 指标值。
                 * @example `33229309`
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
             * 总数据量大小。
             */
            TotalDataSize: {
                /**
                 * 指标名称。
                 * @example `totalDataSize`
                 */
                Name: string;
                /**
                 * 指标值。
                 * @example `33800296`
                 */
                Value: number;
                /**
                 * 指标单位。
                 * @example `MB`
                 */
                Unit: string;
                /**
                 * 指标描述。
                 * @example `Total data size in megabytes (MB)`
                 */
                Description: string;
            };
            /**
             * 热数据的数据量大小占比。热数据指的是7日内有访问的数据。
             */
            HotDataRatio: {
                /**
                 * 指标名称。
                 * @example `hotDataRatio`
                 */
                Name: string;
                /**
                 * 指标值。
                 * @example `0.01`
                 */
                Value: number;
                /**
                 * 指标单位。
                 * @example `""`
                 */
                Unit: string;
                /**
                 * 指标描述。
                 * @example `Hot data ratio`
                 */
                Description: string;
            };
            /**
             * 温数据的数据量大小占比。温数据指的是7日内没有访问的数据，但是30日以内有访问的数据。
             */
            WarmDataRatio: {
                /**
                 * 指标名称。
                 * @example `warmDataRatio`
                 */
                Name: string;
                /**
                 * 指标值。
                 * @example `0.1`
                 */
                Value: number;
                /**
                 * 指标单位。
                 * @example `""`
                 */
                Unit: string;
                /**
                 * 指标描述。
                 * @example `Ratio of warm data`
                 */
                Description: string;
            };
            /**
             * 冷数据的数据量大小占比。冷数据指的是30日内没有访问的数据，但是90日以内有访问的数据。
             */
            ColdDataRatio: {
                /**
                 * 指标名称。
                 * @example `coldDataRatio`
                 */
                Name: string;
                /**
                 * 指标值。
                 * @example `0.01`
                 */
                Value: number;
                /**
                 * 指标单位。
                 * @example `""`
                 */
                Unit: string;
                /**
                 * 指标描述。
                 * @example `Cold data ratio`
                 */
                Description: string;
            };
            /**
             * 极冷数据的数据量大小占比。极冷数据指的是90日以内都没有访问的数据。
             */
            FreezeDataRatio: {
                /**
                 * 指标名称。
                 * @example `freezeDataRatio`
                 */
                Name: string;
                /**
                 * 指标值。
                 * @example `0.98`
                 */
                Value: number;
                /**
                 * 指标单位。
                 * @example `""`
                 */
                Unit: string;
                /**
                 * 指标描述。
                 * @example `Ratio of freeze data`
                 */
                Description: string;
            };
            /**
             * 总文件个数日增量。
             */
            TotalFileDayGrowthCount: {
                /**
                 * 指标名称。
                 * @example `totalFileDayGrowthCount`
                 */
                Name: string;
                /**
                 * 指标值。
                 * @example `100`
                 */
                Value: number;
                /**
                 * 指标单位。
                 * @example `""`
                 */
                Unit: string;
                /**
                 * 指标描述。
                 * @example `Day growth count of total files`
                 */
                Description: string;
            };
            /**
             * 大文件个数日增量。大文件指的是1 GB以上大小的文件。
             */
            LargeFileDayGrowthCount: {
                /**
                 * 指标名称。
                 * @example `largeFileDayGrowthCount`
                 */
                Name: string;
                /**
                 * 指标值。
                 * @example `40`
                 */
                Value: number;
                /**
                 * 指标单位。
                 * @example `""`
                 */
                Unit: string;
                /**
                 * 指标描述。
                 * @example `Day growth count of large files`
                 */
                Description: string;
            };
            /**
             * 中文件个数日增量。中文件指的是128 MB以上，1 GB以下大小的文件。
             */
            MediumFileDayGrowthCount: {
                /**
                 * 指标名称。
                 * @example `mediumFileDayGrowthCount`
                 */
                Name: string;
                /**
                 * 指标值。
                 * @example `20`
                 */
                Value: number;
                /**
                 * 指标单位。
                 * @example `""`
                 */
                Unit: string;
                /**
                 * 指标描述。
                 * @example `Day growth count of medium files`
                 */
                Description: string;
            };
            /**
             * 小文件个数日增量。小文件指的是10 MB以上，128 MB以下大小的文件。
             */
            SmallFileDayGrowthCount: {
                /**
                 * 指标名称。
                 * @example `smallFileDayGrowthCount`
                 */
                Name: string;
                /**
                 * 指标值。
                 * @example `18`
                 */
                Value: number;
                /**
                 * 指标单位。
                 * @example `”“`
                 */
                Unit: string;
                /**
                 * 指标描述。
                 * @example `Day growth count of small files`
                 */
                Description: string;
            };
            /**
             * 极小文件个数日增量。极小文件指的是0 MB以上，10 MB以下大小的文件。
             */
            TinyFileDayGrowthCount: {
                /**
                 * 指标名称。
                 * @example `tinyFileDayGrowthCount`
                 */
                Name: string;
                /**
                 * 指标值。
                 * @example `482`
                 */
                Value: number;
                /**
                 * 指标单位。
                 * @example `”“`
                 */
                Unit: string;
                /**
                 * 指标描述。
                 * @example `Day growth count of tiny files`
                 */
                Description: string;
            };
            /**
             * 空文件个数日增量。空文件指的是0 MB大小的文件。
             */
            EmptyFileDayGrowthCount: {
                /**
                 * 指标名称。
                 * @example `emptyFileDayGrowthCount`
                 */
                Name: string;
                /**
                 * 指标值。
                 * @example `-20`
                 */
                Value: number;
                /**
                 * 指标单位。
                 * @example `”“`
                 */
                Unit: string;
                /**
                 * 指标描述。
                 * @example `Day growth count of empty files`
                 */
                Description: string;
            };
            /**
             * 热数据的数据量日增量大小。热数据指的是7日内有访问的数据。
             */
            HotDataDayGrowthSize: {
                /**
                 * 指标名称。
                 * @example `hotDataDayGrowthSize`
                 */
                Name: string;
                /**
                 * 指标值。
                 * @example `203431`
                 */
                Value: number;
                /**
                 * 指标单位。
                 * @example `MB`
                 */
                Unit: string;
                /**
                 * 指标描述。
                 * @example `Day growth size of hot data`
                 */
                Description: string;
            };
            /**
             * 温数据的数据量日增量大小。温数据指的是7日内没有访问的数据，但是30日以内有访问的数据。
             */
            WarmDataDayGrowthSize: {
                /**
                 * 指标名称。
                 * @example `warmDataDayGrowthSize`
                 */
                Name: string;
                /**
                 * 指标值。
                 * @example `149841`
                 */
                Value: number;
                /**
                 * 指标单位。
                 * @example `MB`
                 */
                Unit: string;
                /**
                 * 指标描述。
                 * @example `Day growth size of warm data`
                 */
                Description: string;
            };
            /**
             * 冷数据的数据量日增量大小。冷数据指的是30日内没有访问的数据，但是90日以内有访问的数据。
             */
            ColdDataDayGrowthSize: {
                /**
                 * 指标名称。
                 * @example `coldDataDayGrowthSize`
                 */
                Name: string;
                /**
                 * 指标值。
                 * @example `217715`
                 */
                Value: number;
                /**
                 * 指标单位。
                 * @example `MB`
                 */
                Unit: string;
                /**
                 * 指标描述。
                 * @example `Day growth size of cold data`
                 */
                Description: string;
            };
            /**
             * 极冷数据的数据量日增量大小。极冷数据指的是90日以内都没有访问的数据。
             */
            FreezeDataDayGrowthSize: {
                /**
                 * 指标名称。
                 * @example `freezeDataDayGrowthSize`
                 */
                Name: string;
                /**
                 * 指标值。
                 * @example `33229309`
                 */
                Value: number;
                /**
                 * 指标单位。
                 * @example `MB`
                 */
                Unit: string;
                /**
                 * 指标描述。
                 * @example `Day growth size of freeze data`
                 */
                Description: string;
            };
            /**
             * 全部数据的数据量日增量大小。
             */
            TotalDataDayGrowthSize: {
                /**
                 * 指标名称。
                 * @example `totalDataDayGrowthSize`
                 */
                Name: string;
                /**
                 * 指标值。
                 * @example `33800296`
                 */
                Value: number;
                /**
                 * 指标单位。
                 * @example `MB`
                 */
                Unit: string;
                /**
                 * 指标描述。
                 * @example `Day growth size of total data`
                 */
                Description: string;
            };
            /**
             * 总文件个数日环比。
             */
            TotalFileCountDayGrowthRatio: {
                /**
                 * 指标名称。
                 * @example `totalFileCountDayGrowthRatio`
                 */
                Name: string;
                /**
                 * 指标值。
                 * @example `0.01`
                 */
                Value: number;
                /**
                 * 指标单位。
                 * @example `”“`
                 */
                Unit: string;
                /**
                 * 指标描述。
                 * @example `Day growth ratio of total files`
                 */
                Description: string;
            };
            /**
             * 大文件个数日环比。大文件指的是1 GB以上大小的文件。
             */
            LargeFileCountDayGrowthRatio: {
                /**
                 * 指标名称。
                 * @example `largeFileCountDayGrowthRatio`
                 */
                Name: string;
                /**
                 * 指标值。
                 * @example `0.01`
                 */
                Value: number;
                /**
                 * 指标单位。
                 * @example `”“`
                 */
                Unit: string;
                /**
                 * 指标描述。
                 * @example `Day growth ratio of large files`
                 */
                Description: string;
            };
            /**
             * 中文件个数日环比。比中文件指的是128 MB以上，1 GB以下大小的文件。
             */
            MediumFileCountDayGrowthRatio: {
                /**
                 * 指标名称。
                 * @example `mediumFileCountDayGrowthRatio`
                 */
                Name: string;
                /**
                 * 指标值。
                 * @example `0.01`
                 */
                Value: number;
                /**
                 * 指标单位。
                 * @example `”“`
                 */
                Unit: string;
                /**
                 * 指标描述。
                 * @example `Day growth ratio of medium files`
                 */
                Description: string;
            };
            /**
             * 小文件个数日环比。小文件指的是10 MB以上，128 MB以下大小的文件。
             */
            SmallFileCountDayGrowthRatio: {
                /**
                 * 指标名称。
                 * @example `smallFileCountDayGrowthRatio`
                 */
                Name: string;
                /**
                 * 指标值。
                 * @example `0.01`
                 */
                Value: number;
                /**
                 * 指标单位。
                 * @example `”“`
                 */
                Unit: string;
                /**
                 * 指标描述。
                 * @example `Day growth ratio of small files`
                 */
                Description: string;
            };
            /**
             * 极小文件个数日环比。极小文件指的是0 MB以上，10 MB以下大小的文件。
             */
            TinyFileCountDayGrowthRatio: {
                /**
                 * 指标名称。
                 * @example `tinyFileCountDayGrowthRatio`
                 */
                Name: string;
                /**
                 * 指标值。
                 * @example `0.04`
                 */
                Value: number;
                /**
                 * 指标单位。
                 * @example `”“`
                 */
                Unit: string;
                /**
                 * 指标描述。
                 * @example `Day growth ratio of tiny files`
                 */
                Description: string;
            };
            /**
             * 空文件个数日环比。空文件指的是0 MB大小的文件。
             */
            EmptyFileCountDayGrowthRatio: {
                /**
                 * 指标名称。
                 * @example `emptyFileCountDayGrowthRatio`
                 */
                Name: string;
                /**
                 * 指标值。
                 * @example `0.01`
                 */
                Value: number;
                /**
                 * 指标单位。
                 * @example `”“`
                 */
                Unit: string;
                /**
                 * 指标描述。
                 * @example `Day growth ratio of empty files`
                 */
                Description: string;
            };
            /**
             * 热数据的数据量大小日环比。热数据指的是7日内有访问的数据。
             */
            HotDataSizeDayGrowthRatio: {
                /**
                 * 指标名称。
                 * @example `hotDataSizeDayGrowthRatio`
                 */
                Name: string;
                /**
                 * 指标值。
                 * @example `0.01`
                 */
                Value: number;
                /**
                 * 指标单位。
                 * @example `”“`
                 */
                Unit: string;
                /**
                 * 指标描述。
                 * @example `Day growth ratio of hot data size`
                 */
                Description: string;
            };
            /**
             * 温数的据数据量大小日环比。温数据指的是7日内没有访问的数据，但是30日以内有访问的数据。
             */
            WarmDataSizeDayGrowthRatio: {
                /**
                 * 指标名称。
                 * @example `warmDataSizeDayGrowthRatio`
                 */
                Name: string;
                /**
                 * 指标值。
                 * @example `0.01`
                 */
                Value: number;
                /**
                 * 指标单位。
                 * @example `”“`
                 */
                Unit: string;
                /**
                 * 指标描述。
                 * @example `Day growth ratio of warm data size`
                 */
                Description: string;
            };
            /**
             * 冷数据的数据量大小日环比。冷数据指的是30日内没有访问的数据，但是90日以内有访问的数据。
             */
            ColdDataSizeDayGrowthRatio: {
                /**
                 * 指标名称。
                 * @example `coldDataSizeDayGrowthRatio`
                 */
                Name: string;
                /**
                 * 指标值。
                 * @example `0.01`
                 */
                Value: number;
                /**
                 * 指标单位。
                 * @example `""`
                 */
                Unit: string;
                /**
                 * 指标描述。
                 * @example `Day growth ratio of cold data size`
                 */
                Description: string;
            };
            /**
             * 极冷数据的数据量大小日环比。极冷数据指的是90日以内都没有访问的数据。
             */
            FreezeDataSizeDayGrowthRatio: {
                /**
                 * 指标名称。
                 * @example `freezeDataSizeDayGrowthRatio`
                 */
                Name: string;
                /**
                 * 指标值。
                 * @example `0.01`
                 */
                Value: number;
                /**
                 * 指标单位。
                 * @example `”“`
                 */
                Unit: string;
                /**
                 * 指标描述。
                 * @example `Day growth ratio of freeze data size`
                 */
                Description: string;
            };
            /**
             * 总数据量大小日环比。
             */
            TotalDataSizeDayGrowthRatio: {
                /**
                 * 指标名称。
                 * @example `totalDataSizeDayGrowthRatio`
                 */
                Name: string;
                /**
                 * 指标值。
                 * @example `0.01`
                 */
                Value: number;
                /**
                 * 指标单位。
                 * @example `”“`
                 */
                Unit: string;
                /**
                 * 指标描述。
                 * @example `Day growth ratio of total data size`
                 */
                Description: string;
            };
        };
        /**
         * 分析结果。
         */
        Analysis: {
            /**
             * Hive表访问频率得分。
             * @example `70`
             */
            HiveFrequencyScore: number;
            /**
             * Hive表文件大小评分。
             * @example `80`
             */
            HiveDistributionScore: number;
            /**
             * Hive表格式评分。
             * @example `60`
             */
            HiveFormatScore: number;
            /**
             * Hive表综合评分。
             * @example `80`
             */
            HiveScore: number;
        };
    };
    /**
     * 请求ID。
     * @example `DD6B1B2A-5837-5237-ABE4-FF0C8944****`
     */
    RequestId: string;
}
