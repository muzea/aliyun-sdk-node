export interface DescribeBundlesResponse {
    /**
     * 下一个查询开始的Token，NextToken为空表示没有下一个。
     * @example `AAAAAV3MpHK1AP0pfERHZN5pu6lu3PTF6h3zE8egwlYuv8M8`
     */
    NextToken: string;
    /**
     * 请求ID。
     * @example `BCC854D8-5D1E-46D3-96EF-797A5DD36789`
     */
    RequestId: string;
    /**
     * 云电脑模板的详细信息列表。
     */
    Bundles: {
        /**
         * 云电脑模板描述。
         * @example `test`
         */
        Description: string;
        /**
         * 云电脑模板类型。
         * @example `SYSTEM`
         */
        BundleType: string;
        /**
         * 操作系统类型。
         * @example `Windows`
         */
        OsType: string;
        /**
         * 库存状态。当`CheckStock`设置为`True`时返回。
         * @example `Sufficient`
         */
        StockState: string;
        /**
         * 云电脑规格。
         * @example `ecd.graphics.2xlarge`
         */
        DesktopType: string;
        /**
         * 协议类型。
         * @example `ASP`
         */
        ProtocolType: string;
        /**
         * 云电脑模板ID。
         * @example `bundle_ecd_graphics.2xlarge_s15d15_win2019`
         */
        BundleId: string;
        /**
         * 镜像ID。
         * @example `desktopimage-windows-server-2019-64-ch-vgpu`
         */
        ImageId: string;
        /**
         * 镜像名称。
         * @example `Windows server 2019 Chinese`
         */
        ImageName: string;
        /**
         * 镜像操作系统语言。
         * @example `en-US`
         */
        Language: string;
        /**
         * 云电脑模板名称。
         * @example `Advanced graphics with Windows 2019`
         */
        BundleName: string;
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
             * 磁盘大小。单位：GiB。
             * @example `150`
             */
            DiskSize: number;
            /**
             * 磁盘性能等级。
             * @example `PL0`
             */
            DiskPerformanceLevel: string;
        }[];
        /**
         * 云电脑规格详情。
         */
        DesktopTypeAttribute: {
            /**
             * vCPU数量。
             * @example `10`
             */
            CpuCount: number;
            /**
             * GPU个数。
             * @example `0.5`
             */
            GpuCount: number;
            /**
             * GPU类型。
             * @example `NVIDIA T4`
             */
            GpuSpec: string;
            /**
             * 内存大小。单位：MiB。
             * @example `4096`
             */
            MemorySize: number;
        };
        /**
         * 云电脑规格族。
         * @example `eds.general`
         */
        DesktopTypeFamily: string;
        /**
         * 云电脑模板的创建时间。
         * @example `2021-09-30T06:09Z`
         */
        CreationTime: string;
        /**
         * 会话类型。
         * @example `0`
         */
        SessionType: string;
        /**
         * 是否开启磁盘加密。
         * @example `false`
         */
        VolumeEncryptionEnabled: boolean;
        /**
         * 开启磁盘加密的情况下使用的KMS的密钥ID。
         * @example `08c33a6f-4e0a-4a1b-a3fa-7ddfa1d4****`
         */
        VolumeEncryptionKey: string;
        /**
         * 操作系统平台信息。
         * @example `Windows Server 2019`
         */
        Platform: string;
        /**
         * 镜像状态。
         * @example `Available`
         */
        ImageStatus: string;
    }[];
}
