export interface DescribeConfigMapResponse {
    /**
     * 请求ID。
     * @example `91F93257-7A4A-4BD3-9A7E-2F6EAE6D****`
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
     * 返回结果。
     */
    Data: {
        /**
         * 更新时间。
         * @example `1593747274195`
         */
        UpdateTime: number;
        /**
         * ConfigMap键值对数据。格式如下：
         * {"k1":"v1", "k2":"v2"}
         * k表示键，v表示值。关于配置项的更多信息，请参见[管理和使用配置项](~~171326~~)。
         * @example `{"k1":"v1","k2":"v2"}`
         */
        Data: any;
        /**
         * 命名空间ID。
         * @example `cn-hangzhou`
         */
        NamespaceId: string;
        /**
         * 描述信息。
         * @example `test-desc`
         */
        Description: string;
        /**
         * 创建时间。
         * @example `1593746835111`
         */
        CreateTime: number;
        /**
         * 关联的应用。
         */
        RelateApps: {
            /**
             * 应用名称。
             * @example `test-app`
             */
            AppName: string;
            /**
             * 应用ID。
             * @example `f16b4000-9058-4c22-a49d-49a28f0b****`
             */
            AppId: string;
        }[];
        /**
         * 查询的ConfigMap实例ID。
         * @example `1`
         */
        ConfigMapId: number;
        /**
         * ConfigMap实例名称。
         * @example `test-configmap`
         */
        Name: string;
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
     * 查询ConfigMap实例详情是否成功。取值说明如下：
     * - **true**：查询成功。
     * - **false**：查询失败。
     * @example `true`
     */
    Success: boolean;
}
