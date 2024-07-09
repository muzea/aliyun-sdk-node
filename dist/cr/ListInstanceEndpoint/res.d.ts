export interface ListInstanceEndpointResponse {
    /**
     * 返回值
     * @example `success`
     */
    Code: string;
    /**
     * 是否成功
     * @example `true`
     */
    IsSuccess: boolean;
    /**
     * 请求ID
     * @example `1B21A877-66A2-4095-90EB-20A7781A4A67`
     */
    RequestId: string;
    /**
     * 网络访问入口列表
     */
    Endpoints: {
        /**
         * 状态
         * @example `RUNNING`
         */
        Status: string;
        /**
         * 网络访问入口类型
         * @example `internet`
         */
        EndpointType: string;
        /**
         * 打开访问控制
         * @example `true`
         */
        AclEnable: boolean;
        /**
         * 开启
         * @example `true`
         */
        Enable: boolean;
        /**
         * 域名列表
         */
        Domains: {
            /**
             * 类型
             * @example `SYSTEM`
             */
            Type: string;
            /**
             * 域名
             * @example `t****-registry.cn-shanghai.cr.aliyuncs.com`
             */
            Domain: string;
        }[];
        /**
         * 关联VPC列表
         */
        LinkedVpcs: {
            /**
             * VPC ID
             * @example `null`
             */
            VpcId: string;
        }[];
        /**
         * 访问控制实体列表
         */
        AclEntries: {
            /**
             * 实体信息
             * @example `null`
             */
            Entry: string;
        }[];
    }[];
}
