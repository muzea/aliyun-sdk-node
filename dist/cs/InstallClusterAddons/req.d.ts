export interface InstallClusterAddonsRequest {
    /**
     * 集群ID。
     * @example `c82e6987e2961451182edacd74faf****`
     */
    "ClusterId": string;
    /**
     * 请求体参数。
     * @example `ags-metrics-collector`
     */
    "body"?: {
        /**
         * 组件名称。
         * @example `ags-metrics-collector`
         */
        name: string;
        /**
         * 组件版本。
         * > 可以API接口[DescribeClusterAddonsVersion](~~197434~~)通过组件列表查询版本号。
         * @example `v1.0.0.2-cc3b2d6-aliyun`
         */
        version: string;
        /**
         * 组件自定义参数，使用JSON字符串编码。
         * @example `{\"IngressDashboardEnabled\":\"true\",\"sls_project_name\":\"your_sls_project_name\"}"}`
         */
        config: string;
    }[];
}
