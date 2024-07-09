export interface BatchSetDcdnDomainConfigsRequest {
    /**
     * 您的加速域名，多个域名使用半角逗号（,）分隔。
     * @example `example.com,example.org`
     */
    "DomainNames": string;
    /**
     * 功能列表，格式如下：
     *  - **functionName**（功能名称）：可配置功能请参见[功能列表](~~410622~~)，多个参数之间用半角逗号（,）分隔。
     * - **argName**：**functionName**的配置项（可配置多个配置项）。
     * - **argValue**：**functionName**的配置项的取值。
     * - **parentid**（规则条件ID，非必填）：通过配置[域名配置功能参数](~~388460~~)中的功能函数**condition**（规则引擎），可以创建出规则条件（规则条件可以通过识别用户请求中携带的各种参数来匹配和过滤用户请求），每一个规则条件被创建以后都会生成一个对应的[configid](~~388994~~)，configid可以被当作ParentId参数被其他功能函数引用，这样规则条件就可以与功能配置一起组合形成更灵活的配置。
     * ```
     * [
     *  {
     *    "functionArgs": [
     *     {
     *      "argName": "功能参数A",
     *      "argValue": "功能参数A对应的值"
     *     },
     *   {
     *     "argName": "功能参数B",
     *     "argValue": "功能参数B对应的值"
     *      }
     *  ],
     *  "functionName": "功能名称"
     *     }
     * ]
     * ```
     * @example `[{"functionArgs":[{"argName":"switch","argValue":"on"},{"argName":"region","argValue":"*"}],"functionName":"ipv6"}]`
     */
    "Functions": string;
}
