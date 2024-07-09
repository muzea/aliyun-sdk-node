export interface AddImageRequest {
    /**
     * 镜像名称。
     * @example `app-image
    `
     */
    "Name": string;
    /**
     * 镜像版本。
     * @example `V1.0`
     */
    "ImageVersion"?: string;
    /**
     * 镜像描述。
     * @example `应用测试镜像。
    `
     */
    "Description"?: string;
    /**
     * 容器镜像配置。
     */
    "ContainerImageSpec"?: {
        /**
         * 容器镜像访问链接。
         * @example `registry-vpc.cn-hangzhou.aliyuncs.com/ehpc_open/nginx:latest
        `
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
         * 企业版镜像仓库 ID。
         * @example `cri-xyz795ygf8k9****
        `
         */
        RegistryCriId: string;
        /**
         * 私有镜像仓库鉴权。
         */
        RegistryCredential: {
            /**
             * 镜像仓库的注册地址。
             * @example `registry-vpc.cn-hangzhou.aliyuncs.com
            `
             */
            Server: string;
            /**
             * 登录用户名。
             * @example `username`
             */
            UserName: string;
            /**
             * 登录密码。
             * @example `userpassword`
             */
            Password: string;
        };
    };
    /**
     * 虚拟机镜像配置。
     */
    "VMImageSpec"?: {
        /**
         * 镜像 ID。
         * @example `m-bp1akkkr1rkxtb******
        `
         */
        ImageId: string;
    };
}
