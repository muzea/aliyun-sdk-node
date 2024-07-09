export interface DescribeDataMaskingRunHistoryResponse {
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
     * 脱敏任务信息列表。
     */
    Items: {
        /**
         * 任务执行状态：
         * - -**1**：等待执行。
         * - **0**：执行中。
         * - **1**：执行成功。
         * - **2**：执行失败。
         * - **3**：用户终止。
         * - **4**：部分失败.
         * @example `1`
         */
        Status: number;
        /**
         * 执行方式：
         * - **1**：手工。
         * - **2**：定时。
         * @example `1`
         */
        Type: number;
        /**
         * 脱敏数据所属的源产品类型，取值：**1**：MaxCompute，**2**：OSS，**3**：ADS，**4**：OTS，**5**：RDS等。
         * @example `2`
         */
        SrcType: number;
        /**
         * 源表的表名。
         * @example `add`
         */
        SrcTableName: string;
        /**
         * 脱敏行数。
         * @example `100`
         */
        MaskingCount: number;
        /**
         * 执行进度。
         * @example `100`
         */
        Percentage: number;
        /**
         * 数据脱敏后放置的目标产品类型，取值：**1**：MaxCompute，**2**：OSS，**3**：ADS，**4**：OTS，**5**：RDS等。
         * @example `2`
         */
        DstType: number;
        /**
         * 任务执行失败的原因。
         * @example `error`
         */
        FailMsg: string;
        /**
         * 任务执行失败的错误码，只有任务执行失败时才有值。
         * @example `masking_task_not_found`
         */
        FailCode: string;
        /**
         * 冲突行数，表示脱敏后待插入目标表的数据和目标表中已有的数据冲突的行数。
         * @example `0`
         */
        ConflictCount: number;
        /**
         * 目的产品类型。取值：**MaxCompute、OSS、ADS、OTS、RDS**等
         * @example `OSS`
         */
        DstTypeCode: string;
        /**
         * 执行结束时间。
         * @example `1582251233000`
         */
        EndTime: number;
        /**
         * 第几次执行该任务。
         * @example `1`
         */
        RunIndex: number;
        /**
         * 执行时间，时间戳毫秒格式。
         * @example `1582251233000`
         */
        StartTime: number;
        /**
         * 已创建的子任务数。
         * @example `4`
         */
        HasSubProcess: number;
        /**
         * 是否有下载文件。
         * - **1**：有。
         * - **0**：没有。
         * @example `1`
         */
        HasDownloadFile: number;
        /**
         * 任务编号。
         * @example `mt4HBgtw1B******`
         */
        TaskId: string;
        /**
         * 源产品类型。取值：**MaxCompute、OSS、ADS、OTS、RDS**等
         * @example `OSS`
         */
        SrcTypeCode: string;
        /**
         * 执行记录的ID。
         * @example `1`
         */
        Id: number;
    }[];
}
