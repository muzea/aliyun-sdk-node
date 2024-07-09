export interface DescribeResourceLogResponse {
    /**
     * 请求ID。
     * @example `40325405-579C-4D82****`
     */
    RequestId: string;
    /**
     * 资源组对应的SLS日志管理项目。
     * @example `eas-r-asdasdasd-sls`
     */
    ProjectName: string;
    /**
     * SLS日志库。
     * @example `access_log`
     */
    LogStore: string;
    /**
     * SLS日志信息。
     * @example `Network interfaces are updating`
     */
    Message: string;
    /**
     * 资源组状态。
     * @example `ResourceReady`
     */
    Status: string;
}
