export interface GetAppGroupResponse {
    /**
     * Id of the request
     * @example `39090022-1F3B-4797-8518-6B61095F1AF0`
     */
    RequestId: string;
    /**
     * 接口状态码。
     * @example `200`
     */
    Code: number;
    /**
     * 附加信息。
     * @example `app is not existed, groupId=xxxx, namesapce=xxxx`
     */
    Message: string;
    /**
     * 调用接口是否成功。取值如下：
     * - **true**：成功
     * - **false**：失败
     * @example `true`
     */
    Success: boolean;
    /**
     * 应用分组信息
     */
    Data: {
        /**
         * 应用名称
         * @example `DocTest`
         */
        AppName: string;
        /**
         * 应用描述
         * @example `Test`
         */
        Description: string;
        /**
         * 应用分组可配置最大任务数
         * @example `1000`
         */
        MaxJobs: number;
        /**
         * 应用ID
         * @example `testSchedulerx.defaultGroup`
         */
        GroupId: string;
        /**
         * 报警配置JSON字段。关于此字段的详细说明参见下文**关于返回参数的补充说明**。
         * @example `{"sendChannel":"sms,mail,ding"}`
         */
        MonitorConfigJson: string;
        /**
         * 应用分组当前配置任务数
         * @example `1`
         */
        CurJobs: number;
        /**
         * 应用AppKey
         * @example `QI4lWMZ+xk1rNB67jFUhaw==`
         */
        AppKey: string;
        /**
         * 应用版本，1:基础版，2:专业版
         * @example `2`
         */
        AppVersion: string;
    };
}
