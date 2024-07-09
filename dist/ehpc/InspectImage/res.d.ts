export interface InspectImageResponse {
    /**
     * 请求ID。
     * @example `896D338C-E4F4-41EC-A154-D605E5DE****`
     */
    RequestId: string;
    /**
     * 容器镜像状态。
     */
    ImageStatus: {
        /**
         * 镜像inspect信息合集。
         */
        ImageInspectInfo: {
            /**
             * 构建镜像时使用的体系结构。
             * @example `amd64`
             */
            BuildArch: string;
            /**
             * 镜像构建日期。
             * @example `Tuesday_9_November_2021_19`
             */
            BuildDate: string;
            /**
             * 容器内镜像引导程序版本。
             * @example `1.0`
             */
            BootStrap: string;
            /**
             * 镜像构建的方式。
             * @example `localimage`
             */
            DefFrom: string;
            /**
             * 容器镜像版本。
             * @example `sccIntelMPI.sif`
             */
            ContainerVersion: string;
            /**
             * 镜像的singularity版本以及内核版本。
             * @example `3.8.3-1.el7`
             */
            SchemaVersion: string;
        };
    };
}
