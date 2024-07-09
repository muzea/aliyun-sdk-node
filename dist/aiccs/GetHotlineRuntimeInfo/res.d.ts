export interface GetHotlineRuntimeInfoResponse {
    /**
     * 请求ID。
     * @example `EE338D98-9BD3-4413-B165`
     */
    RequestId: string;
    /**
     * 接口调用是否成功
     * @example `true`
     */
    Success: boolean;
    /**
     * 状态码。返回Success表示请求成功。
     * @example `200`
     */
    Code: string;
    /**
     * 状态码描述。
     * @example `OK`
     */
    Message: string;
    /**
     * 热线运行信息。
     * @example `{"buId":905,"phoneToken":"roESVzzgD1ytmG0W6nMkWinI6fbpKovm14fBhA0NsYPyi/srX/G0SvNB2z96AYiqy1vxQHiaFOdZSxtsAubdgr2kjs2yas7COO5dukQpsOLq9iNI4U6sKlcvaBi8xsyUr/hyqCdTVZDcYCOq0lH6eeNIQK/f7/gWqIw****=","isNeedWorkShift":false,"servicerId":741018,"accConfigUrl":"pre-acc-cs-public.alibaba-inc.com","agentBasicCode":"AgentCheckout","startWorkToReady":true,"servicerDn":"2000000001904123","isMaster":"1","tenantId":2001,"depId":1139139,"accTenantId":2001,"phoneData":"{\"timeStamp\":164240****,\"expireTime\":164257****,\"dn\":\"200000000190****\",\"source\":\"xspace\",\"serviceId\":741018}","agentBasicDesc":"坐席签出状态"}`
     */
    Data: any;
}
