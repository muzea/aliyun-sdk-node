export interface DescribeSiteMonitorDataResponse {
    /**
     * 分页游标。
     * @example `ea42e5220930ea42e522****`
     */
    NextToken: string;
    /**
     * 监控数据。
     * @example `[{"Maximum":247,"Mimimum":61,"Average":154,"userId":"127067667954****","taskId":"49f7b317-7645-4cc9-94fd-ea42e522****","timestamp":1551581760000}]`
     */
    Data: string;
    /**
     * 请求ID。
     * @example `3febb181-0d98-4af9-8b04-7faf36b048b9`
     */
    RequestId: string;
    /**
     * 操作是否成功。true表示成功，false表示失败。
     * @example `true`
     */
    Success: string;
    /**
     * 状态码。
     * >200表示成功。
     * @example `200`
     */
    Code: string;
    /**
     * 返回信息。
     * @example `Successful`
     */
    Message: string;
}
