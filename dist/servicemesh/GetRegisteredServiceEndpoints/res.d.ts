export interface GetRegisteredServiceEndpointsResponse {
    /**
     * 服务端点信息列表
     */
    ServiceEndpoints: {
        /**
         * 服务地址
         * @example `192.168.25.153`
         */
        Address: string;
        /**
         * 数据面集群ID
         * @example `c80f45444b3da447da60a911390c2****`
         */
        ClusterId: string;
    }[];
    /**
     * 服务端点详细信息列表
     */
    EndPointSlice: {
        /**
         * 服务名称
         * @example `reviews`
         */
        ServiceName: string;
        /**
         * 命名空间
         * @example `default`
         */
        Namespace: string;
        /**
         * 服务所在的位置。可选参数：
         * - `MESH_INTERNAL`：服务在网格内部
         * - `MESH_EXTERNAL`：服务在网格外部
         * @example `MESH_INTERNAL`
         */
        Location: string;
        /**
         * 服务端点详细信息列表
         */
        EndpointsDetails: {
            /**
             * pod名称
             * @example `provider-v1-8c86b6898-h***`
             */
            PodName: string;
            /**
             * 服务端点地址
             * @example `127.2.**.**`
             */
            Address: string;
            /**
             * 端口列表
             */
            Ports: number[];
            /**
             * 服务地址
             * @example `www.demo.com`
             */
            Hostname: string;
            /**
             * 地域ID
             * @example `cn-hangzhou`
             */
            Region: string;
            /**
             * 是否注入Sidecar代理，取值：
             * - `true`：注入Sidecar代理
             * - `false`：不注入Sidecar代理
             * @example `false`
             */
            SidecarInjected: boolean;
        }[];
    };
    /**
     * 请求ID
     * @example `31d3a0f0-07ed-4f6e-9004-1804498c****`
     */
    RequestId: string;
}
