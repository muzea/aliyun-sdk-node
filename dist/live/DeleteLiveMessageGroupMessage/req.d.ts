export interface DeleteLiveMessageGroupMessageRequest {
    /**
     * 应用ID。
     * @example `demo`
     */
    "AppId": string;
    /**
     * 群组ID。
     * @example `grouptest`
     */
    "GroupId": string;
    /**
     * 要删除的消息ID，与发送消息中的MsgTid对应。由大小写字母、数字组成，长度不超过64字节。
     * @example `a74a8fbd3cfe4b2daa8517e4e3******`
     */
    "MessageId": string;
    /**
     * 数据中心，需要与[CreateLiveMessageApp](~~2593195~~)中的数据中心一致，当前支持上海（取值为cn-shanghai)、新加坡（取值为ap-southeast-1）。
     * @example `cn-shanghai`
     */
    "DataCenter"?: string;
    /**
     * 发起删除消息的用户ID，由大小写字母、数字组成，长度不超过64字节。
     * @example `169830****`
     */
    "DeleterId"?: string;
    /**
     * 发起删除消息的用户扩展信息，长度不超过512字节。
     * @example `testname`
     */
    "DeleterInfo"?: string;
}
