export interface DescribeInstanceGrantedToExpressConnectRouterResponse {
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
     * @example `IllegalParamFormat.Name
    `
     */
    DynamicCode: string;
    /**
     * 动态错误信息，用于替换返回参数**ErrMessage**错误信息中的`%s`。
     * > 如果**ErrMessage**返回**The Value of Input Parameter %s is not valid**，且**DynamicMessage**返回**DtsJobId**，则代表所传入的请求参数**DtsJobId**不合法。
     * @example `The param format of Name **** is illegal.
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
     * 授权给专线网关的网络实例总数。
     * @example `10`
     */
    TotalCount: number;
    /**
     * 本次读取的最大数据量。取值范围：1~2147483647。默认值：20。
     * @example `20`
     */
    MaxResults: number;
    /**
     * 是否拥有下一次查询的令牌（Token）。取值：
     * - 如果**NextToken**为空表示没有下一次查询。
     * - 如果**NextToken**有返回值，该取值表示下一次查询开始的令牌。
     * @example `FFlMqGuJ10uN3l+FX/cBrGDNXUOUifNeOuAJlT4dc3vsWD6DsNSFAC2FtpeH5QOSG2WFdyRoun7gSLCm5o69YnAQ==`
     */
    NextToken: string;
    /**
     * ECR授权实例列表。
     */
    EcrGrantedInstanceList: {
        /**
         * 授权ID。
         * @example `gr-8gdelo13mi99g1****`
         */
        GrantId: string;
        /**
         * 授权网络实例的状态。
         * @example `Active`
         */
        Status: string;
        /**
         * 创建实例的时间。
         * @example `1669023139000`
         */
        GmtCreate: string;
        /**
         * 修改实例的时间
         * @example `1669023139000`
         */
        GmtModified: string;
        /**
         * 专线网关实例ID。
         * @example `ecr-mezk2idmsd0vx2****`
         */
        EcrId: string;
        /**
         * 授权实例ID。
         * @example `vbr-j6cwxhgg0s5nuephp****
        `
         */
        NodeId: string;
        /**
         * 网络实例的类型。取值：
         * - **VBR**：边界路由器实例。
         * - **VPC**：虚拟专有网络实例。
         * @example `VBR`
         */
        NodeType: string;
        /**
         * 授权实例所属地域ID。
         * @example `cn-hangzhou`
         */
        NodeRegionId: string;
        /**
         * 实例所属的阿里云账号的ID。
         * @example `129845258050****
        `
         */
        NodeOwnerUid: number;
        /**
         * 实例所属的阿里云企业账号ID。
         * @example `26842****`
         */
        NodeOwnerBid: string;
    }[];
}
