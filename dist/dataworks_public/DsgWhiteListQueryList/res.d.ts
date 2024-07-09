export interface DsgWhiteListQueryListResponse {
    /**
     * 调用是否成功。取值如下：
     * - true：调用成功。
     * - false：调用失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 错误码。
     * @example `1029030003`
     */
    ErrorCode: string;
    /**
     * 错误信息。
     * @example `param error`
     */
    ErrorMessage: string;
    /**
     * HTTP状态码。
     * @example `400`
     */
    HttpStatusCode: number;
    /**
     * 分页数据。
     */
    PageData: {
        /**
         * 分页的页数。
         * @example `1`
         */
        PageNumber: number;
        /**
         * 每页显示的条数。
         * @example `10`
         */
        PageSize: number;
        /**
         * 返回的脱敏白名单总条数。
         * @example `100`
         */
        TotalCount: number;
        /**
         * 白名单集合。
         */
        Data: {
            /**
             * 脱敏白名单ID。
             * @example `123`
             */
            Id: number;
            /**
             * 敏感字段类型。
             * @example `phone`
             */
            Type: string;
            /**
             * 用户组名称集合。
             */
            UserGroups: string[];
            /**
             * 脱敏白名单的创建时间。
             * @example `2024-05-09 15:46:20`
             */
            GmtCreate: string;
            /**
             * 脱敏白名单的修改时间。
             * @example `2024-05-09 15:46:20`
             */
            GmtModified: string;
            /**
             * 脱敏规则ID。
             * @example `123`
             */
            RuleId: number;
            /**
             * 二级脱敏场景ID。
             * @example `123`
             */
            SceneId: number;
            /**
             * 脱敏白名单的生效时间，不能早于当前时间。单位为天。
             * @example `2024-05-09 15:46:20`
             */
            StartTime: string;
            /**
             * 脱敏白名单的失效时间，不能早于生效时间。单位为天。
             * @example `2024-05-10 15:46:20`
             */
            EndTime: string;
        }[];
    };
    /**
     * 请求的ID。用于定位日志，排查问题。
     * @example `102400001`
     */
    RequestId: string;
}
