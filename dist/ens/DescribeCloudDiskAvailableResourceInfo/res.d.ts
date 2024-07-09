export interface DescribeCloudDiskAvailableResourceInfoResponse {
    /**
     * 请求ID。
     * @example `0AE4F26E-7527-569F-A987-E3CF269A3C11`
     */
    RequestId: string;
    SupportResources: {
        /**
         * 可购买的资源规格信息。
         */
        SupportResource: {
            /**
             * ENS节点ID。
             * @example `cn-beijing-cmcc`
             */
            EnsRegionId: string;
            /**
             * 节点名称。
             * @example `北京移动`
             */
            EnsRegionName: string;
            /**
             * 磁盘最小值，单位：GiB。
             * @example `20`
             */
            DiskMinSize: number;
            /**
             * 磁盘最大值，单位：GiB。
             * @example `80`
             */
            DiskMaxSize: number;
            /**
             * 可购买数量。
             * @example `2`
             */
            CanBuyCount: number;
            /**
             * 磁盘种类
             * - cloud_efficiency：高效云盘。
             * - cloud_ssd：全闪云盘。
             * - local_hdd：本地HDD盘。
             * - local_ssd：本地盘SSD。
             * @example `cloud_ssd`
             */
            Category: string;
            /**
             * 磁盘默认大小，单位：GiB。
             * @example `20`
             */
            DefaultDiskSize: number;
        }[];
    };
}
