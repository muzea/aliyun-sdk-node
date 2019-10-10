interface CreateDBInstanceRequest {
    "RegionId": string;
    /**
    * 用于保证请求的幂等性，防止重复提交请求。由客户端生成该参数值，要保证在不同请求间唯一，最大值不超过64个ASCII字符，且该参数值中不能包含非ASCII字符。
    * @example `ETnLKlblzczshOTUbOCzxxxxxxxxxx`
    */ "ClientToken": string;
    /**
    * 数据库引擎，取值：**MongoDB**。
    * @example `MongoDB`
    */ "Engine": string;
    /**
    * 数据库版本号，取值：**3.2**、**3.4**或**4.0**。
    * > 调用本接口用于克隆实例时，该值必须与源实例保持一致。
    * @example `4.0`
    */ "EngineVersion": string;
    /**
    * 实例规格，取值详情请参见[实例规格表](~~57141~~)。
    * @example `dds.mongo.standard`
    */ "DBInstanceClass": string;
    /**
    * 实例存储空间。
    * - 取值范围：**10**~**3000**，单位为GB。
    * - 每10GB递增。
    * > 具体取值受实例规格约束，详情请参考[实例规格表](~~57141~~)。
    * @example `10`
    */ "DBInstanceStorage": number;
    "OwnerId"?: number;
    /**
    * 可用区ID，您可以通过[DescribeRegions](~~61933~~)查看可用的可用区，使用此参数指定实例创建的可用区。
    * @example `cn-hangzhou-b`
    */ "ZoneId"?: string;
    /**
    * 实例名称，长度为2~256个字符。以中文、英文字母开头，可以包含数字、中文、英文、下划线（_）、短横线（-）。
    * @example `测试数据库1`
    */ "DBInstanceDescription"?: string;
    /**
    * - 实例的IP白名单，以逗号隔开，不可重复，最多1000个IP。
    * - 支持格式：%，0.0.0.0/0，10.23.12.24（IP）或者10.23.12.24/24（CIDR模式，无类域间路由，/24表示地址前缀的长度，范围为1~32。
    * > %和0.0.0.0/0表示任何IP地址都可以访问实例的数据库，属于高危设置，请谨慎设置。
    * @example `10.23.12.24/24`
    */ "SecurityIPList"?: string;
    /**
    * root账号的密码。
    * <ul>
    * <li>密码由大写字母、小写字母、数字、特殊字符中的至少三种组成，特殊字符为!#$%^&amp;*()_+-=</li>
    * <li>密码长度为8-32位。</li>
    * </ul>
    * @example `Alitest!159`
    */ "AccountPassword"?: string;
    /**
    * 实例的付费类型，取值：
    * - **PostPaid**：后付费（按量付费）。
    * - **PrePaid**：预付费（包年包月）。
    * 默认付费类型为按量付费。
    * > 当本参数值为**PrePaid**时，还需要传入**Period**参数。
    * @example `PrePaid`
    */ "ChargeType"?: string;
    /**
    * 实例的购买时长，单位为月。取值范围为：**1**~**9**，**12**，**24**，**36**。
    * > 当**ChargeType**参数值为**PrePaid**时，本参数才可用。
    * @example `1`
    */ "Period"?: number;
    /**
    * 实例的网络类型，取值：
    * - **CLASSIC**：经典网络。
    * - **VPC**：专有网络。
    * 默认网络类型为经典网络。
    * > 当本参数值为**VPC**时，还需要传入**VpcId**参数和**VSwitchId**参数。
    * @example `VPC`
    */ "NetworkType"?: string;
    /**
    * 专有网络（VPC）ID。
    * > 当**NetworkType**参数值为**VPC**时，本参数才可用。
    * @example `vpc-bpxxxxxxxx`
    */ "VpcId"?: string;
    /**
    * 虚拟交换机ID。
    * > 当**NetworkType**参数值为**VPC**时，本参数才可用。
    * @example ` vsw-bpxxxxxxxx`
    */ "VSwitchId"?: string;
    /**
    * 源实例ID，只有调用本接口用于克隆实例时才能传入该参数，且必须和**BackupId**或**RestoreTime**参数一同传入。
    * @example `dds-bpxxxxxxxx`
    */ "SrcDBInstanceId"?: string;
    /**
    * 具体的备份集ID，只有调用本接口用于克隆实例时才能传入该参数，且必须和**SrcDBInstanceId**参数一同传入。
    * > 您可以通过调用[DescribeBackups](~~62172~~)接口查询备份集ID。
    * @example `32994xxxx`
    */ "BackupId"?: string;
    /**
    * 克隆实例时所恢复的时间点，格式为<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
    * > - 只有调用本接口用于克隆实例时才能传入该参数，且必须和**SrcDBInstanceId**、**BackupId**参数一同传入。
    * - 支持选择7天内的任一时间点进行克隆。
    * @example `2019-03-13T12:11:14Z`
    */ "RestoreTime"?: string;
    /**
    * 附加参数，业务信息。
    * @example `{“ActivityId":"000000000"}`
    */ "BusinessInfo"?: string;
    /**
    * 设置实例是否自动续费，取值：
    * - **true**：自动续费。
    * - **false**：不自动续费，即手动续费。
    * 默认为手动续费。
    * > 当**ChargeType**参数值为**PrePaid**时，本参数才可用。
    * @example `true`
    */ "AutoRenew"?: string;
    /**
    * 数据库名。
    * > 调用本接口用于克隆实例操作时，可传入该参数指定需要克隆的数据库，如不传入，则克隆实例的所有数据库。
    * @example `mongodbtest`
    */ "DatabaseNames"?: string;
    /**
    *  优惠码，默认为：**youhuiquan_promotion_option_id_for_blank**。
    * @example `youhuiquan_promotion_option_id_for_blank`
    */ "CouponNo"?: string;
    /**
    * 实例使用的存储引擎，取值为**WiredTiger**，**RocksDB**，**TerarkDB**，默认值为**WiredTiger**。关于存储引擎与版本的选择约束请参考[版本与存储引擎](~~61906~~)。
    * > 调用本接口用于克隆实例时，该值必须与源实例保持一致。
    * @example `WiredTiger`
    */ "StorageEngine"?: string;
    /**
    * 副本集节点个数，取值：**3**，**5**，**7**。默认值为**3**。
    * @example `3`
    */ "ReplicationFactor"?: string;
    /**
    * 创建只读节点的个数，取值范围为**1**-**5**。
    * > 默认不传入该参数，即默认不创建只读节点。
    * @example `1`
    */ "ReadonlyReplicas"?: string;
    /**
    * 资源组ID。
    * @example `rg-axxxxxxxx`
    */ "ResourceGroupId"?: string;
}
export { CreateDBInstanceRequest };