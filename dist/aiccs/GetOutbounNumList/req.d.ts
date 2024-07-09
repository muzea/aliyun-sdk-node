export interface GetOutbounNumListRequest {
    /**
     * 客户请求唯一ID。用于幂等校验，可以用UUID生成。
     * @example `46c1341e-2648-447a-9b11-70b6a298d****`
     */
    "ClientToken"?: string;
    /**
     * 实例ID。
     * 请登录[智能联络中心控制台](https://aiccs.console.aliyun.com/overview)，在**实例管理**中查看实例ID。
     * @example `ccc_xp_pre-cn-****`
     */
    "InstanceId": string;
    /**
     * 坐席账号名称（坐席登录名）。
     * @example `123@****.com`
     */
    "AccountName": string;
}
