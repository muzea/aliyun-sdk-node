export interface ListApplicationsWithTagRulesResponse {
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 返回信息。
     * - 当请求成功时，返回成功信息。
     * - 当请求失败时，返回失败原因。
     * @example `success`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `7466566F-F30F-4A29-965D-3E0AF21D****`
     */
    RequestId: string;
    /**
     * 请求结果，取值如下：
     * - `true`：请求成功。
     * - `false`：请求失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 数据概览。
     */
    Data: {
        /**
         * 数据结构。
         */
        Result: {
            /**
             * 应用所属的MSE命名空间。
             * @example `default`
             */
            Namespace: string;
            /**
             * 应用名。
             * @example `service-lottery-core`
             */
            AppName: string;
            /**
             * 应用ID。
             * @example `daqijp6c31@xxx`
             */
            AppId: string;
            /**
             * 规则列表。
             */
            RouteRules: {
                /**
                 * 状态。
                 * @example `1`
                 */
                Status: number;
                /**
                 * 比例。
                 * @example `10`
                 */
                Rate: number;
                /**
                 * 报警规则的启用状态。取值：
                 * - `true`：启用。
                 * - `false`：禁用。
                 * @example `true`
                 */
                Enable: boolean;
                /**
                 * 标签。
                 * @example `gray`
                 */
                Tag: string;
                /**
                 * 规则名称。
                 * @example `dubbo`
                 */
                Name: string;
                /**
                 * 规则ID。
                 * @example `653`
                 */
                Id: number;
                /**
                 * 实例数量。
                 * @example `1`
                 */
                InstanceNum: number;
                /**
                 * 规则的适用路由。
                 * @example `{
                    "dubbo": [{
                    "serviceName": "com.taobao.hsf.common.DemoService",
                    "group": "",
                    "version": "",
                    "methodName": "sayHello",
                    "condition": "AND",
                    "argumentItems": [{
                        "index": 0,
                        "expr": "",
                        "operator": "rawvalue",
                        "value": "jim",
                        "cond": "=="
                    }]
                    }]
                  }`
                 */
                Rules: {
                    /**
                     * springcloud规则。
                     */
                    springcloud: {
                        condition: string;
                        restItems: {
                            datum: string;
                            operator: string;
                            nameList: string[];
                            cond: string;
                            divisor: number;
                            remainder: number;
                            rate: number;
                            type: string;
                            name: string;
                            value: string;
                        }[];
                        triggerPolicy: string;
                        enable: boolean;
                        appId: string;
                        priority: number;
                        tags: string[];
                        paths: string[];
                        path: string;
                    }[];
                    /**
                     * dubbo 规则。
                     */
                    dubbo: {
                        appId: string;
                        tags: string[];
                        triggerPolicy: string;
                        /**
                         * 服务名（接口）。
                         */
                        serviceName: string;
                        /**
                         * dubbo服务分组。
                         */
                        group: string;
                        /**
                         * dubbo服务版本。
                         */
                        version: string;
                        /**
                         * dubbo服务方法名。
                         */
                        methodName: string;
                        paramTypes: string[];
                        /**
                         * 下面 items 各项中的逻辑运算关系。可选 AND 或者 OR。
                         */
                        condition: string;
                        argumentItems: {
                            /**
                             * 操作符。rawvalue 表示直接比较，mode 表示取模，list 表示白名单。
                             */
                            operator: string;
                            nameList: string[];
                            datum: string;
                            /**
                             * 比较符号，可取 >=, <=, >, <, == 。
                             */
                            cond: string;
                            divisor: number;
                            remainder: number;
                            rate: number;
                            /**
                             * 参数位置，从0开始。
                             */
                            index: number;
                            expr: string;
                            value: string;
                        }[];
                    }[];
                };
            }[];
            /**
             * 路由状态，取值如下：
             * - 0：关闭
             * - 1：开启
             * @example `1`
             */
            RouteStatus: number;
        }[];
        /**
         * 总条数。
         * @example `1`
         */
        TotalSize: number;
        /**
         * 页码。
         * @example `1`
         */
        PageNumber: number;
        /**
         * 页面大小。
         * @example `10`
         */
        PageSize: number;
    };
}
