export interface GetInstanceVpcEndpointResponse {
    /**
     * 返回值
     * @example `success`
     */
    Code: string;
    /**
     * 调用是否成功，取值：
     * - `true`：调用成功
     * - `false`：调用失败
     * @example `true`
     */
    IsSuccess: boolean;
    /**
     * 请求ID
     * @example `BAE9349D-A587-4F9A-B574-9DA0EF2638D1`
     */
    RequestId: string;
    /**
     * 是否开启访问控制，取值：
     * - `true`：开启访问控制
     * - `false`：不开启访问控制
     * @example `true`
     */
    Enable: boolean;
    /**
     * 域名列表
     */
    Domains: string[];
    /**
     * 关联的VPC列表
     */
    LinkedVpcs: {
        /**
         * VPC状态，取值：
         * - `CREATING`：创建中
         * - `RUNNING`：运行中
         * @example `CREATING`
         */
        Status: string;
        /**
         * VPC ID
         * @example `vpc-uf6aamu2nomfr1thd****`
         */
        VpcId: string;
        /**
         * IP地址
         * @example `192.168.10.11`
         */
        Ip: string;
        /**
         * 缺省访问策略
         * @example `false`
         */
        DefaultAccess: boolean;
        /**
         * 交换机ID
         * @example `vsw-uf62m5vmxl2e72dk7****`
         */
        VswitchId: string;
    }[];
    /**
     * 设置访问的模块，取值：
     * - `Registry`：访问镜像仓库
     * - `Chart`：访问Helm Chart
     * @example `Registry`
     */
    ModuleName: string;
}
