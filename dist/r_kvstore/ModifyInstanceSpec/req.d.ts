export interface ModifyInstanceSpecRequest {
    /**
     * 地域ID，可调用[DescribeRegions](~~61012~~)查询，使用此参数指定要变更实例的地域。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 实例ID，可调用[DescribeInstances](~~60933~~)获取。
     * @example `r-bp1zxszhcgatnx****`
     */
    "InstanceId": string;
    /**
     * 变更后的实例规格代码，您可以调用[DescribeAvailableResource](~~120580~~)查询实例所属的可用区可以变配的规格。
     * > 各规格的详情，请参见[规格查询导航](~~26350~~)。
     * @example `redis.master.small.default`
     */
    "InstanceClass"?: string;
    /**
     * 活动ID、业务信息。
     * @example `000000001`
     */
    "BusinessInfo"?: string;
    /**
     * 优惠码，默认值：`youhuiquan_promotion_option_id_for_blank`。
     * @example `youhuiquan_promotion_option_id_for_blank`
     */
    "CouponNo"?: string;
    /**
     * 是否强制变配，取值：
     * * **false**：不强制变配。
     * * **true**：强制变配，默认值。
     * @example `true`
     */
    "ForceUpgrade"?: boolean;
    /**
     * 变更执行时间，取值：
     * * **Immediately**：立即执行，默认值。
     * * **MaintainTime**：在实例的可维护时间段执行，您可以调用[ModifyInstanceMaintainTime](~~61000~~)修改可维护时间段。
     * @example `Immediately`
     */
    "EffectiveTime"?: string;
    /**
     * 是否自动付款，取值：
     * * **true**：自动付款，默认值。
     * * **false**：手动付款。取值为**false**时，您需要在实例到期前通过控制台手动续费，详情请参见[手动续费](~~26352~~)。
     * @example `true`
     */
    "AutoPay"?: boolean;
    /**
     * 变配类型，包年包月实例变配时需要传入本参数，取值：
     * * **UPGRADE**：升级配置，默认值。
     * * **DOWNGRADE**：降级配置。
     * > * 包年包月实例降级配置时必须将该参数的值设置为**DOWNGRADE**。
     * > *  如果变配的目标规格比现有规格的价格高，则为升级配置，反之为降级配置。例如，读写分离8G版（5只读节点）的价格比16G集群版的价格高，从后者变配到前者为升级配置。
     * @example `DOWNGRADE`
     */
    "OrderType"?: string;
    /**
     * 适用于<props="china">经典版</props><props="intl">本地盘版</props>实例升级的实例大版本，取值：**2.8**、**4.0**或**5.0**。
     * > 升级版本时**InstanceClass**参数为必填，表示本接口仅支持在更新实例规格时升级版本。若您仅需升级实例版本，请调用[ModifyInstanceMajorVersion](~~472452~~)。
     * @example `5.0`
     */
    "MajorVersion"?: string;
    /**
     * 用于保证请求的幂等性。由客户端生成该参数值，要保证在不同请求间唯一，最大值不超过64个ASCII字符，且该参数值中不能包含非ASCII字符。
     * @example `ETnLKlblzczshOTUbOCz****`
     */
    "ClientToken"?: string;
    /**
     * 调用来源，本参数仅用于内部维护使用，无需传入。
     * @example `SDK`
     */
    "SourceBiz"?: string;
    /**
     * 分片数，本参数仅适用于云盘版集群架构实例，您可以通过该参数实现自定义分片数量。
     * @example `8`
     */
    "ShardCount"?: number;
    /**
     * 主可用区的只读节点数，取值：0~5，本参数仅适用于如下情况：
     * * 若实例为云盘版标准架构，您可以将该参数设置为大于0的值，开启读写分离架构。
     * * 若实例为云盘版读写分离架构实例，您可以通过该参数实现自定义只读节点数量，也可以将该参数设置为0，关闭读写分离架构，将实例切换为标准架构。
     * @example `5`
     */
    "ReadOnlyCount"?: number;
    /**
     * 是否开启强制传输，取值：
     * - **false**（默认）：在变配前，系统会检查实例当前的内核小版本，若内核版本过低则会报错，您需要升级内核小版本后重试。
     * - **true**：跳过检查项，直接执行变配操作。
     * @example `false`
     */
    "ForceTrans"?: boolean;
    /**
     * 用于创建多可用区读写分离实例，指定备可用区的只读节点数量，取值为1~9，但该参数与ReadOnlyCount的总和不能大于9。
     * @example `2`
     */
    "SlaveReadOnlyCount"?: number;
    /**
     * 节点类型，取值：
     * * **MASTER_SLAVE**：高可用（双副本）
     * * **STAND_ALONE**：单副本
     * * **double**：双副本
     * * **single**：单副本
     * > 云原生版实例请选择**MASTER_SLAVE**或**STAND_ALONE**，经典版实例请选择**double**或**single**。
     * @example `MASTER_SLAVE`
     */
    "NodeType"?: string;
}
