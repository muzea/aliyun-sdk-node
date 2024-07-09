export interface ModifyDBClusterAccessWhitelistRequest {
    /**
     * 集群ID。
     * @example `pc-*************`
     */
    "DBClusterId": string;
    /**
     * IP白名单分组中的IP地址或地址段。所有IP白名单分组累积支持1000个IP地址或地址段，多个IP间用英文逗号（,）隔开，支持如下两种格式：
     * - IP地址形式，例如：10.23.12.24。
     * - CIDR形式，例如：10.23.12.24/24（无类域间路由，24表示地址中前缀的长度，长度范围为1~32）。
     * >当**WhiteListType**取值为**IP**时该参数才支持配置。
     * @example `10.23.12.24`
     */
    "SecurityIps"?: string;
    /**
     * IP白名单分组的名称。分组名称长度需为2~120个字符；由小写字母和数字组成；以字母开头，以字母或数字结尾。
     * - 如果传入的白名单分组名称不存在，则会创建该白名单分组。
     * - 如果传入的白名单分组名称已存在，则会修改该白名单分组。
     * - 不传入则修改default分组。
     * > - 1个集群最多支持50个IP白名单分组。
     * > - 当**WhiteListType**取值为**IP**时该参数才支持配置。
     * @example `default`
     */
    "DBClusterIPArrayName"?: string;
    /**
     * IP白名单分组属性。设置为**hidden**后控制台不可见。
     * > - 已在控制台显示的IP白名单分组不支持隐藏。
     * > - 当**WhiteListType**取值为**IP**时该参数才支持配置。
     * @example `hidden`
     */
    "DBClusterIPArrayAttribute"?: string;
    /**
     * 白名单类型。取值范围如下：
     * - **IP**：IP白名单分组。
     * - **SecurityGroup**：安全组。
     * 默认值为**IP**。
     * @example `IP`
     */
    "WhiteListType"?: string;
    /**
     * 安全组ID，多个安全组间用英文逗号（,）隔开。
     * > - 1个集群最多支持3个安全组。
     * > - 当**WhiteListType**取值为**SecurityGroup**时该参数才支持配置。
     * @example `sg-*********`
     */
    "SecurityGroupIds"?: string;
    /**
     * IP白名单的修改方式，取值范围如下：
     * - **Cover**：覆盖原IP白名单（默认值）。
     * - **Append**：追加IP。
     * - **Delete**：删除IP。
     * >当**WhiteListType**取值为**IP**时该参数才支持配置。
     * @example `Cover`
     */
    "ModifyMode"?: string;
}
