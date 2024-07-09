export interface GetHotlineCallActionRequest {
    /**
     * 客户请求唯一ID。用于幂等校验，可以用UUID生成。
     * @example `46c1341e-2648-447a-9b11-70b6a298d9****`
     */
    "ClientToken"?: string;
    /**
     * AICCS实例ID。
     * 您可以在[智能联络中心控制台](https://aiccs.console.aliyun.com/overview)左侧导航栏的<b>实例管理</b>中获取。
     * @example `ccc_xp_pre-cn-***`
     */
    "InstanceId": string;
    /**
     * 坐席账号名称，即账号注册时填写的手机或邮箱。实例内唯一。
     * @example `username@example.com`
     */
    "AccountName"?: string;
    /**
     * 操作类型。取值：
     * - **1**：热线。
     * - **2**：在线。
     * - **3**：工单。
     * @example `1`
     */
    "Act"?: number;
    /**
     * 来源类型。取值：
     * - **hotlinebs_out**：热线。
     * - **ticket_out**：工单。
     * - **other_system_out**：其他系统。
     * @example `hotlinebs_out`
     */
    "FromSource"?: string;
    /**
     * 业务自定义参数，格式为JSON。
     * @example `{"name":123}`
     */
    "Biz"?: string;
    /**
     * 热线自定义参数，格式为JSON。
     * @example `{"time":1}`
     */
    "Acc"?: string;
}
