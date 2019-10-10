interface CreateClusterTemplateRequest {
    /**
    * 地域ID。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    /**
    * 模版名称。
    * @example `templateName2`
    */ "TemplateName": string;
    /**
    * 集群版本。
    * @example `EMR-3.15.0`
    */ "EmrVer": string;
    /**
    * 集群类型。
    * @example `HADOOP`
    */ "ClusterType": string;
    "HostGroup": string[];
    /**
    * 区域ID。
    * @example `cn-hangzhou-b`
    */ "ZoneId"?: string;
    /**
    * OSS文件路径。
    * @example `oss://bucket/path`
    */ "LogPath"?: string;
    /**
    * 安全组ID。
    * @example `sg-bp1id7ajv83kmqwq****`
    */ "SecurityGroupId"?: string;
    /**
    * 是否开放公网IP。
    * @example `true`
    */ "IsOpenPublicIp"?: boolean;
    /**
    * 需要新创建的安全组的名字。
    * @example `sg-name`
    */ "SecurityGroupName"?: string;
    /**
    * 包年包月集群的过期时间。
    * @example `36`
    */ "Period"?: number;
    /**
    * 自动续费。
    * @example `false`
    */ "AutoRenew"?: boolean;
    /**
    * VPC ID。
    * @example `vpc-bp1l4urd87xlh7i4bju4h`
    */ "VpcId"?: string;
    /**
    * 虚拟交换机的ID。
    * @example `vsw-bp10tvjyc77psy0z5h0ni`
    */ "VSwitchId"?: string;
    /**
    * 网络类型。
    * @example `vpc`
    */ "NetType"?: string;
    /**
    * 调用ECS接口使用的权限名。
    * @example `AliyunEmrEcsDefaultRole`
    */ "UserDefinedEmrEcsRole"?: string;
    "OptionSoftWareList"?: string[];
    /**
    * 是否启用高可用。
    * @example `true`
    */ "HighAvailabilityEnable"?: boolean;
    /**
    * 使用本地Hive元数据库。
    * @example `false`
    */ "UseLocalMetaDb"?: boolean;
    /**
    * 是否I/O优化。
    * @example `true`
    */ "IoOptimized"?: boolean;
    /**
    * 是否开启集群机器的SSH服务。
    * @example `true`
    */ "SshEnable"?: boolean;
    /**
    * ECS实例分代。
    * @example `ecs-3`
    */ "InstanceGeneration"?: string;
    /**
    * Master机器密码。
    * @example `pwd`
    */ "MasterPwd"?: string;
    "KeyPairName"?: string;
    "MetaStoreType"?: string;
    "MetaStoreConf"?: string;
    "BootstrapAction"?: string[];
    /**
    * 软件自定义配置（集群启动前，可以指定一个JSON文件修改软件配置）。
    * @example `[{"classification": "core-site","properties": {"fs.trash.interval": "61"}},{"classification": "hadoop-log4j","properties": {"hadoop.log.file": "hadoop1.log","hadoop.root.logger": "INFO","a.b.c": "ABC"}}]`
    */ "Configurations"?: string;
    /**
    * 是否启用高安全。
    * @example `true`
    */ "EasEnable"?: boolean;
    /**
    * 集群托管类型。
    * @example `HALF_MANAGED`
    */ "DepositType"?: string;
    /**
    * 无需设置，总是为ECS。
    * @example `ECS`
    */ "MachineType"?: string;
    /**
    * 是否使用Hive统一元数据。
    * @example `false`
    */ "UseCustomHiveMetaDb"?: boolean;
    /**
    * 如果指定为**true**，Hive 的**hive-site**配置项**init.meta.db**会被设置为 **true**。
    * @example `true`
    */ "InitCustomHiveMetaDb"?: boolean;
    "Config"?: string[];
}
export { CreateClusterTemplateRequest };