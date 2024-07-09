export interface RunInstancesRequest {
    /**
     * 实例所属的地域ID。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 镜像ID，启动实例时选择的镜像资源。您可以通过[DescribeImages](~~25534~~)查询您可以使用的镜像资源。如果您不指定`LaunchTemplateId`或`LaunchTemplateName`以确定启动模板，也不通过指定`ImageFamily`选用镜像族系最新可用镜像，则`ImageId`为必选参数。
     * @example `aliyun_2_1903_x64_20G_alibase_20200324.vhd`
     */
    "ImageId"?: string;
    /**
     * 镜像族系名称，通过设置该参数来获取当前镜像族系内最新可用镜像来创建实例。
     * - 设置了参数`ImageId`，则不能设置该参数。
     * - 未设置参数`ImageId`，但指定的`LaunchTemplateId`或`LaunchTemplateName`对应的启动模板设置了`ImageId`，则不能设置该参数。
     * - 未设置`ImageId`，且指定的`LaunchTemplateId`或`LaunchTemplateName`对应的启动模板未设置`ImageId`，则可以设置该参数。
     * - 未设置`ImageId`，且未设置`LaunchTemplateId`、`LaunchTemplateName`参数，则可以设置该参数。
     * > 阿里云官方镜像关联的镜像族系信息请参见[公共镜像概述](~~108393~~)。
     * @example `hangzhou-daily-update`
     */
    "ImageFamily"?: string;
    /**
     * 实例的资源规格。如果您不指定`LaunchTemplateId`或`LaunchTemplateName`以确定启动模板，`InstanceType`为必选参数。
     * - 产品选型：参见[实例规格族](~~25378~~)或调用[DescribeInstanceTypes](~~25620~~)查看目标实例规格的性能数据，或者参见[选型配置](~~58291~~)了解如何选择实例规格。
     * - 查询库存：调用[DescribeAvailableResource](~~66186~~)查看指定地域或者可用区内的资源供给情况。
     * @example `ecs.g6.large`
     */
    "InstanceType"?: string;
    /**
     * 新创建实例所属于的安全组ID。同一个安全组内的实例之间可以互相访问，一个安全组能容纳的实例数量视安全组类型而定，具体请参见[使用限制](~~25412#SecurityGroupQuota~~)的安全组章节。
     * > `SecurityGroupId`决定了实例的网络类型，例如，如果设置的安全组的网络类型为专有网络VPC，实例则为VPC类型，并同时需要指定参数`VSwitchId`。
     * 如果您不设置`LaunchTemplateId`或`LaunchTemplateName`以确定实例启动模板，则安全组ID为必选参数。您需要注意：
     * - 您可以通过`SecurityGroupId`设置一个安全组，也可以通过`SecurityGroupIds.N`设置一个或多个安全组，但不支持同时设置`SecurityGroupId`和`SecurityGroupIds.N`。
     * - 如果`NetworkInterface.N.InstanceType`取值为`Primary`，则不能设置`SecurityGroupId`或`SecurityGroupIds.N`，只能设置`NetworkInterface.N.SecurityGroupId`或`NetworkInterface.N.SecurityGroupIds.N`。
     * @example `sg-bp15ed6xe1yxeycg7****`
     */
    "SecurityGroupId"?: string;
    /**
     * 虚拟交换机ID。如果您创建的是VPC类型ECS实例，必须指定虚拟交换机ID，且安全组和虚拟交换机在同一个专有网络VPC中。您可以调用[DescribeVSwitches](~~35748~~)查询已创建的交换机的相关信息。
     * 您需要注意：
     * - 如果您设置了`VSwitchId`参数，则设置的`ZoneId`参数必须和交换机所在的可用区保持一致。您也可以不设置`ZoneId`参数，系统将自动选择指定交换机所在的可用区。
     * - 如果`NetworkInterface.N.InstanceType`取值为`Primary`，则不能设置`VSwitchId`，只能设置`NetworkInterface.N.VSwitchId`。
     * @example `vsw-bp1s5fnvk4gn2tws0****`
     */
    "VSwitchId"?: string;
    /**
     * 实例名称。长度为2~128个字符，支持Unicode中letter分类下的字符（其中包括英文、中文和数字等）。可以包含半角冒号（:）、下划线（_）、半角句号（.）或者短划线（-）。默认值为实例的`InstanceId`。
     * 创建多台ECS实例时，您可以批量设置有序的实例名称，并且可以包含方括号（[]）和逗号（,）。具体操作，请参见[批量设置有序的实例名称或主机名称](~~196048~~)。
     * @example `k8s-node-[1,4]-alibabacloud`
     */
    "InstanceName"?: string;
    /**
     * 实例的描述。长度为2~256个英文或中文字符，不能以`http://`和`https://`开头。
     * @example `Instance_Description`
     */
    "Description"?: string;
    /**
     * 公网入带宽最大值，单位为Mbit/s。取值范围：
     * - 当所购公网出带宽小于等于10 Mbit/s时：1~10，默认为10。
     * - 当所购公网出带宽大于10 Mbit/s时：1~`InternetMaxBandwidthOut`的取值，默认为`InternetMaxBandwidthOut`的取值。
     * @example `10`
     */
    "InternetMaxBandwidthIn"?: number;
    /**
     * 公网出带宽最大值，单位为Mbit/s。取值范围：0~100。
     * 默认值：0。
     * @example `10`
     */
    "InternetMaxBandwidthOut"?: number;
    /**
     * 实例主机名称。限制说明如下：
     * - 半角句号（.）和短划线（-）不能作为首尾字符，更不能连续使用。
     * - Windows实例：字符长度为2~15，不支持半角句号（.），不能全是数字。允许包含大小写英文字母、数字和短划线（-）。
     * - 其他类型实例（Linux等）：
     *     - 字符长度为2~64，支持多个半角句号（.），点之间为一段，每段允许包含大小写英文字母、数字和短划线（-）。
     *     - 支持通过占位符`${instance_id}`将实例ID写入`HostName`参数。例如：`HostName=k8s-${instance_id}`，并且创建的ECS实例ID为`i-123abc****`，则该实例的主机名为`k8s-i-123abc****`。
     * 创建多台ECS实例时，您可以：
     * - 批量设置有序的主机名。具体操作，请参见[批量设置有序的实例名称或主机名称](~~196048~~)。
     * - 通过`HostNames.N`参数，为多台实例分别设置主机名。需要注意`HostName`参数和`HostNames.N`参数不能同时设置。
     * @example `k8s-node-[1,4]-ecshost`
     */
    "HostName"?: string;
    /**
     * 当创建多台实例时，是否为`HostName`和`InstanceName`自动添加有序后缀。有序后缀从001开始递增，最大不能超过999。取值范围：
     * - true：添加。
     * - false：不添加。
     * 默认值：false。
     * 当`HostName`或`InstanceName`按照指定排序格式设置，未设置命名后缀`name_suffix`，即命名格式为`name_prefix[begin_number,bits]`时，`UniqueSuffix`不生效，名称仅按照指定顺序排序。
     * 更多信息，请参见[批量设置有序的实例名称或主机名称](~~196048~~)。
     * @example `true`
     */
    "UniqueSuffix"?: boolean;
    /**
     * 实例的密码。长度为8至30个字符，必须同时包含大小写英文字母、数字和特殊符号中的三类字符。特殊符号可以是：
     * ```
     * ()`~!@#$%^&*-_+=|{}[]:;'<>,.?/
     * ```
     * 其中，Windows实例不能以正斜线（/）为密码首字符。
     * > 如果传入`Password`参数，建议您使用HTTPS协议发送请求，避免密码泄露。
     * @example `EcsV587!`
     */
    "Password"?: string;
    /**
     * 是否使用镜像预设的密码。取值范围：
     * - true：使用。
     * - false：不使用。
     * 默认值：false。
     * > 使用该参数时，Password参数必须为空，同时您需要确保使用的镜像已经设置了密码。
     * @example `false`
     */
    "PasswordInherit"?: boolean;
    /**
     * 实例所属的可用区ID，您可以调用[DescribeZones](~~25610~~)获取可用区列表。
     * > 如果您指定了`VSwitchId`参数，则指定的`ZoneId`参数必须和交换机所在的可用区保持一致。您也可以不指定`ZoneId`参数，系统将自动选择指定的交换机所在的可用区。
     * 默认值：系统自动选择。
     * @example `cn-hangzhou-g`
     */
    "ZoneId"?: string;
    /**
     * 网络计费类型。取值范围：
     * - PayByBandwidth：按固定带宽计费。
     * - PayByTraffic：按使用流量计费。
     * 默认值：PayByTraffic。
     * > **按使用流量计费**模式下的出入带宽峰值都是带宽上限，不作为业务承诺指标。当出现资源争抢时，带宽峰值可能会受到限制。如果您的业务需要有带宽的保障，请使用**按固定带宽计费**模式。
     * @example `PayByTraffic`
     */
    "InternetChargeType"?: string;
    /**
     * 系统盘大小，单位为GiB。取值范围：
     * - 普通云盘：20~500。
     * - ESSD云盘：
     *   - PL0：1~2048。
     *   - PL1：20~2048。
     *   - PL2：461~2048。
     *   - PL3：1261~2048。
     * - ESSD AutoPL 云盘：1~2048。
     * - 其他云盘类型：20~2048。
     * 该参数的取值必须大于或者等于 max{1, ImageSize}。
     * 默认值：max{40, 参数ImageId对应的镜像大小}。
     * @example `40`
     */
    "SystemDisk.Size"?: string;
    /**
     * 系统盘的云盘种类。取值范围：
     * - cloud_efficiency：高效云盘。
     * - cloud_ssd：SSD云盘。
     * - cloud_essd：ESSD云盘。
     * - cloud：普通云盘。
     * - cloud_auto：ESSD AutoPL云盘。
     * - cloud_essd_entry：ESSD Entry云盘。
     * >仅当`InstanceType`设置为[通用算力型实例规格族u1](~~457079~~)（`ecs.u1`）或[经济型实例规格族e](~~108489~~)（`ecs.e`）时，该参数支持取`cloud_essd_entry`值。
     * 已停售的实例规格且非I/O优化实例默认值为cloud，否则默认值为cloud_efficiency。
     * @example `cloud_ssd`
     */
    "SystemDisk.Category"?: string;
    /**
     * 系统盘名称。长度为2~128个字符，支持Unicode中letter分类下的字符（其中包括英文、中文和数字等）。可以包含半角冒号（:）、下划线（_）、半角句号（.）或者短划线（-）。
     * @example `cloud_ssdSystem`
     */
    "SystemDisk.DiskName"?: string;
    /**
     * 系统盘的描述。长度为2~256个英文或中文字符，不能以`http://`和`https://`开头。
     * @example `SystemDisk_Description`
     */
    "SystemDisk.Description"?: string;
    /**
     * 创建ESSD云盘作为系统盘使用时，设置云盘的性能等级。取值范围：
     * - PL0：单盘最高随机读写IOPS 1万。
     * - PL1（默认）：单盘最高随机读写IOPS 5万。
     * - PL2：单盘最高随机读写IOPS 10万。
     * - PL3：单盘最高随机读写IOPS 100万。
     * 有关如何选择ESSD性能等级，请参见[ESSD云盘](~~122389~~)。
     * @example `PL0`
     */
    "SystemDisk.PerformanceLevel"?: string;
    /**
     * 系统盘采用的自动快照策略ID。
     * @example `sp-bp67acfmxazb4p****`
     */
    "SystemDisk.AutoSnapshotPolicyId"?: string;
    /**
     * 是否为I/O优化实例。[已停售的实例规格](~~55263~~)实例默认值是none，其他实例规格默认值是optimized。取值范围：
     * - none：非I/O优化。
     * - optimized：I/O优化。
     * @example `optimized`
     */
    "IoOptimized"?: string;
    /**
     * 实例自定义数据。必须填写已采用Base64编码后的数据，且在进行Base64编码前自定义数据内容的大小不能超过32 KB。
     * 有关实例自定义数据的使用限制、格式以及运行频率的详细信息，请参见[实例自定义数据](~~49121~~)。
     * >为保证传输过程中UserData的安全性，请避免直接以明文形式传送敏感数据，如密码和私钥。若需传送此类信息，建议先行加密处理，并采用Base64编码方式，随后在实例内部进行解密以确保信息安全。
     * @example `ZWNobyBoZWxsbyBlY3Mh`
     */
    "UserData"?: string;
    /**
     * 密钥对名称。
     * >Windows实例，忽略该参数。默认为空。即使填写了该参数，仍旧只执行`Password`的内容。
     * @example `KeyPair_Name`
     */
    "KeyPairName"?: string;
    /**
     * 实例RAM角色名称。您可以使用RAM API [ListRoles](~~28713~~)查询您已创建的实例RAM角色。
     * @example `RAM_Name`
     */
    "RamRoleName"?: string;
    /**
     * 指定创建ECS实例的数量。取值范围：1~100。
     * 创建成功的ECS数量与指定的Amount和minAmount数量有关：
     * - 不指定minAmount时：按照Amount数量创建，库存不满足则API返回创建失败，同时一台也不会创建。
     * - 指定minAmount时：
     *   - 当ECS库存数量＜minAmount：不会创建ECS，同时API返回创建失败。
     *   - 当minAmount≤ECS库存数量＜Amount，按照库存数量创建实例，API返回创建成功。
     *   - 当ECS库存数量≤Amount，按照指定的Amount创建，API返回创建成功。
     * 默认值：1。
     * @example `3`
     */
    "Amount"?: number;
    /**
     * 指定ECS实例最小购买数量。取值范围：1~100。
     * 创建成功的ECS数量与指定的Amount和minAmount数量有关：
     * - 不指定minAmount时：按照Amount数量创建，库存不满足则API返回创建失败，同时一台也不会创建。
     * - 指定minAmount时：
     *   - 当ECS库存数量＜minAmount：不会创建ECS，同时API返回创建失败。
     *   - 当minAmount≤ECS库存数量＜Amount，按照库存数量创建实例，API返回创建成功。
     *   - 当ECS库存数量≤Amount，按照指定的Amount创建，API返回创建成功。
     * @example `2`
     */
    "MinAmount"?: number;
    /**
     * 按量付费实例的自动释放时间。按照[ISO 8601](~~25696~~)标准表示，使用UTC+0时间。格式为：`yyyy-MM-ddTHH:mm:ssZ`。
     * - 如果秒（`ss`）取值不是`00`，则自动取为当前分钟（`mm`）开始时。
     * - 最短释放时间为当前时间半小时之后。
     * - 最长释放时间不能超过当前时间三年。
     * @example `2018-01-01T12:05:00Z`
     */
    "AutoReleaseTime"?: string;
    /**
     * 按量付费实例的竞价策略。当参数`InstanceChargeType`取值为`PostPaid`时生效。取值范围：
     * - NoSpot：正常按量付费实例。
     * - SpotWithPriceLimit：设置上限价格的抢占式实例。
     * - SpotAsPriceGo：系统自动出价，跟随当前市场实际价格。
     * 默认值：NoSpot。
     * @example `NoSpot`
     */
    "SpotStrategy"?: string;
    /**
     * 抢占式实例的保留时长，单位为小时。 默认值：1。取值范围：
     * - 1：创建后阿里云会保证实例运行1小时不会被自动释放；超过1小时后，系统会自动比较出价与市场价格、检查资源库存，来决定实例的持有和回收。
     * - 0：创建后，阿里云不保证实例运行1小时，系统会自动比较出价与市场价格、检查资源库存，来决定实例的持有和回收。
     * 实例回收前5分钟阿里云会通过ECS系统事件向您发送通知。抢占式实例按秒计费，建议您结合具体任务执行耗时来选择合适的保留时长。
     * @example `1`
     */
    "SpotDuration"?: number;
    /**
     * 设置实例的每小时最高价格。支持最大3位小数，参数`SpotStrategy`取值为`SpotWithPriceLimit`时生效。
     * @example `0.97`
     */
    "SpotPriceLimit"?: number;
    /**
     * 抢占实例中断模式。取值范围：
     * - Terminate：直接释放实例。
     * - Stop：实例进入节省停机模式。如需使用，请提交工单申请。
     *   关于节省停机模式的更多说明，请参见[按量付费实例节省停机模式](~~63353~~)。
     * 默认值：Terminate。
     * @example `Terminate`
     */
    "SpotInterruptionBehavior"?: string;
    /**
     * 是否开启安全加固。取值范围：
     * - Active：启用安全加固，只对公共镜像生效。
     * - Deactive：不启用安全加固，对所有镜像类型生效。
     * @example `Active`
     */
    "SecurityEnhancementStrategy"?: string;
    /**
     * 保证请求幂等性。从您的客户端生成一个参数值，确保不同请求间该参数值唯一。**ClientToken**只支持ASCII字符，且不能超过64个字符。更多信息，请参见[如何保证幂等性](~~25693~~)。
     * @example `123e4567-e89b-12d3-a456-426655440000`
     */
    "ClientToken"?: string;
    /**
     * 实例所属的HPC集群ID。
     * 创建SCC实例时，该参数为必选参数。您可以参考[CreateHpcCluster](~~109138~~)创建HPC集群。
     * @example `hpc-bp67acfmxazb4p****`
     */
    "HpcClusterId"?: string;
    /**
     * 是否只预检此次请求。取值范围：
     * -  true：发送检查请求，不会创建实例。检查项包括是否填写了必需参数、请求格式、业务限制和ECS库存。如果检查不通过，则返回对应错误。如果检查通过，则返回错误码`DryRunOperation`。
     * -  false（默认）：发送正常请求，通过检查后直接创建实例。
     * @example `false`
     */
    "DryRun"?: boolean;
    /**
     * 是否在专有宿主机上创建ECS实例。由于专有宿主机不支持创建抢占式实例，指定`DedicatedHostId`参数后，会自动忽略请求中的`SpotStrategy`和`SpotPriceLimit`设置。
     * <props="china">您可以通过[DescribeDedicatedHosts](~~134242~~)查询专有宿主机ID列表。</props>
     * <props="intl">您可以通过[DescribeDedicatedHosts](~~134242~~)查询专有宿主机ID列表。</props>
     * @example `dh-bp67acfmxazb4p****`
     */
    "DedicatedHostId"?: string;
    /**
     * 启动模板ID。更多信息，请调用[DescribeLaunchTemplates](~~73759~~)。
     * 使用启动模板创建实例时，您必须指定`LaunchTemplateId`或`LaunchTemplateName`确定启动模板。
     * @example `lt-bp1apo0bbbkuy0rj****`
     */
    "LaunchTemplateId"?: string;
    /**
     * 启动模板名称。
     * 使用启动模板创建实例时，您必须指定`LaunchTemplateId`或`LaunchTemplateName`确定启动模板。
     * @example `LaunchTemplate_Name`
     */
    "LaunchTemplateName"?: string;
    /**
     * 启动模板版本。如果您指定了`LaunchTemplateId`或`LaunchTemplateName`而不指定启动模板版本号，则采用默认版本。
     * @example `3`
     */
    "LaunchTemplateVersion"?: number;
    /**
     * 实例所在的企业资源组ID。
     * @example `rg-bp67acfmxazb4p****`
     */
    "ResourceGroupId"?: string;
    /**
     * 购买资源的时长，单位由`PeriodUnit`指定。当参数`InstanceChargeType`取值为`PrePaid`时才生效且为必选值。一旦指定了`DedicatedHostId`，则取值范围不能超过专有宿主机的订阅时长。取值范围：
     * <props="china">
     * - PeriodUnit=Week时，Period取值：1、2、3、4。
     * - PeriodUnit=Month时，Period取值：1、2、3、4、5、6、7、8、9、12、24、36、48、60。
     * </props>
     * <props="intl">PeriodUnit=Month时，Period取值：1、2、3、4、5、6、7、8、9、12、24、36、48、60。</props>
     * @example `1`
     */
    "Period"?: number;
    /**
     * 包年包月计费方式的时长单位。取值范围：
     * <props="china">
     * - Week。
     * - Month（默认）。
     * </props>
     * <props="intl">Month（默认）。</props>
     * @example `Month`
     */
    "PeriodUnit"?: string;
    /**
     * 是否要自动续费。当参数`InstanceChargeType`取值`PrePaid`时才生效。取值范围：
     * - true：自动续费。
     * - false：不自动续费。
     * 默认值：false。
     * @example `true`
     */
    "AutoRenew"?: boolean;
    /**
     * 单次自动续费的续费时长。取值范围：
     *
     * <props="china">
     * - PeriodUnit=Week时：1、2、3。
     * - PeriodUnit=Month时：1、2、3、6、12、24、36、48、60。
     * </props>
     * <props="intl">PeriodUnit=Month时：1、2、3、6、12、24、36、48、60。</props>
     * 默认值：1。
     * @example `1`
     */
    "AutoRenewPeriod"?: number;
    /**
     * 实例的付费方式。取值范围：
     * -  PrePaid：包年包月。
     * -  PostPaid：按量付费。
     * 默认值：PostPaid。
     * <props="china">选择包年包月时，您必须确认自己的账号支持余额支付或者信用支付，否则将返回`InvalidPayMethod`的错误提示。</props>
     * <props="intl">选择包年包月时，您必须确认自己的账号支持信用支付，否则将返回`InvalidPayMethod`的错误提示。</props>
     * @example `PrePaid`
     */
    "InstanceChargeType"?: string;
    /**
     * 部署集ID。
     * @example `ds-bp1brhwhoqinyjd6****`
     */
    "DeploymentSetId"?: string;
    /**
     * 如果您设置的部署集对应的策略为部署集组高可用策略（AvailabilityGroup），可以通过该参数指定实例在部署集中的分组号。取值范围：1~7。
     * @example `1`
     */
    "DeploymentSetGroupNo"?: number;
    /**
     * 实例私网IP地址。专有网络VPC类型ECS实例设置私网IP地址时，必须从虚拟交换机（`VSwitchId`）的空闲网段中选择。
     * 您需要注意：
     * - 设置`PrivateIpAddress`后：
     *     - 如果`Amount`参数取值为1，则表示为创建的一台ECS实例分配私网IP地址。
     *     - 如果`Amount`参数取值大于1，则表示在批量创建ECS实例时，以指定的私网IP地址为起始地址，依次为多台ECS实例分配连续的私网IP地址，但需要注意，此时不支持再为实例绑定辅助网卡（即不支持再设置`NetworkInterface.N.*`这类参数）。
     * -  如果`NetworkInterface.N.InstanceType`取值为`Primary`，则不能设置`PrivateIpAddress`，只能设置`NetworkInterface.N.PrimaryIpAddress`。
     * >每个交换机的第1个和最后3个IP地址为系统保留地址，不支持指定。
     * 例如，交换机的网段为192.168.1.0/24，则192.168.1.0、192.168.1.253、192.168.1.254和192.168.1.255这4个地址是系统保留地址。
     * @example `10.1.**.**`
     */
    "PrivateIpAddress"?: string;
    /**
     * 设置突发性能实例的运行模式。取值范围：
     * - Standard：标准模式，实例性能请参见[什么是突发性能实例](~~59977~~)下的性能约束模式章节。
     * - Unlimited：无性能约束模式，实例性能请参见[什么是突发性能实例](~~59977~~)下的无性能约束模式章节。
     * @example `Standard`
     */
    "CreditSpecification"?: string;
    /**
     * 为主网卡指定随机生成的IPv6地址数量。取值范围：1~10。
     *
     * 您需要注意：
     * - 您不能同时设置`Ipv6Address.N`和`Ipv6AddressCount`。
     * - 如果`NetworkInterface.N.InstanceType`取值为`Primary`，则不能设置`Ipv6Address.N`或`Ipv6AddressCount`，只能设置`NetworkInterface.N.Ipv6Address.N`或`NetworkInterface.N.Ipv6AddressCount`。
     * @example `1`
     */
    "Ipv6AddressCount"?: number;
    /**
     * 主网卡队列数。您需要注意：
     * - 不能超过实例规格允许的单块网卡最大队列数。
     * - 实例的所有网卡累加队列数不能超过实例规格允许的队列数总配额。实例规格的单块网卡最大队列数和总配额可以通过[DescribeInstanceTypes](~~25620~~)接口查询`MaximumQueueNumberPerEni`、`TotalEniQueueQuantity`字段。
     * - 如果`NetworkInterface.N.InstanceType`取值为`Primary`，则不能设置`NetworkInterfaceQueueNumber`，只能设置`NetworkInterface.N.QueueNumber`。
     * @example `8`
     */
    "NetworkInterfaceQueueNumber"?: number;
    /**
     * 实例释放保护属性，指定是否支持通过控制台或API（[DeleteInstance](~~25507~~)）释放实例。取值范围：
     * -  true：开启实例释放保护。
     * -  false：关闭实例释放保护。
     * 默认值：false。
     * > 该属性仅适用于按量付费实例，且只能限制手动释放操作，对系统释放操作不生效。
     * @example `false`
     */
    "DeletionProtection"?: boolean;
    /**
     * >该参数正在邀测中，暂未开放使用。
     * @example `false`
     */
    "HibernationOptions.Configured"?: boolean;
    /**
     * 专有宿主机实例是否与专有宿主机关联。取值范围：
     * - default：实例不与专有宿主机关联。已启用节省停机模式的实例，停机后再次启动时，若原专有宿主机可用资源不足，则实例被放置在自动部署资源池的其它专有宿主机上。
     * - host：实例与专有宿主机关联。已启用节省停机模式的实例，停机后再次启动时，仍放置在原专有宿主机上。若原专有宿主机可用资源不足，则实例重启失败。
     * 默认值：default。
     * @example `default`
     */
    "Affinity"?: string;
    /**
     * 是否在专有宿主机上创建实例。取值范围：
     * - default：创建非专有宿主机实例。
     * - host：创建专有宿主机实例。若您不指定`DedicatedHostId`，则由阿里云自动选择专有宿主机放置实例。
     * 默认值：default。
     * @example `default`
     */
    "Tenancy"?: string;
    /**
     * 存储集ID。
     * @example `ss-bp67acfmxazb4p****`
     */
    "StorageSetId"?: string;
    /**
     * 存储集中的最大分区数量。取值范围：大于等于2。
     * @example `2`
     */
    "StorageSetPartitionNumber"?: number;
    /**
     * CPU核心数。该参数不支持自定义设置，只能采用默认值。
     * <props="china">默认值：请参见[自定义CPU选项](~~145895~~)。</props>
     * @example `2`
     */
    "CpuOptions.Core"?: number;
    /**
     * CPU线程数。ECS实例的vCPU数=`CpuOptions.Core`取值*`CpuOptions.ThreadsPerCore`取值。
     * - `CpuOptions.ThreadsPerCore=1`表示关闭CPU超线程。
     * - 仅部分实例规格支持设置CPU线程数。
     * <props="china">取值范围和默认值：请参见[自定义CPU选项](~~145895~~)。</props>
     * @example `2`
     */
    "CpuOptions.ThreadsPerCore"?: number;
    /**
     * 该参数已弃用。
     * @example `1`
     */
    "CpuOptions.Numa"?: string;
    /**
     * 实例的Cpu拓扑类型。取值范围：
     * - ContinuousCoreToHTMapping：当选择`ContinuousCoreToHTMapping`时，实例的Cpu拓扑中，实例的同一个Core的HT是连续的。
     * - DiscreteCoreToHTMapping：当选择`DiscreteCoreToHTMapping`时，实例的同一个Core的HT是离散的。
     * 默认值：无。
     * >仅部分实例规格族支持使用本参数，具体支持实例规格族请参见[查看和修改CPU拓扑结构](~~2636059~~)。
     * @example `DiscreteCoreToHTMapping`
     */
    "CpuOptions.TopologyType"?: string;
    /**
     * 可信系统模式。取值：vTPM。
     * 目前，可信系统模式支持的实例规格族：
     * - g7、c7、r7。
     * - 安全增强型（g7t、c7t、r7t）。
     * 当您创建以上实例规格族的ECS实例时，需要设置该参数。具体说明如下：
     * - 如果您使用阿里云可信系统，请将该参数值设置为vTPM，在实例启动时即可通过阿里云可信系统完成可信校验。
     * - 如果您不使用阿里云可信系统，可以不设置该参数值，但您需要注意，如果您所创建的ECS实例使用了Enclave机密计算模式（`SecurityOptions.ConfidentialComputingMode=Enclave`），则该ECS实例也会启用可信系统。
     * - 通过OpenAPI创建可信系统的ECS实例时，只能调用`RunInstances`实现，`CreateInstance`目前不支持设置`SecurityOptions.TrustedSystemMode`参数。
     * >如果您在创建实例的时候指定其为可信实例，那么当您更换系统盘时只能使用支持可信系统的镜像。
     * 关于可信系统的更多信息，请参见[安全增强型实例可信功能概述](~~201394~~)。
     * @example `vTPM`
     */
    "SecurityOptions.TrustedSystemMode"?: string;
    /**
     * 机密计算模式。取值：Enclave。
     * 该参数取值为Enclave时，表示ECS实例使用Enclave构建机密计算环境。目前仅实例规格族c7、g7、r7，支持调用`RunInstances`时指定该参数使用Enclave机密计算。您需要注意：
     * - 机密计算功能正在邀测中。
     * - 通过OpenAPI创建Enclave机密计算的ECS实例时，只能调用`RunInstances`实现，`CreateInstance`目前不支持设置`SecurityOptions.ConfidentialComputingMode`参数。
     * - Enclave机密计算依托可信系统（vTPM）实现，当您指定ECS实例使用Enclave构建机密计算环境时，该实例同时也会启用可信系统。因此，调用该接口时，如果设置了`SecurityOptions.ConfidentialComputingMode=Enclave`，则无论您是否设置了`SecurityOptions.TrustedSystemMode=vTPM`，最终创建的ECS实例均会启用Enclave机密计算模式以及可信系统。
     * 关于机密计算的更多信息，请参见[使用Enclave构建机密计算环境](~~203433~~)。
     * @example `Enclave`
     */
    "SecurityOptions.ConfidentialComputingMode"?: string;
    /**
     * 是否启用实例元数据的访问通道。取值范围：
     * - enabled：启用。
     * - disabled：禁用。
     * 默认值：enabled。
     * >有关实例元数据的信息，请参见[实例元数据概述](~~49122~~)。
     * @example `enabled`
     */
    "HttpEndpoint"?: string;
    /**
     * 访问实例元数据时是否强制使用加固模式（IMDSv2）。取值范围：
     * - optional：不强制使用。
     * - required：强制使用。设置该取值后，普通模式无法访问实例元数据。
     * 默认值：optional。
     * >有关访问实例元数据的模式，请参见[实例元数据访问模式](~~150575~~)。
     * @example `optional`
     */
    "HttpTokens"?: string;
    /**
     * 实例元数据请求所需的HTTP PUT响应跃点限制。取值范围：1~64。
     *
     * 默认值：1。
     * @example `3`
     */
    "HttpPutResponseHopLimit"?: number;
    /**
     * 实例启动的私有池容量选项。弹性保障服务或容量预定服务在生效后会生成私有池容量，供实例启动时选择。取值范围：
     * - Open：开放模式。将自动匹配开放类型的私有池容量。如果没有符合条件的私有池容量，则使用公共池资源启动。该模式下无需设置`PrivatePoolOptions.Id`参数。
     * - Target：指定模式。使用指定的私有池容量启动实例，如果该私有池容量不可用，则实例会启动失败。该模式下必须指定私有池ID，即`PrivatePoolOptions.Id`参数为必填项。
     * - None：不使用模式。实例启动将不使用私有池容量。
     * 默认值：None。
     * 以下任一场景，实例启动的私有池容量选项只能取值`None`或不传值。
     * - 创建抢占式实例。
     * - 创建经典网络类型的ECS实例。
     * - 在专有宿主机DDH上创建ECS实例。
     * @example `Open`
     */
    "PrivatePoolOptions.MatchCriteria"?: string;
    /**
     * 私有池ID。即弹性保障服务ID或容量预定服务ID。
     * @example `eap-bp67acfmxazb4****`
     */
    "PrivatePoolOptions.Id"?: string;
    /**
     * >该参数正在邀测中，暂未开放使用。
     * @example `null`
     */
    "Isp"?: string;
    /**
     * 指定ECS实例所属的专有宿主机集群，系统会自动选择该专有宿主机集群中的一台专有宿主机部署ECS实例。
     * > 仅在`Tenancy`设置为`host`时生效。
     * 在您同时指定了专有宿主机（`DedicatedHostId`）和专有宿主机集群（`SchedulerOptions.DedicatedHostClusterId`）时：
     * - 如果专有宿主机属于专有宿主机集群，则优先将ECS实例部署在指定的专有宿主机上。
     * - 如果专有宿主机不属于专有宿主机集群，则ECS实例创建失败。
     * <props="china">您可以通过[DescribeDedicatedHostClusters](~~184145~~)查询专有宿主机集群ID列表。</props>
     * <props="intl">您可以通过[DescribeDedicatedHostClusters](~~184145~~)查询专有宿主机集群ID列表。</props>
     * <props="partner">您可以通过[DescribeDedicatedHostClusters](~~184145~~)查询专有宿主机集群ID列表。</props>
     * @example `dc-bp12wlf6am0vz9v2****`
     */
    "SchedulerOptions.DedicatedHostClusterId"?: string;
    /**
     * 将实例同时加入多个安全组。N的取值范围与实例能够加入安全组配额有关。更多信息，请参见[安全组限制](~~101348~~)。
     * 您需要注意：
     * - 不支持同时设置`SecurityGroupId`和`SecurityGroupIds.N`。
     * - 如果`NetworkInterface.N.InstanceType`取值为`Primary`，则不能设置`SecurityGroupId`或`SecurityGroupIds.N`，只能设置`NetworkInterface.N.SecurityGroupId`或`NetworkInterface.N.SecurityGroupIds.N`。
     * @example `sg-bp15ed6xe1yxeycg7****`
     */
    "SecurityGroupIds"?: string[];
    /**
     * 创建多台实例时，为每台实例指定不同的主机名。
     * @example `ecs-host-01`
     */
    "HostNames"?: string[];
    /**
     * 数据盘信息集合。
     */
    "DataDisk"?: {
        /**
         * 创建ESSD云盘作为数据盘使用时，设置云盘的性能等级。N的取值必须和`DataDisk.N.Category=cloud_essd`中的N保持一致。取值范围：
         * - PL0：单盘最高随机读写IOPS 1万。
         * - PL1（默认）：单盘最高随机读写IOPS 5万。
         * - PL2：单盘最高随机读写IOPS 10万。
         * - PL3：单盘最高随机读写IOPS 100万。
         * 有关如何选择ESSD性能等级，请参见[ESSD云盘](~~122389~~)。
         * @example `PL1`
         */
        PerformanceLevel: string;
        /**
         * 数据盘采用的自动快照策略ID。
         * @example `sp-bp67acfmxazb4p****`
         */
        AutoSnapshotPolicyId: string;
        /**
         * 数据盘N是否加密。取值范围：
         * - true：加密。
         * - false：不加密。
         * 默认值：false。
         * @example `false`
         */
        Encrypted: string;
        /**
         * 数据盘的描述。长度为2~256个英文或中文字符，不能以`http://`和`https://`开头。
         * @example `DataDisk_Description`
         */
        Description: string;
        /**
         * 创建数据盘N使用的快照。N的取值范围为1~16。
         * 指定参数`DataDisk.N.SnapshotId`后，参数`DataDisk.N.Size`会被忽略，实际创建的云盘大小为指定的快照的大小。不能使用早于2013年7月15日（含）创建的快照，请求会报错被拒绝。
         * @example `s-bp17441ohwka0yuh****`
         */
        SnapshotId: string;
        /**
         * 数据盘的挂载点。挂载的数据盘数量不同，挂载点的命名不同：
         * - 1~25块数据盘：/dev/xvd`[b-z]`
         * - 大于25块数据盘：/dev/xvd`[aa-zz]`，例如第26块数据盘会被命名为/dev/xvdaa，第27块数据盘为/dev/xvdab，以此类推。
         * >该参数仅用于全镜像（整机镜像）场景。您可以通过将此参数设置为全镜像中数据盘对应的挂载点，并修改对应的`DataDisk.N.Size`和`DataDisk.N.Category`参数，达到修改全镜像中数据盘磁盘种类和大小的目的。
         * @example `/dev/xvdb`
         */
        Device: string;
        /**
         * 第n个数据盘的容量大小，N的取值范围为1~16，内存单位为GiB。取值范围：
         * - cloud_efficiency：20~32768。
         * - cloud_ssd：20~32768。
         * - cloud_essd：具体取值范围与`DataDisk.N.PerformanceLevel`的取值有关。
         *     - PL0：1~32768。
         *     - PL1：20~32768。
         *     - PL2：461~32768。
         *     - PL3：1261~32768。
         * - cloud：5~2000。
         * - cloud_auto：1~32768。
         * - cloud_essd_entry：10~32768。
         * >该参数的取值必须大于等于参数`SnapshotId`指定的快照的大小。
         * @example `2000`
         */
        Size: number;
        /**
         * 数据盘名称。长度为2~128个字符，支持Unicode中letter分类下的字符（其中包括英文、中文和数字等）。可以包含半角冒号（:）、下划线（_）、半角句号（.）或者短划线（-）。
         * @example `cloud_ssdData`
         */
        DiskName: string;
        /**
         * 数据盘N的云盘种类。取值范围：
         * - cloud_efficiency：高效云盘。
         * - cloud_ssd：SSD云盘。
         * - cloud_essd：ESSD云盘。
         * - cloud：普通云盘。
         * - cloud_auto：ESSD AutoPL云盘。
         * - cloud_essd_entry：ESSD Entry云盘。
         *   >仅当`InstanceType`设置为`ecs.u1`或`ecs.e`规格族时，该参数支持`cloud_essd_entry`。
         * - elastic_ephemeral_disk_standard：弹性临时盘-标准版。
         * - elastic_ephemeral_disk_premium：弹性临时盘-高级版。
         * 对于I/O优化实例，默认值为cloud_efficiency。对于非I/O优化实例，默认值为cloud。
         * @example `cloud_ssd`
         */
        Category: string;
        /**
         * >该参数暂未开放使用。
         * @example `null`
         */
        EncryptAlgorithm: string;
        /**
         * 表示数据盘是否随实例释放。取值范围：
         * - true：数据盘随实例释放。
         * - false：数据盘不随实例释放。
         * 默认值为true。
         * @example `true`
         */
        DeleteWithInstance: boolean;
        /**
         * 数据盘对应的KMS密钥ID。
         * @example `0e478b7a-4262-4802-b8cb-00d3fb40****`
         */
        KMSKeyId: string;
        /**
         * 专属块存储集群ID。如果您在创建ECS实例时，需要使用专属块存储集群中的云盘资源作为数据盘，请设置该参数。
         * @example `dbsc-j5e1sf2vaf5he8m2****`
         */
        StorageClusterId: string;
        /**
         * ESSD AutoPL云盘预配置的读写IOPS。可能值：0~min{50,000, 1000*容量-基准性能}。
         * 基准性能=min{1,800+50*容量, 50000}。
         * >当DiskCategory取值为cloud_auto时才支持设置该参数。更多信息，请参见[ESSD AutoPL云盘](~~368372~~)。
         * @example `40000`
         */
        ProvisionedIops: number;
        /**
         * 是否开启Burst（性能突发）。取值范围：
         * - true：是。
         * - false：否。
         * >当DiskCategory取值为cloud_auto时才支持设置该参数。更多信息，请参见[ESSD AutoPL云盘](~~368372~~)。
         * @example `false`
         */
        BurstingEnabled: boolean;
    }[];
    /**
     * 该参数暂未开放使用。
     */
    "Arn"?: {
        /**
         * 该参数暂未开放使用。
         * @example `null`
         */
        RoleType: string;
        /**
         * 该参数暂未开放使用。
         * @example `null`
         */
        Rolearn: string;
        /**
         * 该参数暂未开放使用。
         * @example `null`
         */
        AssumeRoleFor: number;
    }[];
    /**
     * 弹性网卡信息。
     */
    "NetworkInterface"?: {
        /**
         * 弹性网卡所属的虚拟交换机ID。
         * 您需要注意：
         * - N的取值范围为1~2，设置1个弹性网卡时，支持设置1个主网卡或1个辅助网卡；设置2个弹性网卡时，仅支持同时设置1个主网卡和1个辅助网卡。
         * - 如果`NetworkInterface.N.InstanceType`取值为`Primary`，则必须设置该参数。此时该参数的作用等同于`VSwitchId`，但需要注意不能同时设置`VSwitchId`参数。
         * - 如果`NetworkInterface.N.InstanceType`取值为`Secondary`或空值，则该参数为非必填参数。默认值为ECS实例所属的虚拟交换机。
         * @example `vsw-bp67acfmxazb4p****`
         */
        VSwitchId: string;
        /**
         * 弹性网卡名称。长度为2~128个字符，支持Unicode中letter分类下的字符（其中包括英文、中文和数字等）。可以包含半角冒号（:）、下划线（_）、半角句号（.）或者短划线（-）。
         * 您需要注意：
         * - N的取值范围为1~2，设置1个弹性网卡时，支持设置1个主网卡或1个辅助网卡；设置2个弹性网卡时，仅支持同时设置1个主网卡和1个辅助网卡。
         * - 如果`NetworkInterface.N.InstanceType`取值为`Primary`，则无需设置该参数。
         * @example `Network_Name`
         */
        NetworkInterfaceName: string;
        /**
         * 弹性网卡的描述。
         * 您需要注意：
         * - N的取值范围为1~2，设置1个弹性网卡时，支持设置1个主网卡或1个辅助网卡；设置2个弹性网卡时，仅支持同时设置1个主网卡和1个辅助网卡。
         * - 长度为2~256个英文或中文字符，不能以`http://`或`https://`开头。
         * - 如果`NetworkInterface.N.InstanceType`取值为`Primary`，则无需设置该参数。
         * @example `Network_Description`
         */
        Description: string;
        /**
         * 弹性网卡所属的安全组ID。
         * 您需要注意：
         * - N的取值范围为1~2，设置1个弹性网卡时，支持设置1个主网卡或1个辅助网卡；设置2个弹性网卡时，仅支持同时设置1个主网卡和1个辅助网卡。
         * - 如果`NetworkInterface.N.InstanceType`取值为`Primary`，则必须设置该参数。此时该参数的作用等同于`SecurityGroupId`，但需要注意不能再设置`SecurityGroupId`、`SecurityGroupIds.N`或`NetworkInterface.N.SecurityGroupIds.N`。
         * - 如果`NetworkInterface.N.InstanceType`取值为`Secondary`或空值，则该参数为非必填参数。默认值为ECS实例所属的安全组。
         * @example `sg-bp67acfmxazb4p****`
         */
        SecurityGroupId: string;
        /**
         * 添加一张弹性网卡并设置主IP地址。
         * 您需要注意：
         * - N的取值范围为1~2：
         *     - 设置1个弹性网卡时，支持设置1个主网卡或1个辅助网卡。如果`Amount`参数取值大于1，且设置了主网卡并设置了该参数，则表示在批量创建ECS实例时，以指定的主IP地址为起始地址，依次为多台ECS实例分配连续的主IP地址，但需要注意，此时不支持再为实例绑定辅助网卡。
         *     - 设置2个弹性网卡时，仅支持同时设置1个主网卡和1个辅助网卡，但需要注意，如果`Amount`参数取值大于1且已为主网卡设置了该参数，则不支持再设置辅助网卡（即不支持再设置`NetworkInterface.2.InstanceType=Secondary`）。
         * - 如果`NetworkInterface.N.InstanceType`取值为`Primary`，则该参数的作用等同于`PrivateIpAddress`，但需要注意不能同时设置`PrivateIpAddress`参数。
         * - 如果`NetworkInterface.N.InstanceType`取值为`Secondary`或空值，表示为辅助网卡设置主IP地址。默认从网卡所属的交换机网段中随机选择一个IP地址。
         * > - 创建ECS实例时，您最多能添加一张辅助网卡。实例创建成功后，您可以调用[CreateNetworkInterface](~~58504~~)和[AttachNetworkInterface](~~58515~~)添加更多的辅助网卡。
         * >- 每个交换机的第1个和最后3个IP地址为系统保留地址，不支持指定。
         * 例如，交换机的网段为192.168.1.0/24，则192.168.1.0、192.168.1.253、192.168.1.254和192.168.1.255这4个地址是系统保留地址。
         * @example `172.16.**.**`
         */
        PrimaryIpAddress: string;
        /**
         * 弹性网卡队列数。
         * 您需要注意：
         * - N的取值范围为1~2，设置1个弹性网卡时，支持设置1个主网卡或1个辅助网卡；设置2个弹性网卡时，仅支持同时设置1个主网卡和1个辅助网卡。
         * - 不能超过实例规格允许的单块网卡最大队列数。
         * - 实例的所有网卡累加队列数不能超过实例规格允许的队列数总配额。实例规格的单块网卡最大队列数和总配额可以通过[DescribeInstanceTypes](~~25620~~)接口查询`MaximumQueueNumberPerEni`、`TotalEniQueueQuantity`字段。
         * - 如果`NetworkInterface.N.InstanceType`取值为`Primary`，且设置了该参数取值，则不能再设置`NetworkInterfaceQueueNumber`参数。
         * @example `8`
         */
        QueueNumber: number;
        /**
         * 弹性网卡所属的一个或多个安全组ID。
         * - 第一个N的取值范围为1~2，设置1个弹性网卡时，支持设置1个主网卡或1个辅助网卡；设置2个弹性网卡时，仅支持同时设置1个主网卡和1个辅助网卡。
         * - 第二个N表示可以指定一个或多个安全组ID。N的取值范围与实例能够加入安全组配额有关。更多信息，请参见[安全组限制](~~25412#SecurityGroupQuota1~~)。
         * 您需要注意：
         * - 如果`NetworkInterface.N.InstanceType`取值为`Primary`，则必须设置该参数或`NetworkInterface.N.SecurityGroupId`。此时该参数的作用等同于`SecurityGroupIds.N`，但需要注意不能再设置`SecurityGroupId`、`SecurityGroupIds.N`或`NetworkInterface.N.SecurityGroupId`。
         * - 如果`NetworkInterface.N.InstanceType`取值为`Secondary`或空值，则该参数为非必填参数。默认值为ECS实例所属的安全组。
         * @example `sg-bp15ed6xe1yxeycg7****`
         */
        SecurityGroupIds: string[];
        /**
         * 网卡的通讯模式。参数取值范围：
         * - Standard：使用TCP通讯模式。
         * - HighPerformance：开启ERI（Elastic RDMA Interface）接口，使用RDMA通讯模式。
         * 默认值：Standard。
         * >RDMA模式的弹性网卡数量不能超过该实例规格族的限制。更多信息，请参见[实例规格族](~~25378~~)。
         * @example `Standard`
         */
        NetworkInterfaceTrafficMode: string;
        /**
         * RDMA网卡队列数。
         * @example `0`
         */
        QueuePairNumber: number;
        /**
         * 弹性网卡类型。N的取值范围为1~2，设置1个弹性网卡时，支持设置1个主网卡或1个辅助网卡；设置2个弹性网卡时，仅支持同时设置1个主网卡和1个辅助网卡。
         * 参数取值范围：
         * - Primary：主网卡。
         * - Secondary：辅助网卡。
         * 默认值：Secondary。
         * @example `Secondary`
         */
        InstanceType: string;
        /**
         * 为主网卡指定随机生成的IPv6地址数量。取值范围：1~10
         * 您需要注意：
         * - `NetworkInterface.N.InstanceType`取值为`Primary`时，设置该参数才会生效。如果`NetworkInterface.N.InstanceType`取值为`Secondary`或空值，则不能设置该参数。
         * - 设置该参数后，您不能再设置`Ipv6AddressCount`、`Ipv6Address.N`或`NetworkInterface.N.Ipv6Address.N`。
         * @example `1`
         */
        Ipv6AddressCount: number;
        /**
         * 为主网卡指定一个或多个IPv6地址。支持设置最多10个IPv6地址，即第二个N的取值范围：1~10。
         * 取值示例：`Ipv6Address.1=2001:db8:1234:1a00::***`
         * 您需要注意：
         * - `NetworkInterface.N.InstanceType`取值为`Primary`时，设置该参数才会生效。如果`NetworkInterface.N.InstanceType`取值为`Secondary`或空值，则不能设置该参数。
         * - 设置该参数后，`Amount`取值只能为1，且不能再设置`Ipv6AddressCount`、`Ipv6Address.N`或`NetworkInterface.N.Ipv6AddressCount`。
         */
        Ipv6Address: string[];
        /**
         * 网卡指定的物理网卡索引。
         * 您需要注意：
         * - 只有特定实例规格支持指定物理网卡索引。
         * - NetworkInterface.N.InstanceType取值为Primary时，对于支持物理网卡的实例规格，如果设置此参数，只能设置为0。
         * - NetworkInterface.N.InstanceType取值为Secondary或者空值，对于支持物理网卡的实例规格，此参数可以依据实例规格设置。更多信息，请参见[实例规格族](~~25378~~)。
         * @example `0`
         */
        NetworkCardIndex: number;
        /**
         * 释放实例时是否保留网卡。取值范围：
         * - true：不保留。
         * - false：保留。
         * 默认值：true。
         * >该参数只对辅助网卡生效。
         * @example `true`
         */
        DeleteOnRelease: boolean;
        /**
         * 随实例附加的弹性网卡ID。
         * >该参数只对辅助弹性网卡生效。指定一个现有辅助弹性网卡后，您将无法配置其它网卡创建参数。
         * @example `eni-bp1gn106np8jhxhj****`
         */
        NetworkInterfaceId: string;
        /**
         * 弹性网卡入方向队列深度。
         * 您需要注意：
         * - 网卡的入方向队列深度必须和出方向队列深度相等，取值范围：8192~16384，且必须为 2 的幂。
         * - 较大的入方向队列深度可以提升入方向的吞吐量，但会占用更多的内存。
         * @example `8192`
         */
        RxQueueSize: number;
        /**
         * 弹性网卡出方向队列深度。
         * 您需要注意：
         * - 网卡的出方向队列深度必须和入方向队列深度相等，取值范围：8192~16384，且必须为 2 的幂。
         * - 较大的出方向队列深度可以提升出方向的吞吐量，但会占用更多的内存。
         * @example `8192`
         */
        TxQueueSize: number;
    }[];
    /**
     * 实例、云盘和主网卡的标签信息。
     */
    "Tag"?: {
        /**
         * 实例、云盘和主网卡的标签键。N的取值范围：1~20。一旦传入该值，则不允许为空字符串。最多支持128个字符，不能以aliyun和acs:开头，不能包含http://或 https://。
         * @example `TestKey`
         */
        Key: string;
        /**
         * 实例、云盘和主网卡的标签值。N的取值范围：1~20。一旦传入该值，可以为空字符串。最多支持128个字符，不能包含http://或者https://。
         * @example `TestValue`
         */
        Value: string;
    }[];
    /**
     * 为主网卡指定一个或多个IPv6地址。支持设置最多10个IPv6地址，即N的取值范围：1~10。
     * 取值示例：`Ipv6Address.1=2001:db8:1234:1a00::***`。
     * 您需要注意：
     * - 设置了`Ipv6Address.N`时，`Amount`参数取值只能为1，且不能同时设置`Ipv6AddressCount`。
     * - 如果`NetworkInterface.N.InstanceType`取值为`Primary`，则不能设置`Ipv6Addresses.N`或`Ipv6AddressCount`，而是需要设置`NetworkInterface.N.Ipv6Addresses.N`或`NetworkInterface.N.Ipv6AddressCount`。
     * @example `Ipv6Address.1=2001:db8:1234:1a00::***`
     */
    "Ipv6Address"?: string[];
    /**
     * 系统盘相关参数，目前专属块存储集群ID（`StorageClusterId`）需要通过该参数设置参数值。
     */
    "SystemDisk"?: {
        /**
         * 专属块存储集群ID。如果您在创建ECS实例时，需要使用专属块存储集群中的云盘资源作为系统盘，请设置该参数。
         * @example `dbsc-j5e1sf2vaf5he8m2****`
         */
        StorageClusterId: string;
        /**
         * ESSD AutoPL云盘预配置的读写IOPS。可能值：0~min{50,000, 1000*容量-基准性能}。
         * 基准性能=min{1,800+50*容量, 50,000}。
         * >当`SystemDisk.Category`取值为`cloud_auto`时才支持设置该参数。更多信息，请参见[ESSD AutoPL云盘](~~368372~~)。
         * @example `40000`
         */
        ProvisionedIops: number;
        /**
         * 是否开启Burst（性能突发）。取值范围：
         * - true：是。
         * - false：否。
         * >当`SystemDisk.Category`取值为`cloud_auto`时才支持设置该参数。更多信息，请参见[ESSD AutoPL云盘](~~368372~~)。
         * @example `false`
         */
        BurstingEnabled: boolean;
        /**
         * 系统盘是否加密。取值范围：
         * - true：加密。
         * - false：不加密。
         * 默认值：false。
         * >中国（香港）D可用区、新加坡A可用区暂不支持在创建实例时加密系统盘。
         * @example `false`
         */
        Encrypted: string;
        /**
         * 系统盘对应的KMS密钥ID。
         * @example `0e478b7a-4262-4802-b8cb-00d3fb40****`
         */
        KMSKeyId: string;
        /**
         * >该参数暂未开放使用。
         * @example `null`
         */
        EncryptAlgorithm: string;
    };
    /**
     * 镜像相关属性信息。
     */
    "ImageOptions"?: {
        /**
         * 使用该镜像的实例是否支持使用ecs-user用户登录。可能值：
         * - true：是
         * - false：否
         * @example `false`
         */
        LoginAsNonRoot: boolean;
    };
    /**
     * 网络相关属性参数。
     */
    "NetworkOptions"?: {
        /**
         * 实例是否开启Jumbo frame特性。参数取值范围：
         * - false：不开启Jumbo frame, 该实例下的所有网卡（包括主网卡及辅助网卡）MTU取值为1500。
         * - true：开启Jumbo frame, 该实例下的所有网卡（包括主网卡及辅助网卡）的MTU取值为8500。
         * 默认值：true。
         * >只有八代以上部分实例规格支持开启Jumbo frame特性。更多信息请参见[ECS实例MTU](~~200512~~)。
         * @example `false`
         */
        EnableJumboFrame: boolean;
    };
    /**
     * 创建实例时，是否自动支付。取值范围：
     * - true：自动支付。
     *     > 自动支付时，请确保支付方式余额充足，否则会生成异常订单，只能作废订单。如果您的支付方式余额不足，可以将参数`AutoPay`置为`false`，此时会生成未支付订单，您可以登录ECS管理控制台自行支付。
     * - false：只生成订单不扣费。
     *     > 当`InstanceChargeType` 取值为`PostPaid`时，`AutoPay`不能设置为`false`。
     * 默认值：true。
     * @example `true`
     */
    "AutoPay"?: boolean;
}
