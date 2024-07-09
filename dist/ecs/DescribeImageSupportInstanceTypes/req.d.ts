export interface DescribeImageSupportInstanceTypesRequest {
    /**
     * 镜像所属的地域ID。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 镜像ID。
     * @example `m-o6w3gy99qf89rkga****`
     */
    "ImageId"?: string;
    /**
     * 使用镜像的场景。取值范围：
     * - CreateEcs（默认）：创建实例。
     * - ChangeOS：更换系统盘/更换操作系统。
     * @example `CreateEcs`
     */
    "ActionType"?: string;
    /**
     * 查询资源时的筛选条件列表。
     */
    "Filter"?: {
        /**
         * 指定过滤条件Key，当前只支持过滤镜像ID。取值范围：
         * -  imageId：过滤条件为镜像ID。
         * -  filter：过滤条件为镜像ID。
         * @example `imageId`
         */
        Key: string;
        /**
         * 指定过滤条件Value。
         * @example `m-o6w3gy99qf89rkga****`
         */
        Value: string;
    }[];
}
