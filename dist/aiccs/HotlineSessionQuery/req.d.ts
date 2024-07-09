export interface HotlineSessionQueryRequest {
    /**
     * AICCS实例ID。
     * 您可以在[智能联络中心控制台](https://aiccs.console.aliyun.com/overview)左侧导航栏的<b>实例管理</b>中获取。
     * @example `ccc_xp_pre-cn-***`
     */
    "InstanceId": string;
    /**
     * 会话ID。入呼后，websocket中的acid。
     * @example `7719786****`
     */
    "Acid"?: string;
    /**
     * 电话类型。取值：
     * - **1**：外呼。
     * - **2**：入呼。
     * - **3**：转交。
     * @example `1`
     */
    "CallType"?: number;
    /**
     * 发起方号码。例如用户手机号码、客服坐席号码、机器号码等。
     * @example `135615****`
     */
    "CalledNumber"?: string;
    /**
     * 接听方号码。例如用户手机号码、客服坐席号码、机器号码等。
     * @example `057177****`
     */
    "CallingNumber"?: string;
    /**
     * 技能组ID。
     * @example `123456`
     */
    "GroupId"?: number;
    /**
     * 技能组名称。
     * @example `自动化技能组`
     */
    "GroupName"?: string;
    /**
     * 会员ID。
     * @example `7856****`
     */
    "MemberId"?: string;
    /**
     * 会员名称。
     * @example `匿名会员`
     */
    "MemberName"?: string;
    /**
     * 结束时间戳。单位：毫秒。
     * @example `1614829721`
     */
    "QueryEndTime"?: number;
    /**
     * 开始时间戳。单位：毫秒。
     * @example `1614828721`
     */
    "QueryStartTime"?: number;
    /**
     * 请求ID。
     * @example `EE338D98-9BD3-4413-B165`
     */
    "RequestId"?: string;
    /**
     * 坐席名称。
     * @example `刘测试`
     */
    "ServicerName"?: string;
    /**
     * 坐席ID。
     * @example `555555`
     */
    "ServicerId"?: string;
    /**
     * 扩展参数。
     * @example `xxxx`
     */
    "Params"?: string;
    /**
     * 每页大小。取值大于**0**，默认值：**20**。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 当前页。取值大于**0**，默认值：**1**。
     * @example `1`
     */
    "PageNo"?: number;
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
    "CallResult"?: string;
    /**
     * 通话详情全局唯一ID。
     * @example `acc1c58dab4a4****0e3813c66`
     */
    "Id"?: string;
    /**
     * 会话ID列表。
     */
    "AcidList"?: string[];
    /**
     * 呼叫类型列表。
     */
    "CallTypeList"?: number[];
    /**
     * 技能组ID列表。
     */
    "GroupIdList"?: number[];
    /**
     * 主叫号码列表。
     */
    "CallingNumberList"?: string[];
    /**
     * 被叫号码列表。
     */
    "CalledNumberList"?: string[];
    /**
     * 会员列表。
     */
    "MemberIdList"?: string[];
    /**
     * 坐席列表。
     */
    "ServicerIdList"?: string[];
    /**
     * 呼叫结果列表。
     */
    "CallResultList"?: string[];
}
