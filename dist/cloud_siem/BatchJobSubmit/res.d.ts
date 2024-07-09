export interface BatchJobSubmitResponse {
    /**
     * 返回的具体数据。
     */
    Data: {
        /**
         * 任务提交ID，基于资源目录ID，文件夹ID，主账号ID生成。
         * @example `BATCH_JOB_XXXXXX`
         */
        SubmitId: string;
        /**
         * 生成的接入任务配置列表。
         */
        ConfigList: {
            /**
             * 阿里云账号ID。
             * @example `123xxxxxx`
             */
            UserId: number;
            /**
             * 产品列表。
             */
            ProductList: {
                /**
                 * 产品Code。
                 * @example `sas`
                 */
                ProductCode: string;
                /**
                 * 日志列表。
                 */
                LogList: {
                    /**
                     * 产品Code。
                     * @example `sas`
                     */
                    ProductCode: string;
                    /**
                     * 日志Code。
                     * @example `cloud_siem_cfw_flow`
                     */
                    LogCode: string;
                    /**
                     * 地域ID。
                     * @example `cn-shanghai`
                     */
                    RegionCode: string;
                    /**
                     * SLS Project Name模式。
                     * @example `vpc-test-project`
                     */
                    ProjectNamePattern: string;
                    /**
                     * SLS LogStore Name模式。
                     * @example `vpc-test-logstore`
                     */
                    LogStoreNamePattern: string;
                    /**
                     * 任务失败原因。
                     * @example `ProjectLogstoreNotFound`
                     */
                    ErrorCode: string;
                }[];
            }[];
        }[];
        /**
         * 提交接入任务总数。
         * @example `20`
         */
        TaskCount: number;
        /**
         * 配置ID，后台自动生成。
         * @example `xxxx_folder_xxxx`
         */
        ConfigId: string;
    };
    /**
     * 请求是否成功。取值：
     * - **true**：成功
     * - **false**：失败
     * @example `true`
     */
    Success: boolean;
    /**
     * 请求状态码，返回200代表请求成功。
     * @example `200`
     */
    Code: number;
    /**
     * 请求返回的Message，成功为success，失败返回具体的失败原因。
     * @example `success`
     */
    Message: string;
    /**
     * 请求成功为空，调用出错时返回的具体错误码。
     * @example `ServerError`
     */
    ErrCode: string;
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `5B0DFF6D-XXXX`
     */
    RequestId: string;
}
