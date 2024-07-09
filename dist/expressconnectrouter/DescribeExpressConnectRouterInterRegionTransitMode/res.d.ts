export interface DescribeExpressConnectRouterInterRegionTransitModeResponse {
    /**
     * 请求ID。
     * @example `6FABF516-FED3-5697-BDA2-B18C5D9A****`
     */
    RequestId: string;
    /**
     * 是否调用成功。取值：
     * - **True**：成功。
     * - **False**：失败。
     * @example `True`
     */
    Success: boolean;
    /**
     * 判断调用是否成功。返回值为200表示加载成功，返回其他值表示加载失败，失败原因参见错误码。
     * @example `200`
     */
    Code: string;
    /**
     * 操作返回信息。
     * @example `OK`
     */
    Message: string;
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 动态错误码。
     * @example `IllegalParamFormat.EcrId`
     */
    DynamicCode: string;
    /**
     * 动态错误信息，用于替换返回参数**ErrMessage**错误信息中的`%s`。
     * > 如果**ErrMessage**返回**The Value of Input Parameter %s is not valid**，且**DynamicMessage**返回**DtsJobId**，则代表所传入的请求参数**DtsJobId**不合法。
     * @example `The param format of EcrId **** is illegal.`
     */
    DynamicMessage: string;
    /**
     * 访问被拒绝详细信息。
     * @example `Authentication is failed for ****`
     */
    AccessDeniedDetail: string;
    /**
     * 跨域转发模式列表。
     */
    InterRegionTransitModeList: {
        /**
         * 专线网关所属的地域ID。
         * @example `cn-hangzhou`
         */
        RegionId: string;
        /**
         * ECR跨域转发模式，取值：
         * - **ECMP**：负载均衡模式。
         * - **NearBy**：就近转发模式。
         * @example `ECMP`
         */
        Mode: string;
    }[];
}
