export interface CreateVirtualPhysicalConnectionRequest {
    /**
     * 共享专线的付费方式。取值：
     * - **PayByPhysicalConnectionOwner**：表示合作伙伴付费。
     * - **PayByVirtualPhysicalConnectionOwner**：表示租户付费。
     * @example `PayByVirtualPhysicalConnectionOwner`
     */
    "OrderMode": string;
    /**
     * 共享专线的VLAN ID。取值范围：**0**~**2999**。
     * - VLAN ID为**0**时，表示边界路由器VBR（Virtual Border Router）的物理交换机端口不使用VLAN模式，而使用三层路由接口模式。三层路由接口模式下每一条物理专线对应一个VBR。
     * - VLAN ID为**1**~**2999**时，表示VBR的物理交换机端口使用基于VLAN的三层子接口。三层子接口模式下每个VLAN ID对应一个VBR。此时，该VBR的物理专线可以连接多个账号下的VPC。不同VLAN下的VBR二层网络隔离，无法互通。
     * @example `4`
     */
    "VlanId": number;
    /**
     * 共享专线的带宽值。
     * 取值：**50M**、**100M**、**200M**、**300M**、**400M**、**500M**、**1G**、**2G**、**5G**、**8G**、**10G**。
     * <props="china">
     * > **2G**、**5G**、**8G**、**10G**的带宽值默认不开放，如需使用，请联系您的客户经理申请。</props>
     * <props="intl">
     * > **2G**、**5G**、**8G**、**10G**的带宽值默认不开放，如需使用，请联系您的客户经理申请。</props>
     * 单位：**M**表示Mbps，**G**表示Gbps。
     * @example `50M`
     */
    "Spec": string;
    /**
     * 租户的阿里云账号（主账号）ID。
     * @example `1210123456123456`
     */
    "VpconnAliUid": number;
    /**
     * 共享专线关联的物理专线ID。
     * @example `pc-bp1ciz7ekd2grn1as****`
     */
    "PhysicalConnectionId": string;
    /**
     * 共享专线的名称。
     * 长度为2～128个字符，必须以字母或中文开头，可包含数字、下划线（_）和短划线（-），但不能以`http:// `或`https://`开头。
     * @example `nametest`
     */
    "Name"?: string;
    /**
     * 客户端Token，用于保证请求的幂等性。
     * 从您的客户端生成一个参数值，确保不同请求间该参数值唯一。ClientToken只支持ASCII字符。
     * > 若您未指定，则系统自动使用API请求的**RequestId**作为**ClientToken**标识。每次API请求的**RequestId**不一样。
     * @example `CBCE910E-D396-4944-8****`
     */
    "Token"?: string;
    /**
     * 是否只预检此次请求。取值：
     * - **true**：发送检查请求，不会创建共享专线。检查项包括是否填写了必需参数、请求格式、实例状态。如果检查不通过，则返回对应错误。如果检查通过，则返回`DRYRUN.SUCCESS`。
     * - **false**（默认值）：发送正常请求，通过检查后直接创建共享专线。
     * @example `false`
     */
    "DryRun"?: boolean;
    /**
     * 共享专线的描述信息。
     * 长度为2～256个字符，必须以字母或中文开头，但不能以`http://`或`https://`开头。
     * @example `desctest`
     */
    "Description"?: string;
    /**
     * 共享专线所属的地域ID。
     * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 共享专线所属的资源组ID。
     * @example `rg-aekzjty2chzuqky`
     */
    "ResourceGroupId"?: string;
    /**
     * 标签列表。
     */
    "Tag"?: {
        /**
         * 资源的标签键。最多支持输入20个标签键。一旦传入该值，则不允许为空字符串。
         * 最多支持64个字符，可包含数字、半角句号（.）、下划线（_）和短划线（-），不能以`aliyun`和`acs:`开头，不能包含`http://`或者`https://`。
         * @example `FinanceDept`
         */
        Key: string;
        /**
         * 资源的标签值。最多支持输入20个标签值。一旦传入该值，可以为空字符串。
         * 最多支持128个字符，可包含数字、半角句号（.）、下划线（_）和短划线（-），不能以`aliyun`和`acs:`开头，不能包含`http://`或者`https://`。
         * @example `FinanceJoshua`
         */
        Value: string;
    }[];
}
