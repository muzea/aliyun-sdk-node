export interface ListFileSystemsResponse {
    /**
     * 返回结果的数量。
     * @example `1`
     */
    TotalCount: number;
    /**
     * 请求ID。
     * @example `55C5FFD6-BF99-41BD-9C66-FFF39189****`
     */
    RequestId: string;
    NextToken: string;
    /**
     * 文件系统信息集合。
     */
    FileSystems: {
        /**
         * 文件系统的创建时间。
         * @example `2022-04-18T06:03:15.836222Z`
         */
        CreateTime: string;
        /**
         * 预置吞吐量。
         * 单位：MB/s。
         * @example `1024`
         */
        ProvisionedThroughputInMiBps: number;
        /**
         * 文件系统容量。
         * 单位：GB
         * @example `1024`
         */
        SpaceCapacity: number;
        /**
         * 存储介质类型。
         * 包括：
         * - STANDARD：标准型
         * - PERFORMANCE：性能型
         * @example `STANDARD`
         */
        StorageType: string;
        /**
         * 已使用空间容量。
         * 单位：GB
         * @example `100`
         */
        UsedSpaceSize: number;
        /**
         * 地域ID。
         * @example `cn-hangzhou`
         */
        RegionId: string;
        /**
         * 文件系统ID。
         * @example `37af8f42-2abc-4e74-889d-664f5163****`
         */
        FileSystemId: string;
        /**
         * 文件系统名称。
         * @example `MyFirstHDFS`
         */
        FileSystemName: string;
        /**
         * 文件系统的描述信息。
         * @example `这是我公司的第一个文件存储HDFS版实例。`
         */
        Description: string;
        /**
         * 挂载点数量。
         * @example `2`
         */
        MountPointCount: number;
        /**
         * 吞吐模式。
         * 包括：
         * - Standard：标准吞吐
         * - Provisioned：预置吞吐
         * @example `Standard`
         */
        ThroughputMode: string;
        /**
         * 可用区ID。
         * @example `cn-hangzhou-b`
         */
        ZoneId: string;
        /**
         * 文件数量。
         * @example `1000`
         */
        NumberOfFiles: number;
        /**
         * 存储包ID。
         * @example `1`
         */
        StoragePackageId: string;
        /**
         * 目录数量。
         * @example `100`
         */
        NumberOfDirectories: number;
        /**
         * 协议类型。
         * 仅支持HDFS（Hadoop Distributed File System）。
         * @example `HDFS`
         */
        ProtocolType: string;
        /**
         * 阿里云文件存储 HDFS 版的版本，非hadoop版本。
         * @example `1.0.0`
         */
        Version: string;
        /**
         * 文件系统的计费容量。单位：字节（byte）。
         * 计费容量=MAX[（文件数+目录数）*5MiB，使用容量]。
         * 统计数据，不作为计费数据，仅作参考。HDFS按照上一小时计费容量峰值进行计费。若您希望查询更详细的计量数据，请参见[查看消费明细](~~419001~~)。
         * @example `107374182400`
         */
        MeteringSpaceSize: number;
    }[];
}
