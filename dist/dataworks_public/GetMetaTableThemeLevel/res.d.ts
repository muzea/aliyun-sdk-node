export interface GetMetaTableThemeLevelResponse {
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 错误信息。
     * @example `success`
     */
    ErrorMessage: string;
    /**
     * 本次调用的唯一ID。出现错误后，您可以根据该ID排查问题。
     * @example `1324afdsfde`
     */
    RequestId: string;
    /**
     * 调用是否成功。
     * @example `true`
     */
    Success: boolean;
    /**
     * 错误码。
     * @example `0`
     */
    ErrorCode: string;
    /**
     * 返回数据。
     */
    Entity: {
        /**
         * 返回的主题信息。
         */
        Theme: {
            /**
             * 父主题ID。
             * @example `0`
             */
            ParentId: number;
            /**
             * 主题名称。
             * @example `theme1`
             */
            Name: string;
            /**
             * 主题ID。
             * @example `123`
             */
            ThemeId: number;
            /**
             * 主题类型，取值如下：
             * - 1：一级主题。
             * - 2：二级主题。
             * @example `1`
             */
            Level: number;
        }[];
        /**
         * 返回的层级信息。
         */
        Level: {
            /**
             * 层级类型，取值如下：
             * - 1：逻辑层级。
             * - 2：物理层级。
             * @example `1`
             */
            Type: number;
            /**
             * 层级的描述。
             * @example `描述`
             */
            Description: string;
            /**
             * 层级名称。
             * @example `level1`
             */
            Name: string;
            /**
             * 层级ID。
             * @example `1`
             */
            LevelId: number;
        }[];
    };
}
