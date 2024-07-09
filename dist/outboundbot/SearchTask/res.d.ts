export interface SearchTaskResponse {
    /**
     * http状态码
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 页号
     * @example `0`
     */
    PageIndex: number;
    /**
     * 请求id
     * @example `254EB995-DEDF-48A4-9101-9CA5B72FFBCC`
     */
    RequestId: string;
    /**
     * 是否成功
     * @example `true`
     */
    Success: boolean;
    /**
     * 请求状态码
     * @example `OK`
     */
    Code: string;
    /**
     * 接口提示信息
     * @example `Success`
     */
    Message: string;
    /**
     * 个数
     * @example `10`
     */
    PageSize: number;
    /**
     * 总计个数
     * @example `2`
     */
    Total: number;
    /**
     * 任务列表
     * @example `[]`
     */
    SearchTaskInfoList: {
        /**
         * 作业组名字
         * @example `85成新（有笔记划线）2021_11_14_18_00_51`
         */
        JobGroupName: string;
        /**
         * 用户id
         * @example `12334134`
         */
        UserId: string;
        /**
         * 实际执行时间
         * @example `1643436089677`
         */
        ActualTime: number;
        /**
         * 被叫号码
         * @example `15205879599`
         */
        CalledNumber: string;
        /**
         * 任务状态
         * @example `Executing`
         */
        TaskStatusString: string;
        /**
         * 通话状态展示内容
         * @example `xxxx`
         */
        TaskStatusName: string;
        /**
         * 任务状态
         * @example `Succeeded`
         */
        JobStatus: number;
        /**
         * 异常情况
         * @example `[{"code":"OutboundCallError.SipCodeError", "params":[{"key":"SipCode","value":"500"}]}]`
         */
        DialException: string;
        /**
         * 用户名
         * @example `xxx`
         */
        UserName: string;
        /**
         * 通话时长展示字段
         * @example `ActualTime`
         */
        CallDurationDisplay: string;
        /**
         * 有无应答
         * @example `true`
         */
        HasAnswered: boolean;
        /**
         * 作业状态展示内容
         * @example `xxx`
         */
        JobStatusName: string;
        /**
         * 通话时长，单位秒。
         * @example `1646792941`
         */
        CallDuration: number;
        /**
         * 任务创建时间
         * @example `1646792941`
         */
        TaskCreateTime: number;
        /**
         * 任务状态
         * @example `Scheduling`
         */
        JobStatusString: string;
        /**
         * 对话完成
         * @example `true`
         */
        HasReachedEndOfFlow: boolean;
        /**
         * 实例id
         * @example `73df6283-26b2-402d-bad0-ffa489923ea1`
         */
        InstanceId: string;
        /**
         * 拒识挂机
         * @example `true`
         */
        HasHangUpByRejection: boolean;
        /**
         * 任务结束原因
         * @example `OutOfService`
         */
        TaskEndReason: number;
        /**
         * 作业组id
         * @example `37db3113-ad34-4ba3-b930-468f016bbf95`
         */
        JobGroupId: string;
        /**
         * 任务状态
         * @example `Success`
         */
        TaskStatus: number;
        /**
         * 作业id
         * @example `6203248e-e652-4ef8-a1eb-586ed7b54dc2`
         */
        JobId: string;
        /**
         * 录音时长，单位秒。
         * @example `10`
         */
        RecordingDuration: number;
        /**
         * 任务id
         * @example `479aea04-3a92-4ac3-935d-c8798c667850`
         */
        TaskId: string;
        /**
         * 异常情况
         * @example `["OutboundCallError.SipTrunkError"]`
         */
        DialExceptionOld: string;
        /**
         * 备注信息页面展示使用字段
         */
        DialExceptionCodes: string[];
        /**
         * 挂断时最后一句是否播报完成
         * @example `true`
         */
        HasLastPlaybackCompleted: boolean;
        /**
         * 话术名字
         * @example `慢病线索`
         */
        ScriptName: string;
    }[];
}
