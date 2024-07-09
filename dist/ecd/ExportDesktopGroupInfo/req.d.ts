export interface ExportDesktopGroupInfoRequest {
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
     * 云电脑池名称。
     * @example `CloudComputerPool01`
     */
    "DesktopGroupName"?: string;
    /**
     * 分页查询时每页行数。
     * - 最大值：100。
     * - 默认值：10。
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
     * 云电脑池的计费方式。
     * @example `PrePaid`
     */
    "ChargeType"?: string;
    /**
     * 包年包月云电脑池的到期时间。
     * @example `2022-12-31T15:59Z`
     */
    "ExpiredTime"?: string;
    /**
     * 云电脑池ID列表。
     */
    "DesktopGroupId"?: string[];
    /**
     * 云电脑池的授权用户ID列表。
     */
    "EndUserId"?: string[];
    /**
     * 语言类型。
     * @example `zh-CN`
     */
    "LangType"?: string;
    /**
     * 标签列表，最多包含20个子项。
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
