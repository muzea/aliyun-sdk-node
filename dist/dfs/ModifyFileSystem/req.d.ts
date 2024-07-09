export interface ModifyFileSystemRequest {
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "InputRegionId": string;
    /**
     * 文件系统名称。命名规则如下：
     * - 长度为6~64个字符。
     * - 全局唯一且不能为空串。
     * - 支持英文字母，可包含数字、下划线（_）和短划线（-）。
     * @example `MyFirstModDFS`
     */
    "FileSystemName"?: string;
    /**
     * 文件系统容量预算。
     * 当实际数据存储达到文件系统容量后，数据将无法写入。文件系统容量不支持缩小。
     * 单位：GB
     * @example `1024`
     */
    "SpaceCapacity"?: number;
    /**
     * 文件系统描述信息。
     * 长度不超过32个字符。
     * @example `这是我公司的第一个文件存储HDFS版实例。`
     */
    "Description"?: string;
    /**
     * 文件系统ID。
     * @example `37af8f42-2abc-4e74-889d-664f5163****`
     */
    "FileSystemId": string;
    /**
     * 吞吐模式。
     * 取值：
     * - Standard：标准吞吐
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
}
