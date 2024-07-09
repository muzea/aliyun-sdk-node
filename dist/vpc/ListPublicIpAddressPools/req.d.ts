export interface ListPublicIpAddressPoolsRequest {
    /**
     * IP地址池的实例ID列表。
     * 您最多可输入100个IP地址池的实例ID。
     */
    "PublicIpAddressPoolIds"?: string[];
    /**
     * IP地址池实例状态。取值：
     * - **Created**：可用。
     * - **Deleting**：删除中。
     * - **Modifying**：修改中。
     * @example `Created`
     */
    "Status"?: string;
    /**
     * 本次读取的最大数据记录数量。取值范围：**10**~**100**。默认值：**10**。
     * @example `10`
     */
    "MaxResults"?: number;
    /**
     * 是否拥有下一次查询的令牌（Token）。取值：
     * - 第一次查询和没有下一次查询时，均无需填写。
     * - 如果有下一次查询，取值为上一次API调用返回的NextToken值。
     * @example `FFmyTO70tTpLG6I3FmYAXGKPd****`
     */
    "NextToken"?: string;
    /**
     * 线路类型。取值：
     * - **BGP**（默认值）：BGP（多线）线路。
     * - **BGP_PRO**：BGP（多线）\_精品线路。
     * 关于BGP（多线）线路和BGP（多线）_精品线路的更多信息，请参见[EIP线路类型](~~32321~~)。
     * 如果您是单线带宽的白名单用户，您还可以选择以下类型：
     * -  **ChinaTelecom**：中国电信
     * - **ChinaUnicom**：中国联通
     * - **ChinaMobile**：中国移动
     * - **ChinaTelecom_L2**：中国电信L2
     * - **ChinaUnicom_L2**：中国联通L2
     * - **ChinaMobile_L2**：中国移动L2
     * 如果您是杭州金融云用户，该字段必填，取值：**BGP_FinanceCloud**。
     * @example `BGP`
     */
    "Isp"?: string;
    /**
     * 地址池实例的名称。
     * 描述可以为空，或输入1~128个字符，必须以字母或中文开头，可包含数字、半角句号（.）、下划线（_）和短划线（-），不能以`http://`或`https://`开头。
     * @example `AddressPoolName`
     */
    "Name"?: string;
    /**
     * 是否只预检此次请求。取值：
     * - **true**：发送检查请求，不会查询可使用的IP地址池信息。检查项包括是否填写了必需参数、请求格式、业务限制。如果检查不通过，则返回对应错误。如果检查通过，则返回错误码`DryRunOperation`。
     * - **false**（默认值）：发送正常请求，通过检查后返回HTTP 2xx状态码并直接进行操作。
     * @example `false`
     */
    "DryRun"?: boolean;
    /**
     * IP地址池所属的资源组ID。
     * @example `rg-acfmxazb4pcdvf****`
     */
    "ResourceGroupId"?: string;
    /**
     * 标签列表。
     */
    "Tags"?: {
        /**
         * 资源的标签键。最多支持输入20个标签键。如需传入该值，则不能输入空字符串。
         * 一个标签键最多支持128个字符，不能以`aliyun`和`acs:`开头，不能包含`http://`或者`https://`。
         * @example `FinanceDept`
         */
        Key: string;
        /**
         * 资源的标签值。最多支持输入20个标签值。如需传入该值，可以输入空字符串。
         * 最多支持128个字符，不能以`aliyun`和`acs:`开头，不能包含`http://`或者`https://`。
         * @example `FinanceJoshua`
         */
        Value: string;
    }[];
    /**
     * 要查询的IP地址池所在的地域ID。
     * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
     * @example `cn-chengdu`
     */
    "RegionId": string;
    /**
     * 是否开启DDoS防护（增强版）。取值：
     * - **false**：不开启。
     * - **true**：开启。
     * @example `true`
     */
    "SecurityProtectionEnabled"?: boolean;
}
