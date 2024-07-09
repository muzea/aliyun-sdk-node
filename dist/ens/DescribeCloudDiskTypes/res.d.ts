export interface DescribeCloudDiskTypesResponse {
    /**
     * 请求ID。
     * @example `77990CEE-B714-5702-BDE6-943F702277DD`
     */
    RequestId: string;
    SupportResources: {
        /**
         * 可购买的资源规格信息。
         */
        SupportResource: {
            /**
             * 磁盘种类。
             * - cloud_efficiency：高效云盘。
             * - cloud_ssd：全闪云盘。
             * - local_hdd：本地HDD盘。
             * - local_ssd：本地SSD盘。
             * @example `cloud_efficiency`
             */
            Category: string;
            /**
             * ENS节点ID。
             * @example `cn-guangzhou-10`
             */
            EnsRegionId: string;
        }[];
    };
}
