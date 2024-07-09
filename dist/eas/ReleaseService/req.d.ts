export interface ReleaseServiceRequest {
    /**
     * 服务所在地域ID。
     * @example `cn-shanghai`
     */
    "ClusterId": string;
    /**
     * 服务名称。如何查看服务名称，请参见[ListServices ](~~412109~~)。
     * @example `foo`
     */
    "ServiceName": string;
    /**
     * 请求Body。
     */
    "body"?: {
        /**
         * 灰度权重，范围0~100。
         * @example `100`
         */
        Weight: number;
        /**
         * 流量状态，取值如下：
         * - standalone：独立流量。
         * - grouping：分组流量。
         * @example `grouping`
         */
        TrafficState: string;
    };
}
