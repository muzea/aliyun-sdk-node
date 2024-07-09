export interface ListInstancesRequest {
    /**
     * 轻量应用服务器所属的地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 轻量应用服务器的实例ID。取值可以由多个实例ID组成一个JSON数组，最多支持100个ID，ID之间用半角逗号（,）隔开。
     * > 同时指定`InstanceIds`和`PublicIpAddresses`参数时，必须保证对应的实例ID和公网IP属于同一台轻量应用服务器，否则返回值为空。
     * @example `["2ad1ae67295445f598017499dc****", "2ad1ae67295445f598017123dc****"]`
     */
    "InstanceIds"?: string;
    /**
     * 实例的计费方式。取值：PrePaid，目前仅支持包年包月。
     * 默认值：PrePaid
     * @example `PrePaid`
     */
    "ChargeType"?: string;
    /**
     * 轻量应用服务器的公网IP。取值可以由多个公网ID组成一个JSON数组，最多支持100个ID，ID之间用半角逗号（,）隔开。
     * > 同时指定`InstanceIds`和`PublicIpAddresses`参数时，必须保证对应的实例ID和公网IP属于同一台轻量应用服务器，否则返回值为空。
     * @example `["42.1.**.**", "42.2.**.**"]`
     */
    "PublicIpAddresses"?: string;
    /**
     * 轻量应用服务器列表的页码。
     * 默认值：1
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 分页查询时设置的每页行数。最大值：100
     * 默认值：10
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 实例状态，可能值：
     * - Pending：准备中。
     * - Starting：启动中。
     * - Running：运行中。
     * - Stopping：停止中。
     * - Stopped：停止。
     * - Resetting：重置中。
     * - Upgrading：升级中。
     * - Disabled：不可用。
     * @example `Running`
     */
    "Status"?: string;
    /**
     * 实例的标签列表。
     */
    "Tag"?: {
        /**
         * 实例的标签键。标签键长度的取值范围：1~64。N 的取值范围：1~20。
         * @example `TestKey`
         */
        Key: string;
        /**
         * 实例的标签值。标签值长度的取值范围：1~64。N 的取值范围：1~20。
         * @example `TestValue`
         */
        Value: string;
    }[];
    /**
     * 轻量应用服务器所属的资源组ID。
     * @example `rg-aek2bti7cf7****`
     */
    "ResourceGroupId"?: string;
    /**
     * 轻量应用服务器实例名称，支持使用通配符*进行模糊搜索。
     * @example `*test，test*,*test*`
     */
    "InstanceName"?: string;
}
