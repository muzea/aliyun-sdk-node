export interface GetVmMetaResponse {
    /**
     * VM网格化所需的元数据信息
     */
    VmMetaInfo: {
        /**
         * Hosts内容
         * @example `....`
         */
        HostsContent: string;
        /**
         * Token内容
         * @example `....`
         */
        TokenContent: string;
        /**
         * EnvoyEnv内容
         * @example `....`
         */
        EnvoyEnvContent: string;
    };
    /**
     * 请求ID
     * @example `9522f7c9-63a1-4603-b850-37d12a****`
     */
    RequestId: string;
}
