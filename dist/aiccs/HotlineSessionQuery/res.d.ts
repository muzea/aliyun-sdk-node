export interface HotlineSessionQueryResponse {
    /**
     * 状态码。返回Success表示请求成功。
     * @example `Success`
     */
    Code: string;
    /**
     * 状态码描述。
     * @example `xxxx`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `EE339D98-9BD3-4413-B165`
     */
    RequestId: string;
    /**
     * 接口调用是否成功。
     * @example `true`
     */
    Success: boolean;
    /**
     * 通话数据。
     */
    Data: {
        /**
         * 每页的数量。
         * @example `10`
         */
        PageSize: number;
        /**
         * 当前页。
         * @example `1`
         */
        PageNumber: number;
        /**
         * 总共记录数。
         * @example `26`
         */
        TotalCount: number;
        /**
         * 通话记录。
         */
        CallDetailRecord: {
            /**
             * 呼叫结果。取值：
             * - **normal**：正常挂机。
             * - **touchRouteError**：队列挂机。
             * - **touchInQueue**：队列挂机。
             * - **touchInLoss**：队列挂机。
             * - **userHangup**：用户挂机，IVR挂机。
             * - **sysHangup**：系统挂机，IVR挂机。
             * - **transferAgent**：用户挂机，IVR挂机。
             * - **dailing**：客服挂机，振铃挂机。
             * - **TouchRingCallLoss**：队列挂机，振铃挂机。
             * @example `normal`
             */
            CallResult: string;
            /**
             * 长途电话。
             * @example `1861111****`
             */
            TrunkCall: string;
            /**
             * 坐席名称。
             * > 呼入场景未分配到到坐席之前无坐席信息。
             * @example `刘测试`
             */
            ServicerName: string;
            /**
             * 热线分配出队时间。
             * > 外呼场景无出队时间。
             * @example `2020-10-02 22:32:59`
             */
            OutQueueTime: string;
            /**
             * 通话时长。单位：秒。
             * > 未接通场景无通话时长。
             * @example `37`
             */
            CallContinueTime: number;
            /**
             * 通话创建时间。
             * > - 外呼场景为外呼发起时间。
             * - 入呼场景为通话进入ACC系统时间。
             * @example `2020-10-02 22:32:55`
             */
            CreateTime: string;
            /**
             * 接起时间。
             * @example `2020-10-02 22:33:09`
             */
            PickUpTime: string;
            /**
             * 振铃时长。单位：秒。
             * > 外呼场景无振铃时间。
             * @example `10`
             */
            RingContinueTime: number;
            /**
             * 被叫号码。
             * @example `135615*****`
             */
            CalledNumber: string;
            /**
             * 坐席ID。
             * > 呼入场景未分配到到坐席之前无坐席信息。
             * @example `555555`
             */
            ServicerId: string;
            /**
             * 挂断时间。
             * @example `2020-10-02 22:33:46`
             */
            HangUpTime: string;
            /**
             * 满意度，评价星级。取值：
             * - **2**：二级满意度
             * - **3**：三级满意度
             * - **4**：四级满意度
             * - **5**：五级满意度
             * > 外呼场景和未接通场景无数据。
             * @example `4`
             */
            EvaluationLevel: number;
            /**
             * 坐席ID。转交电话号码。
             * > 非转交场景数据为Null。
             * @example `12`
             */
            PassiveTransferId: string;
            /**
             * 坐席ID。
             * > 非转交场景数据为Null。
             * @example `12`
             */
            ActiveTransferId: string;
            /**
             * 挂机方。取值：
             * - **1**：系统挂机
             * - **2**：客户挂机
             * - **3**：客服挂机
             * - **null**：未知
             * @example `2`
             */
            HangUpRole: string;
            /**
             * 会话被转交方。取值：
             * - **1**：坐席ID。
             * - **2**：转交电话号码。
             * > 非转交场景数据为Null
             * @example `1`
             */
            PassiveTransferIdType: string;
            /**
             * 会员名称。
             * @example `匿名会员`
             */
            MemberName: string;
            /**
             * 满意度-评价得分。取值：
             * - **1**：非常不满意
             * - **2**：不满意
             * - **3**：一般
             * - **4**：满意
             * - **5**：非常满意
             * > 外呼场景和未接通场景无数据。
             * @example `4`
             */
            EvaluationScore: number;
            /**
             * 会话ID。入呼后，websocket中的acid。
             * @example `7719786`
             */
            Acid: string;
            /**
             * 振铃开始时间。
             * > 外呼场景无振铃开始时间。
             * @example `2020-10-02 22:32:59`
             */
            RingStartTime: string;
            /**
             * 呼叫类型。取值：
             * - **1**：外呼
             * - **2**：入呼
             * - **3**：转交
             * @example `1`
             */
            CallType: number;
            /**
             * 技能组名称。
             * > 当CallType取值为**1**时，外呼场景无技能组信息。
             * @example `自动化技能组`
             */
            GroupName: string;
            /**
             * 技能组ID。
             * > 当CallType取值为**1**时，外呼场景无技能组信息。
             * @example `123456`
             */
            GroupId: number;
            /**
             * 振铃结束时间。
             * > 外呼场景无振铃结束时间。
             * @example `2020-10-02 22:33:09`
             */
            RingEndTime: string;
            /**
             * 热线分配-入队时间。
             * > 外呼场景无入队时间。
             * @example `2020-10-02 22:32:55`
             */
            InQueueTime: string;
            /**
             * 发起方号码。例如用户手机号码、客服坐席号码、机器号码等。
             * @example `0571773`
             */
            CallingNumber: string;
            /**
             * 会员ID。
             * @example `7856876`
             */
            MemberId: string;
            /**
             * 排队时长。
             * @example `4`
             */
            QueueUpContinueTime: number;
            /**
             * 通话详情全局唯一ID。
             * @example `acc1c58dab4a4dd280e3813c66`
             */
            Id: string;
        }[];
    };
}
