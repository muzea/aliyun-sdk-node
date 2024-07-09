export interface QueryRegionConfigResponse {
    /**
     * 接口状态或POP错误码
     * @example `200`
     */
    Code: number;
    /**
     * 附加信息
     * @example `success`
     */
    Message: string;
    /**
     * 请求ID
     * @example `b197-40ab-9155-7ca7`
     */
    RequestId: string;
    /**
     * 地域配置信息
     */
    RegionConfig: {
        /**
         * 地域序号，该参数已废弃。
         * @example `1`
         */
        No: number;
        /**
         * 地址服务器域名
         * @example `****.edas.aliyun.com`
         */
        AddressServerHost: string;
        /**
         * 地域标识。固定值，即`ALIYUN_SHARE`。
         * @example `ALIYUN_SHARE`
         */
        Tag: string;
        /**
         * Agent脚本安装路径
         * @example `http://edas-qd.oss-cn-****-internal.aliyuncs.com/****sh`
         */
        AgentInstallScript: string;
        /**
         * 文件服务器类型
         * @example `oss`
         */
        FileServerType: string;
        /**
         * 地域配置名称
         * @example `华北2`
         */
        Name: string;
        /**
         * 官方镜像ID
         * @example `m-2zea4hx8f9zxqah2****`
         */
        ImageId: string;
        /**
         * 地域配置ID
         * @example `cn-beijing`
         */
        Id: string;
        /**
         * 文件服务信息
         */
        FileServerConfig: {
            /**
             * 文件服务器内部URL
             * @example `oss-cn-beijing-****.aliyuncs.com`
             */
            InternalUrl: string;
            /**
             * 文件服务器公网URL
             * @example `oss-cn-beijing.aliyuncs.com`
             */
            PublicUrl: string;
            /**
             * 文件服务器VPC URL
             * @example `v*****-oss-cn-beijing.aliyuncs.com`
             */
            VpcUrl: string;
            /**
             * 文件服务器OSS Bucket
             * @example `edas-bj`
             */
            Bucket: string;
        };
    };
}
