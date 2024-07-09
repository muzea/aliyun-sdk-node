export interface AttachApplication2ConnectorRequest {
    /**
     * ConnectorID。
     * @example `connector-94db94e06b98****
    `
     */
    "ConnectorId": string;
    /**
     * 内网访问应用ID集合。一个Connector最多可挂载内网访问应用的数量不超过内网访问应用总数。
     */
    "ApplicationIds": string[];
}
