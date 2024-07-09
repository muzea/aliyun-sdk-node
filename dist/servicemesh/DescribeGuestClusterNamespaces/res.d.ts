export interface DescribeGuestClusterNamespacesResponse {
    /**
     * 请求ID。
     * @example `31d3a0f0-07ed-4f6e-9004-1804498c****`
     */
    RequestId: string;
    /**
     * 命名空间名称列表。
     */
    NsList: string[];
    /**
     * 命名空间的标签，仅在`ShowNsLabels`入参设置为`true`时有值。
     * @example `{"default":{"istio-injection":"enabled"}}`
     */
    NsLabels: any;
}
