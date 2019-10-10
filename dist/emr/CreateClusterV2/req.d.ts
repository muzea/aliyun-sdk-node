interface CreateClusterV2Request {
    /**
    * 地域ID。目前支持华东 1、华东 2、华南 1、华北 2、华北 3、美西、新加坡、德国。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    /**
    * 集群的名字。长度限制为 1-64 个字符，只允许包含中文、字母、数字、-、_。
    * @example `bi_hadoop`
    */ "Name": string;
    /**
    * 可用区ID。
    * - 华东 1（杭州）支持：cn-hangzhou-b。
    * -  华北 2（北京）支持：cn-beijing-a、cn-beijing-b,cn-beijing-c。
    * @example `cn-hangzhou-b`
    */ "ZoneId": string;
    /**
    * EMR版本。
    * @example `EMR-3.15.0`
    */ "EmrVer": string;
    /**
    * 集群类型。
    * @example `HADOOP`
    */ "ClusterType": string;
    "HostGroup": string[];
    /**
    * OSS日志路径。
    * @example `oss//bucketname/path`
    */ "LogPath"?: string;
    /**
    * 安全组 ID。可以在ECS中创建一个然后使用。需要确认的是，如果使用已有的安全组，会被增加上默认安全组策略：入只开放22端口，出开放所有端口。
    * @example `sg-bp1id7ajv83kmqwq****`
    */ "SecurityGroupId"?: string;
    /**
    * 是否开启公网IP。如果开启，默认会带有8MB的带宽。
    * @example `true`
    */ "IsOpenPublicIp"?: boolean;
    /**
    * 需要新建的安全组名称。如果不指定安全组ID，那么将使用这个名字创建一个新的安全组。当集群创建完成以后，可以在集群详情中看到创建的安全组ID。这个安全组将会有带有默认的安全组策略：入只开放22端口，出开放所有端口。
    * @example `emr-sg`
    */ "SecurityGroupName"?: string;
    /**
    * 付费类型：
    * - PostPaid：按量付费。
    * - PrePaid：包年包月。
    * @example `PostPaid`
    */ "ChargeType"?: string;
    /**
    * 包年包月时间（包月数有：1、2、3、4、5、6、7、8、9、12、24、36）。ChargeType=PrePaid 时，必填。
    * @example `30`
    */ "Period"?: number;
    /**
    * 包年包月集群是否自动续费。
    * @example `false`
    */ "AutoRenew"?: boolean;
    /**
    * 是否自动付费。
    * @example `true`
    */ "AutoPayOrder"?: boolean;
    /**
    * VPC ID，NetType=vpc时必填。
    * @example `vpc-bp1l4urd87xlh7i4b****`
    */ "VpcId"?: string;
    /**
    * 交换机ID，NetType=vpc时必填。
    * @example `vsw-bp10tvjyc77psy0z5****`
    */ "VSwitchId"?: string;
    /**
    * 网络类型。
    * @example `vpc`
    */ "NetType"?: string;
    /**
    * 用于ECS调用的EMR权限名。
    * @example `AliyunEmrEcsDefaultRole`
    */ "UserDefinedEmrEcsRole"?: string;
    "OptionSoftWareList"?: string[];
    /**
    * 是否开启高可用集群。如果开启高可用，需要两台Master节点。
    * @example `true`
    */ "HighAvailabilityEnable"?: boolean;
    /**
    * 是否使用本地Hive元数据库。
    * @example `true`
    */ "UseLocalMetaDb"?: boolean;
    /**
    * 是否开启I/O优化，默认**true**。
    * @example `true`
    */ "IoOptimized"?: boolean;
    /**
    * 是否开启SSH。
    * @example `true`
    */ "SshEnable"?: boolean;
    /**
    * ECS实例分代。
    * @example `ecs-3`
    */ "InstanceGeneration"?: string;
    /**
    * Master节点SSH访问密码。需要满足ECS的密码规则：8 - 30 个字符，且同时包含任意三项（大、小写字母、数字和特殊符号）。
    * @example `pwd`
    */ "MasterPwd"?: string;
    /**
    * 密钥对。
    * @example `test_pair`
    */ "KeyPairName"?: string;
    /**
    * 可选值：local, unified, user_rds 分别代表集群内部元数据、统一元数据和用户自建RDS作为元数据。
    * @example `local`
    */ "MetaStoreType"?: string;
    /**
    * 一个JSON字段，包含dbUrl, dbUserName, dbPassword分别代表RDS的连接串、用户名和密码。dbUrl 中要带上库名
    * @example `{"dbUrl":"jdbc:mysql://rm-xxxxx.mysql.rds.aliyuncs.com:3306/hivemeta3?createDatabaseIfNotExist=true&characterEncoding=UTF-8","dbUserName":"user","dbPassword":"password"}`
    */ "MetaStoreConf"?: string;
    "UserInfo"?: string[];
    "HostComponentInfo"?: string[];
    /**
    * 托管类型。
    * @example `HALF_MANAGED`
    */ "DepositType"?: string;
    /**
    * 机器类型。
    * @example `ECS`
    */ "MachineType"?: string;
    "BootstrapAction"?: string[];
    /**
    * 保留字段，无需填写。
    * @example `false`
    */ "UseCustomHiveMetaDB"?: boolean;
    /**
    * 保留字段，无需填写。
    * @example `false`
    */ "InitCustomHiveMetaDB"?: boolean;
    "Config"?: string[];
    /**
    * 无需填写。
    * @example `0`
    */ "Configurations"?: string;
    /**
    * 是否高安全集群。
    * @example `false`
    */ "EasEnable"?: boolean;
    /**
    * 当前集群是gateway时，其关联的主集群ID。
    * @example `C-D7958B72E59B****`
    */ "RelatedClusterId"?: string;
    /**
    * 暂时无需填写。
    * @example `""`
    */ "WhiteListType"?: string;
    /**
    * 暂时无需填写。
    * @example `0`
    */ "AuthorizeContent"?: string;
}
export { CreateClusterV2Request };