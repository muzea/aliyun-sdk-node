export interface DescribeJobStatusResponse {
    /**
     * 返回的详细内容。
     */
    Data: {
        /**
         * 生成接入任务的总数。
         * @example `60`
         */
        TaskCount: number;
        /**
         * 完成任务的总数。
         * @example `52`
         */
        FinishCount: number;
        /**
         * 失败任务的总数。
         * @example `8`
         */
        FailedCount: number;
        /**
         * 提交任务的状态。
         * @example `finish`
         */
        TaskStatus: string;
        /**
         * 生成的配置ID。
         * @example `xxxx_folder_xxxx`
         */
        ConfigId: string;
        /**
         * 资源目录文件夹ID。
         * @example `fd-xxxxx`
         */
        FolderId: string;
        /**
         * 失败任务的列表，枚举接入失败的阿里云账号和产品code。
         */
        ErrTaskList: {
            /**
             * 阿里云账号ID。
             * @example `123XXXXX`
             */
            UserId: number;
            /**
             * 接入失败的产品日志列表。
             */
            ProductList: {
                /**
                 * 产品Code。
                 * @example `sas`
                 */
                ProductCode: string;
                /**
                 * 接入失败的日志列表。
                 */
                LogList: {
                    /**
                     * 产品Code。
                     * @example `sas`
                     */
                    ProductCode: string;
                    /**
                     * 日志Code。
                     * @example `cloud_siem_aegis_proc`
                     */
                    LogCode: string;
                    /**
                     * 地域ID。
                     * @example `cn-shanghai`
                     */
                    RegionCode: string;
                    /**
                     * 待接入日志的sls project name的pattern。
                     * @example `vpc-project-test`
                     */
                    ProjectNamePattern: string;
                    /**
                     * 待接入日志的sls logstore name的pattern。
                     * @example `vpc_project_test
                    `
                     */
                    LogStoreNamePattern: string;
                    /**
                     * 接入失败的原因。
                     * @example `ProjectLogStoreNotFound`
                     */
                    ErrorCode: string;
                }[];
            }[];
        }[];
    };
    /**
     * 请求是否成功。取值：
     * - **true**：成功
     * - **false**：失败
     * @example `true`
     */
    Success: boolean;
    /**
     * 请求成功返回200。
     * @example `200`
     */
    Code: number;
    /**
     * 请求成功为空，请求失败原因详细描述。
     * @example `success`
     */
    Message: string;
    /**
     * 请求成功为空，调用出错时返回的具体错误码。
     * @example `ServerError
    `
     */
    ErrCode: string;
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `5B0DFF6D-XXXX
    `
     */
    RequestId: string;
}
