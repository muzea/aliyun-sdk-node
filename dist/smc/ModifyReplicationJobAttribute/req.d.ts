interface ModifyReplicationJobAttributeRequest {
    "RegionId"?: string;
    /**
    * 迁移任务ID。
    * @example `j-xxxxxxxxxxx`
    */ "JobId": string;
    /**
    * @example `000000`
    */ "OwnerId"?: number;
    /**
    * 迁移任务名称。迁移任务的名称需满足以下要求：
    * -  任务名称必须唯一。
    * - 长度为 2~128 个英文或中文字符，必须以大小字母或中文开头，不能以 http:// 和 https:// 开头，可以包含数字、半角冒号（:）、下划线（_）或者连字符（-）。
    * @example `MyMigrationTask`
    */ "Name"?: string;
    /**
    * 迁移任务描述。迁移任务描述的长度应为 2~128 个英文或中文字符，必须以大小字母或中文开头，不能以 http:// 和 https:// 开头，可以包含数字、半角冒号（:）、下划线（_）或者连字符（-）。
    * @example `This_is_my_migration_task`
    */ "Description"?: string;
    /**
    * 迁移交付的目标类型。取值范围：image。
    * >迁云成功后，SMC为您的源服务器生成阿里云镜像，您可使用该镜像创建ECS实例达到迁移至阿里云的目的。
    * @example `image`
    */ "TargetType"?: string;
    /**
    * 设置迁移任务的执行时间。SMC在指定时间自动为您启动迁移任务。执行时间遵循ISO8601标准，并需要使用UTC时间，格式为 YYYY-MM-DDThh:mm:ssZ。示例：2018-01-01T12:00:00Z 表示北京时间2018年01月01日20点00分00秒。
    * >当执行时间为空时，SMC不自动启动迁移任务，您需要调用[StartReplicationJob](~~121823~~)启动。
    * @example `2019-06-04T13:35:00Z`
    */ "ScheduledStartTime"?: string;
    /**
    * 迁移任务交付的目标镜像名称。目标镜像的名称需满足以下要求：
    * - 同一阿里云地域下，镜像名称必须唯一。
    * - 长度为 2~128 个英文或中文字符，必须以大小字母或中文开头，不能以 http:// 和 https:// 开头，可以包含数字、半角冒号（:）、下划线（_）或者连字符（-）。
    * >如果迁移任务运行过程中，当前地域已经存在当前名称的镜像，镜像名称默认添加迁移任务ID（JobId）作为后缀，如：ImageName-JobId。
    * @example `MyAliCloudImage`
    */ "ImageName"?: string;
    /**
    * 目标实例ID。
    * @example `i-xxxxxxxxxxxx`
    */ "InstanceId"?: string;
    /**
    * 目标阿里云服务器ECS的系统盘大小。单位为GiB。取值范围：20~500
    * > 该参数取值需要大于您源服务器系统盘实际占用大小，例如，源系统盘大小为500 GiB，实际占用100 GiB，则该参数取值需大于100 GiB。
    * @example `50`
    */ "SystemDiskSize"?: number;
    "DataDisk"?: string[];
    "Frequency"?: number;
    "MaxNumberOfImageToKeep"?: number;
}
export { ModifyReplicationJobAttributeRequest };