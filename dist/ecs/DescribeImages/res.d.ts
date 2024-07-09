export interface DescribeImagesResponse {
    /**
     * 当前分页包含多少条目。
     * @example `1`
     */
    PageSize: number;
    /**
     * 当前页码。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 请求ID。
     * @example `66189103-EDB2-43E2-BB60-BFF2B62F4EB8`
     */
    RequestId: string;
    /**
     * 镜像总数。
     * @example `1`
     */
    TotalCount: number;
    /**
     * 镜像所属地域ID。
     * @example `cn-hangzhou`
     */
    RegionId: string;
    Images: {
        /**
         * 镜像信息Images组成的集合。
         */
        Image: {
            /**
             * 镜像的创建时间。
             * @example `2019-11-15T06:07:05Z`
             */
            CreationTime: string;
            /**
             * 镜像的状态。可能值：
             * - UnAvailable：不可用。
             * - Available：可用。
             * - Creating：创建中。
             * - CreateFailed：创建失败。
             * @example `Available`
             */
            Status: string;
            /**
             * 镜像族系名称。
             * @example `hangzhou-daily-update`
             */
            ImageFamily: string;
            /**
             * 镜像完成的进度，单位为百分比。
             * @example `100%`
             */
            Progress: string;
            /**
             * 是否是拷贝的镜像。
             * @example `false`
             */
            IsCopied: boolean;
            /**
             * 是否可以在I/O优化实例上运行。
             * @example `true`
             */
            IsSupportIoOptimized: boolean;
            /**
             * 镜像来源。可能值：
             * - system：阿里云提供的公共镜像。
             * - self：您创建的自定义镜像。
             * - others：其他阿里云用户提供的共享镜像或社区镜像。
             * - marketplace：云市场镜像提供的镜像。
             * @example `self`
             */
            ImageOwnerAlias: string;
            /**
             * 是否支持Cloud Init。
             * @example `true`
             */
            IsSupportCloudinit: boolean;
            /**
             * 镜像版本。
             * @example `2`
             */
            ImageVersion: string;
            /**
             * 有引用关系的资源类型。可能值：
             * - instance：创建了一台或多台ECS实例。
             * - none：未创建过ECS实例。
             * @example `none`
             */
            Usage: string;
            /**
             * 是否共享过该自定义镜像给其他用户。
             * @example `true`
             */
            IsSelfShared: string;
            /**
             * 描述信息。
             * @example `Archive log for Oracle`
             */
            Description: string;
            /**
             * 镜像大小，单位：GiB。
             * @example `60`
             */
            Size: number;
            /**
             * 镜像所在的企业资源组ID。
             * @example `rg-bp67acfmxazb4p****`
             */
            ResourceGroupId: string;
            /**
             * 操作系统平台。
             * @example `Windows Server 2016`
             */
            Platform: string;
            /**
             * 操作系统的英文显示名称。
             * @example `Windows Server  2016 Data Center Edition 64bit Chinese Edition`
             */
            OSNameEn: string;
            /**
             * 镜像的名称。
             * @example `testImageName`
             */
            ImageName: string;
            /**
             * 操作系统的中文显示名称。
             * @example `Windows Server  2016 数据中心版 64位中文版`
             */
            OSName: string;
            /**
             * 镜像ID。
             * @example `m-bp1g7004ksh0oeuc****`
             */
            ImageId: string;
            /**
             * 操作系统类型。可能值：
             * - windows。
             * - linux。
             * @example `windows`
             */
            OSType: string;
            /**
             * 是否订阅了该镜像的商品码对应的镜像商品的服务条款。
             * @example `false`
             */
            IsSubscribed: boolean;
            /**
             * 云市场镜像中的镜像商品标识。
             * @example `test000****`
             */
            ProductCode: string;
            /**
             * 镜像系统架构类型。可能值：
             * - i386。
             * - x86_64。
             * - arm64。
             * @example `x86_64`
             */
            Architecture: string;
            /**
             * 镜像的启动模式。可能值：
             * - BIOS：BIOS启动模式。
             * - UEFI：UEFI启动模式。
             * @example `BIOS`
             */
            BootMode: string;
            DiskDeviceMappings: {
                /**
                 * 镜像下包含云盘和快照的映射关系。
                 */
                DiskDeviceMapping: {
                    /**
                     * 镜像的类型。
                     * @example `system`
                     */
                    Type: string;
                    /**
                     * 导入镜像所属OSS的bucket。
                     * @example `testEcsImport`
                     */
                    ImportOSSBucket: string;
                    /**
                     * 对于复制中的镜像，返回复制任务的进度。
                     * @example `32%`
                     */
                    Progress: string;
                    /**
                     * 快照ID。
                     * @example `s-bp17ot2q7x72ggtw****`
                     */
                    SnapshotId: string;
                    /**
                     * 导入镜像所属OSS的object。
                     * @example `imageImport`
                     */
                    ImportOSSObject: string;
                    /**
                     * 云盘的设备信息，例如/dev/xvdb。
                     * > 该参数即将停止使用，为提高代码的兼容性，建议您尽量不要使用该参数。
                     * @example `/dev/xvda`
                     */
                    Device: string;
                    /**
                     * 云盘的大小。单位为GiB。
                     * @example `60`
                     */
                    Size: string;
                    /**
                     * 对于复制中的镜像，返回复制任务的剩余时间，单位：秒。
                     * @example `233`
                     */
                    RemainTime: number;
                    /**
                     * 镜像格式。
                     * @example `qcow2`
                     */
                    Format: string;
                }[];
            };
            Tags: {
                /**
                 * 镜像的标签对信息。
                 */
                Tag: {
                    /**
                     * 镜像的标签值。
                     * @example `Oracle`
                     */
                    TagValue: string;
                    /**
                     * 镜像的标签键。
                     * @example `DTS`
                     */
                    TagKey: string;
                }[];
            };
            /**
             * 是否为公开镜像。公开镜像包括阿里云提供的公共镜像以及您已发布为社区镜像的自定义镜像。可能值：
             * - true：公开镜像。
             * - false：非公开镜像。
             * @example `false`
             */
            IsPublic: boolean;
            /**
             * 镜像所属的阿里云账号ID。该参数仅在查询共享镜像以及社区镜像时生效。
             * @example `1234567890`
             */
            ImageOwnerId: number;
            /**
             * 当前镜像是否支持非root用户登录。可能值：
             * - true：支持。
             * - false：不支持。
             * @example `false`
             */
            LoginAsNonRootSupported: boolean;
            /**
             * 社区镜像认证企业名称。
             * @example `TestName`
             */
            SupplierName: string;
            /**
             * 镜像检测相关结果。
             */
            DetectionOptions: {
                /**
                 * 镜像检测任务状态。可能值：
                 * - Processing：检测中。
                 * - Finished：检测完成。
                 * @example `Processing`
                 */
                Status: string;
                Items: {
                    /**
                     * 镜像检测项列表。
                     */
                    Item: {
                        /**
                         * 镜像检测项名称。
                         * @example `Nvme`
                         */
                        Name: string;
                        /**
                         * 镜像检测项结果。
                         * @example `Supported`
                         */
                        Value: string;
                        /**
                         * 导入的自定义镜像检测项是否存在风险，如果存在风险返回此字段，不存在风险则不返回。
                         * 风险等级可能值：
                         * - High：严重，影响实例能否启动成功，强烈建议修复。
                         * - Medium：重要，影响实例启动性能或者实例配置等，建议优化。
                         * @example `High`
                         */
                        RiskLevel: string;
                        /**
                         * 检测项可能存在的缺陷。
                         * @example `NVMe.NotInstalled`
                         */
                        RiskCode: string;
                    }[];
                };
            };
            /**
             * 镜像特性相关属性。
             */
            Features: {
                /**
                 * 镜像是否支持NVMe。可能值：
                 * - supported：支持。表示以该镜像创建的实例支持NVMe协议。
                 * - unsupported：不支持。表示以该镜像创建的实例不支持NVMe协议。
                 * @example `supported`
                 */
                NvmeSupport: string;
            };
        }[];
    };
}
