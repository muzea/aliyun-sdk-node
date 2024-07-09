export interface ListErAttachmentsResponse {
    /**
     * 响应状态码。
     * @example `0`
     */
    Code: number;
    /**
     * 错误信息。（当实例状态为异常时，提示异常原因。）
     * @example `成功`
     */
    Message: string;
    /**
     * 当次请求的Request ID。
     * @example `3D9D6E7B-365B-5200-BFA6-9B79E269058C`
     */
    RequestId: string;
    /**
     * 返回结果。
     */
    Content: {
        /**
         * 总记录数。
         * @example `0`
         */
        Total: number;
        /**
         * 灵骏HUB网络实例列表。
         */
        Data: {
            /**
             * 创建时间。
             * @example `1669734207000`
             */
            CreateTime: string;
            /**
             * 修改时间。
             * @example `1640187007000`
             */
            GmtModified: string;
            /**
             * 提示信息。
             * @example `成功`
             */
            Message: string;
            /**
             * 实例状态。取值：
             * - **Available**：正常。
             * - **Not Available**：不可用。
             * - **Executing**：执行中。
             * - **Deleting**：删除中。
             * @example `Available`
             */
            Status: string;
            /**
             * 灵骏HUB地域信息。
             * @example `cn-wulanchabu`
             */
            RegionId: string;
            /**
             * 租户ID。
             * @example `165544950****`
             */
            TenantId: string;
            /**
             * 灵骏HUB网络实例名称。
             * @example `vcc-cn-209300qha01`
             */
            ErAttachmentName: string;
            /**
             * 灵骏HUB网络实例ID。
             * @example `er-attachment-i1io****`
             */
            ErAttachmentId: string;
            /**
             * 灵骏HUB实例ID。
             * @example `er-kkop****`
             */
            ErId: string;
            /**
             * 实例类型。取值：
             * - **VPD**：表示灵骏网段。
             * - **VCC**：表示灵骏连接。
             * @example `VCC`
             */
            InstanceType: string;
            /**
             * 网络实例ID，目前支持**灵骏网段(VPD)**、**灵骏连接(VCC)**。
             * 更多信息，请参见[什么是灵骏？](https://help.aliyun.com/document_detail/444430.html)
             * 您可以通过[ListVpds](https://help.aliyun.com/document_detail/2331077.html)、[ListVccs](https://help.aliyun.com/document_detail/2399526.html)分别查询**灵骏网段**、**灵骏连接**。
             * @example `vcc-cn-209300q****`
             */
            InstanceId: string;
            /**
             * 实例名称。
             * @example `vcc-wulanchabu-main`
             */
            InstanceName: string;
            /**
             * 是否自动接收来自本灵骏HUB下所有实例的所有路由，取值：
             * - **true**  ：自动接收。
             * - **false** ：不接收。
             * @example `true`
             */
            AutoReceiveAllRoute: boolean;
            /**
             * 是否跨账号，取值：
             * - **true**  ：当前网络实例为跨账号资源。
             * - **false** ：当前网络实例为本账号资源。
             * @example `false`
             */
            Across: boolean;
            /**
             * 资源所属租户ID。
             * @example `111115666713****`
             */
            ResourceTenantId: string;
            /**
             * 资源组实例ID
             */
            ResourceGroupId: string;
        }[];
    };
}
