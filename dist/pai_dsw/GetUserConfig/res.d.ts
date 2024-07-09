export interface GetUserConfigResponse {
    /**
     * 用户账号金额是否充足。
     * @example `false`
     */
    AccountSufficient: boolean;
    /**
     * 是否可以购买free tier规格的实例
     * @example `true`
     */
    FreeTierSpecAvailable: boolean;
    /**
     * free tier属性
     */
    FreeTier: {
        /**
         * 是否是free tier用户
         * @example `true`
         */
        IsFreeTierUser: boolean;
        /**
         * free tier开始时间
         * @example `2020-11-08T15:00:00Z`
         */
        StartTime: string;
        /**
         * free tier结束时间
         * @example `2020-11-08T15:00:00Z`
         */
        EndTime: string;
        /**
         * free tier状态,有效或者无效
         * @example `valid`
         */
        Status: string;
        /**
         * free tier，资源初始值
         * @example `5000`
         */
        InitBaseValue: number;
        /**
         * free tier，资源初始显示值
         * @example `5000`
         */
        InitShowValue: string;
        /**
         * free tier，资源初始值单位
         * @example `个`
         */
        InitBaseUnit: string;
        /**
         * free tier，资源初始显示单位
         * @example `个`
         */
        InitShowUnit: string;
        /**
         * free tier，资源当前值
         * @example `3000`
         */
        PeriodBaseValue: number;
        /**
         * free tier，资源当前显示值
         * @example `3000`
         */
        PeriodShowValue: string;
        /**
         * free tier，资源当前值单位
         * @example `个`
         */
        PeriodBaseUnit: string;
        /**
         * free tier, 资源当前显示单位
         * @example `个`
         */
        PeriodShowUnit: string;
    };
    /**
     * 是否打开eciDisk
     * @example `true`
     */
    EnableEciDisk: boolean;
    /**
     * 请求ID。
     * @example `E7D55162-4489-1619-AAF5-3F97D5FCA948`
     */
    RequestId: string;
    /**
     * 成功标志，可能值：
     * - true
     * - false
     * @example `true`
     */
    Success: boolean;
    /**
     * 返回结果说明。
     * @example `"Access denied"`
     */
    Message: string;
    /**
     * 状态码，可能值：
     * - InternalError：内部错误（除了参数验证错误外的其他错误，目前都归类到内部错误）。
     * - ValidationError：参数验证错误。
     * @example `null`
     */
    Code: string;
    /**
     * HTTP状态码，可能值：
     * - 400
     * - 404
     * @example `null`
     */
    HttpStatusCode: number;
}
