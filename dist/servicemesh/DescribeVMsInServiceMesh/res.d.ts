export interface DescribeVMsInServiceMeshResponse {
    /**
     * 请求ID
     * @example `4b2c0fe0-6705-4614-8521-6b9d289163c8`
     */
    RequestId: string;
    /**
     * 已加入到服务网格的虚拟机列表
     */
    VMs: {
        /**
         * 虚拟机ID
         * @example `i-2ze45cgxkx4q12e****`
         */
        InstanceId: string;
        /**
         * 是否已打标签
         * @example `true`
         */
        HasTag: boolean;
        /**
         * 虚机机IP地址
         * @example `10.0.*,***`
         */
        IpAddress: string;
        /**
         * 主机名
         * @example `iZ2ze45cgxkx4q12eh9l****`
         */
        HostName: string;
        /**
         * 虚拟机状态
         * @example `Running`
         */
        Status: string;
        /**
         * 安全组
         * @example `sg-2zeaqy08amco9osl****`
         */
        SecurityGroupIds: string;
        /**
         * 地域ID
         * @example `cn-beijing`
         */
        Region: string;
    }[];
}
