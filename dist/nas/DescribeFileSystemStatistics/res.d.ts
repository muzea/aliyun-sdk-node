export interface DescribeFileSystemStatisticsResponse {
    FileSystems: {
        /**
         * 文件系统列表。
         */
        FileSystem: {
            /**
             * 文件系统状态。
             * 极速型NAS和CPFS返回该字段，包括：
             * - Pending：当前文件系统正在处理任务中。
             * - Running：当前文件系统可用，当状态为Running时才可以进行后续操作（例如：创建挂载点等）。
             * - Stopped：当前文件系统不可用。
             * - Extending：当前文件系统扩容中。
             * - Stopping：当前文件系统停机中。
             * - Deleting：当前文件系统删除中。
             * @example `Pending`
             */
            Status: string;
            /**
             * 文件系统的容量。
             * 单位：GiB。
             * @example `1`
             */
            Capacity: number;
            /**
             * 低频介质存储用量。
             * 单位：Byte。
             * @example `362832`
             */
            MeteredIASize: number;
            /**
             * NAS文件系统的创建时间。
             * @example `2017-05-27T15:43:06CST`
             */
            CreateTime: string;
            /**
             * 计费类型。
             * 包括：
             * - Subscription：包年包月
             * - PayAsYouGo：按量付费
             * - Package：已绑定存储包
             * @example `PayAsYouGo`
             */
            ChargeType: string;
            /**
             * 存储类型。
             * 包括：
             * - 通用型NAS：Capacity（容量型）、Performance（性能型）
             * - 极速型NAS：standard（标准型）、advance（高级型）
             * - CPFS：advance_100（100 MB/s/TiB基线）、advance_200（200 MB/s/TiB基线）
             * @example `Performance`
             */
            StorageType: string;
            /**
             * 地域ID。
             * @example `cn-hangzhou`
             */
            RegionId: string;
            /**
             * 文件系统类型。
             * 包括：
             * - standard：通用型NAS
             * - extreme：极速型NAS
             * - cpfs：CPFS
             * @example `standard`
             */
            FileSystemType: string;
            /**
             * 文件系统ID。
             * @example `109c04****`
             */
            FileSystemId: string;
            /**
             * 文件系统的使用量。
             * 非实时使用量，为上一小时最大使用量，单位：Byte。
             * @example `1611661312`
             */
            MeteredSize: number;
            /**
             * 文件系统的描述信息。
             * @example `31a8e48eda`
             */
            Description: string;
            /**
             * 文件系统到期时间。
             * @example `2017-08-27T15:43:06CST`
             */
            ExpiredTime: string;
            /**
             * 可用区ID。
             * @example `cn-hangzhou-b`
             */
            ZoneId: string;
            Packages: {
                /**
                 * 存储包信息集合。
                 */
                Package: {
                    /**
                     * 存储包起始时间。
                     * @example `2019-12-05T01:40:56Z`
                     */
                    StartTime: string;
                    /**
                     * 存储包到期时间。
                     * @example `2020-01-05T16:00:00Z`
                     */
                    ExpiredTime: string;
                    /**
                     * 存储包容量。
                     * @example `107374182400`
                     */
                    Size: number;
                    /**
                     * 存储包ID。
                     * @example `naspackage-0be9c4b624-37****`
                     */
                    PackageId: string;
                }[];
            };
            /**
             * 文件系统协议类型。
             * 包括：
             * - NFS：NFS文件协议
             * - SMB：SMB文件协议
             * - cpfs：CPFS文件系统支持的协议类型
             * @example `NFS`
             */
            ProtocolType: string;
        }[];
    };
    /**
     * 文件系统的统计信息总数。
     * @example `100`
     */
    TotalCount: number;
    /**
     * 请求ID。
     * @example `9F088138-FD73-4B68-95CC-DFAD4D85****`
     */
    RequestId: string;
    /**
     * 每个分页包含的文件系统统计信息个数。
     * @example `1`
     */
    PageSize: number;
    /**
     * 文件系统统计信息列表的分页页码。
     * @example `1`
     */
    PageNumber: number;
    FileSystemStatistics: {
        /**
         * 文件系统的统计信息集合。
         */
        FileSystemStatistic: {
            /**
             * 文件系统类型。
             * @example `standard`
             */
            FileSystemType: string;
            /**
             * 文件系统的使用量。
             * 此参数非实时使用量，为上一小时的最大使用量。
             * 单位：Byte
             * @example `1611`
             */
            MeteredSize: number;
            /**
             * 即将到期的文件系统个数。
             * 文件系统到期时间距离当前时间小于等于7天时将会被统计。
             * @example `1`
             */
            ExpiringCount: number;
            /**
             * 当前类型的文件系统个数。
             * @example `10`
             */
            TotalCount: number;
            /**
             * 已到期的文件系统个数。
             * @example `1`
             */
            ExpiredCount: number;
        }[];
    };
}
