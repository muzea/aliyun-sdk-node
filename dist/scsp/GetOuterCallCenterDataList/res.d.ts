export interface GetOuterCallCenterDataListResponse {
    /**
     * 错误描述
     * @example `xxxx`
     */
    Message: string;
    /**
     * 请求ID，用于跟踪错误原因
     * @example `EE338D98-9BD3-4413-B165`
     */
    RequestId: string;
    /**
     * 热线数据
     */
    Data: {
        /**
         * 挂断原因，有以下枚举： 1.转人工导致的结束 2.未转人工在机器人阶段结束 3.用户主动挂断电话 4.机器人主动挂断电话 5.网络异常原因导致的挂断电话
         * @example `3`
         */
        EndReason: string;
        /**
         * 电话类型，有以下枚举： 1：呼入 2：呼出
         * @example `1`
         */
        CallType: string;
        /**
         * 入呼后，websocket中的acid
         * @example `100365558`
         */
        Acid: string;
        /**
         * 接听方号码-用户手机号码、客服坐席号码、机器号码等
         * @example `0571773`
         */
        ToPhoneNum: string;
        /**
         * 从上游系统带来的用户信息，json格式记录
         * @example `{\"level\":25,\"name\":\"Lee\"}`
         */
        UserInfo: string;
        /**
         * 通话接通时间，呼入就等同于gmt_creae，呼出就是用户接通时间
         * @example `16085570`
         */
        InterveneTime: string;
        /**
         * 关键单据号-如订单ID等
         * @example `78604`
         */
        BizId: string;
        /**
         * 机器人session_id
         * @example `a15ce370-1051-4040-9822`
         */
        SessionId: string;
        /**
         * 发起方号码-用户手机号码、客服坐席号码、机器号码等
         * @example `135615`
         */
        FromPhoneNum: string;
        /**
         * json，上游系统的业务信息等，如机器人实例等信息
         * @example `{\"isCallBack\":\"true\"}`
         */
        ExtInfo: string;
        /**
         * 单据号类型-如order,等
         * @example `SHOP_ID`
         */
        BizType: string;
    }[];
    /**
     * 错误编码
     * @example `Success`
     */
    Code: string;
    /**
     * 接口调用是否成功
     * @example `true`
     */
    Success: boolean;
    /**
     * http状态码
     * @example `200`
     */
    HttpStatusCode: number;
}
