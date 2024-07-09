export interface SetCdnDomainStagingConfigRequest {
    /**
     * 加速域名，仅支持单个域名进行设置。
     * @example `example.com`
     */
    "DomainName": string;
    /**
     * 功能列表，格式如下：
     * > - **functionName**（功能名称）：可配置功能请参见[功能列表](~~388460~~)，多个参数之间用半角逗号（,）分隔。
     * > - **argName**：**functionName**的配置项（可配置多个配置项）。
     * > - **argValue**：**functionName**的配置项的取值。
     * ```json
     * [
     *   {
     *     "functionArgs": [
     *       {
     *         "argName": "功能参数A",
     *         "argValue": "功能参数A对应的值"
     *       },
     *       {
     *         "argName": "功能参数B",
     *         "argValue": "功能参数B对应的值"
     *       }
     *     ],
     *     "functionName": "功能名称"
     *   }
     * ]
     * ```
     * @example `[{"functionArgs":[{"argName":"enable","argValue":"on"},{"argName":"pri","argValue":"1"},{"argName":"rule","argValue":"xxx"}],"functionName":"edge_function"}]`
     */
    "Functions": string;
}
