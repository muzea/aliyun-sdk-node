export interface GetK8sServicesResponse {
    /**
     * 变更流程ID。
     * @example `200`
     */
    Code: number;
    /**
     * 附加信息。
     * @example `success`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `4823-bhjf-23u4-eiufh`
     */
    RequestId: string;
    /**
     * K8s服务Service列表。
     */
    Services: {
        /**
         * 服务类型。
         * @example `ClusterIP`
         */
        Type: string;
        /**
         * 服务名。
         * @example `service-http`
         */
        Name: string;
        /**
         * K8s服务Service IP地址。
         * @example `104.23.xx.xx`
         */
        ClusterIP: string;
        /**
         * 端口映射列表。
         */
        ServicePorts: {
            /**
             * 后端容器端口。
             * @example `8080`
             */
            TargetPort: string;
            /**
             * 节点端口。
             * @example `0`
             */
            NodePort: number;
            /**
             * 前端服务端口。
             * @example `80`
             */
            Port: number;
            /**
             * 服务协议。
             * @example `TCP`
             */
            Protocol: string;
        }[];
    }[];
}
