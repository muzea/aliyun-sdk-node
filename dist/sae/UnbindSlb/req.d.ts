export interface UnbindSlbRequest {
    /**
     * 目标应用ID。
     * @example `0099b7be-5f5b-4512-a7fc-56049ef1****`
     */
    "AppId": string;
    /**
     * 是否解绑公网SLB。取值说明如下：
     * - **true**：表示解绑公网SLB。
     * - **false**：表示不解绑公网SLB。
     * @example `true`
     */
    "Internet"?: boolean;
    /**
     * 是否解绑私网SLB。取值说明如下：
     * - **true**：表示解绑私网SLB。
     * - **false**：表示不解绑私网SLB。
     * @example `true`
     */
    "Intranet"?: boolean;
}
