export interface ListGreyTagRouteResponse {
    /**
     * 请求ID。
     * @example `9D29CBD0-45D3-410B-9826-52F86F90****`
     */
    RequestId: string;
    /**
     * 附加信息。取值说明如下：
     * - 请求正常，返回**success**。
     * - 请求异常，返回具体异常错误码。
     * @example `success`
     */
    Message: string;
    /**
     * 调用链ID，用于精确查询调用信息。
     * @example `0a98a02315955564772843261e****`
     */
    TraceId: string;
    /**
     * 灰度规则信息。
     */
    Data: {
        /**
         * 当前页码。
         * @example `1`
         */
        CurrentPage: number;
        /**
         * 分页查询时设置的每页数量。目前只能为**1**。
         * @example `1`
         */
        PageSize: number;
        /**
         * 总个数。目前只能为**1**。
         * @example `1`
         */
        TotalSize: number;
        /**
         * 返回结果。
         */
        Result: {
            /**
             * 规则ID。
             * @example `1`
             */
            GreyTagRouteId: number;
            /**
             * 规则名称。
             * @example `rule-name`
             */
            Name: string;
            /**
             * 规则描述。
             * @example `test`
             */
            Description: string;
            /**
             * Spring Cloud灰度规则。
             */
            ScRules: {
                /**
                 * Spring Cloud应用灰度规则对应的路径。
                 * @example `/path`
                 */
                path: string;
                /**
                 * 灰度规则的条件模式。取值说明如下：
                 * - **AND**：表示与，即同时满足条件列表中的所有条件。
                 * - **OR**：表示或，即满足条件列表中的任一条件。
                 * @example `OR`
                 */
                condition: string;
                /**
                 * 条件列表。
                 */
                items: {
                    /**
                     * 比较类型。取值说明如下：
                     * - **param**：表示Parameter。
                     * - **cookie**：表示Cookie。
                     * - **header**：表示Header。
                     * @example `cookie`
                     */
                    type: string;
                    /**
                     * 参数名。
                     * @example `test`
                     */
                    name: string;
                    /**
                     * 运算符。取值说明如下：
                     * - **rawvalue**：表示直接比较。
                     * - **list**：表示白名单。
                     * - **mod**：表示对100取模。
                     * - **deterministic\_proportional\_steaming\_division**：表示百分比。
                     * @example `rawvalue`
                     */
                    operator: string;
                    /**
                     * 参数取值，根据**type**和**name**得到的值跟这个值进行比较。
                     * @example `test`
                     */
                    value: string;
                    /**
                     * 比较操作符。可取值：**>**、**<**、**>=**、**<=**、**==**以及**!=**。
                     * @example `==`
                     */
                    cond: string;
                    /**
                     * Spring Cloud应用不涉及。
                     * @example `N/A`
                     */
                    index: number;
                    /**
                     * Spring Cloud应用不涉及。
                     * @example `N/A`
                     */
                    expr: string;
                }[];
            }[];
            /**
             * 为配置好ALB网关路由的应用创建的灰度规则。
             */
            AlbRules: {
                /**
                 * 网关路由ID。
                 * @example `23`
                 */
                ingressId: string;
                /**
                 * 灰度规则的条件模式，当前只支持AND：表示同时满足条件列表中的所有条件。
                 * @example `AND`
                 */
                condition: string;
                /**
                 * 条件列表。
                 */
                items: {
                    /**
                     * 比较类型。取值说明如下：
                     * - **sourceIp**：表示SourceIp。
                     * - **cookie**：表示Cookie。
                     * - **header**：表示Header。
                     * @example `cookie`
                     */
                    type: string;
                    /**
                     * 参数名。
                     * @example `example`
                     */
                    name: string;
                    /**
                     * 运算符。取值说明如下：目前只支持rawvalue：直接比较。
                     * @example `rawvalue`
                     */
                    operator: string;
                    /**
                     * 参数取值，根据type和name得到的值跟这个值进行比较。
                     * @example `test`
                     */
                    value: string;
                    /**
                     * 暂支持==。
                     * @example `==`
                     */
                    cond: string;
                    /**
                     * ALB应用无需填写。
                     * @example `N/A`
                     */
                    index: number;
                    /**
                     * ALB应用无需填写。
                     * @example `N/A`
                     */
                    expr: string;
                }[];
                /**
                 * 服务名称。
                 * @example `s-6366-e3****-99**`
                 */
                serviceName: string;
            }[];
            /**
             * Dubbo服务灰度规则。
             */
            DubboRules: {
                /**
                 * Dubbo服务名称。
                 * @example `com.alibaba.edas.boot.EchoService`
                 */
                serviceName: string;
                /**
                 * 灰度规则对应的Dubbo服务的分组。
                 * @example `DUBBO`
                 */
                group: string;
                /**
                 * Dubbo服务版本。
                 * @example `1.0.0`
                 */
                version: string;
                /**
                 * Dubbo服务的方法名。
                 * @example `echo`
                 */
                methodName: string;
                /**
                 * 灰度规则的条件模式。取值说明如下：
                 * - **AND**：表示与，即同时满足条件列表中的所有条件。
                 * - **OR**：表示或，即满足条件列表中的任一条件。
                 * @example `OR`
                 */
                condition: string;
                /**
                 * 条件列表。
                 */
                items: {
                    /**
                     * 参数编号，0表示第一个参数。
                     * @example `0`
                     */
                    index: number;
                    /**
                     * 参数值获取表达式。语法遵循SpEL（link）表达式，取值说明如下：
                     * - **留空**：表示直接取当前参数的值。
                     * - **.name**：表示取参数的name属性，相当于args0.getName()。
                     * - **.isEnabled()**：表示取参数的enabled属性，相当于args0.isEnabled()。
                     * - **[0]**：表示当前参数应是一个数组，取数组的第一个值，相当于args0\[0]，注意开始没有英文句点（.）。
                     * - **.get(0)**：表示当前参数应是一个List，取List的第一个值，相当于args0.get(0)。
                     * - **.get("key")**：表示当前参数是一个Map，获取key对应的值，相当于args0.get("key")。
                     * @example `.name`
                     */
                    expr: string;
                    /**
                     * 运算符。取值说明如下：
                     * - **rawvalue**：表示直接比较。
                     * - **list**：表示白名单。
                     * - **mod**：表示对100取模。
                     * - **deterministic\_proportional\_steaming\_division**：表示百分比。
                     * @example `rawvalue`
                     */
                    operator: string;
                    /**
                     * 参数取值，根据**expr**和**index**得到的值跟这个值进行比较。
                     * @example `test`
                     */
                    value: string;
                    /**
                     * 比较操作符。可取值：**>**、**<**、**>=**、**<=**、**==**以及**!=**。
                     * @example `==`
                     */
                    cond: string;
                    /**
                     * Dubbo服务不涉及。
                     * @example `N/A`
                     */
                    type: string;
                    /**
                     * Dubbo服务不涉及。
                     * @example `N/A`
                     */
                    name: string;
                }[];
            }[];
            /**
             * 规则被创建的时间戳。单位：毫秒。
             * @example `1619007592013`
             */
            CreateTime: number;
            /**
             * 规则被更新的时间戳。单位：毫秒。
             * @example `1609434061000`
             */
            UpdateTime: number;
        }[];
    };
    /**
     * 错误码。取值说明如下：
     * - 请求成功：不返回**ErrorCode**字段。
     * - 请求失败：返回**ErrorCode**字段。具体信息，请参见本文的**错误码**列表。
     * @example `空`
     */
    ErrorCode: string;
    /**
     * 接口状态或POP错误码。取值说明如下：
     * - **2xx**：成功。
     * - **3xx**：重定向。
     * - **4xx**：请求错误。
     * - **5xx**：服务器错误。
     * @example `200`
     */
    Code: string;
    /**
     * 查询变更单信息是否成功。取值说明如下：
     * - **true**：表示查询成功。
     * - **false**：表示查询失败。
     * @example `true`
     */
    Success: boolean;
}
