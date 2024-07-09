export interface SendHotlineHeartBeatRequest {
    /**
     * 客户请求唯一ID。用于幂等校验，可以用UUID生成。
     * @example `46c1341e-2648-447a-9b11-70b6a298d94d`
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
    "AccountName": string;
    /**
     * 心跳签名。
     * 可调用[StartHotlineService](~~2718045~~)接口获取Token。
     * @example `0079e7a845e373****`
     */
    "Token": string;
}
