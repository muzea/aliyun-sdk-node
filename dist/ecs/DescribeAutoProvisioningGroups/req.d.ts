export interface DescribeAutoProvisioningGroupsRequest {
    /**
     * 弹性供应组所在地域的ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 分页查询时设置的列表页码。
     * 起始值：1。
     * 默认值：1。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 分页查询时设置的每页行数。
     * 最大值：100。
     * 默认值：10。
     * @example `2`
     */
    "PageSize"?: number;
    /**
     * 弹性供应组的名称。
     * @example `testAutoProvisioningGroupName`
     */
    "AutoProvisioningGroupName"?: string;
    /**
     * 弹性供应组所属的资源组ID。
     * @example `rg-bp67acfmxazb4p****`
     */
    "ResourceGroupId"?: string;
    /**
     * 弹性供应组ID列表。可输入最多20个弹性供应组ID。
     * @example `apg-sn54avj8htgvtyh8****`
     */
    "AutoProvisioningGroupId"?: string[];
    /**
     * 弹性供应组的状态列表。
     * @example `active`
     */
    "AutoProvisioningGroupStatus"?: string[];
    /**
     * 弹性供应组绑定的标签。
     */
    "Tag"?: {
        /**
         * 弹性供应组的标签键。
         * N 的取值范围：1~20。一旦传入该值，则不允许为空字符串。最多支持 128 个字符，不能以aliyun和acs:开头，不能包含http://或者https://。
         * @example `TestKey`
         */
        Key: string;
        /**
         * 弹性供应组的标签值。
         * N 的取值范围：1~20。一旦传入该值，允许为空字符串。最多支持 128 个字符，不能包含http://或者https://。
         * @example `TestValue`
         */
        Value: string;
    }[];
}
