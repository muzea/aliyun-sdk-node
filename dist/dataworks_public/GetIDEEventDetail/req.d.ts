export interface GetIDEEventDetailRequest {
    /**
     * DataWorks开放消息的消息ID。当触发扩展点事件后，您可以从接收到的事件消息中获取消息ID。
     * <props="china">消息格式，可参考[消息格式](~~215367~~)。</props>
     * @example `8abcb91f-d266-4073-b907-2ed670378ed1`
     */
    "MessageId": string;
    /**
     * DataWorks工作空间的ID，您可以通过解析DataWorks开放消息获取空间ID。
     * @example `10000`
     */
    "ProjectId": number;
}
