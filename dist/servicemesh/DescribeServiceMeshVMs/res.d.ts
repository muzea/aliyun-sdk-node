export interface DescribeServiceMeshVMsResponse {
    /**
     * 请求ID
     * @example `4b2c0fe0-6705-4614-8521-6b9d289163c8`
     */
    RequestId: string;
    /**
     * 和服务网格相同VPC的虚拟机列表
     */
    VMs: {
        /**
         * 虚拟机状态
         * @example `Running`
         */
        Status: string;
        /**
         * 虚拟机ID
         * @example `i-2ze0kub9scdguom****`
         */
        InstanceId: string;
        /**
         * 是否已打标签
         * @example `false`
         */
        HasTag: boolean;
        /**
         * 虚拟机IP地址
         * @example `192.168.2.241`
         */
        IpAddress: string;
        /**
         * 主机名
         * @example `iZ2ze45cgxkx4q12eh****`
         */
        HostName: string;
        /**
         * 安全组
         * @example `sg-2zeaqy08amco9osl****`
         */
        SecurityGroupIds: string;
        /**
         * 服务网格ID
         * @example `ccb37ff104caf419fbf48fb38e6f3****`
         */
        ServiceMeshId: string;
        /**
         * 地域ID
         * @example `cn-beijing`
         */
        Region: string;
    }[];
}
