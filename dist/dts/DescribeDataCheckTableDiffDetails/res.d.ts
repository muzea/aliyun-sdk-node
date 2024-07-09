export interface DescribeDataCheckTableDiffDetailsResponse {
    /**
     * 请求ID。
     * @example `621BB4F8-3016-4FAA-8D5A-5D3163CC****`
     */
    RequestId: string;
    /**
     * 状态码。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 调用出错时返回的错误码。
     * @example `InvalidParameter`
     */
    ErrCode: string;
    /**
     * 请求是否成功。
     * @example `true`
     */
    Success: boolean;
    /**
     * 调用错误时返回的错误信息。
     * @example `The value of the parameter tbName is invalid.`
     */
    ErrMessage: string;
    /**
     * 动态错误信息，用于替换返回参数**ErrMessage**错误信息中的**%s**。
     * > 如果**ErrMessage**返回**The Value of Input Parameter %s is not valid**，且**DynamicMessage**返回**Type**，则代表所传入的请求参数**Type**不合法。
     * @example `Type`
     */
    DynamicMessage: string;
    /**
     * 源库中存在不一致数据的表名。
     * @example `test_person`
     */
    TbName: string;
    /**
     * 源库中存在不一致数据的表所在的数据库名称。
     * @example `db_dtstest`
     */
    DbName: string;
    /**
     * 不一致信息。
     */
    DiffDetails: {
        /**
         * 用于标识一条校验结果数据的自增主键。
         * @example `13058****`
         */
        Id: number;
        /**
         * 执行校验的时间。
         * @example `2023-04-23T10:36:05.000+00:00`
         */
        GmtCreated: string;
        /**
         * 具体不一致信息，是一个JSON字符串。
         * - column：字段名称。
         * - source：源库中的值。
         * - dest：目标库中的值。
         * - isPrimary：字段是否是主键。
         * @example `[     {         "column": "id",         "source": "9511",         "dest": "9511",         "isPrimary": true     },     {         "column": "state",         "source": "3",         "dest": "2",         "isPrimary": false     },     {         "column": "create_time",         "source": "2023-04-11 14:07:17.0",         "dest": "NULL",         "isPrimary": false     },     {         "column": "update_time",         "source": "2023-04-11 06:07:17.0",         "dest": "2023-04-11 06:02:29.0",         "isPrimary": false     } ]`
         */
        Diff: string;
    }[];
    /**
     * 数据不一致的行数。
     * @example `1`
     */
    DiffCount: number;
    /**
     * 实例ID。
     * @example `dtsog8q1z3tc9t****"`
     */
    InstanceId: string;
}
