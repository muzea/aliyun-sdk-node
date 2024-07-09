export interface DescribeDatabaseInstanceParametersResponse {
    /**
     * 请求ID。
     * @example `30637AD6-D977-4833-A54C-CC89483E****`
     */
    RequestId: string;
    /**
     * 数据库类型。目前仅支持数据库的类型为MySQL。
     * @example `MySQL`
     */
    Engine: string;
    /**
     * 数据库版本。可能值：
     * - 5.7：MySQL 5.7。
     * - 8.0：MySQL 8.0。
     * @example `5.5`
     */
    EngineVersion: string;
    /**
     * 正在同步的参数列表。修改并提交参数后，需要等待实例同步参数，同步结束后从此列表删除。
     */
    ConfigParameters: {
        /**
         * 参数描述信息。
         * @example `Auto-increment columns are incremented by this`
         */
        ParameterDescription: string;
        /**
         * 参数名称。
         * @example `auto_increment_increment`
         */
        ParameterName: string;
        /**
         * 参数值。
         * > 不同参数的参数值不同。
         * @example `1`
         */
        ParameterValue: string;
        /**
         * 是否支持修改参数值。可能值：
         * - true ：支持修改参数值。
         * - false：不支持修改参数值。
         * @example `true`
         */
        ForceModify: string;
        /**
         * 修改参数是否重启数据库。可能值：
         * - true：强制重启（若修改的参数当中，有需要重启的参数，则必须传入true，否则修改将不生效）。
         * - false：不强制重启。
         * 默认值：false。
         * @example `false`
         */
        ForceRestart: string;
        /**
         * 参数值范围。
         * > 不同参数的参数值范围不同。
         * @example `[1-65535]`
         */
        CheckingCode: string;
    }[];
    /**
     * 运行参数信息。
     */
    RunningParameters: {
        /**
         * 运行参数描述信息。
         * @example `When this variable has a value of 1 (the default), the server automatically grants the EXECUTE and ALTER ROUTINE privileges to the creator of a stored routine, if the user cannot already execute and alter or drop the routine. (The ALTER ROUTINE privilege is required to drop the routine.) The server also automatically drops those privileges from the creator when the routine is dropped. If automatic_sp_privileges is 0, the server does not automatically add or drop these privileges.`
         */
        ParameterDescription: string;
        /**
         * 参数名称。
         * @example `autocommit`
         */
        ParameterName: string;
        /**
         * 运行参数值。
         * @example `ON`
         */
        ParameterValue: string;
        /**
         * 是否支持修改参数值。可能值：
         * - true ：支持修改参数值。
         * - false：不支持修改参数值。
         * @example `true`
         */
        ForceModify: string;
        /**
         * 修改参数是否重启数据库。可能值：
         * - true：强制重启（若修改的参数当中，有需要重启的参数，则必须传入true，否则修改将不生效）。
         * - false：不强制重启。
         * 默认值：false。
         * @example `false`
         */
        ForceRestart: string;
        /**
         * 参数值范围。
         * > 不同参数的参数值范围不同。
         * @example `[ON|OFF]`
         */
        CheckingCode: string;
    }[];
}
