export interface GetPrometheusGlobalViewResponse {
    /**
     * 返回结构体。
     * @example `{     "clusterId":"聚合实例ClusterId",     "groupName":"聚合实例名称",     "dataSources":[         {             "sourceName":"数据源名称- ArmsPrometheus No.1",             "sourceType":"AlibabaPrometheus",             "userId":"UserID",             "clusterId":"ClusterId"         },       // more datasources     ] }`
     */
    Data: string;
    /**
     * 请求ID。
     * @example `743AD493-D006-53BD-AAEC-DDCE7FB68EA7`
     */
    RequestId: string;
    /**
     * 状态码。200为成功，其他状态码为异常。
     * @example `200`
     */
    Code: number;
    /**
     * 返回结果的提示信息。
     * @example `success`
     */
    Message: string;
}
