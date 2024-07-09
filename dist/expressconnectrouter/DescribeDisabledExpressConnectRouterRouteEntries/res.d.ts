export interface DescribeDisabledExpressConnectRouterRouteEntriesResponse {
    /**
     * 请求ID。
     * @example `6FABF516-FED3-5697-BDA2-B18C5D9A****`
     */
    RequestId: string;
    /**
     * 查询禁用专线网关路由是否成功。取值：
     * - **True**：成功。
     * - **False**：失败。
     * @example `True`
     */
    Success: boolean;
    /**
     * 判断调用是否成功。返回值为 200 表示加载成功，返回其他值表示加载失败，失败原因参见错误码。
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
     * > 如果**ErrMessage**返回**The Value of Input Parameter %s is not valid**，且**DynamicMessage**返回**DtsInstanceId**，则代表所传入的请求参数**DtsInstanceId**不合法。
     * @example `The param format of EcrId **** is illegal.`
     */
    DynamicMessage: string;
    /**
     * 访问被拒绝详细信息。
     * @example `Authentication is failed for ****`
     */
    AccessDeniedDetail: string;
    /**
     * 总共的路由条目数。
     * @example `2`
     */
    TotalCount: number;
    /**
     * 本次读取的最大数据量。取值范围：1～2147483647。默认值为10。
     * @example `6`
     */
    MaxResults: number;
    /**
     * 是否拥有下一次查询的令牌（Token）。取值：
     * - 如果NextToken为空表示没有下一次查询。
     * - 如果NextToken有返回值，该取值表示下一次查询开始的令牌。
     * @example `gAAAAABkDTaRFnmxUoMLVOn8YTIgYFeL2ch8j0sJs8VCIU8SS5438m3D9X1VqspCcaUEHRN9I_AfVwMhZHAhcNivifK_OtQxJQ==`
     */
    NextToken: string;
    /**
     * 查询的路由列表。
     */
    DisabledRouteEntryList: {
        /**
         * 专线网关实例ID。
         * @example `ecr-mezk2idmsd0vx2****
        `
         */
        EcrId: string;
        /**
         * 路由条目的目标网段。
         * @example `192.168.100.110/32`
         */
        DestinationCidrBlock: string;
        /**
         * 下一跳实例ID。
         * @example `br-hp3u4u5f03tfuljis****
        `
         */
        NexthopInstanceId: string;
        /**
         * 下一跳实例所属的地域ID。
         * @example `cn-hangzhou`
         */
        NexthopInstanceRegionId: string;
        /**
         * 创建路由条目的时间。
         * @example `1682317345`
         */
        GmtCreate: string;
    }[];
}
