export interface SendLiveMessageGroupRequest {
    /**
     * 接收消息的互动消息应用ID。
     * @example `demo`
     */
    "AppId": string;
    /**
     * 接收消息的GroupID。
     * @example `grouptest`
     */
    "GroupId": string;
    /**
     * 发送消息的用户ID，由大小写字母、数字组成，长度不超过64字节。
     * @example `uid1`
     */
    "SenderId": string;
    /**
     * 发送消息用户的扩展信息，长度不超过512字节。
     * @example `uid1meta1`
     */
    "SenderMetaInfo"?: string;
    /**
     * 消息体，长度不超过15KB。
     * @example `hello,group`
     */
    "Body"?: string;
    /**
     * 消息类型。
     * @example `1`
     */
    "MsgType"?: number;
    /**
     * 消息唯一标识，可作为删除消息的依据。由大小写字母、数字组成，长度不超过64字节。
     * @example `169830****`
     */
    "MsgTid"?: string;
    /**
     * 该消息对于该类消息数量的统计增长值贡献，默认值为1。
     * @example `1`
     */
    "StaticsIncrease"?: number;
    /**
     * 消息权重，默认值为1。对于高优消息，可设置权重为1000000。
     * @example `1`
     */
    "Weight"?: number;
    /**
     * 设置不存储该消息。默认为 false，表示存储（当前时效30天），可以通过获取查询群组消息查到该消息。如果您的业务不需要存储该消息，请设置为true。
     * @example `false`
     */
    "NoStorage"?: boolean;
    /**
     * 设置不缓存该消息到最近消息列表中。默认为false，表示缓存到群组最近消息列表中。
     * @example `false`
     */
    "NoCache"?: boolean;
    /**
     * 数据中心，需要与[CreateLiveMessageApp](~~2593195~~)中的数据中心一致，当前支持上海（取值为cn-shanghai)、新加坡（取值为ap-southeast-1）。
     * @example `cn-shanghai`
     */
    "DataCenter"?: string;
}
