export interface ListDoctorHiveTablesRequest {
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 集群ID。
     * @example `c-b933c5aac8fe****`
     */
    "ClusterId": string;
    /**
     * 标记当前开始读取的位置。
     * @example `DD6B1B2A-5837-5237-ABE4-FF0C89568980`
     */
    "NextToken"?: string;
    /**
     * 一次获取的最大记录数。
     * @example `20`
     */
    "MaxResults"?: number;
    /**
     * 其日期和时间信息以 ISO 8601 格式表示， 例如：2023年1月1日为 2023-01-01。
     * @example `2023-01-01`
     */
    "DateTime": string;
    /**
     * 表名称队列，用于过滤结果。
     * @example `null`
     */
    "TableNames"?: string[];
    /**
     * 排序方向。取值：
     * - ASC：升序排列
     * - DESC：降序排列
     * @example `ASC`
     */
    "OrderType"?: string;
    /**
     * 排序依据。取值：
     * -  partitionNum: 分区数。
     * - totalFileCount: 总文件个数。
     * -  largeFileCount: 大文件个数。大文件指的是1 GB以上大小的文件。
     * -  mediumFileCount: 中文件个数。中文件指的是128 MB以上，1 GB以下大小的文件。
     * -  smallFileCount: 小文件个数。小文件指的是10 MB以上，128 MB以下大小的文件。
     * -  tinyFileCount: 极小文件个数。极小文件指的是0 MB以上，10 MB以下大小的文件。
     * -  emptyFileCount: 空文件个数。空文件指的是0 MB大小的文件。
     * -  largeFileRatio: 大文件个数占比。大文件指的是1 GB以上大小的文件。
     * -  mediumFileRatio: 中文件个数占比。中文件指的是128 MB以上，1 GB以下大小的文件。
     * -  smallFileRatio: 小文件个数占比。小文件指的是10 MB以上，128 MB以下大小的文件。
     * -  tinyFileRatio: 极小文件个数占比。极小文件指的是0 MB以上，10 MB以下大小的文件。
     * -  emptyFileRatio: 空文件个数占比。空文件指的是0 MB大小的文件。
     * -  hotDataSize: 热数据的数据量大小。热数据指的是7日内有访问的数据。
     * -  warmDataSize: 温数据的数据量大小。温数据指的是7日内没有访问的数据，但是30日以内有访问的数据。
     * -  coldDataSize: 冷数据的数据量大小。冷数据指的是30日内没有访问的数据，但是90日以内有访问的数据。
     * -  freezeDataSize: 极冷数据数的据量大小。极冷数据指的是90日以内都没有访问的数据。
     * -  totalDataSize: 总数据量大小。
     * -  hotDataRatio: 热数据的数据量大小占比。热数据指的是7日内有访问的数据。
     * -  warmDataRatio: 温数据的数据量大小占比。温数据指的是7日内没有访问的数据，但是30日以内有访问的数据。
     * -  coldDataRatio: 冷数据的数据量大小占比。冷数据指的是30日内没有访问的数据，但是90日以内有访问的数据。
     * -  freezeDataRatio: 极冷数据的数据量大小占比。极冷数据指的是90日以内都没有访问的数据。
     * -  totalFileDayGrowthCount: 总文件个数日增量。
     * -  largeFileDayGrowthCount: 大文件个数日增量。大文件指的是1 GB以上大小的文件。
     * -  mediumFileDayGrowthCount: 中文件个数日增量。中文件指的是128 MB以上，1 GB以下大小的文件。
     * -  smallFileDayGrowthCount: 小文件个数日增量。小文件指的是10 MB以上，128 MB以下大小的文件。
     * -  tinyFileDayGrowthCount: 极小文件个数日增量。极小文件指的是0 MB以上，10 MB以下大小的文件。
     * -  emptyFileDayGrowthCount: 空文件个数日增量。空文件指的是0 MB大小的文件。
     * -  hotDataDayGrowthSize: 热数据的数据量日增量大小。热数据指的是7日内有访问的数据。
     * -  warmDataDayGrowthSize: 温数据的数据量日增量大小。温数据指的是7日内没有访问的数据，但是30日以内有访问的数据。
     * -  coldDataDayGrowthSize: 冷数据的数据量日增量大小。冷数据指的是30日内没有访问的数据，但是90日以内有访问的数据。
     * -  freezeDataDayGrowthSize: 极冷数据的数据量日增量大小。极冷数据指的是90日以内都没有访问的数据。
     * -  totalDataDayGrowthSize: 全部数据的数据量日增量大小。
     * -  totalFileCountDayGrowthRatio: 总文件个数日环比。
     * -  largeFileCountDayGrowthRatio: 大文件个数日环比。大文件指的是1 GB以上大小的文件。
     * -  mediumFileCountDayGrowthRatio: 中文件个数日环比。比中文件指的是128 MB以上，1 GB以下大小的文件。
     * -  smallFileCountDayGrowthRatio: 小文件个数日环比。小文件指的是10 MB以上，128 MB以下大小的文件。
     * -  tinyFileCountDayGrowthRatio: 极小文件个数日环比。极小文件指的是0 MB以上，10 MB以下大小的文件。
     * -  emptyFileCountDayGrowthRatio: 空文件个数日环比。空文件指的是0 MB大小的文件。
     * -  hotDataSizeDayGrowthRatio: 热数据的数据量大小日环比。热数据指的是7日内有访问的数据。
     * -  warmDataSizeDayGrowthRatio: 温数据的数据量大小日环比。温数据指的是7日内没有访问的数据，但是30日以内有访问的数据。
     * -  coldDataSizeDayGrowthRatio: 冷数据的数据量大小日环比。冷数据指的是30日内没有访问的数据，但是90日以内有访问的数据。
     * -  freezeDataSizeDayGrowthRatio: 极冷数据的数据量大小日环比。极冷数据指的是90日以内都没有访问的数据。
     * -  totalDataSizeDayGrowthRatio: 总数据量大小日环比。
     * @example `totalFileCount`
     */
    "OrderBy"?: string;
}
