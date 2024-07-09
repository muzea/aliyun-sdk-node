export interface CreateIoTCloudConnectorRequest {
    /**
     * 指定云连接器实例的运营商。取值：
     * - **telecom**：中国电信。
     * - **mobile**：中国移动。
     * - **unicom**：中国联通。
     * @example `mobile`
     */
    "ISP": string;
    /**
     * 运营商APN ID。
     * @example `CMWAP`
     */
    "APN": string;
    /**
     * 云连接器实例的名称。
     * 名称长度为2~128个字符，以大小写字母或中文开头，可包含数字、下划线（_）或短划线（-）。
     * @example `test`
     */
    "IoTCloudConnectorName"?: string;
    /**
     * 云连接器实例描述信息。
     * 长度为2~256个字符，必须以字母或中文开头，但开头不能为`http://` 或`https://`。
     * @example `test`
     */
    "IoTCloudConnectorDescription"?: string;
    /**
     * 是否开启泛域名功能。
     * - **true**（默认值）：开启。
     * - **false**：关闭。
     * > 泛域名默认开启，本字段传值无效。
     * @example `true`
     */
    "WildcardDomainEnabled"?: boolean;
    /**
     * 客户端Token，用于保证请求的幂等性。
     * 从您的客户端生成一个参数值，确保不同请求间该参数值唯一。**ClientToken**只支持ASCII字符。
     * > 若您未指定，则系统自动使用API请求的**RequestId**作为**ClientToken**标识。每次API请求的**RequestId**可能不一样。
     * @example `123e4567-e89b-12d3-a456-426655440000`
     */
    "ClientToken"?: string;
    /**
     * 是否只预检此次请求，取值：
     * - **true**：发送检查请求，不会创建实例。检查项包括是否填写了必需参数、请求格式、业务限制。如果检查不通过，则返回对应错误。如果检查通过，则返回错误码`DryRunOperation`。
     * - **false**（默认值）：发送正常请求，通过检查后直接创建实例。
     * @example `false`
     */
    "DryRun"?: boolean;
    /**
     * 云连接器实例所在的地域ID。
     * 您可以通过调用[ListRegions](~~313836~~)接口获取地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 云连接器实例使用者ID。
     * @example `132193271328****`
     */
    "ResourceUid"?: number;
    /**
     * 云连接器实例的版本，不同版本有不同功能限制和计费策略。取值：
     * - **Basic**：基础版。
     * - **Standard**：标准版。
     * <props="china">云连接器实例默认创建标准版，如果需要创建基础版实例，请[提交工单](https://selfservice.console.aliyun.com/ticket/category/ga/today)申请。</props>
     * <props="intl">云连接器实例默认创建标准版，如果需要创建基础版实例，请[提交工单](https://workorder-intl.console.aliyun.com/?spm=5176.11182188.console-base-top.dworkorder.18ae4882n3v6ZW#/ticket/createIndex)申请</props>
     * @example `Standard`
     */
    "Type"?: string;
}
