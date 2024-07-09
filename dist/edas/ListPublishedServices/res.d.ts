export interface ListPublishedServicesResponse {
    /**
     * Code码。
     * @example `200`
     */
    Code: number;
    /**
     * 信息。
     * @example `success`
     */
    Message: string;
    /**
     * 唯一请求ID。
     * @example `1D6FC-4307-4583-BA6F-215F3857E****`
     */
    RequestId: string;
    PublishedServicesList: {
        /**
         * 发布的服务列表。
         */
        ListPublishedServices: {
            /**
             * 是否是Docker应用：
             * - true：是。
             * - false：否。
             * @example `false`
             */
            DockerApplication: boolean;
            /**
             * 发布的服务类型。
             * @example `RESTful`
             */
            Type: string;
            /**
             * 发布的服务版本。
             * @example `--`
             */
            Version: string;
            /**
             * 应用ID。
             * @example `ECD1D6FC-4307-4583-BA6F-215F3857E****`
             */
            AppId: string;
            /**
             * 保留字段。
             * @example `""`
             */
            Group2Ip: string;
            /**
             * 发布的服务名称。
             * @example `providers:com.****`
             */
            Name: string;
            Ips: {
                ip: string[];
            };
            Groups: {
                group: string[];
            };
        }[];
    };
}
