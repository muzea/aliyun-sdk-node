export interface ListDisksRequest {
    /**
     * 地域ID。
     * @example `cn-hangzhou	`
     */
    "RegionId": string;
    /**
     * 指定的轻量应用服务器的实例ID。
     * @example `2ad1ae67295445f598017499dc****`
     */
    "InstanceId"?: string;
    /**
     * 磁盘ID。取值可以由多个磁盘ID组成一个JSON数组，最多支持100个ID，ID之间用半角逗号（,）隔开。
     * @example `["d-bp14wq0149cpp2x****", "d-bp14wq0149cpp2y****"]`
     */
    "DiskIds"?: string;
    /**
     * 分页查询时设置的每页行数。
     * 最大值：100
     * 默认值：10
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 磁盘列表的页码。
     * 默认值：1
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 磁盘类型。可能值：
     * - System：系统盘。
     * - Data：数据盘。
     * 默认全量查询
     * @example `system`
     */
    "DiskType"?: string;
    /**
     * 磁盘的标签列表。
     */
    "Tag"?: {
        /**
         * 磁盘的标签键。标签键长度的取值范围：1~64。N 的取值范围：1~20。
         * @example `TestKey`
         */
        Key: string;
        /**
         * 磁盘的标签值。标签值长度的取值范围：1~64。N 的取值范围：1~20。
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
