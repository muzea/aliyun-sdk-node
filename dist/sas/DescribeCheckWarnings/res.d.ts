export interface DescribeCheckWarningsResponse {
    /**
     * 分页查询时，当前页的页码。
     * @example `1`
     */
    CurrentPage: number;
    /**
     * 分页查询时，每页显示的检查项信息的数量。默认值为**20**，表示每页显示20条检查项信息。
     * @example `20`
     */
    PageSize: number;
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `0DFCADBA-7065-42DA-AF17-6868B9C2A8CF`
     */
    RequestId: string;
    /**
     * 查询到的检查项信息的总数量。
     * @example `100`
     */
    TotalCount: number;
    /**
     * 当前页显示检查项信息的数量。
     * @example `10`
     */
    Count: number;
    /**
     * 查询到的检查项信息的详情。
     */
    CheckWarnings: {
        /**
         * 检查项的状态。取值：
         * - **1**：基线检查未通过
         * - **2**：基线修复验证中
         * - **3**：基线检查已通过
         * - **5**：基线检查状态已失效
         * - **6**：基线检查项已忽略
         * @example `1`
         */
        Status: number;
        /**
         * 基线检查的告警数据ID。
         * @example `212251441`
         */
        CheckWarningId: number;
        /**
         * 检查项类型。
         * @example `hc.check.type.identity_auth`
         */
        Type: string;
        /**
         * 执行基线检查的服务器的ID。
         * @example `d42f938c-d962-48a0-90f9-****`
         */
        Uuid: string;
        /**
         * 容器名称。
         * @example `/svn-host`
         */
        ContainerName: string;
        /**
         * 容器ID。
         * @example `8de456b00ff0a2009ee8ef7fc59fd0457fa44f20b8282af3e79c2a0e2492****`
         */
        ContainerId: string;
        /**
         * 检查项名称。
         * @example `passwordExpire`
         */
        Item: string;
        /**
         * 检查项的ID。
         * @example `2546`
         */
        CheckId: number;
        /**
         *  基线检查风险项的危险等级。取值：
         * - **high**：高危
         * - **medium**：中危
         * - **low**：低危
         * @example `high`
         */
        Level: string;
        /**
         * 备注。
         * @example `ignore`
         */
        Reason: string;
        /**
         * 是否支持修复。取值：
         * - **0**：不支持
         * - **1**：支持
         * @example `0`
         */
        FixStatus: number;
        /**
         * 告警数据检查中的错误信息。
         * @example `ScriptKilledOfCpuHigh`
         */
        ExecErrorMessage: string;
        /**
         * 该机器的检查项风险的最新处理的时间戳，单位为毫秒。
         * @example `1704937755000`
         */
        LastHandleTime: number;
    }[];
}
