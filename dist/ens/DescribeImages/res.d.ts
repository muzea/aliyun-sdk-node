export interface DescribeImagesResponse {
    /**
     * 业务返回码，正常返回0。
     * @example `0`
     */
    Code: number;
    Images: {
        /**
         * 镜像信息集合。
         */
        Image: {
            /**
             * 镜像系统架构类型。可能值：**x86_64**。
             * @example `x86_64`
             */
            Architecture: string;
            /**
             * 镜像创建时间，采用ISO 8601格式。
             * @example `2017-12-08T12:10:03Z`
             */
            CreationTime: string;
            /**
             * 镜像ID。
             * @example `centos_6_08_64_20G_alibase_2017****`
             */
            ImageId: string;
            /**
             * 镜像名称。
             * @example `Ubuntu_16.04`
             */
            ImageName: string;
            /**
             * 镜像来源。可能值：
             * - system：阿里云提供的公共镜像。
             * - self：您创建的自定义镜像。
             * - others：其他阿里云用户提供的共享镜像或社区镜像。
             * @example `system`
             */
            ImageOwnerAlias: string;
            /**
             * 镜像大小，单位：GiB。
             * @example `40`
             */
            ImageSize: string;
            /**
             * 镜像所使用的操作系统类型。可能值：
             * - Linux：Linux系统。
             * - Windows：Windows系统。
             * @example `centos`
             */
            Platform: string;
            /**
             * 快照ID。
             * @example `mock-clone_snapshot_id`
             */
            SnapshotId: string;
        }[];
    };
    /**
     * 当前页码。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 当前查询每页的行数。
     * @example `10`
     */
    PageSize: number;
    /**
     * 请求ID。
     * @example `8331AA01-C16D-5481-BB47-D19CEBAA811E`
     */
    RequestId: string;
    /**
     * 镜像总数。
     * @example `4`
     */
    TotalCount: number;
}
