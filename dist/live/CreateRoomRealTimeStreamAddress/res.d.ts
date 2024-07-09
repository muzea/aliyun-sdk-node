export interface CreateRoomRealTimeStreamAddressResponse {
    /**
     * 请求ID。
     * @example `F8DB7E25-6A35-161A-AA41-B7A658AF0635`
     */
    RequestId: string;
    /**
     * RTMP推流地址。
     * @example `rtmp://rtcpush****.rtmp.alivecdn.com/rtcdev****​/H4sIAAAA****_6pWSlayUipJLS5R0lEqRTBTEMwiJSul1CRTMxNjsyQTM****-PUZCMz8yTDZLNkAwMDA6M0I0ulWgA****__wEAAP__a_e7YkkAAAA?auth_key=1700492701-6e33-0-c6d7e3a93dc2dbe3af42f6259ccd****`
     */
    RtmpAddress: string;
}
