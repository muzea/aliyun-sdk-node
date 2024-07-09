export interface ListUsersResponse {
    /**
     * 请求ID。
     * @example `106C6CA0-282D-4AF7-85F0-D2D24F4CE647`
     */
    RequestId: string;
    /**
     * 请求是否成功，调用方可根据此字段来判断请求是否成功：true表示成功；false/null表示失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 结果代码，**200**表示成功，若为别的值则表示失败，调用方可根据此字段判断失败原因。
     * @example `200`
     */
    Code: string;
    /**
     * 出错时表示出错详情，成功时为successful。
     * @example `successful`
     */
    Message: string;
    /**
     * 当前页数。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 每页显示条数。
     * @example `10`
     */
    PageSize: number;
    /**
     * 总条数。
     * @example `12`
     */
    Count: number;
    Data: {
        /**
         * 详细返回数据。
         */
        User: {
            /**
             * 显示名。
             * @example `xxx`
             */
            DisplayName: string;
            /**
             * 最后更新时间。
             * @example `2020-03-11T16:54Z`
             */
            UpdateTime: string;
            /**
             * 备注。
             * @example `XXX`
             */
            Description: string;
            /**
             * 创建时间。
             * @example `2020-03-11T16:54Z`
             */
            CreateTime: string;
            /**
             * 账号类型，可能值：1主账号；2子账号。
             * @example `2`
             */
            LoginUserType: number;
            /**
             * 用户ID。
             * @example `2951869706989****`
             */
            AliUid: string;
            /**
             * 角色，可能值：ADMIN管理员；QUALITY_INSPECTOR质检员；AGENT客服。
             * @example `AGENT`
             */
            RoleName: string;
            /**
             * 登录名。
             * @example `xxx`
             */
            UserName: string;
            /**
             * 弃用字段，请忽略。
             * @example `1`
             */
            Id: number;
        }[];
    };
}
