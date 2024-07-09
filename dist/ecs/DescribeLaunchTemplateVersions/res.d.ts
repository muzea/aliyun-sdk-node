export interface DescribeLaunchTemplateVersionsResponse {
    /**
     * 分页查询时设置的每页行数。
     * @example `10`
     */
    PageSize: number;
    /**
     * 请求ID。
     * @example `3989ED0C-20A1-4351-A127-2067FF8390AX`
     */
    RequestId: string;
    /**
     * 当前页码。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 实例启动模板总数。
     * @example `1`
     */
    TotalCount: number;
    LaunchTemplateVersionSets: {
        /**
         * 关于模板版本的信息。
         */
        LaunchTemplateVersionSet: {
            /**
             * 模板名称。
             * @example `testLaunchTemplateName`
             */
            LaunchTemplateName: string;
            /**
             * 模板是否为默认版本。
             * @example `true`
             */
            DefaultVersion: boolean;
            /**
             * 模板版本号。
             * @example `1`
             */
            VersionNumber: number;
            /**
             * 模板修改时间。
             * @example `2022-01-17T08:40:00Z`
             */
            ModifiedTime: string;
            /**
             * 模板ID。
             * @example `lt-bp67acfmxazb4p****`
             */
            LaunchTemplateId: string;
            /**
             * 模板创建时间。
             * @example `2022-01-17T08:22:43Z`
             */
            CreateTime: string;
            /**
             * 模板的创建者。
             * @example `123456789****`
             */
            CreatedBy: string;
            /**
             * 模板版本描述。
             * @example `testVersionDescription`
             */
            VersionDescription: string;
            /**
             * 模板具体配置。
             */
            LaunchTemplateData: {
                /**
                 * 部署集ID。
                 * @example `ds-bp1brhwhoqinyjd6****`
                 */
                DeploymentSetId: string;
                /**
                 * 专有网络VPC ID。
                 * @example `v-bp67acfmxazb4p****`
                 */
                VpcId: string;
                /**
                 * 创建ESSD云盘作为系统盘使用时，设置云盘的性能等级。可能值：
                 * - PL0（默认）：单盘最高随机读写IOPS 1万。
                 * - PL1：单盘最高随机读写IOPS 5万。
                 * - PL2：单盘最高随机读写IOPS 10万。
                 * - PL3：单盘最高随机读写IOPS 100万。
                 * 有关如何选择ESSD性能等级，请参见[ESSD云盘](~~122389~~)。
                 * @example `PL0`
                 */
                SystemDisk.PerformanceLevel: string;
                /**
                 * 密钥对名称。
                 * @example `testKeyPairName`
                 */
                KeyPairName: string;
                /**
                 * 实例的安全组ID。
                 * > `SecurityGroupId`和`SecurityGroupIds`不会同时返回值。
                 * @example `sg-bp67acfmxazb4p****`
                 */
                SecurityGroupId: string;
                /**
                 * 网络类型。可能值：
                 * - classic：经典网络。
                 * - vpc：专有网络VPC。
                 * @example `vpc`
                 */
                NetworkType: string;
                /**
                 * 按量付费实例的竞价策略。可能值：
                 * - NoSpot：正常按量付费实例。
                 * - SpotWithPriceLimit：设置上限价格的抢占式实例。
                 * - SpotAsPriceGo：系统自动出价，跟随当前市场实际价格。
                 * @example `NoSpot`
                 */
                SpotStrategy: string;
                /**
                 * 是否启用实例操作系统配置。
                 * @example `false`
                 */
                EnableVmOsConfig: boolean;
                /**
                 * 实例描述。
                 * @example `testInstanceDescription`
                 */
                Description: string;
                /**
                 * 抢占式实例的保留时长，单位为小时。 可能值：
                 * - 1：创建后阿里云会保证实例运行1小时不会被自动释放；超过1小时后，系统会自动比较出价与市场价格、检查资源库存，来决定实例的持有和回收。
                 * - 0：创建后，阿里云不保证实例运行1小时，系统会自动比较出价与市场价格、检查资源库存，来决定实例的持有和回收。
                 * 实例回收前5分钟阿里云会通过ECS系统事件向您发送通知。抢占式实例按秒计费，建议您结合具体任务执行耗时来选择合适的保留时长。
                 * > 当SpotStrategy值为SpotWithPriceLimit或SpotAsPriceGo时返回该参数。
                 * @example `1`
                 */
                SpotDuration: number;
                /**
                 * 实例名称。
                 * @example `testInstanceName`
                 */
                InstanceName: string;
                /**
                 * 是否开启安全加固。
                 * @example `active`
                 */
                SecurityEnhancementStrategy: string;
                /**
                 * 实例自定义数据，以Base64方式编码。
                 * @example `SGVsbG9FQ1M=`
                 */
                UserData: string;
                /**
                 * 系统盘名称。
                 * @example `testSystemDiskName`
                 */
                SystemDisk.DiskName: string;
                /**
                 * 系统盘大小，单位：GiB。
                 * @example `40`
                 */
                SystemDisk.Size: number;
                /**
                 * 设置实例的每小时最高价格。
                 * @example `0.98`
                 */
                SpotPriceLimit: number;
                /**
                 * 是否继承原镜像里设置的用户名密码。
                 * @example `true`
                 */
                PasswordInherit: boolean;
                /**
                 * 实例私网IP地址。
                 * @example `10.1.**.**`
                 */
                PrivateIpAddress: string;
                /**
                 * 实例使用的镜像ID。
                 * @example `m-bp67acfmxazb4p****`
                 */
                ImageId: string;
                /**
                 * 系统盘是否随实例释放。可能值：
                 * - true：随实例释放。
                 * - false：不随实例释放。
                 * @example `true`
                 */
                SystemDisk.DeleteWithInstance: boolean;
                /**
                 * 系统盘的云盘种类。可能值：
                 * - cloud：普通云盘。
                 * - cloud_efficiency：高效云盘。
                 * - cloud_ssd：SSD云盘。
                 * - cloud_essd：ESSD云盘。您可以通过参数SystemDisk.PerformanceLevel设置云盘的性能等级。
                 * 已停售的实例规格且非I/O优化实例默认值为cloud，否则默认值为cloud_efficiency。
                 * @example `cloud_ssd`
                 */
                SystemDisk.Category: string;
                /**
                 * 自动释放时间。
                 * @example `2018-05-14T14:18:00Z`
                 */
                AutoReleaseTime: string;
                /**
                 * 系统盘描述。
                 * @example `testSystemDiskDescription`
                 */
                SystemDisk.Description: string;
                /**
                 * 镜像来源。可能值：
                 * - system：阿里云提供的公共镜像。
                 * - self：您创建的自定义镜像。
                 * - others：其他阿里云用户共享给您的镜像。
                 * - marketplace：云市场镜像。
                 * @example `system`
                 */
                ImageOwnerAlias: string;
                /**
                 * 实例主机名。
                 * @example `testHostName`
                 */
                HostName: string;
                /**
                 * 系统盘总IOPS。
                 * @example `101800`
                 */
                SystemDisk.Iops: number;
                /**
                 * 自动快照策略ID。
                 * @example `sp-bp1j0alc2z1fhvie****`
                 */
                SystemDisk.AutoSnapshotPolicyId: string;
                /**
                 * 公网出带宽最大值。
                 * @example `100`
                 */
                InternetMaxBandwidthOut: number;
                /**
                 * 公网入带宽最大值。
                 * @example `5`
                 */
                InternetMaxBandwidthIn: number;
                /**
                 * 实例规格。
                 * @example `ecs.g5.large`
                 */
                InstanceType: string;
                /**
                 * 购买资源的时长。
                 * @example `1`
                 */
                Period: number;
                /**
                 * 实例计费类型。可能值：
                 * - PrePaid：包年包月。
                 * - PostPaid：按量付费。
                 * @example `Postpaid`
                 */
                InstanceChargeType: string;
                /**
                 * 是否为I/O优化实例。
                 * @example `none`
                 */
                IoOptimized: string;
                /**
                 * 实例RAM角色名称。
                 * @example `testRamRoleName`
                 */
                RamRoleName: string;
                /**
                 * 实例所属的虚拟交换机ID。
                 * @example `vsw-bp67acfmxazb4p****`
                 */
                VSwitchId: string;
                /**
                 * 启动模板所在的企业资源组ID。
                 * @example `rg-bp67acfmxazb4p****`
                 */
                ResourceGroupId: string;
                /**
                 * 公网带宽计费方式。
                 * @example `PayByTraffic`
                 */
                InternetChargeType: string;
                /**
                 * 可用区ID。
                 * @example `cn-hangzhou-g`
                 */
                ZoneId: string;
                /**
                 * 实例的IPv6地址数量。
                 * @example `1`
                 */
                Ipv6AddressCount: number;
                DataDisks: {
                    /**
                     * 数据盘集合。
                     */
                    DataDisk: {
                        /**
                         * 创建ESSD云盘作为数据盘使用时，设置云盘的性能等级。当`Category=cloud_essd`时该参数有返回值。可能值：
                         * - PL0：单盘最高随机读写IOPS 1万。
                         * - PL1：单盘最高随机读写IOPS 5万。
                         * - PL2：单盘最高随机读写IOPS 10万。
                         * - PL3：单盘最高随机读写IOPS 100万。
                         * @example `PL1`
                         */
                        PerformanceLevel: string;
                        /**
                         * 数据盘描述。
                         * @example `testDiskDescription`
                         */
                        Description: string;
                        /**
                         * 数据盘使用的快照ID。
                         * @example `s-bp67acfmxazb4p****`
                         */
                        SnapshotId: string;
                        /**
                         * 数据盘的设备名。
                         * > 该参数即将停止使用，为提高代码兼容性，建议您尽量不要使用该参数。
                         * @example `/dev/xvda`
                         */
                        Device: string;
                        /**
                         * 数据盘大小。
                         * @example `2000`
                         */
                        Size: number;
                        /**
                         * 数据盘名称。
                         * @example `testDiskName`
                         */
                        DiskName: string;
                        /**
                         * 数据盘的云盘种类。
                         * @example `cloud_ssd`
                         */
                        Category: string;
                        /**
                         * 数据盘是否随实例释放而释放。
                         * @example `true`
                         */
                        DeleteWithInstance: boolean;
                        /**
                         * 数据盘是否加密。
                         * @example `false`
                         */
                        Encrypted: string;
                        /**
                         * 是否修改ESSD AutoPL云盘预配置读写IOPS。取值范围：0~min{50000, 1000*容量-基准性能}。
                         * 基准性能=min{1,800+50*容量, 50,000}
                         * > 当DiskCategory取值为cloud_auto时才支持设置该参数。更多信息，请参见[ESSD AutoPL云盘](~~368372~~)和[修改ESSD AutoPL云盘预配置信息](~~413275~~)。
                         * @example `50000`
                         */
                        ProvisionedIops: number;
                        /**
                         * 是否开启Burst（性能突发）。取值范围：
                         * - true：是。
                         * - false：否。
                         * @example `true`
                         */
                        BurstingEnabled: boolean;
                        /**
                         * 自动快照策略ID。
                         * @example `sp-wz91dz3ghear2a5s****`
                         */
                        AutoSnapshotPolicyId: string;
                    }[];
                };
                NetworkInterfaces: {
                    /**
                     * 辅助弹性网卡的属性集合。
                     */
                    NetworkInterface: {
                        /**
                         * 辅助弹性网卡名称。
                         * @example `testNetworkInterfaceName`
                         */
                        NetworkInterfaceName: string;
                        /**
                         * 弹性网卡所属的虚拟交换机ID。
                         * @example `vsw-bp67acfmxazb4p****`
                         */
                        VSwitchId: string;
                        /**
                         * 辅助弹性网卡描述信息。
                         * @example `testNetworkInterfacesDescription`
                         */
                        Description: string;
                        /**
                         * 辅助弹性网卡的主私有IP地址。
                         * @example `203.0.*.*`
                         */
                        PrimaryIpAddress: string;
                        /**
                         * 辅助弹性网卡所属的安全组ID。必须是同一个VPC下的安全组。
                         * > SecurityGroupId和SecurityGroupIds不会同时返回值。
                         * @example `sg-bp67acfmxazb4p****`
                         */
                        SecurityGroupId: string;
                        SecurityGroupIds: {
                            /**
                             * 辅助弹性网卡加入的一个或多个安全组。
                             * > SecurityGroupId和SecurityGroupIds不会同时返回值。
                             */
                            SecurityGroupId: string[];
                        };
                        /**
                         * 实例的规格。
                         * @example `ecs.s2.xlarge`
                         */
                        InstanceType: string;
                        /**
                         * 主网卡的通讯模式。参数取值范围：
                         * - Standard：使用TCP通讯模式。
                         * - HighPerformance：开启ERI（Elastic RDMA Interface）接口，使用RDMA通讯模式。
                         * @example `Standard`
                         */
                        NetworkInterfaceTrafficMode: string;
                    }[];
                };
                Tags: {
                    /**
                     * 实例的标签列表。
                     */
                    InstanceTag: {
                        /**
                         * 实例的标签键。
                         * @example `TestKey`
                         */
                        Key: string;
                        /**
                         * 实例的标签值。
                         * @example `TestValue`
                         */
                        Value: string;
                    }[];
                };
                SecurityGroupIds: {
                    /**
                     * 实例加入的一个或多个安全组。
                     * > `SecurityGroupId`和`SecurityGroupIds`不会同时返回值。
                     */
                    SecurityGroupId: string[];
                };
                /**
                 * ESSD AutoPL云盘预配置读写IOPS。取值范围：0~min{50000, 1000*容量-基准性能}。
                 * 基准性能=min{1,800+50*容量, 50,000}
                 * > 当DiskCategory取值为cloud_auto时才支持设置该参数。更多信息，请参见[ESSD AutoPL云盘](~~368372~~)和[修改ESSD AutoPL云盘预配置信息](~~413275~~)。
                 * @example `50000`
                 */
                SystemDisk.ProvisionedIops: number;
                /**
                 * 是否开启Burst（性能突发）。取值范围：
                 * - true：是。
                 * - false：否。
                 * @example `true`
                 */
                SystemDisk.BurstingEnabled: boolean;
                /**
                 * 系统盘是否加密。可能值：
                 * - true：加密。
                 * - false：不加密。
                 * 默认值：false。
                 * >中国香港D可用区、新加坡A可用区暂不支持在创建实例时加密系统盘。
                 * @example `false`
                 */
                SystemDisk.Encrypted: string;
                /**
                 * 实例释放保护属性，指定是否支持通过控制台或API（[DeleteInstance](~~25507~~)）释放实例。取值范围：
                 * - true：开启实例释放保护。
                 * - false：关闭实例释放保护。
                 * 默认值：false。
                 * >该属性仅适用于按量付费实例，且只能限制手动释放操作，对系统释放操作不生效。
                 * @example `false`
                 */
                DeletionProtection: boolean;
                /**
                 * 突发性能实例的运行模式。可能值：
                 * - Standard：标准模式，实例性能请参见[什么是突发性能实例](~~59977~~)下的性能约束模式章节。
                 * - Unlimited：无性能约束模式，实例性能请参见[什么是突发性能实例](~~59977~~)下的无性能约束模式章节。
                 * @example `Standard`
                 */
                CreditSpecification: string;
                /**
                 * 是否要自动续费。当参数`InstanceChargeType`取值`PrePaid`时才生效。可能值：
                 * - true：自动续费。
                 * - false：不自动续费。
                 * 默认值：false。
                 * @example `true`
                 */
                AutoRenew: boolean;
                /**
                 * 单次自动续费的续费时长。可能值：
                 *
                 * <props="china">
                 * - PeriodUnit=Week时：1、2、3。
                 * - PeriodUnit=Month时：1、2、3、6、12、24、36、48、60。
                 * </props>
                 * <props="intl">PeriodUnit=Month时：1、2、3、6、12、24、36、48、60。</props>
                 * 默认值：1。
                 * @example `1`
                 */
                AutoRenewPeriod: number;
                /**
                 * 包年包月计费方式的时长单位。可能值：
                 * <props="china">
                 * - Week。
                 * - Month（默认）。
                 * </props>
                 * <props="intl">Month（默认）。</props>
                 * @example `Month`
                 */
                PeriodUnit: string;
            };
        }[];
    };
}
