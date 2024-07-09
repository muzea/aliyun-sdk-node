export interface DescribeContainerGroupsRequest {
    /**
     * 实例所属的地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 实例所属的可用区。如果取值为空，则表示由系统选择。
     * 默认值为空。
     * @example `cn-hangzhou-h`
     */
    "ZoneId"?: string;
    /**
     * 实例所属的虚拟交换机ID。
     * @example `vsw-bp1jrgfqqy54kg5hc****`
     */
    "VSwitchId"?: string;
    /**
     * 下一个查询开始的Token，NextToken为空表示没有下一个。
     * > 首次查询时无需设置该参数，后续查询的Token从返回结果中获取。
     * @example `d78f2dd8-5979-42fe-****-b16db43be5bc`
     */
    "NextToken"?: string;
    /**
     * 限定此次返回资源的数量。如果不设置，默认返回20个，最大不能超过20个。
     * > 返回结果可能小于指定的数量，但不会多于指定的数量。
     * @example `20`
     */
    "Limit"?: number;
    /**
     * 实例ID序列。最多20个，字符串需按照JSON格式传入。
     * @example `["eci-bp17gw49eu09yiwm****", "eci-bp19aq49du01abcm****", "eci-2zegym1qhbmdfr1s****"]`
     */
    "ContainerGroupIds"?: string;
    /**
     * 实例名称，即容器组名称。
     * @example `test`
     */
    "ContainerGroupName"?: string;
    /**
     * 实例状态。取值范围：
     * - Pending：启动中
     * - Running：运行中
     * - Succeeded：运行成功
     * - Failed：运行失败
     * - Scheduling：创建中
     * - ScheduleFailed：创建失败
     * - Restarting：重启中
     * - Updating：更新中
     * - Terminating：终止中
     * - Expired：过期
     * @example `Running`
     */
    "Status"?: string;
    /**
     * 实例所属的资源组ID。
     * @example `rg-aekzh43v*****	`
     */
    "ResourceGroupId"?: string;
    /**
     * 是否返回事件信息。
     * @example `true`
     */
    "WithEvent"?: boolean;
    /**
     * 实例标签信息。
     */
    "Tag"?: {
        /**
         * 实例标签键。
         * @example `name`
         */
        Key: string;
        /**
         * 实例标签值。
         * @example `test`
         */
        Value: string;
    }[];
    /**
     * 指定算力类别。取值范围：
     * - economy：经济型
     * - general：通用型
     * @example `economy`
     */
    "ComputeCategory"?: string;
    /**
     * 实例所属的安全组ID。
     * @example `sg-uf66jeqopgqa9hdn****
    `
     */
    "SecurityGroupId"?: string;
}
