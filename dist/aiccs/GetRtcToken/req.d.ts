export interface GetRtcTokenRequest {
    /**
     * AICCS实例ID。
     * 您可以在[智能联络中心控制台](https://aiccs.console.aliyun.com/overview)左侧导航栏的**实例管理**中获取。
     * @example `agent_***`
     */
    "InstanceId": string;
    /**
     * 坐席账号名称，即账号注册时填写的手机或邮箱。实例内唯一。
     * @example `username@example.com`
     */
    "AccountName": string;
}
