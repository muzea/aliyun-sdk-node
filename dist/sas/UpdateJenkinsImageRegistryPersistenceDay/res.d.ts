export interface UpdateJenkinsImageRegistryPersistenceDayResponse {
    /**
     * 处理结果。取值：
     * - **true**：成功
     * - **false**：失败
     * @example `true`
     */
    Data: boolean;
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `69F88BA1-004C-51E2-BF5C-A3220E5A****`
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
