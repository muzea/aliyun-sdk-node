export interface SendLiveMessageUserRequest {
    /**
     * 发送消息的互动消息应用ID。
     * @example `demo`
     */
    "AppId": string;
    /**
     * 接收消息的用户ID，由大小写字母、数字组成，长度不超过64字节。
     * @example `uid2`
     */
    "ReceiverId": string;
    /**
     * 发送消息的用户ID，由大小写字母、数字组成，长度不超过64字节。
     * @example `uid1`
     */
    "SenderId": string;
    /**
     * 发送消息用户的扩展信息，长度不超过512字节。
     * @example `uid1meta1`
     */
    "SenderInfo"?: string;
    /**
     * 消息体，长度不超过15KB。
     * @example `hello, user`
     */
    "Body"?: string;
    /**
     * 消息类型。
     * @example `2`
     */
    "MsgType"?: number;
    /**
     * 消息唯一标识，可作为删除消息的依据。由大小写字母、数字组成，长度不超过64字节。
     * @example `169830****`
     */
    "MsgTid"?: string;
    /**
     * 数据中心，需要与[CreateLiveMessageApp](~~2593195~~)中的数据中心一致，当前支持上海（取值为cn-shanghai)、新加坡（取值为ap-southeast-1）。
     * @example `cn-shanghai`
     */
    "DataCenter"?: string;
}
