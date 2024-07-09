export interface ExportDesktopListInfoRequest {
    /**
     * 地域ID。可以调用[DescribeRegions](~~196646~~)获取无影云电脑支持的地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 云电脑所属的云电脑池ID。
     * @example `dg-boyczi8enfyc5***`
     */
    "GroupId"?: string;
    /**
     * 云电脑状态。
     * @example `Running`
     */
    "DesktopStatus"?: string;
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
     * 当前正在使用云电脑的用户名。
     * @example `alice`
     */
    "UserName"?: string;
    /**
     * 云电脑名称。
     * @example `DemoComputer01`
     */
    "DesktopName"?: string;
    /**
     * 办公网络ID。
     * @example `cn-hangzhou+dir-363353****`
     */
    "OfficeSiteId"?: string;
    /**
     * 云电脑关联的策略ID。
     * @example `system-all-enabled-policy`
     */
    "PolicyGroupId"?: string;
    /**
     * 云电脑的计费方式。
     * @example `PostPaid`
     */
    "ChargeType"?: string;
    /**
     * 包年包月云电脑的到期时间。
     * @example `2022-12-31T15:59Z`
     */
    "ExpiredTime"?: string;
    /**
     * 云电脑ID。可设置1~100个。
     */
    "DesktopId"?: string[];
    /**
     * 云电脑的授权用户名列表。可设置1~100个。
     * > 在同一时段内，只有一个用户可以连接和使用该云电脑。
     */
    "EndUserId"?: string[];
    /**
     * 前端页面显示的语言类型，后端根据该语言类型设置导出文件的语言类型。
     * @example ``zh-CN``
     */
    "LangType"?: string;
    /**
     * 标签列表。一个标签由一对键值对组成，用于标记资源。您可以使用标签来分组管理云电脑，便于搜索和批量操作，详情参见[使用标签管理云电脑](~~203781~~)。
     */
    "Tag"?: {
        /**
         * 标签键。如果传入`Tag`，则`Key`是必填的。不可超过128个字符，不能以`aliyun`或`acs:`开头，不能包含`http://`或者`https://`，也不能仅包含空格。
         * @example `TestKey`
         */
        Key: string;
        /**
         * 标签值。不可超过128个字符，不能以`aliyun`或`acs:`开头，不能包含`http://`或者`https://`。
         * @example `TestValue`
         */
        Value: string;
    }[];
}
