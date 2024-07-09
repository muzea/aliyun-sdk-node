export interface ListTableThemeResponse {
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 错误信息。
     * @example `The specified parameters are invalid.`
     */
    ErrorMessage: string;
    /**
     * 请求ID。
     * @example `abcde`
     */
    RequestId: string;
    /**
     * 是否成功查询主题。
     * @example `true`
     */
    Success: boolean;
    /**
     * 错误码。
     * @example `1031203110005`
     */
    ErrorCode: string;
    /**
     * 层级数据。
     */
    Data: {
        /**
         * 内容总数量。
         * @example `10`
         */
        TotalCount: number;
        /**
         * 层级列表。
         */
        ThemeList: {
            /**
             * 创建层级的时间。
             * @example `123432343243`
             */
            CreateTimeStamp: number;
            /**
             * 父节点ID。
             * @example `122`
             */
            ParentId: number;
            /**
             * 主题ID。
             * @example `123`
             */
            ThemeId: number;
            /**
             * 工作空间ID。
             * @example `123`
             */
            ProjectId: number;
            /**
             * 层级的名称。
             * @example `层级名称`
             */
            Name: string;
            /**
             * 1（一级层级）和2（二级层级）。
             * @example `1`
             */
            Level: number;
            /**
             * 层级的创建人。
             * @example `123455`
             */
            Creator: string;
        }[];
    };
}
