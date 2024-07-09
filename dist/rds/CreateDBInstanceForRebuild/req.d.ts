export interface CreateDBInstanceForRebuildRequest {
    /**
     * 地域ID。可调用DescribeRegions获取。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 实例ID。可调用DescribeDBInstances获取。
     * @example `rm-uf6wjk5****`
     */
    "DBInstanceId": string;
    /**
     * 目标实例的付费类型，取值：
     * * **Postpaid**：后付费（按量付费）
     * * **Prepaid**：预付费（包年包月）
     * @example `Postpaid`
     */
    "PayType": string;
    /**
     * 该实例的[IP白名单](~~43185~~)。多条记录请以半角逗号（,）隔开，不可重复，最多1000条记录。支持如下两种格式：
     * * IP地址形式，例如：10.10.XX.XX。
     * * CIDR形式，例如：10.10.XX.XX/24（无类域间路由，24表示了地址中前缀的长度，范围为1~32）。
     * 如不填则默认为原实例default分组白名单信息。
     * @example `127.0.0.1`
     */
    "SecurityIPList"?: string;
    /**
     * 目标实例名称，长度为2~256个字符。以中文、英文字母开头，可以包含数字、中文、英文、下划线（_）、短横线（-）。
     * >不能以 http:// 和 https:// 开头。
     * @example `testdb`
     */
    "DBInstanceDescription"?: string;
    /**
     * 主节点可用区ID。可以通过接口DescribeRegions查看可用区ID。
     * >指定了VPC和交换机时，为匹配交换机对应的可用区，该参数必填。
     * @example `cn-hangzhou-e`
     */
    "ZoneId"?: string;
    /**
     * 备可用区1。
     * >非基础系列实例需要传入该参数。
     * @example `cn-hangzhou-c`
     */
    "ZoneIdSlave1"?: string;
    /**
     * 备可用区2。
     * >仅三节点企业系列实例可传入该参数。
     * @example `cn-hangzhou-d`
     */
    "ZoneIdSlave2"?: string;
    /**
     * 目标实例的VPC ID。当**InstanceNetworkType**=**VPC**时，本参数必须配置。
     * > 如果传入此参数，您还需要传入参数**ZoneId**。
     * @example `vpc-uf6f7l4fg90****`
     */
    "VPCId"?: string;
    /**
     * 虚拟交换机ID。虚拟交换机所在的可用区必须和**ZoneId**中传入的可用区ID相对应。
     * > - 网络类型**InstanceNetworkType**需为**VPC**。
     * > - 若您填写了ZoneSlaveId1（备可用区ID），此处需填写两个交换机ID，并使用半角逗号（,）隔开。
     * @example `vsw-uf6adz52c2p****`
     */
    "VSwitchId"?: string;
    /**
     * 指定预付费实例为包年或者包月类型，取值：
     * * **Year**：包年。
     * * **Month**：包月。
     * > 若付费类型为**Prepaid**则该参数必须传入。
     * @example `Month`
     */
    "Period"?: string;
    /**
     * 指定购买时长。取值：
     * * 当参数**Period**为**Year**时，**UsedTime**取值为**1**~**5**。
     * * 当参数**Period**为**Month**时，**UsedTime**取值为**1**~**11**。
     * > 若**PayType**为**Prepaid**，需要传入该参数。
     * @example `1`
     */
    "UsedTime"?: string;
    /**
     * 该参数用于保证请求的幂等性，防止重复提交请求。参数值由客户端生成，保证在不同请求间唯一。
     * 该参数值由ASCII字符组成，最长不超过64个字符，不能包含非ASCII字符。
     * @example `ETnLKlblzczshOTUbOC****`
     */
    "ClientToken"?: string;
    /**
     * 实例的网络连接类型，取值：
     * * **Internet**：公网连接。
     * * **Intranet**：内网连接。
     * @example `Internet`
     */
    "DBInstanceNetType"?: string;
    /**
     * 目标实例的网络类型，取值：
     * * **VPC**：VPC网络
     * * **Classic**：经典网络
     * 默认创建经典网络类型的实例。
     * >当实例为云盘实例时，该参数必填，且值为**VPC**。当本参数值为**VPC**时，还需要传入参数**VpcId**、**VSwitchId**。
     * @example `VPC`
     */
    "InstanceNetworkType"?: string;
    /**
     * 资源组ID，可以为空。
     * @example `rg-acfmy****`
     */
    "ResourceGroupId"?: string;
}
