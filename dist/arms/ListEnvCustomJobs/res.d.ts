export interface ListEnvCustomJobsResponse {
    /**
     * Id of the request
     * @example `2A0CEDF1-06FE-44AC-8E21-21A5BE65****`
     */
    RequestId: string;
    /**
     * 状态码。200表示成功。
     * @example `200`
     */
    Code: number;
    /**
     * 返回结构体。
     */
    Data: {
        /**
         * 环境实例ID。
         * @example `env-xxxx`
         */
        EnvironmentId: string;
        /**
         * 地域ID。
         * @example `cn-hangzhou`
         */
        RegionId: string;
        /**
         * 自定义job名称。
         * @example `job1`
         */
        CustomJobName: string;
        /**
         * 请求参数encryptYaml为true，则返回base64编码后的yaml串。否则返回明文yaml串。
         * @example `参见补充说明。`
         */
        ConfigYaml: string;
        /**
         * 状态。
         * @example `run`
         */
        Status: string;
        /**
         * 创建时间（时间戳）。
         * @example `2022-01-01T10:11:34Z`
         */
        CreationTimestamp: string;
        /**
         * 归属的组件名。
         * @example `mysql`
         */
        AddonName: string;
        /**
         * 归属的组件实例名。
         * @example `mysql1`
         */
        AddonReleaseName: string;
        /**
         * 归属的组件版本。
         * @example `1.1.0`
         */
        AddonVersion: string;
        /**
         * 抓取配置。
         */
        ScrapeConfigs: {
            /**
             * Job名。
             * @example `custom-sd-demo`
             */
            JobName: string;
            /**
             * 抓取间隔。
             * @example `30s`
             */
            ScrapeInterval: string;
            /**
             * 抓取metric的路径。
             * @example `/metrics`
             */
            MetricsPath: string;
            /**
             * 服务发现方式列表。
             */
            ScrapeDiscoverys: string[];
        }[];
    }[];
    /**
     * 返回结果的提示信息。
     * @example `success`
     */
    Message: string;
}
