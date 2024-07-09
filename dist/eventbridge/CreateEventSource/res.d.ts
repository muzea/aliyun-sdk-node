export interface CreateEventSourceResponse {
    /**
     * 错误信息。
     * @example ` Remote error. requestId: [A8EFABD2-95B9-1C46-9E01-xxxx], error code: [CreateRelatedResourceFailed], message: [Create related resource failed, EntityNotExist.Role : The role not exists: xxxx. \r\nRequestId : xxxx-168C-54ED-8FEB-BF11CB70AEB7]   `
     */
    Message: string;
    /**
     * 请求id。
     * @example `2922208e-e1c6-43ee-bfd1-aca50263bc8a`
     */
    RequestId: string;
    /**
     * 返回数据。
     */
    Data: {
        /**
         * 资源ARN。
         * @example `acs:eventbridge:cn-hangzhou:164901546557****:eventbus/my-event-bus/eventsource/mymns.source`
         */
        EventSourceARN: string;
    };
    /**
     * 接口返回码：
     * - Success：表示成功。
     * - 其它：表示错误码。
     * 错误码详情，请参见错误码。
     * @example `Success`
     */
    Code: string;
    /**
     * 操作成功返回true。
     * @example `true`
     */
    Success: boolean;
}
