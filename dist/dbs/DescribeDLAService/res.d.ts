export interface DescribeDLAServiceResponse {
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 请求ID。
     * @example `4F1888AC-1138-4995-B9FE-D2734F61C058`
     */
    RequestId: string;
    /**
     * 错误码。
     * @example `Param.NotFound`
     */
    ErrCode: string;
    /**
     * 是否请求成功。
     * @example `true`
     */
    Success: boolean;
    /**
     * 备份计划的DLA服务状态， 取值：
     * - **Running**：运行中
     * - **Closing**：关闭中
     * - **Closed**：已关闭
     * @example `Running`
     */
    State: string;
    /**
     * 错误信息。
     * @example `The specified parameter %s value is not valid.`
     */
    ErrMessage: string;
    /**
     * 是否开启增量数据自动入湖，开启后，系统会自动将新产生的备份集添加入湖，取值：
     * - **true**：开启
     * - **false**：不开启
     * @example `true`
     */
    AutoAdd: boolean;
    /**
     * 返回结果中是否存在失败的DLA任务，取值：
     * - **true**：存在
     * - **false**：不存在
     * @example `false`
     */
    HaveJobFailed: boolean;
}
