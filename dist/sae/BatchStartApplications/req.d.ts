export interface BatchStartApplicationsRequest {
    /**
     * 命名空间ID。
     * @example `cn-shanghai`
     */
    "NamespaceId": string;
    /**
     * 应用ID，多个ID时使用半角逗号（,）分割。
     * @example `ebf491f0-c1a5-45e2-b2c4-710dbe2a****`
     */
    "AppIds"?: string;
    /**
     * 应用的版本。
     * @example `1.0`
     */
    "Version"?: string;
}
