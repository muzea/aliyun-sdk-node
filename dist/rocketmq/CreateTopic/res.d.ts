export interface CreateTopicResponse {
    /**
     * 请求ID，每个请求的ID都是唯一的，可用于排查和定位问题。
     * @example `AF9A8B10-C426-530F-A0DD-96320B39****`
     */
    requestId: string;
    /**
     * 执行结果是否成功。
     * @example `true`
     */
    success: boolean;
    /**
     * 返回结果。
     * @example `true`
     */
    data: boolean;
    /**
     * 错误码。
     * @example `Topic.Existed`
     */
    code: string;
    /**
     * 错误信息。
     * @example `The topic already exists.`
     */
    message: string;
    /**
     * HTTP状态码。
     * @example `400`
     */
    httpStatusCode: number;
    /**
     * 动态错误码。
     * @example `TopicName`
     */
    dynamicCode: string;
    /**
     * 动态错误信息。
     * @example `topicName`
     */
    dynamicMessage: string;
}
