export interface DescribeAndroidInstanceGroupsResponse {
    /**
     * 请求ID。
     * @example `F07A1DA1-E1EB-5CCA-8EED-12F85D32****`
     */
    RequestId: string;
    /**
     * 总条目数。
     * @example `10`
     */
    TotalCount: number;
    /**
     * 用来表示当前调用返回读取到的位置。空代表数据已经读取完毕。
     * @example `AAAAAV3MpHK1AP0pfERHZN5pu6l5V9uONHqPtDLM2U8s****`
     */
    NextToken: string;
    /**
     * 实例组的详细信息。
     */
    InstanceGroupModel: {
        /**
         * 实例组ID。
         * @example `ag-h67a2cs0zprfdh****
        `
         */
        InstanceGroupId: string;
        /**
         * 实例组名称。
         * @example `云手机A`
         */
        InstanceGroupName: string;
        /**
         * 实例组状态。
         * @example `RUNNING`
         */
        InstanceGroupStatus: string;
        /**
         * 实例组规格。
         * @example `acp.basic.small`
         */
        InstanceGroupSpec: string;
        /**
         * 实例组规格描述。
         * @example `ARM-2vCPU4GiB 32GiB`
         */
        InstanceGroupSpecDescribe: string;
        /**
         * 网络ID。
         * @example `cn-shanghai+dir-030598****`
         */
        OfficeSiteId: string;
        /**
         * 镜像ID。
         * @example `imgc-06zyt9m93zwax****`
         */
        ImageId: string;
        /**
         * 实例组中的实例数量。
         * @example `10`
         */
        NumberOfInstances: string;
        /**
         * 付费方式。
         * @example `PrePaid`
         */
        ChargeType: string;
        /**
         * 地域ID。
         * @example `cn-hangzhou`
         */
        RegionId: string;
        /**
         * 创建时间。
         * @example `2024-02-01 10:56:36`
         */
        GmtCreate: string;
        /**
         * 更新时间。
         * @example `2024-02-01 10:56:36`
         */
        GmtModified: string;
        /**
         * 售卖模式。
         * @example `standard`
         */
        SaleMode: string;
        /**
         * 已安装的应用列表。
         * @example `"抖音","淘宝"`
         */
        InstalledAppList: string;
        /**
         * 包年包月实例组的过期时间。
         * @example `2027-06-29 07:25:31`
         */
        GmtExpired: string;
        /**
         * 交付组ID。
         * @example `aig-48xr63m4dybjk****`
         */
        AppInstanceGroupId: string;
        /**
         * 策略ID。
         * @example `pg-c6n38xucps8kl****`
         */
        PolicyGroupId: string;
        /**
         * 专有网络中的交换机ID。
         * @example `vsw-t4n0yqs009ho024wt****`
         */
        VSwitchId: string;
        /**
         * 分辨率的高。
         * @example `1280`
         */
        ResolutionHeight: number;
        /**
         * 分辨率的宽。
         * @example `720`
         */
        ResolutionWidth: number;
        /**
         * 系统版本。
         * @example `Android 12`
         */
        SystemVersion: string;
        /**
         * 架构类型。
         * @example `ARM`
         */
        ArchitectureType: string;
        /**
         * 内存大小。
         * @example `8`
         */
        Memory: number;
        /**
         * CPU核数。
         * @example `8`
         */
        Cpu: string;
        /**
         * 磁盘信息。
         */
        Disks: {
            /**
             * 磁盘类型。
             * @example `SYSTEM`
             */
            DiskType: string;
            /**
             * 磁盘大小（单位GB）。
             * @example `32`
             */
            DiskSize: number;
        }[];
        ErrorCode: string;
    }[];
}
