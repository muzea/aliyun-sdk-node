interface ModifyClusterTemplateRequest {
    /**
    * 区域ID。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    /**
    * 集群模版名。
    * @example `new_template_name`
    */ "TemplateName": string;
    /**
    * 集群模版ID。
    * @example `CT-4A6799A79D73****`
    */ "BizId": string;
    /**
    * 可用区ID。
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
    * 安全组ID。
    * @example `sg-bp1id7ajv83kmqwq****`
    */ "SecurityGroupId"?: string;
    /**
    * 是否使用公网IP。
    * @example `true`
    */ "IsOpenPublicIp"?: boolean;
    /**
    * 安全组名字。
    * @example `emr_sg`
    */ "SecurityGroupName"?: string;
    /**
    * 付费类型。
    * @example `PostPaid`
    */ "ChargeType"?: string;
    /**
    * 机器组的包年包月时间（包月数有1、2、3、4、5、6、7、8、9、12、24、36）。
    * @example `36`
    */ "Period"?: number;
    /**
    * 包年包月集群是否自动续费。
    * @example `false`
    */ "AutoRenew"?: boolean;
    /**
    * VPC ID。
    * @example `vpc-bp1l4urd87xlh7i4b****`
    */ "VpcId"?: string;
    /**
    * 交换机ID。
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
    * 是否高可用集群。
    * @example `true`
    */ "HighAvailabilityEnable"?: boolean;
    /**
    * 是否使用本地Hive元数据库。
    * @example `true`
    */ "UseLocalMetaDb"?: boolean;
    /**
    * 是否I/O优化。
    * @example `true`
    */ "IoOptimized"?: boolean;
    /**
    * 是否打开SSH访问。
    * @example `true`
    */ "SshEnable"?: boolean;
    /**
    * ECS实例分代。
    * @example `ecs-3`
    */ "InstanceGeneration"?: string;
    /**
    * Master节点SSH访问密码。
    * @example `pwd`
    */ "MasterPwd"?: string;
    /**
    * 密钥对。
    * @example `yourKeyPair****`
    */ "KeyPairName"?: string;
    /**
    * local, unified, user_rds 分别代表集群默认元数据，E-MapReduce统一元数据，用户自定义RDS作为元数据。
    * @example `local`
    */ "MetaStoreType"?: string;
    /**
    * MetaStoreType设置为user_rds时有效。元数据RDS的设置。
    * @example `{"dbUrl":"jdbc:mysql://yourhost:3306/instance","dbUserName":"db1","dbPassword":"pwd"}`
    */ "MetaStoreConf"?: string;
    "BootstrapAction"?: string[];
    /**
    * 软件自定义配置。（集群启动前，可以指定一个json文件修改软件配置。）
    * @example `[{"classification": "core-site","properties": {"fs.trash.interval": "61"}},{"classification": "hadoop-log4j","properties": {"hadoop.log.file": "hadoop1.log","hadoop.root.logger": "INFO","a.b.c": "ABC"}}]`
    */ "Configurations"?: string;
    /**
    * 是否高安全集群。
    * @example `true`
    */ "EasEnable"?: boolean;
    /**
    * 托管类型。
    * @example `HALF_MANAGED`
    */ "DepositType"?: string;
    /**
    * 机器类型。
    * @example `ECS`
    */ "MachineType"?: string;
    /**
    * 保留字段，无需填写。
    * @example `false`
    */ "UseCustomHiveMetaDb"?: boolean;
    /**
    * 保留字段，无需填写。
    * @example `false`
    */ "InitCustomHiveMetaDb"?: boolean;
    "Config"?: string[];
}
export { ModifyClusterTemplateRequest };