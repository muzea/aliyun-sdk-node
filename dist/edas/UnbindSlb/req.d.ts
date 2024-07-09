export interface UnbindSlbRequest {
    /**
     * 应用ID。
     * @example `c627c157-560d-********************`
     */
    "AppId": string;
    /**
     * SLB实例ID。
     * @example `lb-wz9vo49****************`
     */
    "SlbId": string;
    /**
     * SLB网络类型：
     * - **internet**：外网实例。
     * - **intranet**：内网实例。
     * @example `internet`
     */
    "Type": string;
    /**
     * 是否删除监听：
     * * true： 删除。
     * * false：不删除。
     * @example `false`
     */
    "DeleteListener"?: string;
}
