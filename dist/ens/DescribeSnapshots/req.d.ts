export interface DescribeSnapshotsRequest {
    /**
     * 云盘所属于的地域ID。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
     * @example `cn-hangzhou`
     */
    "EnsRegionId"?: string;
    /**
     * 指定的云盘设备ID。
     * @example `d-bp67acfmxazb4p****`
     */
    "DiskId"?: string;
    /**
     * 指定的实例ID。
     * @example `i-bp67acfmxazb4p****`
     */
    "InstanceId"?: string;
    /**
     * 快照标识编码。取值可以由多个快照ID组成一个JSON数组，最多支持100个ID，ID之间用半角逗号（,）隔开。
     * @example `sp-bp67acfmxazb4p****`
     */
    "SnapshotId"?: string;
    /**
     * 当前查询页码。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 分页查询时每页的行数。
     * @example `10`
     */
    "PageSize"?: number;
}
