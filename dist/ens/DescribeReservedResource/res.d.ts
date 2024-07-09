export interface DescribeReservedResourceResponse {
    /**
     * 请求ID。
     * @example `6666C5A5-75ED-422E-A022-7121FA18C968`
     */
    RequestId: string;
    Images: {
        /**
         * 镜像信息。
         */
        Image: {
            /**
             * 镜像名称。
             * @example `centos_6_08_64_20G_alibase_****`
             */
            ImageName: string;
            /**
             * 镜像ID。
             * @example `centos_6_08_64_20G_alibase_****`
             */
            ImageId: string;
        }[];
    };
    SupportResources: {
        /**
         * 资源。
         */
        SupportResource: {
            /**
             * 节点ID。
             * @example `cn-beijing-cmcc`
             */
            EnsRegionId: string;
            DataDiskSizes: {
                /**
                 * 数据盘大小规格信息。
                 */
                DataDiskSize: string[];
            };
            /**
             * 可购买数量。
             * @example `9`
             */
            SupportResourcesCount: string;
            SystemDiskSizes: {
                /**
                 * 系统盘大小规格信息。
                 */
                SystemDiskSize: string[];
            };
            /**
             * 实例规格。
             * @example `ens.sn1.stiny`
             */
            InstanceSpec: string;
        }[];
    };
    /**
     * 业务返回码，正常返回0。
     * @example `0`
     */
    Code: number;
}
