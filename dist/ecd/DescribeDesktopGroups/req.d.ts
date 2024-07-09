export interface DescribeDesktopGroupsRequest {
    /**
     * 地域ID。可以调用[DescribeRegions](~~196646~~)获取无影云电脑支持的地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 云电脑池所属的办公网络ID。
     * @example `cn-hangzhou+dir-467671****`
     */
    "OfficeSiteId"?: string;
    /**
     * 要查询的云电脑池名称，支持模糊查询。
     * @example `CloudComputerPool01`
     */
    "DesktopGroupName"?: string;
    /**
     * 云电脑池ID。
     * @example `dg-2i8qxpv6t1a03****`
     */
    "DesktopGroupId"?: string;
    /**
     * 包年包月云电脑池的购买时长。单位由`PeriodUnit`指定。
     * - 如果`PeriodUnit`为`Month`，该参数的取值范围：
     *     - 1
     *     - 2
     *     - 3
     *     - 6
     * - 如果`PeriodUnit`为`Year`，该参数的取值范围：
     *     - 1
     *     - 2
     *     - 3
     *     - 4
     *     - 5
     * @example `1`
     */
    "Period"?: number;
    /**
     * 包年包月计费方式的时长单位。
     * @example `Month`
     */
    "PeriodUnit"?: string;
    /**
     * 分页查询时每页行数。
     * 最大值：100。
     * 默认值：10。
     * @example `10`
     */
    "MaxResults"?: number;
    /**
     * 下一个查询开始的Token，NextToken为空表示没有下一个。
     * @example `caeba0bbb2be03f84eb48b699f0a4883`
     */
    "NextToken"?: string;
    /**
     * 云电脑池关联的策略ID。
     * @example `pg-53iyi2aar0nd6****`
     */
    "PolicyGroupId"?: string;
    /**
     * 云电脑池的状态。
     * @example `1`
     */
    "Status"?: number;
    /**
     * 云电脑池类型。
     * > 该参数暂未开放使用。
     * @example `0`
     */
    "OwnType"?: number;
    /**
     * 云电脑池的授权用户ID列表。
     */
    "EndUserIds"?: string[];
    /**
     * 要排除的已授权用户列表。
     */
    "ExcludedEndUserIds"?: string[];
    /**
     * 协议类型。
     * @example `ASP`
     */
    "ProtocolType"?: string;
    /**
     * 镜像ID列表。
     */
    "ImageId"?: string[];
    /**
     * 云电脑模板ID列表。
     */
    "BundleId"?: string[];
    /**
     * 标签列表。可包含1\~20个。
     */
    "Tag"?: {
        /**
         * 标签键。一旦传入该值，则不允许为空字符串。最多支持128个字符，不能以`aliyun`和`acs:`开头，不能包含`http://`或者`https://`。
         * @example `TestKey`
         */
        Key: string;
        /**
         * 标签值。可以为空字符串。最多支持128个字符，不能以`acs:`开头，不能包含`http://`或者`https://`。
         * @example `TestValue`
         */
        Value: string;
    }[];
}
