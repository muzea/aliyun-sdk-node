export interface CheckHadoopDataSourceResponse {
    /**
     * 请求ID。
     * @example `B4CAF581-2AC7-41AD-8940-D56DF7AADF5B`
     */
    RequestId: string;
    /**
     * 服务状态：
     * - 可用：Running
     * - 不可用：Failed
     * @example `Running`
     */
    Status: string;
    /**
     * 服务返回信息：服务不可用时返回报错信息，可用时返回为""。
     * @example `serivce unavaliable`
     */
    Message: string;
}
