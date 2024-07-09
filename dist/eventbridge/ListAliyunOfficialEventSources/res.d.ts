export interface ListAliyunOfficialEventSourcesResponse {
    /**
     * 错误信息。
     * @example `InvalidArgument`
     */
    Message: string;
    /**
     * 阿里云为该请求生成的唯一标识符。
     * @example `5f80e9b3-98d5-4f51-8412-c758818a03e4`
     */
    RequestId: string;
    /**
     * 返回结果。
     */
    Data: {
        /**
         * 事件源列表
         */
        EventSourceList: {
            /**
             * 查询到的事件源的名称。
             * @example `acs.aliyuncvc`
             */
            Name: string;
            /**
             * 全名。
             * @example `E-MapReduce`
             */
            FullName: string;
            /**
             * 事件总线在阿里云上的统一资源标识（ARN）。
             * @example `acs:eventbridge:cn-hangzhou:SYSTEM:eventsource/acs.aliyuncvc`
             */
            Arn: string;
            /**
             * 查询到的事件源的状态。
             * 取值说明如下：
             * Activated：激活状态
             * @example `Activated`
             */
            Status: string;
            /**
             * 查询到的事件类型的名称。
             * @example `1`
             */
            Type: string;
            /**
             * 查询到的事件源的创建时间。单位为毫秒级。
             * @example `1607071602000`
             */
            Ctime: number;
            /**
             * 查询到的事件源的描述。
             * @example `云视频会议`
             */
            Description: string;
            /**
             * 事件类型列表
             */
            EventTypes: {
                /**
                 * 查询到的事件类型的全名。
                 * @example `aliyuncvc:MeetingEvent:MeetingStateEvent`
                 */
                Name: string;
                /**
                 * 查询到的事件类型的短名称。
                 * @example `MeetingStateEvent`
                 */
                ShortName: string;
                /**
                 * 查询到的事件类型所属群组的名称。
                 * @example `aliyuncvc:MeetingEvent`
                 */
                GroupName: string;
                /**
                 * 事件源名称
                 * @example `name`
                 */
                EventSourceName: string;
            }[];
            /**
             * 查询到的事件类型所属事件源的名称。
             * @example `acs.aliyuncvc`
             */
            EventBusName: string;
        }[];
    };
    /**
     * 接口返回码：Success：表示成功。                                 其它：表示错误码。错误码详情，请参见错误码。
     * @example `Success`
     */
    Code: string;
    /**
     * 操作成功返回true。
     * @example `true`
     */
    Success: boolean;
}
