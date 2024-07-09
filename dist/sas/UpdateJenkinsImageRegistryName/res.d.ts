export interface UpdateJenkinsImageRegistryNameResponse {
    /**
     * 返回结果。取值：
     * - **true**：处理成功
     * - **false**：处理失败
     * @example `true`
     */
    Data: boolean;
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `4347E985-6E64-467B-96EC-30D4EA9E****`
     */
    RequestId: string;
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 执行花费的时间。单位：秒。
     * @example `1`
     */
    TimeCost: number;
}
