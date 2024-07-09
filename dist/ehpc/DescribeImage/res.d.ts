export interface DescribeImageResponse {
    /**
     * 请求ID。
     * @example `04F0F334-1335-436C-A1D7-6C044FE73368`
     */
    RequestId: string;
    /**
     * 镜像信息。
     */
    ImageInfo: {
        /**
         * 镜像类型。可能值：
         * - shifter
         * - docker
         * @example `docker`
         */
        Type: string;
        /**
         * 镜像状态。
         * @example `READY`
         */
        Status: string;
        /**
         * 最后一次更新镜像的时间。
         * @example `2018-08-02T20:11:36`
         */
        UpdateDateTime: string;
        /**
         * 仓库名。
         * @example `hello-world`
         */
        Repository: string;
        /**
         * 镜像标签。
         * @example `latest`
         */
        Tag: string;
        /**
         * 容器系统。
         * @example `mycluster`
         */
        System: string;
        /**
         * 镜像ID。
         * @example `353506****`
         */
        ImageId: string;
    };
}
