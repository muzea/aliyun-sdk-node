export interface GetAutonomousNotifyEventContentResponse {
    /**
     * 请求返回消息。
     * >请求成功时该参数返回Successful，请求失败时会返回请求异常信息（如错误码等）。
     * @example `Successful`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `B6D17591-B48B-4D31-9CD6-9B9796B2****`
     */
    RequestId: string;
    /**
     * 详细信息列表。
     * @example `{\"taskId\":\"7e1ba595-0889-48ff-a6ff-010f54991d****\",\"taskType\":\"SQL_OPTIMIZE\",\"advisorId\":\"636dc5f34664dd56ff0****\",\"sqlId\":\"e2b1d6c1ee1bb29555a828b59f16****\",\"indexAdviceCount\":1,\"indexAdvices\":[{\"schemaName\":\"das\",\"tableName\":\"students\",\"indexName\":\"idx_name\",\"columns\":[\"name\"],\"unique\":false,\"ddlAddIndex\":\"ALTER TABLE `das`.`students` ADD INDEX `idx_name` (`name`)\",\"priority\":0,\"optimizeId\":\"96232794517277511\"}],\"tuningAdvices\":[],\"improvement\":8127.25,\"supportLevel\":3,\"priority\":\"HIGH\"}`
     */
    Data: string;
    /**
     * 返回的状态码。
     * @example `200`
     */
    Code: string;
    /**
     * 请求是否执行成功：
     * - **true**：执行成功。
     * - **false**：执行失败。
     * @example `true`
     */
    Success: string;
}
