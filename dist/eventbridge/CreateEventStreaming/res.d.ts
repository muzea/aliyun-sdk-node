export interface CreateEventStreamingResponse {
    /**
     * 错误信息。
     * @example `The name [xxxx] of event streaming in request is already exist!`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `B896B484-F16D-59DE-9E23-DD0E5C36****`
     */
    RequestId: string;
    /**
     * 返回数据。
     */
    Data: {
        /**
         * 事件流在阿里云上的统一资源标识（ARN）。
         * @example `acs:eventbridge:cn-hangzhou:164901546557****:eventstreaming/myeventstreaming`
         */
        EventStreamingARN: string;
    };
    /**
     * 接口返回码：
     * - Success：表示成功。
     * - 其它：表示错误码。错误码详情，请参见错误码。
     * @example `Success`
     */
    Code: string;
    /**
     * 操作成功返回true。
     * @example `true`
     */
    Success: boolean;
}
