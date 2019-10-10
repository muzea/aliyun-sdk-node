interface CreateInstanceRequest {
    /**
    * 地域ID，可调用[DescribeRegions](~~61012~~)查询，使用此参数指定要创建实例的地域。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    "OwnerId"?: number;
    /**
    * 用于保证请求的幂等性。由客户端生成该参数值，要保证在不同请求间唯一，大小写敏感、不超过64个ASCII字符。
    * @example `AAAAAAAAAAAAAAAAAAAAAAAAAA`
    */ "Token"?: string;
    /**
    * 实例名称。 名称为2-128个字符，以大小写字母或中文开头，不支持字符`@/:=”<>{[]}`和空格。
    * @example `apitest`
    */ "InstanceName"?: string;
    /**
    * 实例密码。 长度为8－32位，需包含大写字母、小写字母、特殊字符和数字中的至少三种，允许的特殊字符包括`!@#$%^&*()_+-=`。
    * @example `Acfr5xxx,.xxx`
    */ "Password"?: string;
    /**
    * 实例的存储容量，单位为MB。
    * > 调用此接口需至少传递Capacity或InstanceClass中的一个参数。
    * @example `16384`
    */ "Capacity"?: number;
    /**
    * 实例的规格，详细信息请参见[实例规格表](~~107984~~)。
    * > 调用此接口需至少传递Capacity或InstanceClass中的一个参数。
    * @example `redis.master.small.default`
    */ "InstanceClass"?: string;
    /**
    * 可用区ID，可调用[DescribeRegions](~~61012~~)查询，使用此参数指定要创建实例的可用区。
    * @example `cn-hangzhou-e`
    */ "ZoneId"?: string;
    /**
    * 实例的详细配置，为JSON格式的字符串，参见[参数配置](~~43885~~)。
    * @example `{\"EvictionPolicy\":\"volatile-lru\",\"hash-max-ziplist-entries\":512,\"zset-max-ziplist-entries\":128,\"zset-max-ziplist-value\":64,\"set-max-intset-entries\":512,\"hash-max-ziplist-value\":64}`
    */ "Config"?: string;
    /**
    * 付费类型：
    * * PrePaid（预付费）
    * * PostPaid（按量付费）
    * > 默认为PostPaid。
    * @example `PostPaid`
    */ "ChargeType"?: string;
    /**
    * 节点类型：
    * * STAND_ALONE（单节点）；
    * * MASTER_SLAVE（多节点）；
    * > 默认值为MASTER_SLAVE。
    * @example `MASTER_SLAVE`
    */ "NodeType"?: string;
    /**
    * 网络类型：
    * * CLASSIC（经典网络）
    * * VPC（专有网络）
    * > 默认为经典网络。
    * @example `VPC`
    */ "NetworkType"?: string;
    /**
    * VPC网络的ID。
    * @example `vpc-bp1oxxxxxxxxxxgzv26cf`
    */ "VpcId"?: string;
    /**
    * 虚拟交换机的ID。
    * @example `vsw-oqscxxxxxxxxxxxxx5e8c`
    */ "VSwitchId"?: string;
    /**
    * 付费周期，ChargeType（付费类型）为PrePaid时为必选参数，单位为月，可选值：1-9，12，24，36 。
    * > 付费类型为PostPaid时不支持传入此参数。
    * @example `12`
    */ "Period"?: string;
    /**
    * 活动ID、业务信息。
    * @example `000000000`
    */ "BusinessInfo"?: string;
    /**
    * 优惠码，默认值为：`youhuiquan_promotion_option_id_for_blank`。
    * @example `youhuiquan_promotion_option_id_for_blank`
    */ "CouponNo"?: string;
    /**
    * 如需基于某个实例的备份集创建新实例，则在此参数中传递源实例的ID。
    * @example `r-bp1xxxxxxxxxxxxxx`
    */ "SrcDBInstanceId"?: string;
    /**
    * 如需基于某个实例的备份集创建新实例，则在此参数中传递源实例的备份集ID。通过调用[DescribeBackups](~~61081~~)可查询BackupId。
    * @example `111111111`
    */ "BackupId"?: string;
    /**
    * 实例类型，取值：
    * * Redis
    * * Memcache
    * > 默认为Redis。
    * @example `Redis`
    */ "InstanceType"?: string;
    /**
    * 版本类型，取值：
    * * 2.8
    * * 4.0
    * * 5.0
    * > 默认值为2.8。
    * @example `4.0`
    */ "EngineVersion"?: string;
    /**
    * 指定新实例的内网IP地址。
    * > 内网IP需在实例所属的交换机网段内。
    * @example `172.16.0.10`
    */ "PrivateIpAddress"?: string;
    /**
    * 是否使用代金券，可选值：
    * * true（使用）
    * * false（不使用）
    * > 默认值：false。
    * @example `false`
    */ "AutoUseCoupon"?: string;
    /**
    * 是否开启自动续费，可选值：
    * * true（开启）
    * * false（不开启）
    * > 默认值：false。
    * @example `true`
    */ "AutoRenew"?: string;
    /**
    * 自动续费周期，单位为月，可选值：
    * * 1
    * * 2
    * * 3
    * * 6
    * * 12
    * > 当**AutoRenew**为`true`时该参数必选。
    * @example `3`
    */ "AutoRenewPeriod"?: string;
}
export { CreateInstanceRequest };