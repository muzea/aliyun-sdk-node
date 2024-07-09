export interface ModifyAppRequest {
    /**
     * 应用ID，通过控制台创建和查询，仅支持传单个ID。
     * @example `ioeh****`
     */
    "AppId": string;
    /**
     * 应用名称，仅支持传单个名称。
     * @example `defaultName`
     */
    "AppName": string;
}
