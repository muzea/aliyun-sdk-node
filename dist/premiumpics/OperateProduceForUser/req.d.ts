export interface OperateProduceForUserRequest {
    /**
     * BizType
     * @example `esp.logo`
     */
    "BizType": string;
    /**
     * 业务ID
     * @example `P20221110021200000001`
     */
    "BizId": string;
    /**
     * 指定操作的类型：-improve：迁移-replace：替换
     * @example `USER_CONFIRM`
     */
    "OperateType": string;
    /**
     * 扩展字段
     * @example `{\"downloadType\":\"normalLogo\"}`
     */
    "ExtInfo"?: string;
}
