export interface DescribeSelfImagesResponse {
    /**
     * 返回码。
     * @example `0`
     */
    Code: number;
    Images: {
        /**
         * 镜像信息。
         */
        Image: {
            /**
             * 镜像的体系架构。取值：
             * - i386
             * - x86_64
             * @example `x86_64`
             */
            Architecture: string;
            /**
             * 镜像的创建时间。按照ISO8601标准表示，并需要使用UTC时间，格式为yyyy-MM-ddTHH:mm:ssZ。
             * @example `2017-12-08T12:10:03Z`
             */
            CreationTime: string;
            /**
             * 镜像ID。
             * @example `centos_6_08_64_20G_a****`
             */
            ImageId: string;
            /**
             * 镜像名称。
             * @example `centos_6_08_64_20G_a****`
             */
            ImageName: string;
            /**
             * 镜像所有者别名。取值：
             * - **others**：共享给您的自定义镜像。
             * - **self**：您的自定义镜像。
             * @example `self`
             */
            ImageOwnerAlias: string;
            /**
             * 镜像大小，单位：GiB。
             * @example `20`
             */
            ImageSize: string;
            /**
             * 实例ID。
             * @example `i-5iqczfxps7csjrxeca****`
             */
            InstanceId: string;
            /**
             * 系统版本。
             * @example `7.2`
             */
            OsVersion: string;
            /**
             * 平台。
             * - centos
             * - ubuntu
             * - alios
             * - debian
             * - rhel
             * - windows
             * @example `centos`
             */
            Platform: string;
            /**
             * 镜像状态。
             * - Creating： 创建中。
             * - Packing,：打包中。
             * - Uploading：上传中。
             * - Pack_failed：打包失败。
             * - Upload_failed：上传失败。
             * - Available：可用  只有可用中状态的镜像，才可以被使用及做操作。
             * - Unavailable：不可用。
             * - Copying： 拷贝中。
             * @example `Creating`
             */
            Status: string;
            /**
             * 计算属性
             * ens_vm/ens: X86计算
             * bare_metal: X86裸机/X86裸金属
             * arm_vm: ARM计算
             * arm_bare_metal: ARM裸机/ARM裸金属
             * pcfarm: 异构计算
             * @example `ens_vm`
             */
            ComputeType: string;
            /**
             * 快照ID。
             * @example `sp-5yt3bdedxzdz6t6uuw****`
             */
            SnapshotId: string;
        }[];
    };
    /**
     * 请求ID。
     * @example `A8B8EB73-B4FD-4262-8EF6-680DF39C9BA0`
     */
    RequestId: string;
}
