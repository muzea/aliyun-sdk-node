export interface ConfirmAvatar2dTrainRequest {
    /**
     * 租户ID，从虚拟数字人开放平台的对应业务配置的开发者信息中获取的TenantId
     * @example `xxxxx`
     */
    "TenantId": number;
    /**
     * 形象code
     * @example `CH_2d_xxxxxx`
     */
    "Code": string;
    /**
     * - ACCEPT --确认通过
     * - DECLINE --拒绝
     * @example `ACCEPT`
     */
    "Confirm": string;
}
