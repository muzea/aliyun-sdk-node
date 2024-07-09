export interface ListInstancesResponse {
    /**
     * 轻量应用服务器信息组成的数组。
     */
    Instances: {
        /**
         * 实例状态，可能值：
         * - Pending：准备中。
         * - Starting：启动中。
         * - Running：运行中。
         * - Stopping：停止中。
         * - Stopped：停止。
         * - Resetting：重置中。
         * - Upgrading：升级中。
         * - Disabled：不可用。
         * @example `Running`
         */
        Status: string;
        /**
         * 创建时间。按照[ISO 8601](~~25696~~)标准表示，并使用UTC+0时间，格式为yyyy-MM-ddTHH:mm:ssZ。
         * @example `2021-03-08T05:31:06Z`
         */
        CreationTime: string;
        /**
         * 内网IP地址。
         * @example `172.26.XX.XX`
         */
        InnerIpAddress: string;
        /**
         * 计费方式。
         * @example `PrePaid`
         */
        ChargeType: string;
        /**
         * 实例ID。
         * @example `2ad1ae67295445f598017499dc****`
         */
        InstanceId: string;
        /**
         * 套餐ID。
         * @example `swas.s2.c2m2s50b4t08`
         */
        PlanId: string;
        /**
         * 公网IP地址。
         * @example `42.1.XX.XX`
         */
        PublicIpAddress: string;
        /**
         *
         * 地域ID。
         * @example `cn-hangzhou`
         */
        RegionId: string;
        /**
         * 到期时间。按照[ISO 8601](~~25696~~)标准表示，并使用UTC+0时间，格式为yyyy-MM-ddTHH:mm:ssZ。
         * @example `2021-05-08T16:00:00Z`
         */
        ExpiredTime: string;
        /**
         * 服务器名称。
         * @example `test-InstanceName`
         */
        InstanceName: string;
        /**
         * 服务器状态。可能值：
         * - Normal：正常。
         * - Expired：到期。
         * - Overdue：欠费。
         * @example `Normal`
         */
        BusinessStatus: string;
        /**
         * DDos状态。可能值：
         * - Normal：正常。
         * - BlackHole：黑洞中。
         * - Defense：清洗中。
         * @example `Normal`
         */
        DdosStatus: string;
        /**
         *
         * 镜像ID。
         * @example `fe9c66133a9d4688872869726b52****`
         */
        ImageId: string;
        /**
         * 资源被禁用的原因。取值范围：
         * - FINANCIAL：因欠费被锁定。
         * - SECURITY：因安全原因被锁定。
         * - EXPIRED：实例过期。
         * @example `EXPIRED`
         */
        DisableReason: string;
        /**
         * 是否为组合套餐。
         * @example `false`
         */
        Combination: boolean;
        /**
         * 组合套餐实例ID。
         * @example `com-f6c9a22****45b5b8de68ad608af1ba`
         */
        CombinationInstanceId: string;
        /**
         * 实例的UUID。
         * @example `41f30524-5df7-49c9-9c6e-32****489001`
         */
        Uuid: string;
        /**
         * 资源规格。
         */
        ResourceSpec: {
            /**
             * 磁盘类型，可能值：
             * - ESSD：ESSD云盘，性能级别PL0。
             * - SSD：SSD云盘。
             * - CLOUD_EFFICIENCY：高效云盘。
             * @example `ESSD`
             */
            DiskCategory: string;
            /**
             * CPU核数。
             * @example `2`
             */
            Cpu: number;
            /**
             * 带宽大小。
             * @example `5`
             */
            Bandwidth: number;
            /**
             * 磁盘大小。
             * @example `60`
             */
            DiskSize: number;
            /**
             * 内存大小。
             * @example `2`
             */
            Memory: number;
            /**
             * 流量大小。
             * - 流量为0代表带宽型主机。
             * - 非0代表流量包型主机。
             * @example `818`
             */
            Flow: number;
        };
        /**
         * 镜像的说明信息。
         */
        Image: {
            /**
             * 操作系统类型。
             * @example `windows`
             */
            OsType: string;
            /**
             * 镜像名称。
             * @example `test-custom-1686536882356`
             */
            ImageName: string;
            /**
             * 镜像版本。
             * @example `V3.5`
             */
            ImageVersion: string;
            /**
             * 镜像类型。取值范围：
             * - system：系统镜像。
             * - app：应用镜像。
             * - custom：自定义镜像。
             * @example `system`
             */
            ImageType: string;
            /**
             * 镜像图标URL。
             * @example `https://img.alicdn.com/imgextra/i3/O****1vdh9651ReKqWNMI2I_!!6000000002136****-24-24.svg`
             */
            ImageIconUrl: string;
            /**
             * 镜像提供商。
             * @example `https://selfs****e.console.aliyun.com/ticket/createIndex`
             */
            ImageContact: string;
        };
        /**
         * 实例的标签列表。
         */
        Tags: {
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
        /**
         * 轻量对应磁盘信息的数组。
         */
        Disks: {
            /**
             * 实例创建时间。按照[ISO 8601](~~25696~~)标准表示，并使用UTC+0时间，格式为yyyy-MM-ddTHH:mm:ssZ。
             * @example `2023-02-24T02:20:10Z`
             */
            CreationTime: string;
            /**
             * 磁盘状态。可能值：
             * - ReIniting：初始化中。
             * - Creating：创建中。
             * - In_use：使用中。
             * - Available：待挂载。
             * - Attaching：挂载中。
             * - Detaching：卸载中。
             * @example `In_use`
             */
            Status: string;
            /**
             * 磁盘挂载服务器中的设备名。
             * @example `/dev/xvda`
             */
            Device: string;
            /**
             * 磁盘大小。单位：GB。
             * @example `50`
             */
            Size: number;
            /**
             * 磁盘名称。
             * @example `SystemDisk`
             */
            DiskName: string;
            /**
             * 磁盘的计费方式。
             * @example `PrePaid`
             */
            DiskChargeType: string;
            /**
             * 磁盘类型。可能值：
             * - System：系统盘。
             * - Data：数据盘。
             * @example `System`
             */
            DiskType: string;
            /**
             * 磁盘类型，可能值：
             * - ESSD：ESSD云盘，性能级别PL0。
             * - SSD：SSD云盘。
             * - CLOUD_EFFICIENCY：高效云盘。
             * @example `ESSD`
             */
            Category: string;
            /**
             * 磁盘ID。
             * @example `d-bp14wq0149cpp2x****`
             */
            DiskId: string;
            /**
             * 地域ID。
             * @example `cn-hangzhou`
             */
            RegionId: string;
            /**
             * 磁盘备注。
             * @example `remark`
             */
            Remark: string;
            /**
             * 磁盘的标签信息。
             */
            DiskTags: {
                /**
                 * 标签键。
                 * @example `TestKey`
                 */
                Key: string;
                /**
                 * 标签值。
                 * @example `TestValue`
                 */
                Value: string;
            }[];
            /**
             * 磁盘所属的资源组ID。
             * @example `rg-aek2bti7cf7****
            `
             */
            ResourceGroupId: string;
        }[];
        /**
         * 实例所属的资源组ID。
         * @example `rg-aekz7jmhg5s****`
         */
        ResourceGroupId: string;
    }[];
    /**
     * 查询到的实例总数。
     * @example `1`
     */
    TotalCount: number;
    /**
     * 请求ID。
     * @example `20758A-585D-4A41-A9B2-28DA8F4F****`
     */
    RequestId: string;
    /**
     * 分页查询时设置的每页行数。
     * @example `10`
     */
    PageSize: number;
    /**
     * 轻量应用服务器列表的页码。
     * @example `1`
     */
    PageNumber: number;
}
