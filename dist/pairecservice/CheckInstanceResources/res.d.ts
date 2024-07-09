export interface CheckInstanceResourcesResponse {
    /**
     * 请求ID。
     * @example `9763624B-5FBB-5E3A-9193-B1ADB554CEAE`
     */
    RequestId: string;
    /**
     * 资源列表。
     */
    Resources: {
        /**
         * 资源类型
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
        /**
         * 访问状态
         * - Success
         * - Failure
         * @example `Success`
         */
        Status: string;
    }[];
}
