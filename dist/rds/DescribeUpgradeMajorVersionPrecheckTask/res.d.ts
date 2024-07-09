export interface DescribeUpgradeMajorVersionPrecheckTaskResponse {
    /**
     * 请求ID。
     * @example `D1586777-41B5-5F9E-81E8-93DFDD379024`
     */
    RequestId: string;
    /**
     * 页码。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 每页显示记录数。
     * @example `30`
     */
    PageRecordCount: number;
    /**
     * 升级检查报告记录数。
     * @example `1`
     */
    TotalRecordCount: number;
    /**
     * 大版本升级检查报告属性列表。
     */
    Items: {
        /**
         * 目标实例版本。
         * @example `12.0`
         */
        TargetMajorVersion: string;
        /**
         * 检查报告到期时间。
         * 以Unix时间戳表示。单位：毫秒。
         * @example `1635748703000`
         */
        EffectiveTime: string;
        /**
         * 当前实例版本。
         * @example `11.0`
         */
        SourceMajorVersion: string;
        /**
         * 大版本升级检查的检查结果。
         * 取值范围：
         * - Success：成功
         * - Fail：失败
         * > 当检查结果为**Fail**时，请排查**Detail**的参数取值，处理报错后再试，常见报错及处理方法，请参见[解读RDS PostgreSQL大版本升级检查报告](~~218391~~)。
         * @example `Success`
         */
        Result: string;
        /**
         * 大版本升级前检查任务ID。
         * @example `416980000`
         */
        TaskId: number;
        /**
         * 大版本升级检查报告内容。
         * @example `[user_check_report]User check success\n[pg_upgrade_internal.log]Performing...`
         */
        Detail: string;
        /**
         * 检查时间。
         * 以Unix时间戳表示。单位：毫秒。
         * @example `1635143903000`
         */
        CheckTime: string;
    }[];
}
