export interface UpgradeInstanceRequest {
    /**
     * 指定的轻量应用服务器的实例ID。
     * @example `ace0706b2ac4454d984295a94213****`
     */
    "InstanceId": string;
    /**
     * 指定的轻量应用服务器所属的地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 升级后的套餐ID。您可以调用[ListPlans](~~189314~~)查询套餐信息。
     * @example `swas.s2.c2m2s50b4t08`
     */
    "PlanId": string;
    /**
     * 保证请求幂等性。从您的客户端生成一个参数值，确保不同请求间该参数值唯一。ClientToken只支持ASCII字符，且不能超过64个字符。更多信息，请参见[如何保证幂等性](~~25693~~)。
     * @example `123e4567-e89b-12d3-a456-426655440000`
     */
    "ClientToken"?: string;
}
