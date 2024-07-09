export interface DescribeEipAddressesRequest {
    /**
     * EIP所在的地域ID。
     * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 是否包含未生效的订购数据，取值：
     * - **false**（默认值）：不包含未生效的订购数据。
     * - **true**：包含未生效的订购数据。
     * @example `false`
     */
    "IncludeReservationData"?: boolean;
    /**
     * EIP的状态，取值：
     * - **Associating**：绑定中。
     * - **Unassociating**：解绑中。
     * - **InUse**：已分配。
     * - **Available**：可用。
     * - **Releasing**：释放中。
     * @example `Available`
     */
    "Status"?: string;
    /**
     * 要查询的EIP的IP地址。
     * 最多支持输入50个EIP的IP地址，IP地址之间用半角逗号（,）分隔。
     * >如果同时传入**EipAddress**和**AllocationId**参数，**EipAddress**可输入50个EIP的IP地址，**AllocationId**也可同时输入50个EIP的实例ID。
     * @example `47.75.XX.XX`
     */
    "EipAddress"?: string;
    /**
     * 要查询的EIP实例的ID。
     * 最多支持输入50个EIP实例ID，实例ID之间用半角逗号（,）分隔。
     * >如果同时传入**EipAddress**和**AllocationId**参数，**AllocationId**可输入50个EIP的实例ID，**EipAddress**也可同时输入50个EIP的IP地址。
     * @example `eip-2zeerraiwb7ujxscd****`
     */
    "AllocationId"?: string;
    /**
     * 连续EIP的实例ID。
     * @example `eipsg-t4nr90yik5oy38xdy****`
     */
    "SegmentInstanceId"?: string;
    /**
     * EIP所属的资源组的ID。
     * @example `rg-acfmxazb4pcdvf****`
     */
    "ResourceGroupId"?: string;
    /**
     * 列表的页码。默认值：**1**。
     * @example `10`
     */
    "PageNumber"?: number;
    /**
     * 分页查询时每页的行数。最大值：**100**。默认值：**10**。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 线路类型。取值：
     * - **BGP**（默认值）：BGP（多线）线路。目前全部地域都支持BGP（多线）线路EIP。
     * - **BGP_PRO**：BGP（多线）\_精品线路。目前仅中国香港、新加坡、日本（东京）、马来西亚（吉隆坡）、菲律宾（马尼拉）、印度尼西亚（雅加达）和泰国（曼谷）地域支持BGP（多线）\_精品线路EIP。
     * 关于BGP（多线）线路和BGP（多线）_精品线路的更多信息，请参见[EIP线路类型](~~32321~~)。
     * 如果您是单线带宽的白名单用户，您还可以选择以下类型：
     * -  **ChinaTelecom**：中国电信
     * - **ChinaUnicom**：中国联通
     * - **ChinaMobile**：中国移动
     * - **ChinaTelecom_L2**：中国电信L2
     * - **ChinaUnicom_L2**：中国联通L2
     * - **ChinaMobile_L2**：中国移动L2
     * 如果您是杭州金融云用户，该字段必填，取值：**BGP_FinanceCloud**。
     * @example `BGP`
     */
    "ISP"?: string;
    /**
     * 查询资源时的筛选键，必须取值为**CreationStartTime**（资源创建的开始时间）。
     * @example `CreationStartTime`
     */
    "Filter.1.Key"?: string;
    /**
     * 查询资源时的筛选键，必须取值为**CreationEndTime**（资源创建的结束时间）。
     * @example `CreationEndTime`
     */
    "Filter.2.Key"?: string;
    /**
     * 查询资源时的筛选值。使用UTC时间，格式为`YYYY-MM-DDThh:mmZ`。
     * @example `2023-01-01T01:00Z`
     */
    "Filter.1.Value"?: string;
    /**
     * 查询资源时的筛选值。使用UTC时间，格式为`YYYY-MM-DDThh:mmZ`。
     * @example `2023-01-06T02:00Z`
     */
    "Filter.2.Value"?: string;
    /**
     * 锁定类型，取值：
     * - **financial**：因欠费被锁定。
     * - **security**：因安全原因被锁定。
     * @example `financial`
     */
    "LockReason"?: string;
    /**
     * 要绑定的云产品实例的类型，取值：
     * - **EcsInstance**（默认值）：VPC类型的ECS实例。
     * - **SlbInstance**：VPC类型的CLB实例。
     * - **Nat**：NAT网关。
     * - **HaVip**：高可用虚拟IP。
     * - **NetworkInterface**：辅助弹性网卡。
     * - **IpAddress**：IP地址。
     * > 每个ECS实例、CLB实例、高可用虚拟IP和IP地址同时只能绑定一个EIP，NAT网关可以绑定多个EIP。辅助弹性网卡可以绑定EIP的个数受EIP绑定模式影响，更多信息，请参见[弹性公网IP概述](~~72125~~)。
     * @example `EcsInstance`
     */
    "AssociatedInstanceType"?: string;
    /**
     *  云产品的实例ID。
     * @example `i-2zebb08phyccdvf****`
     */
    "AssociatedInstanceId"?: string;
    /**
     * EIP的付费模式，取值：
     * - **PostPaid**：按量计费。
     * - **PrePaid**：包年包月。
     * @example `PostPaid`
     */
    "ChargeType"?: string;
    /**
     * 是否只预检此次请求，取值：
     * - **true**：发送检查请求，不会查询资源状况。检查项包括是否填写了必需参数、请求格式、业务限制。如果检查不通过，则返回对应错误。如果检查通过，则返回错误码`DryRunOperation`。
     * - **false**（默认值）：发送正常请求，通过检查后返回HTTP 2xx状态码并直接进行操作。
     * @example `false`
     */
    "DryRun"?: boolean;
    /**
     * EIP的名称。
     * 长度为1~128个字符，必须以字母或中文开头，可包含数字、下划线（_）和短划线（-）。
     * @example `EIP-01`
     */
    "EipName"?: string;
    /**
     * 指定标签筛选EIP。
     */
    "Tag"?: {
        /**
         * 标签键。最多支持输入20个标签键。一旦传入该值，则不允许为空字符串。
         * 一个标签键最多支持128个字符，不能以`aliyun`和`acs:`开头，不能包含`http://`或者`https://`。
         * @example `FinanceDept`
         */
        Key: string;
        /**
         * 标签值。最多支持输入20个标签值。一旦传入该值，可以为空字符串。
         * 一个标签值最多支持128个字符，不能以`aliyun`和`acs:`开头，不能包含`http://`或者`https://`。
         * @example `FinanceJoshua`
         */
        Value: string;
    }[];
    /**
     * 是否开启了DDoS防护（增强版）。取值：
     * - **false**：未开启。
     * - **true**：已开启。
     * @example `false`
     */
    "SecurityProtectionEnabled"?: boolean;
    /**
     * 要查询的EIP所属IP地址池ID。
     * @example `pippool-2vc0kxcedhquybdsz****`
     */
    "PublicIpAddressPoolId"?: string;
    /**
     * 是否为托管实例。取值：
     * - **true**：是托管实例。
     * - **false**：不是托管实例。
     * 不填默认查询所有实例。
     * @example `false`
     */
    "ServiceManaged"?: boolean;
}
