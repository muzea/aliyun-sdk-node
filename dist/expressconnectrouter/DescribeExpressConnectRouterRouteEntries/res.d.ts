export interface DescribeExpressConnectRouterRouteEntriesResponse {
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
     * 实例操作返回信息。
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
     * @example `The param format of EcrId **** is illegal.
    `
     */
    DynamicMessage: string;
    /**
     * 访问被拒绝详细信息。
     * @example `Authentication is failed for ****
    `
     */
    AccessDeniedDetail: string;
    /**
     * 列表总条目数。
     * @example `2`
     */
    TotalCount: number;
    /**
     * 本次读取的最大数据量。取值范围：1～2147483647。默认值：10。
     * @example `10`
     */
    MaxResults: number;
    /**
     * 是否拥有下一次查询的令牌（Token）。取值：
     * - 如果**NextToken**为空表示没有下一次查询。
     * - 如果**NextToken**有返回值，该取值表示下一次查询开始的令牌。
     * @example `gAAAAABkWwFTUMNCdWC0VMYOIylA56Hx6JUfCZlk5hQ5g_fnKmetN6303tqq5UJ2ouJzyT2fDOdzb-NqyEB5jcY8Z2euX7qHDA==`
     */
    NextToken: string;
    /**
     * 路由条目列表。
     */
    RouteEntriesList: {
        /**
         * 路由条目的目标网段。
         * @example `192.168.0.**​/**`
         */
        DestinationCidrBlock: string;
        /**
         * 专线网关实例的状态
         * @example `ACTIVE`
         */
        Status: string;
        /**
         * 下一跳实例ID。
         * @example `br-hp3u4u5f03tfuljis****
        `
         */
        NexthopInstanceId: string;
        /**
         * 下一跳实例所属的地域。
         * @example `cn-hangzhou`
         */
        NexthopInstanceRegionId: string;
        /**
         * 路由条目经过的AS路径。
         * @example `[64993,64512]`
         */
        AsPath: string;
        /**
         * BGP路由条目携带的Community值。
         * @example `9001:9263`
         */
        Community: string;
    }[];
}
