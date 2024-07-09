export interface ListSnapshotsRequest {
    /**
     * 快照对应的轻量应用服务器所属的地域ID。
     * @example `cn-hangzhou	`
     */
    "RegionId": string;
    /**
     * 指定的轻量应用服务器的实例ID。
     * @example `2ad1ae67295445f598017499dc****`
     */
    "InstanceId"?: string;
    /**
     * 指定的磁盘ID。
     * @example `d-bp14wq0149cpp2xy****`
     */
    "DiskId"?: string;
    /**
     * 快照ID。取值可以由多个快照ID组成一个JSON数组，最多支持100个ID，ID之间用半角逗号（,）隔开。
     * @example `["s-bp16oazlsold4dks****", "s-bp16oazlsold4abc****"]`
     */
    "SnapshotIds"?: string;
    /**
     * 分页查询时设置的每页行数。最大值：100。
     * 默认值：10。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 快照列表的页码。
     * 默认值：1。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 快照源云盘的云盘类型。取值范围：
     * - System：系统盘。
     * - Data：数据盘。
     * @example `Data`
     */
    "SourceDiskType"?: string;
    /**
     * 快照的标签列表。
     */
    "Tag"?: {
        /**
         * 快照的标签键。标签键长度的取值范围：1~64。N 的取值范围：1~20。
         * @example `TestKey`
         */
        Key: string;
        /**
         * 快照的标签值。标签值长度的取值范围：1~64。N 的取值范围：1~20。
         * @example `TestValue`
         */
        Value: string;
    }[];
    /**
     * 指定的资源组ID。
     * @example `rg-aek2bti7cf7****`
     */
    "ResourceGroupId"?: string;
}
