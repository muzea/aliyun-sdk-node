export interface ListAclsResponse {
    /**
     * ACL列表。
     */
    Acls: {
        /**
         * ACL ID。
         * @example `acl-hp34s2h0xx1ht4nwo****`
         */
        AclId: string;
        /**
         * ACL名称。
         * @example `test-acl`
         */
        AclName: string;
        /**
         * ACL状态。取值：
         * - **Creating**：创建中。
         * - **Available**：正常可用状态。
         * - **Configuring**：配置中。
         * @example `Available`
         */
        AclStatus: string;
        /**
         * ACL IP版本。取值：**IPv4**。
         * @example `IPv4`
         */
        AddressIPVersion: string;
        /**
         * 资源组ID。
         * @example `rg-atstuj3rtopty****`
         */
        ResourceGroupId: string;
        /**
         * 配置管理开关。取值：
         * - **true**：开启配置管理。
         * - **false**：未开启配置管理。
         * @example `false`
         */
        ConfigManagedEnabled: boolean;
        /**
         * ACL创建时间，格式为：`YYYY-MM-DDThh:mm:ssZ`。
         * @example `2023-02-15T07:37:33Z`
         */
        CreateTime: string;
        /**
         * 标签。
         */
        Tags: {
            /**
             * 标签键。最多支持128个字符，不能以aliyun或acs:开头，不能包含http://或https://。
             * @example `env`
             */
            Key: string;
            /**
             * 标签值。最多支持128个字符，不能以aliyun或acs:开头，不能包含http://或https://。
             * @example `product`
             */
            Value: string;
        }[];
    }[];
    /**
     * 本次读取的最大数据记录数量，此参数为可选参数，取值**1**~**100**。参数传入为空时，默认值为**20**。
     * @example `20`
     */
    MaxResults: number;
    /**
     * 是否拥有下一次查询的令牌（Token）。取值：
     * - 如果**NextToken**为空表示没有下一次查询。
     * - 如果**NextToken**有返回值，该取值表示下一次查询开始的令牌。
     * @example `FFmyTO70t****`
     */
    NextToken: string;
    /**
     * 请求ID。
     * @example `593B0448-D13E-4C56-AC0D-FDF******`
     */
    RequestId: string;
    /**
     * 本次请求条件下的数据总量。
     * @example `10`
     */
    TotalCount: number;
}
