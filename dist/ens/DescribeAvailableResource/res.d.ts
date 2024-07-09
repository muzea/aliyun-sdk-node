export interface DescribeAvailableResourceResponse {
    /**
     * 业务返回码，正常返回0。
     * @example `0`
     */
    Code: number;
    Images: {
        /**
         * 镜像信息组成的集合。
         */
        Image: {
            /**
             * 镜像ID。
             * @example `centos_6_08_64_20G_alibase_20171208`
             */
            ImageId: string;
            /**
             * 镜像的名称。
             * @example `centos_6_08_64_20G_alibase_****`
             */
            ImageName: string;
        }[];
    };
    /**
     * 公共参数，每个请求ID都是唯一的，可用于排查和定位问题。
     * @example `473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E`
     */
    RequestId: string;
    SupportResources: {
        /**
         * 可购买的资源规格信息。
         */
        SupportResource: {
            /**
             * 数据盘大小。单位：GB。
             * @example `500`
             */
            DataDiskSize: string;
            /**
             * ENS节点ID。
             * @example `cn-beijing-cmcc`
             */
            EnsRegionId: string;
            /**
             * 实例对应的规格。
             * @example `ens.sn1.stiny`
             */
            InstanceSpec: string;
            /**
             * 可购买数量。
             * @example `9`
             */
            SupportResourcesCount: string;
            /**
             * 系统盘容量。单位为GiB。
             * @example `20`
             */
            SystemDiskSize: string;
        }[];
    };
}
