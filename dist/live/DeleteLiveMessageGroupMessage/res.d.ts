export interface DeleteLiveMessageGroupMessageResponse {
    /**
     * 请求ID。
     * @example `B95BE680-5A6A-1CAD-8AB1-09DFF5D6****`
     */
    RequestId: string;
    /**
     * 群组ID。
     * @example `grouptest`
     */
    GroupId: string;
    /**
     * 已删除的或者不存在的消息ID。
     * @example `a74a8fbd3cfe4b2daa8517e4e3******`
     */
    MessageId: string;
}
