export interface ListClientPluginsResponse {
    /**
     * 请求ID
     * @example `647D4B28-7646-424E-88DD-61B7969E5C1E`
     */
    RequestId: string;
    /**
     * 客户端插件信息
     */
    ClientPlugins: {
        /**
         * 插件包名
         * @example `com.aliyun.aicc.yundevice`
         */
        PkgName: string;
        /**
         * 插件名称
         * @example `YunDevice`
         */
        Name: string;
    }[];
}
