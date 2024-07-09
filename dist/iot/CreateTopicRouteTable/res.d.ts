export interface CreateTopicRouteTableResponse {
    /**
     * 调用失败时，返回的错误码。更多信息，请参见[错误码](~~87387~~)。
     * @example `iot.system.SystemException`
     */
    Code: string;
    /**
     * 调用失败时，返回的出错信息。
     * @example `iot.system.SystemException`
     */
    ErrorMessage: string;
    /**
     * 阿里云为该请求生成的唯一标识符。
     * @example `FCC27691-9151-4B93-9622-9C90F30542EC`
     */
    RequestId: string;
    /**
     * 指定的Topic间的消息路由关系是否全部新建成功。
     * - **true**表示全部新建成功。
     * - **false**表示未全部新建成功。
     * @example `true`
     */
    IsAllSucceed: boolean;
    /**
     * 是否调用成功。
     * - **true**：调用成功。
     * - **false**：调用失败。
     * @example `true`
     */
    Success: boolean;
    FailureTopics: {
        Topic: any[];
    };
}
