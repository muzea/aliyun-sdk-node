export interface CreateInstanceRequest {
    /**
     * 实例属性。
     */
    "body"?: {
        /**
         * 工作空间ID。如何获取工作空间ID，请参见[ListWorkspaces](~~449124~~)。
         * @example `40823`
         */
        WorkspaceId: string;
        /**
         * 实例名称。格式要求：
         * - 只能包含英文字母、数字和下划线（_）。
         * - 不能超过27个字符。
         * @example `training_data`
         */
        InstanceName: string;
        /**
         * 实例对应的ECS规格。如何获取ECS规格，请参见[ListEcsSpecs](~~470423~~)。
         * @example `ecs.c6.large`
         */
        EcsSpec: string;
        /**
         * 镜像ID。如何获取镜像ID，请参见[ListImages](~~449118~~)。
         * @example `image-05cefd0be2exxxx`
         */
        ImageId: string;
        /**
         * 镜像地址。如何获取镜像地址，请参见[ListImages](~~449118~~)。
         * @example `registry.cn-shanghai.aliyuncs.com/pai_product/tensorflow:py36_cpu_tf1.12_ubuntu`
         */
        ImageUrl: string;
        /**
         * 数据集集合。
         */
        Datasets: {
            /**
             * 数据集ID。如何获取数据集ID，请参见[ListDatasets](~~457222~~)，使用时不能指定Uri。
             * @example `d-vsqjvsjp4orp5l206u`
             */
            DatasetId: string;
            /**
             * 容器内挂载路径。
             * @example `/mnt/data`
             */
            MountPath: string;
            /**
             * 需要挂载的OSS目录的Uri，使用时不能同时指定DatasetId。
             * @example `oss://bucket-name.oss-cn-shanghai-internal.aliyuncs.com/data/path/`
             */
            Uri: string;
            /**
             * 自定义挂载属性，目前仅支持OSS，使用时不能同时指定OptionType。
             * @example `{
              "fs.oss.download.thread.concurrency": "10",
              "fs.oss.upload.thread.concurrency": "10",
              "fs.jindo.args": "-oattr_timeout=3 -oentry_timeout=0 -onegative_timeout=0 -oauto_cache -ono_symlink"
            }
            `
             */
            Options: string;
            /**
             * 挂载类型，使用时不能同时指定Options，目前仅支持OSS:
             * - FastReadWrite：快速读写模式。
             * - IncrementalReadWrite：增量读写模式。
             * - ConsistentReadWrite：读写一致模式。
             * - ReadOnly：只读模式。
             * @example `FastReadWrite`
             */
            OptionType: string;
        }[];
        /**
         * User VPC配置。
         */
        UserVpc: {
            /**
             * VPC ID。
             * @example `vpc-xxxxx`
             */
            VpcId: string;
            /**
             * 交换机ID。
             * @example `vsw-xxxxx`
             */
            VSwitchId: string;
            /**
             * 安全组ID。
             * @example `sg-xxxxxx`
             */
            SecurityGroupId: string;
            /**
             * 扩展网段。
             * - 当交换机ID为空时，此参数可以不提供，系统会自动获取VPC下的所有网段；
             * - 当交换机ID不为空时，此参数必须提供，建议填写VPC下的所有网段。
             * @example `["192.168.0.1/24", "192.168.1.1/24"]`
             */
            ExtendedCIDRs: string[];
            /**
             * 默认路由。取值如下：
             * - eth0：表示使用默认网卡，通过公共网关访问外部网络。
             * - eth1：表示使用用户弹性网卡，通过私有网关访问外部网络。具体配置方法，请参考[配置DSW实例通过专有公网网关访问公网](~~2525343~~)。
             * @example `eth0`
             */
            DefaultRoute: string;
            /**
             * 端口透出信息。
             */
            ForwardInfos: any[];
        };
        /**
         * 工作空间内是否他人可见。取值如下：
         * - PRIVATE：表示工作空间内自己及管理员可见。
         * - PUBLIC：工作空间所有用户可见。
         * @example `PRIVATE`
         */
        Accessibility: string;
        /**
         * 环境变量。
         * @example `{userName: "Chris"}`
         */
        EnvironmentVariables: any;
        /**
         * 资源组ID，预付费时配置。如何创建专有资源组，请参见[准备及管理DLC资源组集群](~~202827~~)。
         * @example `dsw-123456789`
         */
        ResourceId: string;
        /**
         * 优先级，在分配资源给实例时，优先级越高的实例越优先。取值范围为1~9。
         * - 1为最低优先级。
         * - 9为最高优先级。
         * @example `1`
         */
        Priority: number;
        /**
         * 资源配置，弹内或者轻量化时使用。
         * @example `{"CPU":"4","Memory":"8Gi","SharedMemory":"4Gi","GPU":"1","GPUType":"Tesla-V100-16G"}`
         */
        RequestedResource: {
            /**
             * CPU核数。
             * @example `32`
             */
            CPU: string;
            /**
             * 内存大小。单位为GB。
             * @example `32GB`
             */
            Memory: string;
            /**
             * 共享内存大小。单位为GB。
             * @example `32GB`
             */
            SharedMemory: string;
            /**
             * GPU数量。
             * @example `4`
             */
            GPU: string;
            /**
             * GPU显卡类型，取值如下：
             * - V100
             * - A100
             * - T4
             * - A10
             * - P100
             * @example `v100`
             */
            GPUType: string;
        };
        /**
         * 用户自定义标签。
         * @example `{'foo': 'bar'}`
         */
        Labels: {
            /**
             * 用户定义标签键。
             * @example `stsTokenOwner`
             */
            Key: string;
            /**
             * 用户定义标签值。
             * @example `123xxxxxxxx`
             */
            Value: string;
        }[];
        /**
         * 云盘列表。
         * @example `[]`
         */
        CloudDisks: {
            /**
             * 为每个按量付费实例赠送免费云盘做持久化存储。
             * - GPU规格：默认为100 GB。
             * - CPU规格：默认为30 GB。
             * @example `30`
             */
            Capacity: string;
            /**
             * rootfs：表示将磁盘挂载为系统盘，系统环境存储在磁盘上。
             * @example `rootfs`
             */
            SubType: string;
            /**
             * 磁盘在容器内额外挂载的数据目录路径。
             * @example `/mnt/workspace`
             */
            MountPath: string;
            /**
             * 磁盘被挂载的路径。
             * @example `/mnt/systemdist`
             */
            Path: string;
            /**
             * 云盘或者快照使用情况。
             */
            Status: {
                /**
                 * 可使用量，单位 Byte。
                 * @example `31841058816`
                 */
                Available: number;
                /**
                 * 已使用量，单位 Byte。
                 * @example `371195904`
                 */
                Usage: number;
                /**
                 * 容量，单位 Byte。
                 * @example `32212254720`
                 */
                Capacity: number;
            };
        }[];
        /**
         * 选择云盘作为默认工作目录。
         * @example `rootfsCloudDisk`
         */
        WorkspaceSource: string;
        /**
         * 实例所有者的账号ID。支持阿里云账号或RAM用户。
         * @example `161228528250****`
         */
        UserId: string;
        /**
         * NVIDIA驱动配置。
         * @example `535.54.03`
         */
        Driver: string;
        Affinity: {
            CPU: {
                Enable: boolean;
            };
        };
    };
}
