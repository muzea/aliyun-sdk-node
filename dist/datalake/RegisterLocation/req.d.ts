export interface RegisterLocationRequest {
    /**
     * HTTP
     */
    "body"?: {
        /**
         * 注册的OSS路径
         * @example `oss://mybucket/`
         */
        Location: string;
        /**
         * RAM角色名称
         * > Data Lake Formation 读/写OSS路径下的数据，需要相关授权角色，可以选择AliyunDLFWorkFlowDefaultRole角色，它将会自动内建相关路径的授权权限。或者您自定义角色，但需要由您手工保障该角色，有相应路径的读写权限。
         * @example `AliyunDLFWorkFlowDefaultRole`
         */
        RoleName: string;
        /**
         * 是否启用OSS存储空间清单
         * @example `true`
         */
        InventoryCollectEnabled: boolean;
        /**
         * 是否启用OSS日志转存
         * @example `true`
         */
        OssLogCollectEnabled: boolean;
    };
}
