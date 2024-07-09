export interface RenewAppGroupRequest {
    /**
     * 应用名称
     * @example `my_app`
     */
    "appGroupIdentity": string;
    /**
     * 保证请求幂等性
     * @example `74db41d8cd3c784209093aa76afbe89e`
     */
    "clientToken"?: string;
    /**
     * 续费请求体
     */
    "body"?: any;
}
