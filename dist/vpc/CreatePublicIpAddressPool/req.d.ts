export interface CreatePublicIpAddressPoolRequest {
    /**
     * 线路类型。取值：
     * - **BGP**（默认值）：BGP（多线）线路。
     * - **BGP_PRO**：BGP（多线）\_精品线路。
     * 关于BGP（多线）线路和BGP（多线）_精品线路的更多信息，请参见[EIP线路类型](~~32321~~)。
     * - 如果您是单线带宽的白名单用户，您还可以选择以下类型：
     *     -  **ChinaTelecom**：中国电信
     *     - **ChinaUnicom**：中国联通
     *     - **ChinaMobile**：中国移动
     *     - **ChinaTelecom_L2**：中国电信L2
     *     - **ChinaUnicom_L2**：中国联通L2
     *     - **ChinaMobile_L2**：中国移动L2
     * - 如果您是杭州金融云用户，该字段必填，取值：**BGP_FinanceCloud**。
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
     * 地址池实例的描述。
     * 描述可以为空，或输入2~256个中英文字符，不能以http://或https://开头。
     * @example `AddressPoolDescription`
     */
    "Description"?: string;
    /**
     * 客户端Token，用于保证请求的幂等性。
     * 从您的客户端生成一个参数值，确保不同请求间该参数值唯一。ClientToken只支持ASCII字符。
     * > 若您未指定，则系统自动使用API请求的**RequestId**作为**ClientToken**标识。每次API请求的**RequestId**不一样。
     * @example `02fb3da4-130e-11****`
     */
    "ClientToken"?: string;
    /**
     * 是否只预检此次请求。取值：
     * - **true**：发送检查请求，不会创建IP地址池。检查项包括是否填写了必需参数、请求格式、业务限制。如果检查不通过，则返回对应错误。如果检查通过，则返回错误码`DryRunOperation`。
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
     * 要创建的IP地址池所在的地域ID。
     * @example `cn-chengdu`
     */
    "RegionId": string;
    /**
     * IP地址池的业务类型。取值：
     * - **CloudBox**：云盒。仅云盒用户支持选择该类型。
     * - **Default**（默认值）：默认，表示非特殊类型。
     * @example `Default`
     */
    "BizType"?: string;
    /**
     * IP地址池的可用区。
     * **BizType**取值为**CloudBox**，即IP地址池业务类型为云盒时，该参数必填。
     */
    "Zones"?: string[];
    /**
     * 资源的标签。
     */
    "Tag"?: {
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
     * 安全防护级别。
     * - 配置为空时，默认为DDoS防护（基础版）。
     * - 配置为**AntiDDoS_Enhanced**时，表示DDoS防护（增强版）。
     */
    "SecurityProtectionTypes"?: string[];
}
