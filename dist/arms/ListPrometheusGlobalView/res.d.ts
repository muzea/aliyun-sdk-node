export interface ListPrometheusGlobalViewResponse {
    /**
     * 聚合实例列表，为JSON格式字符串。
     * @example `[   {groupName: "聚合实例名称", clusterId: "global-v2-clusterid", endpoint: "cn-hangzhou"}, //   ..... more items ]`
     */
    Data: string;
    /**
     * 请求ID，用于定位日志，排查问题。
     * @example `DBDCE95A-A0DD-5FC5-97CC-EEFC3D814385`
     */
    RequestId: string;
    /**
     * 状态码。说明 200表示成功。
     * @example `200`
     */
    Code: number;
    /**
     * 详细信息
     * @example `success`
     */
    Message: string;
}
