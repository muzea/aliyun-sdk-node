export interface DescribeStorageSetsResponse {
    /**
     * 单页返回的条目数。
     * @example `1`
     */
    PageSize: number;
    /**
     * 请求ID。
     * @example `473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E`
     */
    RequestId: string;
    /**
     * 存储集列表的页码。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 存储集总数。
     * @example `20`
     */
    TotalCount: number;
    StorageSets: {
        /**
         * 由StorageSet组成的数组格式，返回存储集详细信息。
         */
        StorageSet: {
            /**
             * 存储集创建时间。
             * @example `2019-06-01T00:00:00Z`
             */
            CreationTime: string;
            /**
             * 存储集描述信息。
             * @example `testDescription`
             */
            Description: string;
            /**
             * 存储集所属可用区ID。
             * @example `cn-hangzhou-g`
             */
            ZoneId: string;
            /**
             * 存储集ID。
             * @example `ss-bp1d6tsvznfghy7y****`
             */
            StorageSetId: string;
            /**
             * 存储集支持的最大分区数。
             * @example `3`
             */
            StorageSetPartitionNumber: number;
            /**
             * 存储集名称。
             * @example `testStorageSetName`
             */
            StorageSetName: string;
            /**
             * 存储集所属地域ID。
             * @example `cn-hangzhou`
             */
            RegionId: string;
        }[];
    };
}
