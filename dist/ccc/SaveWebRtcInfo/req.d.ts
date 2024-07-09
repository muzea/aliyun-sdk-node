export interface SaveWebRtcInfoRequest {
    /**
     * 实例ID。
     * @example `ccc-test`
     */
    "InstanceId": string;
    /**
     * 话务通道的CallId，有SIP协议生成，每个SIP通话都有一个CallId。
     * @example `e13c9740-1e37-123b-21b6-00163e352f9`
     */
    "CallId": string;
    /**
     * 通话ID。
     * @example `job-b8b0ca63-330c-4e65-8ae3-9de2c7ce7683`
     */
    "JobId": string;
    /**
     * 上报内容，值来自前端WebRTC中rtcPeerConnection.getStats(selector)获取的语音传输质量数据，只在云呼叫中心的公有云平台中使用，集成客户无需关心。
     * @example `4`
     */
    "ContentType": string;
    /**
     * 上报内容信息，只在云呼叫中心的公有云平台中使用，集成客户无需关心。
     * @example `{"media_source":{},"remote_inbound_rtp":{},"outbound_rtp":{},"inbound_rtp":{},"remote_outbound_rtp":{},"candidate":{},"basic":{"callId":"e13c9740-1e37-123b-21b6-00163e352f9","timestamp":"1647262108395","callStartTime":"1647262108393","uid":"user-test","access_point":"shanghai","browser":"90","ip":"127.0.0.1"}}`
     */
    "Content": string;
}
