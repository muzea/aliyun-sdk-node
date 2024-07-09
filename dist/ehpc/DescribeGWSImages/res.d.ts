export interface DescribeGWSImagesResponse {
    /**
     * 本页条数。
     * @example `10`
     */
    PageSize: number;
    /**
     *    请求ID。
     * @example `2777461A-E45E-42F8-8E67-0EBF132E93E0`
     */
    RequestId: string;
    /**
     * 当前页码。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 列表条目总数。
     * @example `2`
     */
    TotalCount: number;
    Images: {
        /**
         * 可视化镜像信息列表。
         */
        ImageInfo: {
            /**
             * 镜像状态。可能值：
             * - Creating：创建中
             * - CreateFailed：创建失败
             * - Available：可用
             * - UnAvailable：不可用
             * @example `Available`
             */
            Status: string;
            /**
             * 可视化镜像类型。可能值：
             * - system：系统镜像
             * - custom：自定义镜像
             * @example `system`
             */
            ImageType: string;
            /**
             * 镜像进程完成的进度。
             * @example `100%`
             */
            Progress: string;
            /**
             * 镜像大小。单位：GB
             * @example `40`
             */
            Size: number;
            /**
             * 镜像创建时间。
             * @example `2019-05-15T06:05:40.000Z`
             */
            CreateTime: string;
            /**
             * 可视化镜像名称。
             * @example `Windows Server 2019`
             */
            Name: string;
            /**
             * 可视化镜像ID。
             * @example `m-bp1by33e4h650m70lb****`
             */
            ImageId: string;
        }[];
    };
}
