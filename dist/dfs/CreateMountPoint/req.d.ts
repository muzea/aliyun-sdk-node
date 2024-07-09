export interface CreateMountPointRequest {
    /**
     * 文件系统ID。
     * @example `37af8f42-2abc-4e74-889d-664f5163****`
     */
    "FileSystemId": string;
    /**
     * 权限组ID。
     * @example `acg-e3755fb0-358d-4286-9942-8d461048****`
     */
    "AccessGroupId": string;
    /**
     * 挂载点的网络类型。
     * 仅支持VPC（专有网络）。
     * @example `VPC`
     */
    "NetworkType": string;
    /**
     * 专有网络ID。
     * @example `vpc-iq8hhsk3ymzv9m4wn****`
     */
    "VpcId": string;
    /**
     * 交换机ID。
     * @example `vsw-iq8fymi327krd14mt****`
     */
    "VSwitchId": string;
    /**
     * 挂载点描述信息。
     * 长度不超过32个字符。
     * @example `将线上hdfs挂载到VPC日志集群的交换机下`
     */
    "Description"?: string;
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "InputRegionId": string;
}
