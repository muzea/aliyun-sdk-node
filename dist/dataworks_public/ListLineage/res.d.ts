export interface ListLineageResponse {
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 错误信息。
     * @example `qualifiedName should be in format as entity-table.entity-guid`
     */
    ErrorMessage: string;
    /**
     * 请求的ID。用于定位日志、排查问题。
     * @example `64B-587A-8CED-969E1973887FXXX-TT`
     */
    RequestId: string;
    /**
     * 调用是否成功。取值如下：
     * - true：调用成功。
     * - false：调用失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 错误码。
     * @example `1010040007`
     */
    ErrorCode: string;
    /**
     * 返回结构体。
     */
    Data: {
        /**
         * 分页信息，指定下次读取的起始点。
         * @example `nextTokenFromRequest-xxxsd-ff`
         */
        NextToken: string;
        /**
         * 实体结构体数组。
         */
        DataEntityList: {
            /**
             * 实体信息。
             */
            Entity: any;
            /**
             * 血缘创建时间。
             * @example `1686215809269`
             */
            CreateTimestamp: number;
            /**
             * 关系结构体数组。
             */
            RelationList: {
                /**
                 * 关系唯一ID。
                 * @example `aaabbccddguid`
                 */
                Guid: string;
                /**
                 * 数据源名称。
                 * @example `mysql`
                 */
                Datasource: string;
                /**
                 * 任务类型：主要描述实体间关系类型。例如，通过SQL计算、通过报表字段映射、通过定义API等 。
                 * @example `sql`
                 */
                Type: string;
                /**
                 * 数据渠道：
                 * - **FIRST_PARTY**：DataWorks平台数据。
                 * - **THIRD_PARTY**：用户注册的数据。
                 * @example `THIRD_PARTY`
                 */
                Channel: string;
            }[];
        }[];
    };
}
