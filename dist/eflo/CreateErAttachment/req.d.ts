export interface CreateErAttachmentRequest {
    /**
     * 实例类型。取值：
     * - **VPD**：表示灵骏网段。
     * - **VCC**：表示灵骏连接。
     * @example `VPD`
     */
    "InstanceType": string;
    /**
     * 网络实例连接名称。
     * @example `er-attachemnt-vpd-xksd2obl`
     */
    "ErAttachmentName": string;
    /**
     * 网络实例ID，目前支持**灵骏网段(VPD)**、**灵骏连接(VCC)**。
     * 更多信息，请参见[什么是灵骏？](https://help.aliyun.com/document_detail/444430.html)
     * 您可以通过[ListVpds](https://help.aliyun.com/document_detail/2331077.html)、[ListVccs](https://help.aliyun.com/document_detail/2399526.html?)分别查询**灵骏网段**、**灵骏连接**。
     * @example `vpd-xksd****`
     */
    "InstanceId": string;
    /**
     * 是否自动接收来自本灵骏HUB下所有实例的所有路由。取值：
     * - **true**  ：自动接收。
     * - **false** ：不接收。
     * @example `true`
     */
    "AutoReceiveAllRoute": boolean;
    /**
     * 资源所属租户ID，跨账号资源需要填写。
     * @example `162093955616****`
     */
    "ResourceTenantId"?: string;
    /**
     * 地域ID。
     * @example `cn-wulanchabu`
     */
    "RegionId": string;
    /**
     * 灵骏HUB ID。
     * @example `er-kkop****`
     */
    "ErId": string;
}
