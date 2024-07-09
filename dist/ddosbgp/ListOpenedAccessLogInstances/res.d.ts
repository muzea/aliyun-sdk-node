export interface ListOpenedAccessLogInstancesResponse {
    /**
     * 查询到的结果的数量，即已开启日志分析的DDoS原生防护实例的数量。
     * @example `1`
     */
    TotalCount: number;
    /**
     * 本次请求的ID。
     * @example `4DB64811-70A1-41C9-A0CE-CD8B260ED551`
     */
    RequestId: string;
    /**
     * DDoS原生防护实例的日志分析配置。
     */
    SlsConfigStatus: {
        /**
         * DDoS原生防护的实例ID。
         * @example `ddosbgp-cn-m7r1zce2****`
         */
        InstanceId: string;
        /**
         * 该实例是否已开启日志分析。取值：
         * - **true**：表示已开启。
         * - **false**：表示未开启。
         * @example `true`
         */
        Enable: boolean;
    }[];
}
