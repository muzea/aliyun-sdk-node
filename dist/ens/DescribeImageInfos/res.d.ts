export interface DescribeImageInfosResponse {
    /**
     * 返回码。
     * @example `0`
     */
    Code: number;
    Images: {
        /**
         * 镜像信息集合。
         */
        Image: {
            /**
             * 镜像描述信息。
             * @example `centos_6_08_64_20G_alibase_2017****`
             */
            Description: string;
            /**
             * 镜像ID。
             * @example `centos_6_08_64_20G_alibase_2017****`
             */
            ImageId: string;
            /**
             * 镜像大小，单位：GiB。
             * @example `20`
             */
            ImageSize: string;
            /**
             * 镜像版本。
             * @example `6.8`
             */
            ImageVersion: string;
            /**
             * 镜像类型。
             * 取值：**centos**、**debian**、**ubuntu**、**windows**。
             * @example `centos`
             */
            OSName: string;
            /**
             * 系统类型。
             * @example `linux`
             */
            OSType: string;
            /**
             * 镜像计算类型。取值：
             * - ens_vm：X86计算
             * - arm_vm：ARM计算
             * - bare_metal：X86裸机
             * - pcfarm：异构计算
             * @example `ens_vm`
             */
            ComputeType: string;
        }[];
    };
    /**
     * 请求ID。
     * @example `5568A08C-10A9-47F3-902F-647298B463FB`
     */
    RequestId: string;
}
