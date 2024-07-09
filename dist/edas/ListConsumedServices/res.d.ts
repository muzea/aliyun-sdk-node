export interface ListConsumedServicesResponse {
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
     * @example `a5281053-08e4-47a5-b2ab-5c0323de7b5a`
     */
    RequestId: string;
    ConsumedServicesList: {
        /**
         * 消费的服务列表。
         */
        ListConsumedServices: {
            /**
             * 是否是Docker应用：
             * - true： 是。
             * - false：否。
             * @example `true`
             */
            DockerApplication: boolean;
            /**
             * 消费的服务类型。
             * @example `HSF`
             */
            Type: string;
            /**
             * 消费的服务版本。
             * @example `1.0`
             */
            Version: string;
            /**
             * 应用ID。
             * @example `a5281053-08e4-47a5-b2ab-5c0323de7b5a`
             */
            AppId: string;
            /**
             * 保留字段。
             * @example `""`
             */
            Group2Ip: string;
            /**
             * 消费的服务名称。
             * @example `service`
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
