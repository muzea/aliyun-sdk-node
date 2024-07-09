export interface ModifyLiveMessageAppAuditResponse {
    /**
     * 请求ID。
     * @example `4C4E8440-3838-1831-9BDE-AFC15803****`
     */
    RequestId: string;
    /**
     * 需要修改的互动消息应用ID。
     * @example `demo`
     */
    AppId: string;
    /**
     * 互动消息应用签名，互动消息服务SDK需要该信息。
     * @example `**************************************************************************`
     */
    AppSign: string;
    /**
     * 安全审核方式。
     * @example `2`
     */
    AuditType: number;
    /**
     * AuditType为2时提供的安全审核地址。
     * @example `http: //example.aliyundoc.com/exampleaudit`
     */
    AuditUrl: string;
    /**
     * 调用鉴权。如果是自定义安全审核，则默认为true开启调用鉴权。
     * @example `true`
     */
    AuditNeedAuthentication: boolean;
}
