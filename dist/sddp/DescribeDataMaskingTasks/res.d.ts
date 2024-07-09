export interface DescribeDataMaskingTasksResponse {
    /**
     * 结果中显示的当前页的页码。
     * @example `1`
     */
    CurrentPage: number;
    /**
     * 结果的请求ID。
     * @example `769FB3C1-F4C9-4******`
     */
    RequestId: string;
    /**
     * 结果中每页显示数据条数。
     * @example `10`
     */
    PageSize: number;
    /**
     * 结果中数据的总条数。
     * @example `100`
     */
    TotalCount: number;
    /**
     * 脱敏任务列表。
     */
    Items: {
        /**
         * 任务状态：
         * - **0**：已关闭。
         * - **1**：开启。
         * @example `1`
         */
        Status: number;
        /**
         * 任务创建者。
         * @example `owner`
         */
        Owner: string;
        /**
         * 任务名称。
         * @example `任务名称`
         */
        TaskName: string;
        /**
         * 源产品类型，取值：**1**：MaxCompute，**2**：OSS，**3**：ADS，**4**：OTS，**5**：RDS等。
         * @example `5`
         */
        SrcType: number;
        /**
         * 脱敏数据源所属的产品。取值：**1**：MaxCompute，**2**：OSS，**3**：ADS，**4**：OTS，**5**：RDS等。
         * @example `5`
         */
        DstType: number;
        /**
         * 是否正在执行中。
         * @example `false`
         */
        HasUnfinishProcess: boolean;
        /**
         * 是否是原表脱敏。
         * @example `false`
         */
        OriginalTable: boolean;
        /**
         * 执行方式：
         * - **1**：手工。
         * - **2**：定时。
         * - **3**：手工加定时。
         * @example `1`
         */
        TriggerType: number;
        /**
         * 目标产品类型。取值：**MaxCompute、OSS、ADS、OTS、RDS**等。
         * @example `RDS`
         */
        DstTypeCode: string;
        /**
         * 执行次数。
         * @example `1`
         */
        RunCount: number;
        /**
         * 创建时间。格式：时间戳。单位：毫秒。
         * @example `1582992000000`
         */
        GmtCreate: number;
        /**
         * 任务编号。
         * @example `mt4HBgtw1B******`
         */
        TaskId: string;
        /**
         * 目标路径。
         * @example `***​/table1`
         */
        DstPath: string;
        /**
         * 源产品类型。取值：**MaxCompute、OSS、ADS、OTS、RDS**等。
         * @example `RDS`
         */
        SrcTypeCode: string;
        /**
         * 任务ID。
         * @example `1`
         */
        Id: number;
        /**
         * 源路径。
         * @example `***​/table2`
         */
        SrcPath: string;
        /**
         * 脱敏源所属的成员账号。
         * @example `192479427903xxxx`
         */
        SrcMemberAccount: number;
        /**
         * 脱敏目标所属的成员账号。
         * @example `192479427903xxxx`
         */
        DstMemberAccount: number;
    }[];
}
