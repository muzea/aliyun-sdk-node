export interface SkipPreCheckResponse {
    /**
     * 状态码。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 请求ID。
     * @example `8C498360-7892-433C-847A-BA71A850****`
     */
    RequestId: string;
    /**
     * 调用错误时返回的错误码。
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
     * 需屏蔽或取消屏蔽的预检查项目名称。
     * @example `CHECK_SAME_OBJ_DETAIL`
     */
    SkipNames: string;
    /**
     * 错误码，本参数即将下线。
     * @example `200`
     */
    Code: string;
    /**
     * 预检查任务ID。
     * @example `b4my3zg929a****`
     */
    ScheduleJobId: string;
    /**
     * 动态错误信息，用于替换返回参数**ErrMessage**错误信息中的**%s**。
     * > 如果**ErrMessage**返回**The Value of Input Parameter %s is not valid**，且**DynamicMessage**返回**JobId**，则代表所传入的请求参数**JobId**不合法。
     * @example `JobId`
     */
    DynamicMessage: string;
    /**
     * 预检查所属DTS任务的ID。
     * @example `kyri3z9w29a****`
     */
    MigrationJobId: string;
    /**
     * 需屏蔽或取消屏蔽的预检查项目简称。
     * @example `CHECK_SAME_OBJ`
     */
    SkipItems: string;
}
