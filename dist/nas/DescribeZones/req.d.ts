export interface DescribeZonesRequest {
    /**
     * 可用区所在的地域ID。
     * 您可以调用DescribeRegions查看最新地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 文件系统类型。
     * 取值：
     * - standard（默认值）：通用型NAS
     * - extreme：极速型NAS
     * - cpfs：文件存储CPFS
     * > 仅中国站支持CPFS文件系统。
     * @example `standard`
     */
    "FileSystemType"?: string;
}
