export interface DeleteSnapshotRequest {
    /**
     * DBFS实例所属的地域ID。您可以调用[DescribeRegions](https://help.aliyun.com/document_detail/25609.html)查看最新的阿里云地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 快照ID或者快照ID列表。
     * - 删除单个快照时输入快照ID
     * - 批量删除时以JSON数组形式输入快照ID，ID之间用半角逗号（,）隔开，一次最多指定100个快照ID。
     * @example `s-Q2greuDZTvWeS8bfKZ****
    或者["s-Q2greuDZTvWeS8bfKZ****","s-r4qlmevirw2vwmwv7*****"]`
     */
    "SnapshotId": string;
    /**
     * 是否强制删除快照。
     * 默认值：false。
     * @example `false`
     */
    "Force"?: boolean;
}
