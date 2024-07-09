export interface ListImagesResponse {
    /**
     * 请求ID。
     * @example `04F0F334-1335-436C-A1D7-6C044FE7****`
     */
    RequestId: string;
    OsTags: {
        /**
         * E-HPC支持的镜像列表。
         */
        OsInfo: {
            /**
             * 操作系统版本。
             * @example `7.2`
             */
            Version: string;
            /**
             * 基础镜像标签，仅管控节点使用。
             * @example `CentOS_7.2_64`
             */
            BaseOsTag: string;
            /**
             * 操作系统平台。可能值：
             * - CentOS
             * - windows
             * @example `CentOS`
             */
            Platform: string;
            /**
             * 镜像标签。
             * @example `CentOS_7.2_64`
             */
            OsTag: string;
            /**
             * 镜像ID。
             * @example `m-bp1h8aoe73p71iow****`
             */
            ImageId: string;
            /**
             * 操作系统架构。可能值：
             * - i386
             * - x86_64
             * @example `i386`
             */
            Architecture: string;
            /**
             * 镜像名称。
             * @example `CentOS_7.2_64`
             */
            OSName: string;
            /**
             * 镜像名称（英文）。
             * @example `CentOS_7.2_64`
             */
            OSNameEn: string;
        }[];
    };
}
