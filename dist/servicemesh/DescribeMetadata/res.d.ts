export interface DescribeMetadataResponse {
    /**
     * 请求ID。
     * @example `F93DDAD7-6E04-5AC3-86F4-852708******`
     */
    RequestId: string;
    /**
     * 服务网格ASM元数据，包含ASM产品的基本信息。
     */
    MetaData: {
        /**
         * ASM各版本的CRD信息。
         */
        VersionCrds: any[];
        /**
         * ASM版本列表。
         */
        Versions: string[];
        /**
         * ASM可用地域列表。
         */
        Regions: string[];
        /**
         * 当前版本。
         * @example `v1.14.3.87-g96cf7305-aliyun`
         */
        CurrentVersion: string;
        /**
         * ASM版本对应的Istio版本。
         */
        VersionRegistry: any[];
        /**
         * ASM商业版的版本信息。
         */
        ProEdition: {
            /**
             * ASM版本列表。
             */
            Versions: string[];
            /**
             * 当前版本。
             * @example `v1.14.3.87-g96cf7305-aliyun`
             */
            CurrentVersion: string;
            /**
             * ASM版本对应的Istio版本。
             */
            VersionRegistry: any[];
            /**
             * ASM各版本的CRD信息。
             */
            VersionCrds: any[];
        };
        /**
         * ASM 与 K8s 版本兼容性列表
         */
        CompatibilityInfoList: any[];
    };
}
