export interface DescribeAvailableResourceInfoResponse {
    /**
     * 请求ID。
     * @example `8629F679-B51D-4194-A1CC-5D8F504C362B`
     */
    RequestId: string;
    Images: {
        /**
         * 镜像信息。
         */
        Image: {
            /**
             * 镜像大小，单位：GB。
             * @example `20`
             */
            ImageSize: number;
            /**
             * 镜像名称。
             * @example `centos_6_08_64_20G_a****`
             */
            ImageName: string;
            /**
             * 镜像ID。
             * @example `centos_6_08_64_20G_a****`
             */
            ImageId: string;
        }[];
    };
    SupportResources: {
        /**
         * 可购买的资源规格信息。
         */
        SupportResource: {
            /**
             * 数据盘最大值，单位：GB。
             * @example `200`
             */
            DataDiskMaxSize: number;
            BandwidthTypes: {
                BandwidthType: string[];
            };
            /**
             * 系统盘最小值，单位：GB。
             * @example `20`
             */
            SystemDiskMinSize: number;
            EnsRegionIds: {
                EnsRegionId: string[];
            };
            EnsRegionIdsExtends: {
                /**
                 * 节点补充信息。
                 */
                EnsRegionId: {
                    /**
                     * 节点ID。
                     * @example `cn-chengdu-telecom-4`
                     */
                    EnsRegionId: string;
                    /**
                     * 英文名称，默认为空。
                     * @example `EnName`
                     */
                    EnName: string;
                    /**
                     * 地域。
                     * @example `EastChina`
                     */
                    Area: string;
                    /**
                     * 节点名称。
                     * @example `台州电信联通移动`
                     */
                    Name: string;
                    /**
                     * 省份。
                     * @example `浙江省`
                     */
                    Province: string;
                    /**
                     * 运营商信息。
                     * @example `unicom`
                     */
                    Isp: string;
                }[];
            };
            InstanceSpeces: {
                InstanceSpec: string[];
            };
            /**
             * 系统盘最大值，单位：GiB。
             * @example `100`
             */
            SystemDiskMaxSize: number;
            /**
             * 数据盘最小值，单位：GiB。
             * @example `100`
             */
            DataDiskMinSize: number;
            Isp: {
                Isp: string[];
            };
        }[];
    };
}
