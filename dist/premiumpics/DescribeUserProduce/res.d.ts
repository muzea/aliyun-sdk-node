export interface DescribeUserProduceResponse {
    /**
     * 状态。
     * @example `40`
     */
    Status: number;
    /**
     * 免费角色到期时间。
     * @example `2022-08-24 10:53:00`
     */
    EndTime: string;
    /**
     * 请求id
     * @example `1B0A9A68-5A1A-5179-8591-0463F4686EEB`
     */
    RequestId: string;
    /**
     * 订单原价(单位:分)
     * @example `1899.00`
     */
    OrderPrice: string;
    /**
     * 生效时间。
     * @example `2022-10-16T06:35:00Z`
     */
    StartTime: string;
    /**
     * 错误信息。
     * @example `111111111111111`
     */
    ErrorMsg: string;
    /**
     * BizType
     * @example `esp.logo`
     */
    BizType: string;
    /**
     * 订单ID。
     * @example `216992253670473`
     */
    OrderId: string;
    /**
     * 操作是否成功。取值：true：成功。false：失败。
     * @example `True`
     */
    Success: boolean;
    /**
     * 错误码
     * @example `luokeke`
     */
    PartnerCode: string;
    /**
     * 需求ID
     * @example `I20221129122203000001`
     */
    IntentionBizId: string;
    /**
     * 预留实例id
     * @example `swcopyright_swRegNormal_public_cn-tl32wr9giwy`
     */
    OrderInstanceId: string;
    /**
     * UserId
     * @example `UserId`
     */
    UserId: string;
    /**
     * 扩展信息。
     * @example `{\"designFileUrl\":\"https:\\/\\/oss.smalld.cn\\/zip\\/svg\\/20220519\\/3e63365c-f7d9-4fa6-9d38-413262fbf4c7.zip\"}`
     */
    ExtInfo: string;
    /**
     * 错误代码。
     * @example `sae.errorcode.ServiceDisabled.message`
     */
    ErrorCode: string;
    /**
     * 方案ID
     * @example `S20220624105026000001`
     */
    SolutionBizId: string;
    /**
     * 业务ID
     * @example `P20220713180339000001`
     */
    BizId: string;
}
