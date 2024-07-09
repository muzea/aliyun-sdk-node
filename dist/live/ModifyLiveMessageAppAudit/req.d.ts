export interface ModifyLiveMessageAppAuditRequest {
    /**
     * 需要修改信息的互动消息应用ID。
     * @example `demo`
     */
    "AppId": string;
    /**
     * 安全审核方式。取值：
     * - 0：不进行安全审核
     * - 1：内置安全审核
     * - 2：自定义安全审核
     * @example `2`
     */
    "AuditType"?: number;
    /**
     * 如果是自定义安全审核（AuditType=2），则需要提供安全审核的地址。安全审核地址以http://或https://开头，不包含私有IP，不允许带端口号。
     * @example `http://example.aliyundoc.com/exampleaudit`
     */
    "AuditUrl"?: string;
    /**
     * 数据中心，需要与[CreateLiveMessageApp](~~2593195~~)中的数据中心一致，当前支持上海（取值为cn-shanghai)、新加坡（取值为ap-southeast-1）。
     * @example `cn-shanghai`
     */
    "DataCenter"?: string;
}
