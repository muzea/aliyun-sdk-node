export interface DescribeExpressConnectRouterAssociationResponse {
    /**
     * 请求ID。
     * @example `05130E79-588D-5C40-A718-C4863A59****`
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
     * @example `IllegalParamFormat.EcrId`
     */
    DynamicCode: string;
    /**
     * 动态错误信息，用于替换返回参数**ErrMessage**错误信息中的 `%s`。
     * > 如果**ErrMessage **返回**The Value of Input Parameter %s is not valid**，且**DynamicMessage **返回**DtsJobId**，则代表所传入的请求参数**DtsJobId**不合法。
     * @example `The param format of EcrId **** is illegal.`
     */
    DynamicMessage: string;
    /**
     * 访问被拒绝详细信息。
     * @example `Authentication is failed for ****`
     */
    AccessDeniedDetail: string;
    /**
     * 关联的资源总数。
     * @example `1`
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
     * @example `AAAAAYws9fJ0Ur4MGm/5OkDoW/Zn0J0/sCjivzwX9oBcwFnWaaas/kSG+J/WzLOxJHS4****
    `
     */
    NextToken: string;
    /**
     * 关联的资源列表。
     */
    AssociationList: {
        /**
         * 专线网关与VPC或TR的关联ID。
         * @example `ecr-assoc-9p2qxx5phpca2m****
        `
         */
        AssociationId: string;
        /**
         * 资源所属地域。
         * @example `cn-hangzhou`
         */
        RegionId: string;
        /**
         * 资源所属的阿里云账号ID。
         * @example `167509154715****`
         */
        OwnerId: number;
        /**
         * 创建关联的时间。按照 ISO8601 标准表示，并需要使用 UTC 时间。格式为：YYYY-MM-DDThh:mm:ssZ。
         * @example `2024-01-09T12:18:23Z`
         */
        GmtCreate: string;
        /**
         * 修改关联的时间。按照 ISO8601 标准表示，并需要使用 UTC 时间。格式为：YYYY-MM-DDThh:mm:ssZ。
         * @example `2024-01-09T12:18:23Z`
         */
        GmtModified: string;
        /**
         * 关联资源的部署状态。可能值：
         * - **CREATING**：创建中。
         * - **ACTIVE**：已创建。
         * - **INACTIVE**：专线网关关联转发路由器，待转发路由器关联专线网关状态。
         * - **ASSOCIATING**：资源绑定中。
         * - **DISSOCIATING**：资源解绑中。
         * - **UPDATING**：修改中。
         * - **DELETING**：删除中。
         * @example `ACTIVE`
         */
        Status: string;
        /**
         * 关联的资源类型：
         * - **VPC**：专有网络。
         * - **TR**：转发路由器。
         * @example `VPC`
         */
        AssociationNodeType: string;
        /**
         * 转发路由器所属的阿里云账号ID。
         * @example `189159362009****
        `
         */
        TransitRouterOwnerId: number;
        /**
         * 转发路由器实例的ID。
         * @example `tr-2ze4i71c6be454e2l****
        `
         */
        TransitRouterId: string;
        /**
         * 云企业网实例ID。
         * @example `cen-5510frtx8zi54q****`
         */
        CenId: string;
        /**
         * VPC所属的阿里云账号ID。
         * @example `146757288406****`
         */
        VpcOwnerId: number;
        /**
         * VPC实例的ID。
         * @example `vpc-2zeeaxet4i2j1a7n7****`
         */
        VpcId: string;
        /**
         * 允许的路由前缀列表。
         */
        AllowedPrefixes: string[];
        /**
         * 专线网关实例ID。
         * @example `ecr-fu8rszhgv7623c****`
         */
        EcrId: string;
    }[];
}
