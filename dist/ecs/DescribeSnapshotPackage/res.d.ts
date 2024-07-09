export interface DescribeSnapshotPackageResponse {
    /**
     * 分页查询时设置的每页行数。
     * @example `10`
     */
    PageSize: number;
    /**
     * 请求ID。
     * @example `473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E`
     */
    RequestId: string;
    /**
     * OSS存储包列表的页码。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 返回的OSS存储包总数。
     * @example `1`
     */
    TotalCount: number;
    SnapshotPackages: {
        /**
         * 存储包信息组成的集合。
         */
        SnapshotPackage: {
            /**
             * 存储包名称。
             * @example `testDisplayName`
             */
            DisplayName: string;
            /**
             * 存储包的过期时间。按照[ISO8601](~~25696~~)标准表示，并使用UTC +0时间，格式为yyyy-MM-ddTHH:mm:ssZ。
             * @example `2018-11-30T06:32:31Z`
             */
            EndTime: string;
            /**
             * 存储包的购买时间。按照[ISO8601](~~25696~~)标准表示，并使用UTC +0时间，格式为yyyy-MM-ddTHH:mm:ssZ。
             * @example `2017-11-30T06:32:31Z`
             */
            StartTime: string;
            /**
             * 存储包的最大容量。
             * @example `500`
             */
            InitCapacity: number;
        }[];
    };
}
