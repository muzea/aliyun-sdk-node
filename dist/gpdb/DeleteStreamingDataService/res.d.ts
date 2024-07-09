export interface DeleteStreamingDataServiceResponse {
    /**
     * 请求ID。
     * @example `B4CAF581-2AC7-41AD-8940-D56DF7AADF5B`
     */
    RequestId: string;
    /**
     * API执行状态，取值如下：
     * - **false**：执行失败。
     * - **true**：执行成功。
     * @example `true
    `
     */
    Status: boolean;
    /**
     * 错误信息。
     * 只会在**Status**参数返回值为**false**时返回该参数。
     * @example `This external service cannot be deleted because it is still used by other data source.`
     */
    ErrorMessage: string;
}
