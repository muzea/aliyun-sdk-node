export interface DescribeImportedServicesDetailResponse {
    /**
     * 请求ID
     * @example `E0496204-7586-5B4C-B364-2361CC0EDxxxx`
     */
    RequestId: string;
    /**
     * 服务详细信息列表
     */
    Details: {
        /**
         * 服务名称
         * @example `productpage`
         */
        ServiceName: string;
        /**
         * 服务所在命名空间
         * @example `default`
         */
        Namespace: string;
        /**
         * 标签列表
         */
        Labels: any;
        /**
         * 数据面集群列表
         */
        ClusterIds: string[];
        /**
         * 服务类型
         * @example `Kubernetes`
         */
        ServiceType: string;
        /**
         * 服务声明的端口列表
         */
        Ports: {
            /**
             * 端口名称
             * @example `http-0`
             */
            Name: string;
            /**
             * 端口对应协议
             * @example `tcp`
             */
            Protocol: string;
            /**
             * 端口
             * @example `80`
             */
            Port: number;
            /**
             * 容器端口
             * @example `8080`
             */
            TargetPort: number;
            /**
             * 节点端口
             * @example `12345`
             */
            NodePort: number;
        }[];
    }[];
}
