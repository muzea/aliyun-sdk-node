export interface CreateFileSystemRequest {
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "InputRegionId": string;
    /**
     * 可用区ID。
     * @example `cn-hangzhou-b`
     */
    "ZoneId"?: string;
    /**
     * 协议类型。
     * 仅支持HDFS（Hadoop Distributed File System）。
     * @example `HDFS`
     */
    "ProtocolType": string;
    /**
     * 存储介质类型。
     * 取值：
     * - STANDARD（默认值）：标准型
     * - PERFORMANCE：性能型
     * @example `STANDARD`
     */
    "StorageType": string;
    /**
     * 文件系统描述信息。
     * 长度不超过32个字符。
     * @example `这是我公司的第一个文件存储HDFS版实例。`
     */
    "Description"?: string;
    /**
     * 文件系统名称。命名规则如下：
     * - 长度为6~64个字符。
     * - 全局唯一且不能为空字符串。
     * - 支持英文字母，可包含数字、下划线（_）和短划线（-）。
     * @example `MyFirstHDFS`
     */
    "FileSystemName": string;
    /**
     * 文件系统容量。
     * 当实际存储数据量达到文件系统容量后，将无法写入数据。
     * 单位：GiB
     * @example `1024`
     */
    "SpaceCapacity": number;
    /**
     * 吞吐模式。
     * 取值：
     * - Standard（默认值）：标准吞吐
     * - Provisioned：预置吞吐
     * @example `Standard`
     */
    "ThroughputMode"?: string;
    /**
     * 预置吞吐量。当ThroughputMode取值为Provisioned时，此参数为必填项。
     * 单位：MB/s
     * 取值范围：1~5120
     * @example `1024`
     */
    "ProvisionedThroughputInMiBps"?: number;
    /**
     * 预留参数，无需配置。
     * @example `AligroupStorageSet`
     */
    "StorageSetName"?: string;
    /**
     * 预留参数，无需配置。
     * @example `0`
     */
    "PartitionNumber"?: number;
    /**
     * 文件系统的冗余模式。
     * 取值：
     * - LRS（默认值）：本地冗余。
     * - ZRS：同城冗余。当选择ZRS时，zoneId为期望同城冗余的多个可用区列表组成的字符串，例如<codeph> `zoneId1,zoneId2`。
     * @example `LRS`
     */
    "DataRedundancyType"?: string;
    "DedicatedClusterId"?: string;
}
