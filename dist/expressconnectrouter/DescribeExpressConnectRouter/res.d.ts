export interface DescribeExpressConnectRouterResponse {
    /**
     * 请求ID。
     * @example `6FABF516-FED3-5697-BDA2-B18C5D9A****`
     */
    RequestId: string;
    /**
     * 查询已创建ECR实例是否成功。取值：
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
     * @example `IllegalParamFormat.Name`
     */
    DynamicCode: string;
    /**
     * 动态错误信息，用于替换返回参数**ErrMessage**错误信息中的`%s`。
     * > 如果**ErrMessage**返回**The Value of Input Parameter %s is not valid**，且**DynamicMessage**返回**DtsJobId**，则代表所传入的请求参数**DtsJobId**不合法。
     * @example `The param format of Name **** is illegal.`
     */
    DynamicMessage: string;
    /**
     * 访问被拒绝详细信息。
     * @example `Authentication is failed for ****`
     */
    AccessDeniedDetail: string;
    /**
     * 专线网关实例总条数。
     * @example `2`
     */
    TotalCount: number;
    /**
     * 本次读取的最大数据量。取值范围：1~2147483647。默认值为20。
     * @example `20`
     */
    MaxResults: number;
    /**
     * 是否拥有下一次查询的令牌（Token）。取值：
     * - 如果 NextToken 为空表示没有下一次查询。
     * - 如果 NextToken 有返回值，该取值表示下一次查询开始的令牌。
     * @example `AAAAAdDWBF2w6Olxc+cMPjUtUMpttDGZkffvHCfhBKKNEyCVaq+WUEzuUWpp9+QOApNf6g==`
     */
    NextToken: string;
    /**
     * 专线网关实例列表。
     */
    EcrList: {
        /**
         * 专线网关实例ID。
         * @example `ecr-mezk2idmsd0vx2****`
         */
        EcrId: string;
        /**
         * 专线网关实例所属的阿里云账号ID。
         * @example `170646818729****`
         */
        OwnerId: number;
        /**
         * 专线网关实例创建时间。按照 ISO8601 标准表示，并需要使用 UTC 时间。格式为：YYYY-MM-DDThh:mm:ssZ。
         * @example `2023-02-16T01:44:50Z
        `
         */
        GmtCreate: string;
        /**
         * 专线网关实例修改时间。按照 ISO8601 标准表示，并需要使用 UTC 时间。格式为：YYYY-MM-DDThh:mm:ssZ。
         * @example `2023-02-16T01:44:50Z`
         */
        GmtModified: string;
        /**
         * 服务实例的部署状态。可能值：
         * - **ACTIVE**：已创建。
         * - **UPDATING**：修改中。
         * - **ASSOCIATING**：资源绑定中。
         * - **DISSOCIATING**：资源解绑中。
         * - **LOCKED_ATTACHING**：被外部系统绑定锁定。
         * - **LOCKED_DETACHING**：被外部系统解绑锁定。
         * - **RECLAIMING**：等待释放资源。
         * - **DELETING**：删除中。
         * @example `Active`
         */
        Status: string;
        /**
         * 服务实例的业务状态。可能的值：
         * - **Normal**：正常。
         * - **FinancialLocked**：欠费锁定。
         * @example `Normal`
         */
        BizStatus: string;
        /**
         * 专线网关实例所属资源组的ID。
         * @example `rg-aekzuscospt****`
         */
        ResourceGroupId: string;
        /**
         * 标签列表。
         */
        Tags: {
            /**
             * 专线网关实例的标签键。
             * @example `test`
             */
            TagKey: string;
            /**
             * 专线网关实例的标签值。
             * @example `test`
             */
            TagValue: string;
        }[];
        /**
         * 专线网关实例名称。
         * @example `test`
         */
        Name: string;
        /**
         * 专线网关实例的描述信息。
         * @example `test`
         */
        Description: string;
        /**
         * 专线网关实例的ASN号。
         * @example `45104`
         */
        AlibabaSideAsn: number;
    }[];
}
