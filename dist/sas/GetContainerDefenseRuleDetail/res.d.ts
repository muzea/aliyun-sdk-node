export interface GetContainerDefenseRuleDetailResponse {
    /**
     * 规则详情。
     */
    Data: {
        /**
         * 规则ID。
         * @example `1948`
         */
        Id: number;
        /**
         * 用户ID。
         * @example `1766185894104***`
         */
        AliUid: number;
        /**
         * 告警类型。取值：
         * - **容器主动防御**
         * @example `EventType`
         */
        EventType: string;
        /**
         * 告警名称，取值：
         * - **非镜像程序启动**
         * @example `EventName`
         */
        EventName: string;
        /**
         * 规则动作，取值：
         * - **1**：告警。
         * - **2**：拦截。
         * @example `1`
         */
        RuleAction: number;
        /**
         * 规则的开关状态。取值：
         * - **1**：表示开启
         * - **0**：表示关闭
         * @example `0`
         */
        RuleSwitch: number;
        /**
         * 规则类型。取值：
         * - **1**：系统规则。
         * - **2**：自定义规则。
         * @example `1`
         */
        RuleType: string;
        /**
         * 规则名称。
         * @example `test-000`
         */
        RuleName: string;
        /**
         * 描述。
         * @example `防御规则。`
         */
        Description: string;
        /**
         * 白名单
         */
        Whitelist: {
            /**
             * 文件hash列表。><notice>暂不支持此参数></notice>
             */
            Hash: string[];
            /**
             * 加入白名单的文件路径列表。
             */
            Path: string[];
            /**
             * 加入白名单的镜像列表。
             */
            Image: string[];
        };
        /**
         * 规则生效范围。
         */
        Scope: {
            /**
             * 容器集群的ID。
             * @example `c9bea04*2b25**`
             */
            ClusterId: string;
            /**
             * 是否包含所有命名空间，取值：
             * - **0**：否。
             * - **1**：是。
             * @example `1`
             */
            AllNamespace: number;
            /**
             * 命名空间列表。
             */
            Namespaces: string[];
        }[];
    };
    /**
     * 接口调用是否成功。取值：
     * - **true**：成功
     * - **false**：失败
     * @example `true`
     */
    Success: boolean;
    /**
     * 结果代码，**200**表示成功，若为别的值则表示失败，调用方可根据此字段判断失败原因。
     * @example `200`
     */
    Code: string;
    /**
     * 请求结果返回信息。
     * @example `successful`
     */
    Message: string;
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `77546BF4-CCE8-5F8D-B42B-5FD3306B43B4`
     */
    RequestId: string;
    /**
     * 请求状态码，返回200代表请求成功。
     * @example `200`
     */
    HttpStatusCode: number;
}
