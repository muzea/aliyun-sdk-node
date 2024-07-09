export interface ListCustomImagesResponse {
    /**
     * 请求ID。
     * @example `04F0F334-1335-436C-A1D7-6C044FE7****`
     */
    RequestId: string;
    Images: {
        /**
         * E-HPC支持的自定义镜像和共享镜像的列表。
         */
        ImageInfo: {
            /**
             * >该参数未开放使用。
             * @example `Available`
             */
            Status: string;
            /**
             * >该参数未开放使用。
             * @example `example.sh`
             */
            PostInstallScript: string;
            /**
             * 镜像描述。
             * @example `ExampleDescription`
             */
            Description: string;
            /**
             * 镜像大小。单位：GiB
             * @example `40`
             */
            Size: number;
            /**
             * 镜像类型。可能值：
             * - self：自定义镜像
             * - others：共享镜像
             * @example `self`
             */
            ImageOwnerAlias: string;
            /**
             * 镜像名称。
             * @example `CHESS5V5.0.27`
             */
            ImageName: string;
            /**
             * >该参数未开放使用。
             * @example `ECS`
             */
            SkuCode: string;
            /**
             * >该参数未开放使用。
             * @example `Month`
             */
            PricingCycle: string;
            /**
             * 镜像ID。
             * @example `m-bp181x855551ww5yq****`
             */
            ImageId: string;
            /**
             * >该参数未开放使用。
             * @example `cmjj028279`
             */
            ProductCode: string;
            /**
             * >该参数未开放使用。
             * @example `127****`
             */
            Uid: string;
            /**
             * 基础镜像标签。
             */
            BaseOsTag: {
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
                 * 操作系统版本。
                 * @example `7.2`
                 */
                Version: string;
                /**
                 * 操作系统架构。可能值：
                 * - i386
                 * - x86_64
                 * @example `i386`
                 */
                Architecture: string;
            };
            /**
             * E-HPC支持的操作系统镜像。
             */
            OsTag: {
                /**
                 * 操作系统平台。
                 * @example `CentOS`
                 */
                Platform: string;
                /**
                 * 镜像标签。
                 * @example `CentOS_7.2_64`
                 */
                OsTag: string;
                /**
                 * 操作系统版本。
                 * @example `7.2`
                 */
                Version: string;
                /**
                 * 操作系统架构。可能值：
                 * - i386
                 * - x86_64
                 * @example `x86_64`
                 */
                Architecture: string;
                /**
                 * 基础镜像标签。
                 * @example `CentOS_7.2_64`
                 */
                BaseOsTag: string;
            };
        }[];
    };
}
