export interface DetachApplication2ConnectorRequest {
    /**
     * ConnectorID。
     * @example `connector-94db94e06b98****`
     */
    "ConnectorId": string;
    /**
     * 内网访问应用ID集合。最多可输入100个内网访问应用ID。
     */
    "ApplicationIds": string[];
}
