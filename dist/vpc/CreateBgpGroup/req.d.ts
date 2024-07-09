export interface CreateBgpGroupRequest {
    /**
     * VBR所在的地域ID。
     * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
     * @example `cn-shanghai`
     */
    "RegionId": string;
    /**
     * VBR的ID。
     * @example `vbr-bp1ctxy813985gkuk****`
     */
    "RouterId": string;
    /**
     * BGP组的名称。
     * 长度为2~128个字符，必须以英文大小写字母或中文开头，可包含数字，半角句号（.），下划线（_）和短划线（-）。
     * @example `test`
     */
    "Name"?: string;
    /**
     * BGP组的描述信息。
     * 长度为2~256个字符，必须以英文大小写字母或中文开头，但不能以`http:// `或`https://`开头。
     * @example `BGP`
     */
    "Description"?: string;
    /**
     * 自定义阿里云侧BGP AS号。取值：
     * - **45104**
     * - **64512~65534**
     * - **4200000000~4294967294**
     * > 其中**65025**为阿里云保留值，阿里侧默认使用**45104**作为**LocalAsn**，使用自定义**LocalAsn**功能在多线接入场景时可能存在BGP路由环路风险，请合理评估后使用。
     * @example `45104`
     */
    "LocalAsn"?: number;
    /**
     * 本地IDC侧设备的AS号。
     * @example `1****`
     */
    "PeerAsn": number;
    /**
     * BGP组的认证密钥。
     * @example `!PWZ2****`
     */
    "AuthKey"?: string;
    /**
     * 是否指定伪AS号。取值：
     * - **false**（默认值）：否。
     * - **true**：是。
     * > 运行BGP的路由器一般只能属于一个AS。当需要用新的AS替代原有的AS（例如AS需要迁移或者和其他AS合并），并且因为业务等客观因素无法立即修改BGP配置时，可以通过指定伪AS号与本端建立连接，保证业务不中断。
     * @example `true`
     */
    "IsFakeAsn"?: boolean;
    /**
     * 客户端Token，用于保证请求的幂等性。
     * 从您的客户端生成一个参数值，确保不同请求间该参数值唯一。ClientToken只支持ASCII字符。
     * > 若您未指定，则系统自动使用API请求的**RequestId**作为**ClientToken**标识。每次API请求的**RequestId**不一样。
     * @example `123e4567-e89b-12d3-a456-426655440000`
     */
    "ClientToken"?: string;
    /**
     * IP版本。取值：
     * - **IPv4**（默认值）：IPv4版本。
     * - **IPv6**：IPv6版本，只有当创建BGP组的VBR开通IPv6功能时，支持IPv6版本。
     * @example `IPv4`
     */
    "IpVersion"?: string;
    /**
     * BGP邻居的路由条目上限。单位：条，默认值：**110**。
     * @example `110`
     */
    "RouteQuota"?: number;
}
