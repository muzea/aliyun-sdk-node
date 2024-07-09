export interface GetImageResponse {
    /**
     * 请求ID。
     * @example `04F0F334-1335-436C-A1D7-6C044FE73368
    `
     */
    RequestId: string;
    /**
     * 执行命令并获取结果的过程是否成功。取值范围：
     * - true：成功。
     * - false：失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 本次请求条件下的数据总量。
     * @example `10`
     */
    TotalCount: number;
    /**
     * 镜像详情。
     */
    Image: {
        /**
         * 镜像类型。
         * @example `VM`
         */
        ImageType: string;
        AppId: string;
        /**
         * 镜像名称。
         * @example `app-image`
         */
        Name: string;
        /**
         * 版本。
         * @example `v1.0`
         */
        Version: string;
        /**
         * 镜像描述。
         * @example `应用测试镜像。`
         */
        Description: string;
        /**
         * 镜像大小。单位：GiB。
         * @example `40 GiB`
         */
        Size: string;
        /**
         * 镜像创建时间。
         * @example `2022-12-23T09:51:39Z`
         */
        CreateTime: string;
        Status: string;
        /**
         * 容器镜像配置详情。
         */
        ContainerImageSpec: {
            /**
             * 容器镜像访问链接。
             * @example `registry-vpc.cn-hangzhou.aliyuncs.com/ehpc_open/nginx:latest`
             */
            RegistryUrl: string;
            /**
             * 是否为阿里云镜像仓库。
             * - True：是。
             * - False：否。
             * @example `True`
             */
            IsACRRegistry: boolean;
            /**
             * 是否为阿里云镜像仓库企业版。
             * - True：是。
             * - False：否。
             * @example `True`
             */
            IsACREnterprise: boolean;
            /**
             * 企业版镜像仓库ID。
             * @example `cri-xyz795ygf8k9****`
             */
            RegistryCriId: string;
            /**
             * 私有镜像仓库鉴权。
             */
            RegistryCredential: {
                /**
                 * 镜像仓库的注册地址。
                 * @example `registry-vpc.cn-hangzhou.aliyuncs.com`
                 */
                Server: string;
                /**
                 * 登录用户名。
                 * @example `username`
                 */
                UserName: string;
                /**
                 * 登录用户密码。
                 * @example `userpassword`
                 */
                Password: string;
            };
        };
        /**
         * 虚拟机镜像配置详情。
         */
        VMImageSpec: {
            /**
             * 镜像ID。
             * @example `m-uf60twafjtaart******`
             */
            ImageId: string;
            /**
             * OS具体版本标识。
             * @example `CentOS  7.6 64 bit`
             */
            OsTag: string;
            /**
             * 平台类型。
             * @example `CentOS`
             */
            Platform: string;
            /**
             * 架构类型。
             * @example `x86_64`
             */
            Architecture: string;
        };
    };
}
