export interface DescribeDataCheckTableDetailsResponse {
    /**
     * 状态码。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 请求ID。
     * @example `621BB4F8-3016-4FAA-8D5A-5D3163CC****`
     */
    RequestId: string;
    /**
     * 调用出错时返回的错误码。
     * @example `InternalError`
     */
    ErrCode: string;
    /**
     * 请求是否成功。
     * @example `true`
     */
    Success: boolean;
    /**
     * 调用错误时返回的错误信息。
     * @example `The Value of Input Parameter %s is not valid.`
     */
    ErrMessage: string;
    /**
     * 动态错误信息，用于替换返回参数**ErrMessage**错误信息中的**%s**。
     * > 如果**ErrMessage**返回**The Value of Input Parameter %s is not valid**，且**DynamicMessage**返回**Type**，则代表所传入的请求参数**Type**不合法。
     * @example `Type`
     */
    DynamicMessage: string;
    /**
     * 页码。
     * @example `2`
     */
    PageNumber: number;
    /**
     * 动态错误码，本参数即将下线。
     * @example `403`
     */
    DynamicCode: string;
    /**
     * 数据表校验的结果详情。
     */
    TableDetails: {
        /**
         * 校验结果对应的状态，返回值为：
         * - **0**：已完成。
         * - **2**：初始化中。
         * - **3**：运行中。
         * - **5**：失败。
         * @example `0`
         */
        Status: string;
        /**
         * 用于标识一条校验结果数据的自增主键。
         * @example `167401241974****`
         */
        Id: number;
        /**
         * 源端数据库名称。
         * @example `testdb`
         */
        SourceDbName: string;
        /**
         * 目标端数据库名称。
         * @example `testdb`
         */
        TargetDbName: string;
        /**
         * 源端表名称。
         * @example `student`
         */
        SourceTbName: string;
        /**
         * 目标端表名称。
         * @example `person`
         */
        TargetTbName: string;
        /**
         * 校验数据的总行数。
         * @example `8`
         */
        TotalCount: number;
        /**
         * 表中已完成校验的数据行数。
         * @example `7`
         */
        FinishCount: number;
        /**
         * 数据不一致的行数。
         * @example `1`
         */
        DiffCount: number;
        /**
         * 进行校验的时间。
         * @example `2023-01-18 11:26:59`
         */
        BootTime: string;
        /**
         * 任务运行出错时，返回报错信息的错误编码。
         * - **1**：无主键表的数量超过限制。
         * - **2**：差异数据超过300行。
         * - **3**：待查询的表不存在。
         * - **4**：查询数据的SQL语法错误。
         * @example `1`
         */
        ErrorCode: number;
    }[];
    /**
     * 校验的表的总数量。
     * @example `1`
     */
    TotalCount: number;
    /**
     * 累计已完成校验的数据行数。
     * @example `7`
     */
    FinishedCount: number;
    /**
     * 数据不一致表的数量。
     * @example `1`
     */
    DiffTableCount: number;
}
