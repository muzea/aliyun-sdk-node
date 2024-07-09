export interface DescribeImagesRequest {
    /**
     * 镜像所属的地域ID。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 查询指定状态的镜像，如果不配置此参数，默认只返回Available状态的镜像。取值范围：
     * - Creating：镜像正在创建中。
     * - Waiting：多任务排队中。
     * - Available（默认）：您可以使用的镜像。
     * - UnAvailable：您不能使用的镜像。
     * - CreateFailed：创建失败的镜像。
     * - Deprecated：已弃用的镜像。
     * 默认值：Available。当前参数支持同时取多个值，值之间以半角逗号（,）隔开。
     * @example `Available`
     */
    "Status"?: string;
    /**
     * 镜像ID。
     * @example `m-bp1g7004ksh0oeuc****`
     */
    "ImageId"?: string;
    /**
     * 订阅型镜像是否已经超过使用期限。
     * >该参数即将被弃用，为提高兼容性，请尽量使用其他参数。
     * @example `false`
     */
    "ShowExpired"?: boolean;
    /**
     * 根据某一快照ID创建的自定义镜像。
     * @example `s-bp17ot2q7x72ggtw****`
     */
    "SnapshotId"?: string;
    /**
     * 镜像名称。
     * @example `testImageName`
     */
    "ImageName"?: string;
    /**
     * 镜像族系名称，查询镜像时可通过设置该参数来过滤当前族系对应的镜像。
     * 默认值：空。
     * > 阿里云官方镜像关联的镜像族系信息请参见[公共镜像概述](~~108393~~)。
     * @example `hangzhou-daily-update`
     */
    "ImageFamily"?: string;
    /**
     * 镜像来源。取值范围：
     * - system：阿里云官方提供的，且不是通过云市场发布的镜像，和控制台中的“公共镜像”概念不同。
     * - self：您创建的自定义镜像。
     * - others：包含共享镜像（其他阿里云用户直接共享给您的镜像）和社区镜像（任意阿里云用户将其自定义镜像完全公开共享后的镜像）。您需要注意：
     *     - 查找社区镜像时，IsPublic必须为true。
     *     - 查找共享镜像时，IsPublic需要设置为false或者不传值。
     * - marketplace：阿里云或者第三方供应商ISV在云市场发布的镜像，需要和ECS一起购买。请自行留意云市场镜像的收费详情。
     * 默认值：空。
     * >空表示返回取值为system、self以及others的结果。
     * @example `self`
     */
    "ImageOwnerAlias"?: string;
    /**
     * 指定实例类型可以使用的镜像。
     * @example `ecs.g5.large`
     */
    "InstanceType"?: string;
    /**
     * 镜像是否可以运行在I/O优化实例上。
     * @example `true`
     */
    "IsSupportIoOptimized"?: boolean;
    /**
     * 镜像是否支持cloud-init。
     * @example `true`
     */
    "IsSupportCloudinit"?: boolean;
    /**
     * 镜像的操作系统类型。取值范围：
     * - windows。
     * - linux。
     * @example `linux`
     */
    "OSType"?: string;
    /**
     * 镜像的体系架构。取值范围：
     * - i386。
     * - x86_64。
     * - arm64。
     * @example `i386`
     */
    "Architecture"?: string;
    /**
     * 镜像资源列表的页码。
     * 起始值：1。
     * 默认值：1。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 分页查询时设置的每页行数。
     * 最大值：100。
     * 默认值：10。
     * @example `1`
     */
    "PageSize"?: number;
    /**
     * 镜像是否已经运行在ECS实例中。取值范围：
     * - instance：镜像处于运行状态，有ECS实例使用。
     * - none：镜像处于闲置状态，暂无ECS实例使用。
     * @example `instance`
     */
    "Usage"?: string;
    /**
     * 是否只预检此次请求。
     *
     * - true：发送检查请求，不会查询资源状况。检查项包括AccessKey是否有效、RAM用户的授权情况和是否填写了必需参数。如果检查不通过，则返回对应错误。如果检查通过，会返回错误码DryRunOperation。
     * - false：发送正常请求，通过检查后返回2XX HTTP状态码并直接查询资源状况。
     * 默认值：false。
     * @example `false`
     */
    "DryRun"?: boolean;
    /**
     * 镜像需要被使用到的场景。取值范围：
     * - CreateEcs（默认）：创建实例。
     * - ChangeOS：更换系统盘/更换操作系统。
     * @example `CreateEcs`
     */
    "ActionType"?: string;
    /**
     * 自定义镜像所在的企业资源组ID。使用该参数过滤资源时，资源数量不能超过1000个。
     * >不支持默认资源组过滤。
     * @example `rg-bp67acfmxazb4p****`
     */
    "ResourceGroupId"?: string;
    /**
     * 标签列表。
     */
    "Tag"?: {
        /**
         * 镜像的标签键。
         * >该参数即将被弃用，为提高兼容性，建议您使用另一个`Tag.N.Key`参数。
         * @example `null`
         */
        key: string;
        /**
         * 镜像的标签键。N的取值范围：1~20。
         * 使用一个标签过滤资源，查询到该标签下的资源数量不能超过1000个；使用多个标签过滤资源，查询到同时绑定了多个标签的资源数量不能超过1000个。如果资源数量超过1000个，请使用[ListTagResources](~~110425~~)接口进行查询。
         * @example `TestKey`
         */
        Key: string;
        /**
         * 镜像的标签值。N的取值范围：1~20。
         * @example `TestValue`
         */
        Value: string;
        /**
         * 镜像的标签值。
         * >该参数即将被弃用，为提高兼容性，建议您使用另一个`Tag.N.Value`参数。
         * @example `null`
         */
        value: string;
    }[];
    /**
     * 查询资源时的筛选条件列表。
     */
    "Filter"?: {
        /**
         * 查询资源时的筛选键。取值范围：
         * - 当该参数取值为`CreationStartTime`时，可以查询在指定时间点（`Filter.N.Value`）后创建的资源信息。
         * - 当该参数取值为`CreationEndTime`时，可以查询在指定时间点（`Filter.N.Value`）前创建的资源信息。
         * @example `CreationStartTime`
         */
        Key: string;
        /**
         * 查询资源时的筛选值。指定该参数时必须同时指定`Filter.N.Key`参数，格式为：`yyyy-MM-ddTHH:mmZ`，采用UTC+0时区。
         * @example `2017-12-05T22:40Z`
         */
        Value: string;
    }[];
    /**
     * 是否查询已发布的社区镜像。取值范围：
     * - true：查询已发布的社区镜像。当您指定该参数值为true时，ImageOwnerAlias必须为others。
     * - false：查询除社区镜像的其他镜像类型，具体以ImageOwnerAlias参数值为准。
     * 默认值：false。
     * @example `false`
     */
    "IsPublic"?: boolean;
    /**
     * 镜像所属的阿里云账号ID。该参数仅在查询共享镜像以及社区镜像时生效。
     * @example `1234567890`
     */
    "ImageOwnerId"?: number;
}
