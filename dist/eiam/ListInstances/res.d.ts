export interface ListInstancesResponse {
    /**
     * 请求ID。
     * @example `0441BD79-92F3-53AA-8657-F8CE4A2B912A`
     */
    RequestId: string;
    /**
     * 列表总条数目。
     * @example `100`
     */
    TotalCount: number;
    /**
     * 实例信息列表。
     */
    Instances: {
        /**
         * 实例ID。
         * @example `idaas_eypq6ljgyeuwmlw672sulxxxxx`
         */
        InstanceId: string;
        /**
         * 实例创建时间，Unix时间戳格式，单位为毫秒。
         * @example `1550115455000`
         */
        CreateTime: number;
        /**
         * 实例状态，取值可选范围：
         * - creating：创建中。
         * - running：运行中。
         * @example `running`
         */
        Status: string;
        /**
         * 实例描述信息。
         * @example `正式环境`
         */
        Description: string;
        /**
         * 实例默认域名。
         */
        DefaultEndpoint: {
            /**
             * 实例域名地址。
             * @example `example-xxx.aliyunidaas.com
            `
             */
            Endpoint: string;
            /**
             * 实例域名状态，取值可选范围：
             * - resolved：已解析。
             * - unresolved：未解析。
             * @example `resolved`
             */
            Status: string;
        };
    }[];
}
