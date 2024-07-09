export interface DescribePortViewSourceProvincesRequest {
    /**
     * DDoS高防实例在资源管理服务中所属的资源组ID。默认为空，即属于默认资源组。
     * 关于资源组的更多信息，请参见[创建资源组](~~94485~~)。
     * @example `rg-acfm2pz25js****`
     */
    "ResourceGroupId"?: string;
    /**
     * 查询结束时间。时间戳格式，单位：秒。不传入表示使用当前时间作为结束时间。
     * > 必须为整点分钟。
     * @example `1583683200`
     */
    "EndTime"?: number;
    /**
     * 查询开始时间。时间戳格式，单位：秒。
     * > 必须为整点分钟。
     * @example `1582992000`
     */
    "StartTime": number;
    /**
     * 要查询的DDoS高防实例的ID列表。
     * @example `ddoscoo-cn-mp91j1ao****`
     */
    "InstanceIds": string[];
}
