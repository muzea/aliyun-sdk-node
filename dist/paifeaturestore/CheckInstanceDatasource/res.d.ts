export interface CheckInstanceDatasourceResponse {
    /**
     * 请求ID。
     * @example `C03B2680-AC9C-59CD-93C5-8142B92537FA`
     */
    RequestId: string;
    /**
     * 资源检测状态。
     * ● Success-成功。
     * ● Failure-失败。
     * @example `Success`
     */
    Status: string;
}
