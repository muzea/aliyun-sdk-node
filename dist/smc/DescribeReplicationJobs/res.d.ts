export interface DescribeReplicationJobsResponse {
    /**
     * 迁移任务总个数。
     * @example `5`
     */
    TotalCount: number;
    ReplicationJobs: {
        /**
         * 迁移任务详情的集合。
         */
        ReplicationJob: {
            /**
             * 增量迁移任务自动执行的时间间隔，单位：小时。取值范围：1~168。
             * @example `15`
             */
            Frequency: number;
            /**
             * 已配置高速通道服务或者VPN网关的VPC ID。
             * @example `vpc-bp1vwnn14rqpyiczj****`
             */
            VpcId: string;
            /**
             * 迁移任务的创建时间。
             * @example `2014-07-24T13:00:52Z`
             */
            CreationTime: string;
            /**
             * 迁移任务的主状态。可能值：
             * - Ready：未开始。
             * - Running：运行中。
             * - Stopped：已暂停。
             * - InError：出错。
             * - Finished：已完成。
             * - Waiting：等待中。
             * - Expired：已过期。
             * - Deleting：删除中。
             * @example `Running`
             */
            Status: string;
            /**
             * 迁移任务的执行时间。按照[ISO 8601](~~25696~~)标准表示，并使用UTC+0时间，格式为yyyy-MM-ddTHH:mm:ssZ。该参数值的设置需满足以下要求：
             * - 该参数值必须晚于当前时间，并且需要设置在30天以内。
             * - 如果该参数值为空，则SMC不会启动迁移任务，需要您调用[StartReplicationJob](~~121823~~)启动任务。
             * @example `2019-06-04T13:35:00Z`
             */
            ScheduledStartTime: string;
            /**
             * 增量迁移任务默认保留的最大镜像数。取值范围：1~10。
             * @example `8`
             */
            MaxNumberOfImageToKeep: number;
            /**
             * Docker的命名空间。
             * @example `testNamespace`
             */
            ContainerNamespace: string;
            DataDisks: {
                /**
                 * 目标阿里云服务器ECS的数据盘。
                 */
                DataDisk: {
                    /**
                     * 数据盘顺序。
                     * @example `1`
                     */
                    Index: number;
                    /**
                     * 数据盘大小。单位：GiB。
                     * @example `40`
                     */
                    Size: number;
                    Parts: {
                        /**
                         * 数据盘分区信息。
                         */
                        Part: {
                            /**
                             * 数据盘分区大小。单位：Byte。
                             * @example `21474836480`
                             */
                            SizeBytes: number;
                            /**
                             * 分区是否开启块复制。
                             * @example `true`
                             */
                            Block: boolean;
                            /**
                             * 数据盘分区设备标识。
                             * @example `0_1`
                             */
                            Device: string;
                        }[];
                    };
                }[];
            };
            /**
             *  迁移状态的详细信息。
             * @example `statusinfo`
             */
            StatusInfo: string;
            /**
             * 实例RAM角色名称。
             * @example `SMCAdmin`
             */
            InstanceRamRole: string;
            /**
             * 目标阿里云服务器ECS的系统盘大小。
             * @example `40`
             */
            SystemDiskSize: number;
            /**
             * 迁移任务的描述。
             * @example `This is my migration task.`
             */
            Description: string;
            /**
             * 复制驱动器参数信息。
             * @example `BandWidthLimit:0`
             */
            ReplicationParameters: string;
            /**
             * 迁移任务的错误码。
             * @example `InternalError`
             */
            ErrorCode: string;
            /**
             *    迁移任务的过期时间。按照[ISO 8601](~~25696~~)标准表示，并使用UTC+0时间，格式为yyyy-MM-ddTHH:mm:ssZ。
             * > +8小时后是控制台上显示的时间。
             * @example `2019-06-08T14:40:52Z`
             */
            ValidTime: string;
            /**
             * 迁移时使用的网络类型。
             * @example `0`
             */
            NetMode: number;
            /**
             * Docker的镜像标签。
             * @example `CentOS:v1`
             */
            ContainerTag: string;
            /**
             * 迁移任务的许可证类型。可能值：
             * - 空值：无许可证。
             * - BYOL：自带许可。
             * @example `BYOL`
             */
            LicenseType: string;
            /**
             * 迁移任务名称。
             * @example `testMigrationTaskName`
             */
            Name: string;
            /**
             * 迁移任务交付的目标镜像ID。
             * @example `m-o6w3gy99qf89rkga****`
             */
            ImageId: string;
            /**
             * 迁移任务总进度。
             * @example `100`
             */
            Progress: number;
            /**
             * 区分一次性迁移任务和增量迁移任务。可能值：
             * - true：一次性迁移任务。任务创建后仅执行一次。
             * - false：增量迁移任务。任务创建后，按照`Frequency`设置的时间间隔，周期性自动执行。
             * @example `true`
             */
            RunOnce: boolean;
            /**
             * 实例启动模板ID。
             * @example `lt-launchtemplateid`
             */
            LaunchTemplateId: string;
            /**
             * Docker的镜像仓库。
             * @example `testRepository`
             */
            ContainerRepository: string;
            /**
             * 目标实例ID。
             * @example `i-bp1ff25rzvnul6kr****`
             */
            InstanceId: string;
            SystemDiskParts: {
                /**
                 * 系统盘分区信息。
                 */
                SystemDiskPart: {
                    /**
                     * 系统盘分区大小。单位：Byte。
                     * @example `254803968`
                     */
                    SizeBytes: number;
                    /**
                     * 系统盘分区是否开启块复制。
                     * @example `true`
                     */
                    Block: boolean;
                    /**
                     * 系统盘分区设备标识符。
                     * @example `0_1`
                     */
                    Device: string;
                }[];
            };
            /**
             * 中转实例的实例规格。
             * @example `ecs.sn1ne.large`
             */
            InstanceType: string;
            /**
             * 迁移源ID。
             * @example `s-bp1e2fsl57knvuug****`
             */
            SourceId: string;
            /**
             * 一个或多个实例启动模板版本。
             * @example `1`
             */
            LaunchTemplateVersion: string;
            /**
             * 迁移源需迁入的目标阿里云地域ID。
             * @example `cn-hangzhou`
             */
            RegionId: string;
            /**
             * 迁移中转实例ID。
             * @example `i-bp1ff25rzvnul6kr****`
             */
            TransitionInstanceId: string;
            /**
             * 迁移任务的完成时间。按照[ISO 8601](~~25696~~)标准表示，并使用UTC+0时间，格式为yyyy-MM-ddTHH:mm:ssZ。
             * > +8小时后是控制台上显示的时间。
             * @example `2019-06-04T16:00:52Z`
             */
            EndTime: string;
            /**
             * 迁移任务的开始时间。按照[ISO 8601](~~25696~~)标准表示，并使用UTC+0时间，格式为yyyy-MM-ddTHH:mm:ssZ。
             * > +8小时后是控制台上显示的时间。
             * @example `2019-06-04T14:40:52Z`
             */
            StartTime: string;
            /**
             * 指定VPC下的虚拟交换机ID。
             * @example `vsw-bp1ddbrxdlrcbim46****`
             */
            VSwitchId: string;
            /**
             * 迁移任务ID。
             * @example `j-bp19vlwm0tyigbmj****`
             */
            JobId: string;
            /**
             * 迁移任务交付的目标镜像名称。
             * @example `testAliCloudImageName`
             */
            ImageName: string;
            /**
             * 迁移任务的业务状态。可能值：
             * - Preparing：准备中。
             * - Syncing：同步中。
             * - Processing：处理中。
             * - Cleaning：清理中。
             * @example `Preparing`
             */
            BusinessStatus: string;
            ReplicationJobRuns: {
                /**
                 * 迁移任务运行记录。
                 */
                ReplicationJobRun: {
                    /**
                     * 迁移任务运行的结束时间。按照[ISO 8601](~~25696~~)标准表示，并使用UTC+0时间，格式为yyyy-MM-ddTHH:mm:ssZ。
                     * > +8小时后是控制台上显示的时间。
                     * @example `2019-10-04T13:35:00Z`
                     */
                    EndTime: string;
                    /**
                     * 迁移任务的执行方式。可能值：
                     * - Manual：手动执行。
                     * - Schedule：定时执行或周期执行。
                     * @example `Schedule`
                     */
                    Type: string;
                    /**
                     * 迁移任务运行的开始时间。按照[ISO 8601](~~25696~~)标准表示，并使用UTC+0时间，格式为yyyy-MM-ddTHH:mm:ssZ。
                     * > +8小时后是控制台上显示的时间。
                     * @example `2019-10-01T13:35:00Z`
                     */
                    StartTime: string;
                    /**
                     * 迁移任务生成的镜像ID。
                     * @example `m-o6w3gy99qf89rkga****`
                     */
                    ImageId: string;
                }[];
            };
            /**
             * 迁移交付的目标类型。可能值：
             * - Image：迁移成功后，SMC为您的迁移源生成阿里云镜像。
             * - ContainerImage：迁移成功后，SMC为您的迁移源生成Docker容器镜像。
             * - TargetInstance：迁移成功后，SMC将您的迁移源直接迁移至目标实例。当您设置该参数值时，您需要同时指定InstanceId参数。
             * @example `Image`
             */
            TargetType: string;
            /**
             * 迁移任务的类型。可能值：
             * - 0：服务器迁移。
             * - 1：操作系统迁移。
             * - 2：跨可用区迁移。
             * - 3：VMware无代理迁移。
             * @example `0`
             */
            JobType: number;
            /**
             * 资源组ID。
             * @example `rg-acfmw3ty5y7****`
             */
            ResourceGroupId: string;
            Tags: {
                /**
                 * 为SMC资源指定的标签。
                 */
                Tag: {
                    /**
                     * 为SMC资源指定的标签键。N的取值范围：1~20。
                     * 一旦传入该值，可以为空字符串。最多支持64个字符，不能包含http://或者https://。
                     * @example `TestKey`
                     */
                    Key: string;
                    /**
                     * 为SMC资源指定的标签值。N的取值范围：1~20。
                     * 一旦传入该值，可以为空字符串。最多支持64个字符，不能包含http://或者https://。
                     * @example `TestValue`
                     */
                    Value: string;
                }[];
            };
        }[];
    };
    /**
     * 每页行数。
     * @example `10`
     */
    PageSize: number;
    /**
     * 请求ID。
     * @example `6E1187E8-843A-4850-B97E-2F17F00D48F7`
     */
    RequestId: string;
    /**
     * 迁移任务列表的页码。
     * @example `1`
     */
    PageNumber: number;
}
