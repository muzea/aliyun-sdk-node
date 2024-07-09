export interface InsertAiOutboundPhoneNumsRequest {
    /**
     * AICCS实例ID。
     * 您可以在[智能联络中心控制台](https://aiccs.console.aliyun.com/overview)左侧导航栏的<b>实例管理</b>中获取。
     * @example `agent_***`
     */
    "InstanceId": string;
    /**
     * 任务ID。
     * 可调用[CreateAiOutboundTask](~~312260~~)接口，查看返回参数中的**Data**，或者调用[GetAiOutboundTaskList](~~2718026~~)接口，查看返回参数中的**TaskId**。
     * @example `123`
     */
    "TaskId": number;
    /**
     * 任务批次号。
     * > 不填则导入到默认批次。
     * @example `2`
     */
    "BatchVersion"?: number;
    /**
     * 号码详情。
     * > 最多30条。
     */
    "Details": {
        /**
         * 业务自定义信息。
         * @example `xxxx`
         */
        BizData: string;
        /**
         * 外呼被叫号码。
         * @example `150****0000`
         */
        PhoneNum: string;
    }[];
}
