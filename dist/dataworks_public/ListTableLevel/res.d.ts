export interface ListTableLevelResponse {
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
     * @example `abc`
     */
    RequestId: string;
    /**
     * 是否成功查询层级列表。
     * @example `true`
     */
    Success: boolean;
    /**
     * 错误码。
     * @example `1031203110005	`
     */
    ErrorCode: string;
    /**
     * 层级的信息。
     */
    TableLevelInfo: {
        /**
         * 层级的总数。
         * @example `10`
         */
        TotalCount: number;
        /**
         * 层级列表。
         */
        LevelList: {
            /**
             * 层级的类型，包括1（逻辑层级）和2（物理层级）。
             * @example `1`
             */
            LevelType: number;
            /**
             * 层级的描述。
             * @example `层级描述`
             */
            Description: string;
            /**
             * 层级的名称。
             * @example `层级1`
             */
            Name: string;
            /**
             * DataWorks工作空间的ID。
             * @example `123`
             */
            ProjectId: number;
            /**
             * 层级ID。
             * @example `123`
             */
            LevelId: number;
        }[];
    };
}
