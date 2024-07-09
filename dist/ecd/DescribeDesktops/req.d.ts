export interface DescribeDesktopsRequest {
    /**
     * 地域ID。可以调用[DescribeRegions](~~196646~~)获取无影云电脑支持的地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 云电脑池ID。
     * @example `dg-boyczi8enfyc5****`
     */
    "GroupId"?: string;
    /**
     * 云电脑状态。
     * @example `Running`
     */
    "DesktopStatus"?: string;
    /**
     * 分页查询时每页行数。
     * - 最大值：100
     * - 默认值：10
     * @example `10`
     */
    "MaxResults"?: number;
    /**
     * 下一个查询开始的Token，NextToken为空表示没有下一个。
     * @example `caeba0bbb2be03f84eb48b699f0a4883`
     */
    "NextToken"?: string;
    /**
     * 用户名称。
     * @example `Alice`
     */
    "UserName"?: string;
    /**
     * 云电脑名称。
     * @example `DemoComputer01`
     */
    "DesktopName"?: string;
    /**
     * 目录ID。同办公网络ID。
     * @example `cn-hangzhou+dir-363353****`
     */
    "DirectoryId"?: string;
    /**
     * 办公网络ID。
     * @example `cn-hangzhou+dir-363353****`
     */
    "OfficeSiteId"?: string;
    /**
     * 办公网络名称。
     * @example `default`
     */
    "OfficeSiteName"?: string;
    /**
     * 策略ID。
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
     * @example `2022-12-31T15:59:59Z`
     */
    "ExpiredTime"?: string;
    /**
     * 协议类型。
     * @example `ASP`
     */
    "ProtocolType"?: string;
    /**
     * 云电脑ID。可设置1~100个。
     * @example `ecd-gx2x1dhsmucyy****`
     */
    "DesktopId"?: string[];
    /**
     * 云电脑的授权用户列表。可设置1~100个。
     * > 在同一时段内，只有一个用户可以连接和使用该云电脑。
     * @example `alice`
     */
    "EndUserId"?: string[];
    /**
     * 要排除的云电脑授权用户列表。可设置1~100个。
     * @example `andy`
     */
    "ExcludedEndUserId"?: string[];
    /**
     * 是否排除池化云电脑（云电脑池中的云电脑）。
     * @example `false`
     */
    "FilterDesktopGroup"?: boolean;
    /**
     * 管理标识。
     * @example `NoFlag`
     */
    "ManagementFlag"?: string;
    /**
     * 是否查询云电脑镜像版本信息。
     * @example `false`
     */
    "QueryFotaUpdate"?: boolean;
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
    /**
     * 快照策略ID。
     * @example `sp-hb12mclyne09xw***`
     */
    "SnapshotPolicyId"?: string;
    /**
     * 是否只查询池化云电脑（云电脑池中的云电脑）。
     * @example `true`
     */
    "OnlyDesktopGroup"?: boolean;
    /**
     * 云电脑池ID。如果传入了`DesktopId`，则忽略该`DesktopGroupId`；如果`DesktopId`为空，则会根据`DesktopGroupId`去获取该云电脑池内所有云电脑的`DesktopId`。
     * @example `dg-2i8qxpv6t1a03****`
     */
    "DesktopGroupId"?: string;
    /**
     * 操作系统类型。
     */
    "OsTypes"?: string[];
    /**
     * 云电脑规格。您可以调用[DescribeDesktopTypes](~~188882~~)查询云电脑支持的规格ID。
     * @example `eds.general.2c8g`
     */
    "DesktopType"?: string;
    /**
     * 镜像ID列表。
     */
    "ImageId"?: string[];
    /**
     * 云电脑状态列表。
     */
    "DesktopStatusList"?: string[];
    "GpuInstanceGroupId"?: string;
    "QosRuleId"?: string;
    "SubPayType"?: string;
    "ResourceGroupId"?: string;
    "FillResourceGroup"?: boolean;
}
