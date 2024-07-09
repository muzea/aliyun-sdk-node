export interface SetDomainWebSocketStatusRequest {
    /**
     * 指定要操作API所属分组ID
     * @example `cf976e63b70c4993807e7bb9345d4695`
     */
    "GroupId": string;
    /**
     * 自定义域名
     * @example `ac.fluvet.cn`
     */
    "DomainName": string;
    /**
     * 操作参数值
     * @example `OPEN`
     */
    "ActionValue": string;
    "WSSEnable"?: string;
}
