export interface SetDcdnDomainStagingConfigRequest {
    /**
     * 加速域名，多个域名用英文逗号（,）分隔。
     * @example `example.com`
     */
    "DomainName": string;
    /**
     * 功能列表，格式如下：
     * - functionName（功能名称，必填）：可配置功能请参见[功能列表](~~410622~~)，多个参数之间用半角逗号（,）分隔。
     * - argName（参数名称，必填）：functionName的配置项（可配置多个配置项）。
     * - argValue（参数值，必填）：functionName的配置项的取值。
     * - parentid（规则条件ID，非必填）：通过配置[域名配置功能参数](~~410622~~)中的功能函数condition（规则引擎），可以创建出规则条件（规则条件可以通过识别用户请求中携带的各种参数来匹配和过滤用户请求），每一个规则条件被创建以后都会生成一个对应的[configid](~~410558~~)，configid可以被当作ParentId参数被其他功能函数引用，这样规则条件就可以与功能配置一起组合形成更灵活的配置。
     * parentId为 -1：表示删除该配置里面已有的规则条件。
     *   ```
     *  "functionArgs": [{
     *      "argName": "功能参数A",
     *      "argValue": "功能参数A对应的值"
     *     },
     *   {
     *     "argName": "功能参数B",
     *     "argValue": "功能参数B对应的值"
     *      }],
     * ```
     *  "functionName": "功能名称",
     *  "parentId": 选填项，对应引用规则条件的configid
     * }]
     * 不使用parentId的情况下，配置示例如下： 使用函数origin_request_header添加回源HTTP请求头的时候引用了configid=222728944812032的规则条件，请求参数如下：
     *  ```
     *  "functionArgs": [{
     *             "argName": "header_operation_type",
     *             "argValue": "add"
     *         }, {
     *             "argName": "header_name",
     *             "argValue": "Accept-Encoding"
     *         }, {
     *             "argName": "header_value",
     *             "argValue": "gzip"
     *         }, {
     *             "argName": "duplicate",
     *             "argValue": "off"
     *         }],
     *         "functionName": "origin_request_header"
     * }]
     * ```
     * 使用parentId的情况下，配置示例如下： 使用函数origin_request_header添加回源HTTP请求头的时候引用了configid=222728944812032的规则条件，请求参数如下：
     * ```
     *         "functionArgs": [{
     *             "argName": "header_operation_type",
     *             "argValue": "add"
     *         }, {
     *             "argName": "header_name",
     *             "argValue": "Accept-Encoding"
     *         }, {
     *             "argName": "header_value",
     *             "argValue": "gzip"
     *         }, {
     *             "argName": "duplicate",
     *             "argValue": "off"
     *         }],
     *         "functionName": "origin_request_header",
     *         "parentId": 222728944812032
     * }]
     * ```
     * 对一个已经使用了parentId的功能配置删除对parentId的引用，配置示例如下： 函数origin_request_header添加回源HTTP请求头的时候已经引用了configid=222728944812032的规则条件，现在要删掉对规则条件的引用，请求参数如下：
     * ```
     *         "functionArgs": [{
     *             "argName": "header_operation_type",
     *             "argValue": "add"
     *         }, {
     *             "argName": "header_name",
     *             "argValue": "Accept-Encoding"
     *         }, {
     *             "argName": "header_value",
     *             "argValue": "gzip"
     *         }, {
     *             "argName": "duplicate",
     *             "argValue": "off"
     *         }],
     *         "functionName": "origin_request_header",
     *         "parentId": -1
     * }]
     * ```
     * @example `
    [{"functionArgs": [{"argName": "key","argValue": "Content-Encoding"},{"argName": "value","argValue": "gzip"}],"functionName": "set_resp_header"} ]`
     */
    "Functions": string;
}
