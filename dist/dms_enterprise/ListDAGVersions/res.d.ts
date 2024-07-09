export interface ListDAGVersionsResponse {
    /**
     * 请求ID。
     * @example `C7775630-7901-51B9-8782-9B585EC0799A`
     */
    RequestId: string;
    /**
     * 错误码。
     * @example `403`
     */
    ErrorCode: string;
    /**
     * 错误信息。
     * @example `UnknownError`
     */
    ErrorMessage: string;
    /**
     * 请求是否成功，返回值如下：
     * - **true**：请求成功
     * - **false**：请求失败
     * @example `true`
     */
    Success: boolean;
    /**
     * 查询结果总数。
     * @example `1`
     */
    TotalCount: number;
    DagVersionList: {
        /**
         * 发布版本列表。
         */
        DagVersion: {
            /**
             * 任务流名称。
             * @example `Spark SQL`
             */
            DagName: string;
            /**
             * 任务流Owner的用户ID。
             * @example `51****`
             */
            DagOwnerId: string;
            /**
             * 任务流Owner的昵称。
             * @example `name`
             */
            DagOwnerNickName: string;
            /**
             * 任务流版本描述。
             * @example `test_OSS`
             */
            VersionComments: string;
            /**
             * 任务流版本ID。
             * @example `2****`
             */
            VersionId: number;
            /**
             * 上一个发布版本ID。
             * @example `2****`
             */
            LastVersionId: number;
        }[];
    };
}
