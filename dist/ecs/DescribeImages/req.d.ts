interface DescribeImagesRequest {
    /**
    * 实例所属的地域ID。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    /**
    * @example `hide`
    */ "SourceRegionId"?: string;
    /**
    * RAM用户的虚拟账号ID。
    * @example `155780923770`
    */ "OwnerId"?: number;
    /**
    * 查询某种状态下的镜像。取值范围：
    * - Creating：镜像正在创建中。
    * - Waiting：多任务排队中。
    * - Available（默认）：您可以使用的镜像。
    * - UnAvailable：您不能使用的镜像。
    * - CreateFailed：创建失败的镜像。
    * 支持同时取多个值，值之间以半角逗号（,）隔开。
    * @example `Available`
    */ "Status"?: string;
    /**
    * 镜像ID。
    * @example `m-imageid1`
    */ "ImageId"?: string;
    /**
    * 订阅型镜像是否已经超过使用期限。
    * >该参数即将被弃用，为提高兼容性，请尽量使用其他参数。
    * @example `false`
    */ "ShowExpired"?: boolean;
    /**
    * 根据某一快照ID创建的自定义镜像。
    * @example `s-snapshotid1`
    */ "SnapshotId"?: string;
    /**
    * 镜像名称。
    * @example `FinanceJoshua`
    */ "ImageName"?: string;
    /**
    * 镜像来源。取值范围：
    * - system：阿里云提供的公共镜像。
    * - self：您创建的自定义镜像。
    * - others：其他阿里云用户共享给您的镜像。
    * - marketplace：镜像市场提供的镜像。您查询到的云市场镜像可以直接使用，无需提前订阅。您需要自行留意云市场镜像的收费详情。
    * 默认值：空，空表示返回取值为system、self以及others的结果。
    * @example `self`
    */ "ImageOwnerAlias"?: string;
    /**
    * 指定实例类型可以使用的镜像。
    * @example `ecs.g5.large`
    */ "InstanceType"?: string;
    /**
    * 镜像是否可以运行在I/O优化实例上。
    * @example `true`
    */ "IsSupportIoOptimized"?: boolean;
    /**
    * 镜像是否支持Cloud Init。
    * @example `true`
    */ "IsSupportCloudinit"?: boolean;
    /**
    * 镜像的操作系统类型。取值范围：
    * - windows
    * - linux
    * @example `linux`
    */ "OSType"?: string;
    /**
    * 镜像的体系架构。取值范围：
    * - i386
    * - x86_64
    * @example `i386`
    */ "Architecture"?: string;
    /**
    * 镜像资源列表的页码。起始值：1
    * 默认值：1
    * @example `1`
    */ "PageNumber"?: number;
    /**
    * 分页查询时设置的每页行数。最大值：100
    * 默认值：10
    * @example `10`
    */ "PageSize"?: number;
    /**
    * 镜像是否已经运行在ECS实例中。取值范围：
    * - instance：镜像处于运行状态，有ECS实例使用。
    * - none：镜像处于闲置状态，暂无ECS实例使用。
    * @example `instance`
    */ "Usage"?: string;
    "Tag"?: string[];
    /**
    * 是否只预检此次请求。
    *
    * - true：发送检查请求，不会查询资源状况。检查项包括AccessKey是否有效、RAM用户的授权情况和是否填写了必需参数。如果检查不通过，则返回对应错误。如果检查通过，会返回错误码DryRunOperation。
    * - false：发送正常请求，通过检查后返回2XX HTTP状态码并直接查询资源状况。
    * 默认值：false
    * @example `false`
    */ "DryRun"?: boolean;
    /**
    * 镜像需要被使用到的场景。取值范围：
    * - CreateEcs（默认）：创建实例
    * - ChangeOS：更换系统盘/更换操作系统
    * @example `CreateEcs`
    */ "ActionType"?: string;
    "Filter"?: string[];
    /**
    * 自定义镜像所在的企业资源组ID。
    * @example `rg-resourcegroupid1`
    */ "ResourceGroupId"?: string;
}
export { DescribeImagesRequest };