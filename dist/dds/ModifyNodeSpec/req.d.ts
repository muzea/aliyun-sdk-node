interface ModifyNodeSpecRequest {
    "RegionId"?: string;
    /**
    * 分片集群实例中Shard节点ID或Mongos节点ID，您可以通过调用[DescribeDBInstanceAttribute](~~61923~~)接口进行查询。
    * > 当传入的值为Shard节点ID时，还需要传入**NodeStorage**参数。
    * @example `d-bpxxxxxxxx`
    */ "NodeId": string;
    "OwnerId"?: number;
    /**
    * 实例ID。
    * @example `dds-bpxxxxxxxx`
    */ "DBInstanceId": string;
    /**
    * Shard节点或Mongos节点的规格，规格详情请参考[实例规格表](~~57141~~)。
    * > 本参数和**NodeStorage**参数两者必须传入一个。
    * @example `dds.shard.standard`
    */ "NodeClass"?: string;
    /**
    * 设置Shard节点的存储空间。
    * - 取值范围：**10**~**2000**，单位为GB。
    * - 每10GB进行递增。
    * >- 本参数和**NodeClass**参数两者必须传入一个。
    * - 当**NodeId**传入的值为Shard节点ID时，本参数才可用。
    * @example `20`
    */ "NodeStorage"?: number;
    /**
    * 用于保证请求的幂等性，防止重复提交请求。由客户端生成该参数值，要保证在不同请求间唯一，最大值不超过64个ASCII字符，且该参数值中不能包含非ASCII字符。
    * @example `ETnLKlblzczshOTUbOCzxxxxxxxxxx`
    */ "ClientToken"?: string;
    /**
    * 请求来源，取值：
    * - **OpenApi**：请求来源为OpenApi。
    * - **mongo_buy**：请求来源为控制台。
    * @example `OpenApi`
    */ "FromApp"?: string;
    /**
    * 是否自动付费。取值：
    * - **true**：自动付费，请确保账号有足够的余额。
    * - **false**：控制台手动付费。具体操作为：登录控制台，在右上角选择**费用**>进入**费用中心**，在**订单管理**找到目标订单进行支付。
    * 默认值为：**true**。
    * @example `true`
    */ "AutoPay"?: boolean;
    /**
    * 变更配置的生效时间，取值：
    * - **Immediately**：立即生效。
    * - **MaintainTime**：实例可运维时间段内生效。
    * 默认值为**Immediately**。
    * @example `Immediately`
    */ "EffectiveTime"?: string;
}
export { ModifyNodeSpecRequest };