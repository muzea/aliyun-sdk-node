export interface ListContainerImagesResponse {
    /**
     * 本页条目数。
     * @example `1`
     */
    PageSize: number;
    /**
     * 本页页码。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 请求ID。
     * @example `04F0F334-1335-436C-A1D7-6C044FE7****`
     */
    RequestId: string;
    /**
     * 列表条目总数。
     * @example `1`
     */
    TotalCount: number;
    /**
     * 数据库信息。
     * @example `mongodb://localhost/`
     */
    DBInfo: string;
    Images: {
        /**
         * 镜像信息数组。
         */
        Images: {
            /**
             * 镜像的容器类型。固定值：singularity
             * @example `docker`
             */
            Type: string;
            /**
             * 镜像状态。
             * @example `READY`
             */
            Status: string;
            /**
             * 镜像更新时间。
             * @example `2018-08-02T20:11:36`
             */
            UpdateDateTime: string;
            /**
             * 仓库名称。
             * @example `busybox`
             */
            Repository: string;
            /**
             * 镜像标签。
             * @example `latest`
             */
            Tag: string;
            /**
             * 镜像的容器系统。
             * @example `mycluster`
             */
            System: string;
            /**
             * 镜像ID。
             * @example `centos_7_06_64_20G_alibase_2019071****`
             */
            ImageId: string;
        }[];
    };
}
