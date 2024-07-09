export interface ListCommunityImagesResponse {
    /**
     * 请求ID。
     * @example `04F0F334-1335-436C-A1D7-6C044FE73368`
     */
    RequestId: string;
    Images: {
        /**
         * E-HPC支持的自定义镜像和共享镜像的列表。
         */
        ImageInfo: {
            /**
             * 镜像状态。可能值：
             * - UnAvailable：不可用
             * - Available：可用
             * - Creating：创建中
             * - CreateFailed：创建失败
             * @example `Available`
             */
            Status: string;
            /**
             * 安装镜像后执行的脚本。
             * @example `example.sh`
             */
            PostInstallScript: string;
            /**
             * 镜像描述。
             * @example `ExampleDescription`
             */
            Description: string;
            /**
             * 镜像大小。单位：GiB。
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
             * @example `linux_CentOS7.2_OceanBase_OBD_1ECS-3OB_3.0`
             */
            ImageName: string;
            /**
             * 商品规格码。可能值：
             * - ECS：按量付费
             * - package：预付费
             * @example `ECS`
             */
            SkuCode: string;
            /**
             * 镜像计费单位，可能值：
             * - Hour：按小时付费
             * - Month：按月付费
             * - Year：按年付费
             * @example `Month`
             */
            PricingCycle: string;
            /**
             * 镜像ID。
             * @example `m-bp181x855551ww5yq****`
             */
            ImageId: string;
            /**
             * 云市场的商品标识。
             * @example `cmjj028279`
             */
            ProductCode: string;
            /**
             * 镜像所有者。
             * @example `127****`
             */
            Uid: string;
            /**
             * 对应的基础镜像操作系统标签。
             */
            BaseOsTag: {
                /**
                 * 操作系统发行版。可能值：
                 * - CentOS
                 * - Ubuntu
                 * - SUSE
                 * - OpenSUSE
                 * - Debian
                 * - CoreOS
                 * - Aliyun
                 * - Windows Server 2003
                 * - Windows Server 2008
                 * - Windows Server 2012
                 * - Others Linux
                 * - Customized Linux
                 * @example `CentOS`
                 */
                Platform: string;
                /**
                 * 操作系统镜像标签。
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
                 * 操作系统镜像标签。
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
                 * 对应的基础镜像操作系统标签。
                 * @example `CentOS_7.2_64`
                 */
                BaseOsTag: string;
            };
        }[];
    };
}
