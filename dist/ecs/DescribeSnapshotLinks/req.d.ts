export interface DescribeSnapshotLinksRequest {
    /**
     * 云盘所属于的地域ID。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 实例ID。
     * @example `i-bp1h6jmbefj2cyqs****`
     */
    "InstanceId"?: string;
    /**
     * 云盘ID。一次最多指定100个云盘ID。DiskIds参数取值格式为JSON数组，ID之间用半角逗号（,）隔开。
     * @example `["d-bp1d6tsvznfghy7y****", "d-bp1ippxbaql9zet7****", … "d-bp1ib7bcz07lcxa9****"]`
     */
    "DiskIds"?: string;
    /**
     * 快照链ID。一次最多指定100个快照ID。SnapshotLinkIds参数取值格式为JSON数组，ID之间用半角逗号（,）隔开。
     * @example `["sl-bp1grgphbcc9brb5****", "sl-bp1c4izumvq0i5bs****", … "sl-bp1akk7isz866dds****"]`
     */
    "SnapshotLinkIds"?: string;
    /**
     * 云盘状态列表的页码。起始值：1。
     * 默认值：1 。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 分页查询时设置的每页行数。取值范围：1~100。
     * 默认值：10。
     * @example `50`
     */
    "PageSize"?: number;
}
