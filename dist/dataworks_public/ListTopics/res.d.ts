export interface ListTopicsResponse {
    /**
     * HTTP返回码。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 本次调用的唯一ID。出现错误后，您可以根据该ID排查问题。
     * @example `0000-ABCD-EFG****`
     */
    RequestId: string;
    /**
     * 错误信息。
     * @example `The specified parameters are invalid.`
     */
    ErrorMessage: string;
    /**
     * 错误码。
     * @example `1031203110005`
     */
    ErrorCode: string;
    /**
     * 调用是否成功。
     * @example `true`
     */
    Success: boolean;
    /**
     * 返回的事件列表。
     */
    Data: {
        /**
         * 当前的页数。
         * @example `1`
         */
        PageNumber: number;
        /**
         * 每页的大小。
         * @example `10`
         */
        PageSize: number;
        /**
         * 事件的总数。
         * @example `100`
         */
        TotalCount: number;
        /**
         * 事件列表。
         */
        Topics: {
            /**
             * 事件的名称。
             * @example `1234出错`
             */
            TopicName: string;
            /**
             * 任务节点所在工作空间的ID。
             * @example `1234`
             */
            ProjectId: number;
            /**
             * 任务节点责任人的阿里云UID
             * @example `952795****`
             */
            NodeOwner: string;
            /**
             * 事件关联的实例ID。
             * @example `12345`
             */
            InstanceId: number;
            /**
             * 事件恢复的时间戳。
             * @example `1553508465000`
             */
            FixTime: number;
            /**
             * 事件的类型，包括SLOW（变慢）和ERROR（出错）。
             * @example `ERROR`
             */
            TopicType: string;
            /**
             * 事件的状态，包括IGNORE（已忽略）、NEW（新发现）、FIXING（处理中）和RECOVER（已恢复）。
             * @example `NEW`
             */
            TopicStatus: string;
            /**
             * 事件发生的时间戳，事件发生和被发现存在一定的时间差。
             * @example `1553508465000`
             */
            HappenTime: number;
            /**
             * 任务节点的名称。
             * @example `节点名称`
             */
            NodeName: string;
            /**
             * 事件的ID。
             * @example `1234`
             */
            TopicId: number;
            /**
             * 事件发现的时间戳。
             * @example `1553524393000`
             */
            AddTime: number;
            /**
             * 事件关联的任务节点ID。
             * @example `1234`
             */
            NodeId: number;
        }[];
    };
}
