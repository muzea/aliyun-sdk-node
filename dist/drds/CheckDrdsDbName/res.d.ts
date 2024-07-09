export interface CheckDrdsDbNameResponse {
    /**
     * 请求 ID
     * @example `CF38538C-68BD-4278-B58F-EDE96F******`
     */
    RequestId: string;
    /**
     * 检查结果。true：数据库名合法， false：数据库名不合法
     * @example `true`
     */
    Result: boolean;
    /**
     * 是否成功
     * @example `true`
     */
    Success: boolean;
}
