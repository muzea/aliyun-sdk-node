export type DescribeKubernetesVersionMetadataResponse = {
    /**
     * Kubernetes版本功能特性。
     */
    capabilities: any;
    /**
     * 系统镜像列表。
     */
    images: {
        /**
         * 镜像ID。
         * @example `centos_7_9_x64_20G_alibase_20221129.vhd`
         */
        image_id: string;
        /**
         * 镜像名称。
         * @example `CentOS 7.9`
         */
        image_name: string;
        /**
         * 操作系统平台。取值：
         * - `AliyunLinux`
         * - `CentOS`
         * - `Windows`
         * - `WindowsCore`
         * @example `CentOS`
         */
        platform: string;
        /**
         * 镜像版本。
         * @example `7.9`
         */
        os_version: string;
        /**
         * 操作系统发行版类型，推荐使用该字段指定节点操作系统。取值：
         * -  `CentOS`
         * - `AliyunLinux`
         * -  `AliyunLinux Qboot`
         * - `AliyunLinuxUEFI`
         * - `AliyunLinux3`
         * - `Windows`
         * - `WindowsCore`
         * - `AliyunLinux3Arm64`
         * - `ContainerOS`
         * @example `CentOS`
         */
        image_type: string;
        /**
         * 操作系统类型，例如：
         * - `Windows`
         * - `Linux`
         * @example `Linux`
         */
        os_type: string;
        /**
         * 镜像分类，部分取值：
         * - `system`：公共镜像。
         * - `self`：您的自定义镜像。
         * - `others`：其他用户的公开镜像。
         * - `marketplace`：镜像市场镜像。
         * @example `system`
         */
        image_category: string;
        /**
         * 镜像架构。
         * @example `x86_64`
         */
        architecture: string;
    }[];
    /**
     * Kubernetes版本元数据信息。
     */
    meta_data: any;
    /**
     * 容器运行时配置。
     */
    runtimes: any[];
    /**
     * ACK发布的Kubernetes版本。更多版本信息，请参见[Kubernetes版本发布概览](~~185269~~)。
     * @example `1.26.3-aliyun.1`
     */
    version: string;
    /**
     * Kubernetes版本发布时间。
     * @example `2023-04-30T00:00:00Z`
     */
    release_date: string;
    /**
     * Kubernetes版本过期时间。
     * @example `2025-04-30T00:00:00Z`
     */
    expiration_date: string;
    /**
     * Kubernetes版本是否可创建。
     * @example `true`
     */
    creatable: boolean;
    /**
     * 可升级的版本列表。
     */
    upgradable_versions: string[];
}[];
