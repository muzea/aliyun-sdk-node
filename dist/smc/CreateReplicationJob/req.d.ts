interface CreateReplicationJobRequest {
    /**
    * 迁移源要迁入的目标阿里云地域ID。
    * 例如，您需要迁移源服务器至上海，则相应的阿里云地域ID为`cn-shanghai`。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    /**
    * 迁移源ID。
    * @example `s-xxxxxxxxxxxxxxx`
    */ "SourceId": string;
    /**
    * 目标阿里云服务器ECS的系统盘大小，单位为GiB。取值范围：20~500
    * > 该参数取值需要大于迁移源系统盘实际占用大小，例如，源系统盘大小为500 GiB，实际占用100 GiB，则该参数取值需大于100 GiB。
    * @example `80`
    */ "SystemDiskSize": number;
    /**
    * @example `1111111111`
    */ "OwnerId"?: number;
    /**
    * 幂等token，防止重复创建。
    * @example `xxxxxxxxxx`
    */ "ClientToken"?: string;
    /**
    * 迁移任务名。迁移任务的名称需满足以下要求：
    * - 任务名称必须唯一。
    * - 长度为 2~128 个英文或中文字符，必须以大小字母或中文开头，不能以 http:// 和 https:// 开头，可以包含数字、半角冒号（:）、下划线（_）或者连字符（-）。
    * @example `MigrationTask`
    */ "Name"?: string;
    /**
    * 迁移任务描述。迁移任务描述的长度应为 2~128 个英文或中文字符，必须以大小字母或中文开头，不能以 http:// 和 https:// 开头，可以包含数字、半角冒号（:）、下划线（_）或者连字符（-）。
    * @example `This_is_a_migration_task`
    */ "Description"?: string;
    /**
    * 迁移任务交付的目标类型。取值范围：镜像。表示迁移成功后，SMC为您的迁移源生成阿里云镜像。您可使用该镜像创建ECS实例达到迁移至阿里云的目的。
    * @example `image`
    */ "TargetType"?: string;
    /**
    * 迁移任务的执行时间。该参数值的设置需满足以下要求：
    * - 遵循ISO8601标准，并需要使用UTC时间，格式为YYYY-MM-DDThh:mm:ssZ。示例：2018-01-01T12:00:00Z表示北京时间2018年01月01日20点00分00秒。
    * - 该参数值必须晚于当前时间，并且需要设置在30天以内。
    * >如果该参数值为空，则SMC不会启动迁移任务，需要您调用[StartReplicationJob](~~121823~~)启动任务。
    * @example `2019-06-04T13:35:00Z`
    */ "ScheduledStartTime"?: string;
    /**
    * 迁移任务的过期时间。取值范围：迁移任务创建时间+7天~迁移任务创建时间+90天
    * - 过期时间须遵循ISO8601标准，并需要使用UTC时间，格式为YYYY-MM-DDThh:mm:ssZ。示例：2018-01-01T12:00:00Z，表示北京时间2018年01月01日20点00分00秒。
    * - 过期时间设置为空，表示任务无限期有效。
    * - 任务到期后会被标记为过期状态，保存7天，7天后系统会自动清理。
    * 默认值：迁移任务创建时间+30天。表示迁移任务的默认有效期为创建后30天。
    * @example `2019-06-04T13:35:00Z`
    */ "ValidTime"?: string;
    /**
    * 迁移任务交付的目标阿里云镜像名称。目标镜像的名称需满足以下要求：
    * - 同一阿里云地域下，镜像名称必须唯一。
    * - 长度为 2~128 个英文或中文字符，必须以大小字母或中文开头，不能以 http:// 和 https:// 开头，可以包含数字、半角冒号（:）、下划线（_）或者连字符（-）。
    * >迁移任务运行过程中，若当前地域已经存在相同名称的镜像，则默认在镜像名称中添加迁移任务ID（JobId）作为后缀，如：ImageName-JobId。
    * @example `MyAliCloudImage`
    */ "ImageName"?: string;
    /**
    * 目标实例ID。
    * @example `i-xxxxxxxxxxxxx`
    */ "InstanceId"?: string;
    "DataDisk"?: string[];
    "Tag"?: string[];
    /**
    * 已配置高速通道服务或者VPN网关的VPC ID。
    * @example `xxxxxxxxxxxxxx`
    */ "VpcId"?: string;
    /**
    * 指定VPC下的虚拟交换机ID。
    * @example `xxxxxxxxxxxxxx`
    */ "VSwitchId"?: string;
    /**
    * 复制驱动器参数信息。最大长度为2048个字符。
    * 键值对Json格式可扩展，固定键值。不同驱动器（参见SourceServer.ReplicationDriver）支持参数可能不一致，如SMT支持参数：
    * - BandwidthLimit 传输速度带宽限制
    * - CompressLevel 传输压缩率
    * - Checksum 是否开启checksum校验
    * - UseSSHTunnel 是否开启SSH加密通道EfficiencyLevel  高效传输等级
    * @example `BandWidthLimit:0`
    */ "ReplicationParameters"?: string;
    /**
    * 数据传输网络模式，取值范围：
    * - 0 表示公网传输模式。此时要求您的源服务器能够访问公网，迁云数据从公网传输。
    * - 2 表示内网传输模式，选用此模式必须设置VSwitchId参数（VpcId参数可以不设置，服务内部可以通过接口反查出来）。
    * 默认值：0。
    * @example `0`
    */ "NetMode"?: number;
    "RunOnce"?: boolean;
    "Frequency"?: number;
    "MaxNumberOfImageToKeep"?: number;
}
export { CreateReplicationJobRequest };