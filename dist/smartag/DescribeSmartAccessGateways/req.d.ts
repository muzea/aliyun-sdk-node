export interface DescribeSmartAccessGatewaysRequest {
    /**
     * 智能接入网关实例所属地域的ID。
     * @example `cn-shanghai`
     */
    "RegionId"?: string;
    /**
     * 智能接入网关实例绑定的云连接网实例ID。
     * @example `ccn-bxuau4ezctt****`
     */
    "AssociatedCcnId"?: string;
    /**
     * 智能接入网关实例ID。
     * @example `sag-6z21oj0vjjrx6s****`
     */
    "SmartAGId"?: string;
    /**
     * 智能接入网关实例的状态。取值：
     * - **Ordered**：已下单。
     * - **Delivered**：已发货。
     *
     * - **Received**：已收货。
     * - **Returning**：退货中。
     * - **Active**：活跃。
     * - **Init**：初始化。
     * - **Offline**：离线。
     * @example `Active`
     */
    "Status"?: string;
    /**
     * 智能接入网关实例的名称。
     * 名称长度为2~128个字符，以大小写字母或中文开头，可包含数字、下划线（_）和短划线（-）。
     * @example `nametest`
     */
    "Name"?: string;
    /**
     * 分页查询时每页显示的条目数。默认值：**10**。取值范围：**1**~**50**。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 查询页码。默认值：**1**。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 智能接入网关设备的序列号。
     * @example `sag32a3****`
     */
    "SerialNumber"?: string;
    /**
     * 智能接入网关实例绑定的访问控制实例ID。
     * @example `acl-xhwhyuo43l0n****`
     */
    "AclIds"?: string;
    /**
     * 访问控制实例ID。
     * 本参数表示查询未绑定该访问控制实例ID的智能接入网关实例信息。多个访问控制实例ID以半角逗号（,）隔开。
     * @example `acl-sjfbgngj****`
     */
    "UnboundAclIds"?: string;
    /**
     * 智能接入网关实例类型。取值：
     * - **software**：智能接入网关App版实例。
     * - **hardware**：智能接入网关硬件版实例。
     * @example `hardware`
     */
    "InstanceType"?: string;
    /**
     * 可否关联QoS策略实例。取值：
     * - **true**：可以。
     * - **false**：不可以。
     * 本参数表示查询可否关联QoS策略实例的智能接入网关实例的信息。
     * @example `false`
     */
    "CanAssociateQos"?: boolean;
    /**
     * 智能接入网关设备硬件规格。取值：
     * - **sag-1000**。
     * - **sag-100wm**。
     * @example `sag-100wm`
     */
    "HardwareType"?: string;
    /**
     * 智能接入网关设备运行的软件版本。
     * @example `2.3.0.0`
     */
    "SoftwareVersion"?: string;
    /**
     * 版本过滤符。取值：
     * - **greater**：大于当前版本。
     * - **less**：小于当前版本。
     * - **equals**：等于当前版本。
     * @example `equals`
     */
    "VersionComparator"?: string;
    /**
     * 智能接入网关实例的业务状态。取值：
     * - **Normal**：正常。
     * - **Arrearage**：欠费锁定。
     * @example `Normal`
     */
    "BusinessState"?: string;
    /**
     * 智能接入网关实例所属的资源组ID。
     * @example `rg-acfm2iu4fnc****`
     */
    "ResourceGroupId"?: string;
    /**
     * 智能接入网关实例ID列表。
     */
    "SmartAGIds"?: string[];
    /**
     * 绑定的云连接网实例的名称。
     * 名称长度为2~100个字符，以大小写字母或中文开头，可包含数字、下划线（_）、半角句号（.）和短划线（-）。
     * @example `ccn`
     */
    "AssociatedCcnName"?: string;
}
