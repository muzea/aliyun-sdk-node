export interface DescribeSnapshotGroupsRequest {
    /**
     * 所属的地域ID。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 指定的实例ID。
     * @example `i-j6ca469urv8ei629****`
     */
    "InstanceId"?: string;
    /**
     * 快照一致性组的名称。
     * @example `testName`
     */
    "Name"?: string;
    /**
     * 查询凭证（Token），取值为上一次API调用返回的NextToken参数值。
     * @example `caeba0bbb2be03f84eb48b699f0a4883`
     */
    "NextToken"?: string;
    /**
     * 分页查询时每页行数。
     * 最大值为100。
     * 默认值为10。
     * @example `10`
     */
    "MaxResults"?: number;
    /**
     * 指定的快照一致性组ID。N的取值范围为1~10。
     * @example `ssg-j6ciyh3k52qp7ovm****`
     */
    "SnapshotGroupId"?: string[];
    /**
     * 快照一致性组的状态。N的取值范围为1~3。取值如下：
     * - progressing：创建中。
     * - accomplished：创建成功。
     * - failed：创建失败。
     * @example `accomplished`
     */
    "Status"?: string[];
    /**
     * 该参数暂未开放使用。
     * @example `hide`
     */
    "AdditionalAttributes"?: string[];
    /**
     * 快照一致性组的标签键值对。
     */
    "Tag"?: {
        /**
         * 快照一致性组的标签键。N的取值范围为1~20。
         * @example `TestKey`
         */
        Key: string;
        /**
         * 快照一致性组的标签值。N的取值范围为1~20。
         * @example `TestValue`
         */
        Value: string;
    }[];
    /**
     * 快照一致性组所属的资源组ID。
     * @example `rg-bp67acfmxazb4p****`
     */
    "ResourceGroupId"?: string;
}
