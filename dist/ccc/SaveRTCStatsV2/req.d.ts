export interface SaveRTCStatsV2Request {
    /**
     * 实例ID。
     * @example `ccc-test`
     */
    "InstanceId": string;
    /**
     * 通话ID。
     * @example `257e73de-1ee8-123b-0b9a-00163e0a****`
     */
    "CallId": string;
    /**
     * 通用信息。
     * @example `[null,"","","1647337928819","1647337888816","agent",null,"上海","10.10.XX.XX","11.1.XX.XX","2002"]`
     */
    "GeneralInfo": string;
    /**
     * 发送报告内容。
     * @example `["11090","2055127460","0","2236","384592","ssrc_2055127460_send","2022-03-15T09:52:08.820Z","1"]`
     */
    "SenderReport": string;
    /**
     * 收到报告内容。
     * @example `["1","1649328987","40","PCMU","383560","89","49","ssrc_1649328987_recv","2022-03-15T09:52:08.820Z","","0","20000"]`
     */
    "ReceiverReport": string;
    /**
     * 接入点地址。
     * @example `["47.101.XX.XX","44368","47.104.XX.XX","37947"]`
     */
    "GoogAddress": string;
}
