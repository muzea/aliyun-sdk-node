export interface DescribeASMGatewayImportedServicesResponse {
    /**
     * 请求ID
     * @example `11fd0027-c27e-41bb-a565-75583054****`
     */
    RequestId: string;
    /**
     * 导入的服务列表
     */
    ImportedServices: {
        /**
         * 服务名称
         * @example `productpage`
         */
        ServiceName: string;
        /**
         * 服务所在命名空间
         * @example `default`
         */
        ServiceNamespace: string;
    }[];
}
