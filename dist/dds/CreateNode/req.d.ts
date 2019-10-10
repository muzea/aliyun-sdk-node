interface CreateNodeRequest {
    "RegionId"?: string;
    /**
    * Shard节点或Mongos节点的规格，规格详情请参见[实例规格表](~~57141~~)。
    * @example `dds.shard.mid`
    */ "NodeClass": string;
    /**
    * Node的类型，取值：
    * - **shard**：Shrad节点。
    * - **mongos**：Mongos节点。
    * @example `shard`
    */ "NodeType": string;
    "OwnerId"?: number;
    /**
    * 分片集群实例ID。
    * @example `dds-bpxxxxxxxx`
    */ "DBInstanceId": string;
    /**
    * Node的磁盘空间，当**NodeType**参数取值为**Shard**时该参数可用，且该参数必须传入。
    * - 取值范围：**10**~**2000**，单位为GB。
    * - 每10GB进行递增。
    * @example `10`
    */ "NodeStorage"?: number;
    /**
    * 用于保证请求的幂等性。由客户端生成该参数值，要保证在不同请求间唯一，最大值不超过64个ASCII字符，且该参数值中不能包含非ASCII字符。
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
    * - **false**：控制台手动付费。具体操作为：登录控制台，在右上角选择**费用**>**进入费用中心**，在**订单管理**页面找到目标订单进行支付。
    * 默认值为：**true**。
    * > 仅包年包月的实例可传入该参数。
    * @example `true`
    */ "AutoPay"?: boolean;
}
export { CreateNodeRequest };