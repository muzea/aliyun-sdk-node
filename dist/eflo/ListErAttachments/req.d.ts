export interface ListErAttachmentsRequest {
    /**
     * 网络实例连接ID。
     * @example `er-attachment-i1io****`
     */
    "ErAttachmentId"?: string;
    /**
     * 网络实例连接名称。
     * @example `vcc-cn-209300qha01`
     */
    "ErAttachmentName"?: string;
    /**
     * 实例状态。取值：
     * - **Available**：正常。
     * - **Not Available**：不可用。
     * - **Executing**：执行中。
     * - **Deleting**：删除中。
     * @example `Available`
     */
    "Status"?: string;
    /**
     * 是否自动接收来自本灵骏HUB下所有实例的所有路由，取值：
     * - **true**  ：自动接收。
     * - **false** ：不接收。
     * @example `true`
     */
    "AutoReceiveAllRoute"?: boolean;
    /**
     * 网络实例ID，目前支持**灵骏网段(VPD)**、**灵骏连接(VCC)**。
     * 更多信息，请参见[什么是灵骏？](https://help.aliyun.com/document_detail/444430.html)
     * 您可以通过[ListVpds](https://help.aliyun.com/document_detail/2331077.html)、[ListVccs](https://help.aliyun.com/document_detail/2399526.html?)分别查询**灵骏网段**、**灵骏连接**。
     * @example `vcc-cn-209300q****`
     */
    "InstanceId"?: string;
    /**
     * 实例类型。取值：
     * - **VPD**：表示灵骏网段。
     * - **VCC**：表示灵骏连接。
     * @example `VCC`
     */
    "InstanceType"?: string;
    /**
     * 实例所属租户ID。
     * @example `111115666713****`
     */
    "ResourceTenantId"?: string;
    /**
     * 资源组实例ID
     */
    "ResourceGroupId"?: string;
    /**
     * 地域ID。
     * @example `cn-wulanchabu`
     */
    "RegionId": string;
    /**
     * 灵骏HUB实例ID。
     * @example `er-kkop****`
     */
    "ErId": string;
    /**
     * 当前页码。起始值：1。默认值：1。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 每页返回值的个数。默认值：20。
     * @example `20`
     */
    "PageSize"?: number;
    /**
     * 是否开启分页查询。取值：
     * - **true**：开启分页查询。
     * - **false**：不开启分页查询。
     * @example `false`
     */
    "EnablePage"?: boolean;
}
