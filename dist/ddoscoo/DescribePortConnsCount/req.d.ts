export interface DescribePortConnsCountRequest {
    /**
     * DDoS高防实例在资源管理产品中所属的资源组ID。默认为空，即属于默认资源组。
     * @example `default`
     */
    "ResourceGroupId"?: string;
    /**
     * 查询结束时间。时间戳格式，单位：秒。
     * > 必须为整点分钟。
     * @example `1583683200`
     */
    "EndTime": number;
    /**
     * 查询开始时间。时间戳格式，单位：秒。
     * > 必须为整点分钟。
     * @example `1582992000`
     */
    "StartTime": number;
    /**
     * 要查询的端口号。不传入该参数表示查询所有端口号。
     * @example `80`
     */
    "Port"?: string;
    /**
     * DDoS高防实例的ID。
     * > 您可以调用[DescribeInstanceIds](~~157459~~)查询所有DDoS高防实例的ID信息。
     * @example `ddoscoo-cn-mp91j1ao****`
     */
    "InstanceIds": string[];
}
