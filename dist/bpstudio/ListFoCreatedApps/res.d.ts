export interface ListFoCreatedAppsResponse {
    /**
     * 请求ID
     * @example `40F63F07-3AB6-53B3-8825-0580C130E3EA`
     */
    RequestId: string;
    /**
     * 错误信息
     * @example `Cannot find region according to your domain.`
     */
    Message: string;
    /**
     * 状态码
     * @example `200`
     */
    Code: string;
    /**
     * 模板列表
     */
    Data: {
        /**
         * 应用ID
         * @example `JIX9NEZUALGS46UI`
         */
        ApplicationId: string;
        /**
         * 标题
         * @example `容灾计划1`
         */
        Title: string;
        /**
         * 错误报告url
         * @example `14318082782*****​/drs-application-3ET9ZEVPOWRDZK0N.pdf`
         */
        ReportUrl: string;
        /**
         * 应用状态
         * @example `Deployed_Success`
         */
        Status: string;
    }[];
}
