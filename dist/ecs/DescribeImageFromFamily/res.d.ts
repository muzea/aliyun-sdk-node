export interface DescribeImageFromFamilyResponse {
    /**
     * 请求ID。
     * @example `473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E`
     */
    RequestId: string;
    /**
     * 返回的镜像信息。
     */
    Image: {
        /**
         * 镜像的创建时间。
         * @example `2018-01-10T01:01:10Z`
         */
        CreationTime: string;
        /**
         * 镜像的状态。可能值：
         * - UnAvailable：不可用
         * - Available：可用
         * - Creating：创建中
         * - CreateFailed：创建失败
         * @example `Available`
         */
        Status: string;
        /**
         * 镜像族系。
         * @example `testImageFamily`
         */
        ImageFamily: string;
        /**
         * 镜像完成的进度，单位为百分比。
         * @example `100`
         */
        Progress: string;
        /**
         * 是否是复制的镜像。
         * @example `false`
         */
        IsCopied: boolean;
        /**
         * 是否可以在I/O优化实例上运行。
         * @example `true`
         */
        IsSupportIoOptimized: boolean;
        /**
         * 镜像所有者别名。可能值：
         * - system：公共镜像。
         * - self：您的自定义镜像。
         * - others：其他用户的公开镜像。
         * - marketplace：云市场镜像。
         * @example `self`
         */
        ImageOwnerAlias: string;
        /**
         * 是否支持cloud-init。
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
         * @example `testDescription`
         */
        Description: string;
        /**
         * 镜像大小，单位GiB。
         * @example `80`
         */
        Size: number;
        /**
         * 操作系统平台。
         * @example `Aliyun`
         */
        Platform: string;
        /**
         * 镜像的名称。
         * @example `testImageName`
         */
        ImageName: string;
        /**
         * 操作系统的中文显示名称。
         * @example `Alibaba Cloud Linux 2.1903`
         */
        OSName: string;
        /**
         * 镜像ID。
         * @example `m-bp1g7004ksh0oeuc****`
         */
        ImageId: string;
        /**
         * 操作系统类型。可能值：
         * - windows
         * - linux
         * @example `linux`
         */
        OSType: string;
        /**
         * 是否订阅了该镜像商品码对应的镜像商品服务条款。
         * @example `false`
         */
        IsSubscribed: boolean;
        /**
         * 镜像市场的镜像商品标示。
         * @example `jxsc00****`
         */
        ProductCode: string;
        /**
         * 镜像系统架构类型。可能值：
         * - i386
         * - x86_64
         * @example `x86_64`
         */
        Architecture: string;
        DiskDeviceMappings: {
            /**
             * 镜像下包含云盘和快照的映射关系。
             */
            DiskDeviceMapping: {
                /**
                 * 镜像的类型。
                 * @example `custom`
                 */
                Type: string;
                /**
                 * 导入镜像所属OSS的Bucket。
                 * @example `testEcsImport`
                 */
                ImportOSSBucket: string;
                /**
                 * 快照ID。
                 * @example `s-bp17ot2q7x72ggtw****`
                 */
                SnapshotId: string;
                /**
                 * 导入镜像所属OSS的Object。
                 * @example `imageImport`
                 */
                ImportOSSObject: string;
                /**
                 * 云盘大小，单位GiB。
                 * @example `80`
                 */
                Size: string;
                /**
                 * 云盘的设备信息，例如/dev/xvdb。
                 * > 该参数即将停止使用，为提高代码的兼容性，建议您尽量不要使用该参数。
                 * @example `/dev/xvdb`
                 */
                Device: string;
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
                 * 自定义镜像的标签值。
                 * @example `TestValue`
                 */
                TagValue: string;
                /**
                 * 自定义镜像的标签键。
                 * @example `TestKey`
                 */
                TagKey: string;
            }[];
        };
    };
}
