export interface GetTopicResponse {
    /**
     * HTTP返回码。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 本次调用的唯一ID。出现错误后，您可以根据该ID排查问题。
     * @example `0000-ABCD-EFGH-IJKLMNOPQ`
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
     * 事件的详情。
     */
    Data: {
        /**
         * 事件责任人的阿里云UID。
         * @example `952795****`
         */
        Owner: string;
        /**
         * 事件的名称。
         * @example `1234出错`
         */
        TopicName: string;
        /**
         * 基线的状态，包括ERROR（异常）、SAFE（安全）、DANGROUS（预警）和OVER（破线）。
         * @example `SAFE`
         */
        BaselineStatus: string;
        /**
         * 事件关联任务节点所在工作空间的ID。
         * @example `1234`
         */
        ProjectId: number;
        /**
         * 下次报警时间戳。
         * @example `1553524393000`
         */
        NextAlertTime: number;
        /**
         * 事件关联的实例ID。
         * @example `12345`
         */
        InstanceId: number;
        /**
         * 事件恢复时间戳。
         * @example `1553524393000`
         */
        FixTime: number;
        /**
         * 最差基线实例的周期号。
         * @example `1`
         */
        BaselineInGroupId: number;
        /**
         * 最差基线实例余量，单位为秒。
         * @example `3600`
         */
        BaselineBuffer: number;
        /**
         * 事件的类型，包括SLOW（变慢）和ERROR（出错）。
         * @example `ERROR`
         */
        TopicType: string;
        /**
         * 事件的状态，包括IGNORE（已忽略）、NEW（新发现）、FIXING（处理中）和RECOVER（已恢复）。
         * @example `FIXING`
         */
        TopicStatus: string;
        /**
         * 事件发生的时间戳。事件发生和被发现可能存在时间差。
         * @example `1553524393000`
         */
        HappenTime: number;
        /**
         * 最后处理时间戳。
         * @example `1553524393000`
         */
        DealTime: number;
        /**
         * 最后处理人的阿里云UID。
         * @example `952795****`
         */
        DealUser: string;
        /**
         * 最差基线实例的基线名称。
         * @example `基线名称`
         */
        BaselineName: string;
        /**
         * 最差基线实例的基线ID。
         * @example `1234`
         */
        BaselineId: number;
        /**
         * 事件关联的任务节点名称。
         * @example `节点名称`
         */
        NodeName: string;
        /**
         * 首次报警时间戳。
         * @example `1553524393000`
         */
        AlertTime: number;
        /**
         * 事件的余量，单位为秒。
         * @example `1200`
         */
        Buffer: number;
        /**
         * 指派人的阿里云UID。
         * @example `952795****`
         */
        Assigner: string;
        /**
         * 事件的ID。
         * @example `1234`
         */
        TopicId: number;
        /**
         * 事件发现时间戳。
         * @example `1553524393000`
         */
        AddTime: number;
        /**
         * 事件关联的任务节点ID。
         * @example `1234`
         */
        NodeId: number;
    };
}
