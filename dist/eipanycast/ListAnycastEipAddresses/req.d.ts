export interface ListAnycastEipAddressesRequest {
    /**
     * Anycast EIP实例ID。
     * > 为保证查询结果准确性，不建议同时配置**AnycastIds**和**AnycastId**。
     * @example `aeip-2zeerraiwb7ujsxdc****`
     */
    "AnycastId"?: string;
    /**
     * Anycast EIP实例ID列表。
     * 最多支持输入50个Anycast EIP实例ID。
     * > 为保证查询结果准确性，不建议同时配置**AnycastIds**和**AnycastId**。
     */
    "AnycastIds"?: string[];
    /**
     * Anycast EIP实例被分配的IP地址。
     * @example `139.95.XX.XX`
     */
    "AnycastEipAddress"?: string;
    /**
     * Anycast EIP实例接入区域。
     * 取值：**international**，指中国内地以外的区域。
     * @example `international`
     */
    "ServiceLocation"?: string;
    /**
     * Anycast EIP付费模式。
     * 取值：**PostPaid**，后付费模式。
     * @example `PostPaid`
     */
    "InstanceChargeType"?: string;
    /**
     * Anycast EIP实例访问公网计费方式。
     * 取值：**PayByTraffic**，指按流量计费。
     * @example `PayByTraffic`
     */
    "InternetChargeType"?: string;
    /**
     * Anycast EIP实例名称。
     * 名称长度为0~128个字符，以大小写字母或中文开头，可包含数字、短划线（-）或下划线（_）。
     * @example `doctest`
     */
    "Name"?: string;
    /**
     * 实例所属的资源组ID。
     * @example `rg-aekzthsmwsnfuni`
     */
    "ResourceGroupId"?: string;
    /**
     * 标签信息。
     */
    "Tags"?: {
        /**
         * 资源的标签键。最多支持20个标签键。一旦传入该值，则不允许为空字符串。
         * 最多支持128个字符，不能以`aliyun`和`acs:`开头，不能包含`http://`或者`https://`。
         * > 参数**Tag.N**（**Tag.N.Key**与**Tag.N.Value**）至少输入一个。
         * @example `FinanceDept`
         */
        Key: string;
        /**
         * 资源的标签值。最多支持20个标签值。一旦传入该值，可以为空字符串。
         * 最多支持128个字符，不能以`aliyun`和`acs:`开头，不能包含`http://`或者`https://`。
         * > 参数**Tag.N**（**Tag.N.Key**与**Tag.N.Value**）至少输入一个。
         * @example `FinanceJoshua`
         */
        Value: string;
    }[];
    /**
     * 列表分页展示时每页展示的实例个数，取值范围：**20~100**。默认值：**50**。
     * @example `50`
     */
    "MaxResults"?: number;
    /**
     * 是否拥有下一次查询的令牌（Token）。取值：
     * - 第一次查询和没有下一次查询时，均无需填写。
     * - 如果有下一次查询，取值为上一次API调用返回的NextToken值。
     * @example `caeba0bbb2be03f84eb48b699f0a****`
     */
    "NextToken"?: string;
    /**
     * IP状态，取值：
     * - **Associating**：绑定中。
     * - **Unassociating**：解绑中。
     * - **Allocated**：已分配。
     * - **Associated**：已绑定。
     * - **Modifying**：修改中。
     * - **Releasing**：释放中。
     * - **Released**：已释放。
     * @example `Associated`
     */
    "Status"?: string;
    /**
     * Anycast EIP实例的业务状态，取值：
     * - **Normal**：正常状态。
     * - **FinancialLocked**：欠费锁定状态。
     * @example `Normal`
     */
    "BusinessStatus"?: string;
    /**
     * Anycast EIP绑定的云资源实例ID列表。
     * 最多支持输入100个云资源实例ID。
     * @example `lb-2zebb08phyczzawe****`
     */
    "BindInstanceIds"?: string[];
}
