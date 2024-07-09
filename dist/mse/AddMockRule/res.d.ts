export interface AddMockRuleResponse {
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 返回信息。
     * @example `请求处理成功`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `316F5F64-F73D-42DC-8632-01E308B6****`
     */
    RequestId: string;
    /**
     * 数据概览。
     */
    Data: {
        /**
         * 命名空间ID。
         * @example `cn-shanghai`
         */
        NamespaceId: string;
        /**
         * HTTP协议Mock规则。
         * @example `[{"oper":"return+json","Path":"/mock","Value":"{\n \"date\": \"2021-09-10T07:45:12.357+0000\",\n \"name\": \"name\",\n \"id\": \"1\"\n}","Method":"GET","Condition":"AND","Timeout":1,"ArgumentMockItems":[{"type":"param","name":"id","value":"1","cond":"==","operator":"rawvalue"},{"type":"param","name":"name","value":"aliyun","cond":"==","operator":"rawvalue"}]}]`
         */
        ScMockItemJson: string;
        /**
         * 需查询的应用名称。
         * @example `demo-xxxx`
         */
        ConsumerAppName: string;
        /**
         * 服务消费者应用ID。
         * @example `hkhon1po62@a000601b265xxxx`
         */
        ConsumerAppId: string;
        /**
         * 账户ID。
         * @example `178432728867xxxx`
         */
        AccountId: string;
        /**
         * 描述。
         * @example `desc`
         */
        ExtraJson: string;
        /**
         * 来源
         * @example `edasmsc`
         */
        Source: string;
        /**
         * 地域。
         * @example `cn-shanghai`
         */
        Region: string;
        /**
         * 服务提供者应用ID。
         * @example `hkhon1po62@a000601b265xxxx`
         */
        ProviderAppId: string;
        /**
         * 服务提供者应用名称。
         * @example `demo-xxxx`
         */
        ProviderAppName: string;
        /**
         * 名称。
         * @example `mse-bc1a29b0-160230875****-reg-center-0-1`
         */
        Name: string;
        /**
         * 规则ID。
         * @example `275`
         */
        Id: number;
        /**
         * 开启或关闭。
         * - `true`：开启。
         * - `false`：关闭。
         * @example `true`
         */
        Enable: boolean;
        /**
         * 模型类型，取值如下：
         * - `[unk]0[unk]`：桌面模型
         * - `[unk]1[unk]`：移动端模型
         * @example `0`
         */
        MockType: number;
    };
    /**
     * 返回码。
     * @example `200`
     */
    Code: number;
    /**
     * 请求结果，取值如下：
     * - `true`：请求成功。
     * - `false`：请求失败。
     * @example `true`
     */
    Success: boolean;
}
