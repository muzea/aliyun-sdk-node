export interface CheckInstanceResourcesRequest {
    /**
     * 请求体参数。
     */
    "body"?: {
        /**
         * 资源类型。
         * - Hologres
         * - EAS
         * - BE
         * - Rec
         * - Platform
         * - SLS
         * - DataHub
         * - Kafka
         * - Flinkvvp
         * - ACR
         * - OSS
         * - DataWorks
         * - PAI
         * - MaxCompute
         * - GraphCompute
         * - Redis
         * @example `OSS`
         */
        Type: string;
        /**
         * 资源地址。
         * @example `bucket-test-123`
         */
        Uri: string;
    };
    /**
     * 实例ID，可通过接口[ListInstances](~~2411819~~)获取。
     * @example `pairec-cn-test1`
     */
    "InstanceId": string;
}
