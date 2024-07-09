export interface CreateConfigMapRequest {
    /**
     * ConfigMap实例名称。允许数字、字母和下划线（_）组合，仅允许以字母开头。
     * @example `name`
     */
    "Name": string;
    /**
     * ConfigMap实例所在命名空间ID。
     * @example `cn-hangzhou`
     */
    "NamespaceId": string;
    /**
     * ConfigMap数据。
     * @example `{"env.home": "/root", "env.shell": "/bin/sh"}`
     */
    "Data"?: {
        /**
         * ConfigMap键值对数据，JSON格式。格式如下：
         * {"Data":"{\"k1\":\"v1\", \"k2\":\"v2\"}"}
         * k表示键，v表示值。关于配置项的更多信息，请参见[管理和使用配置项](~~171326~~)。
         * @example `{"env.shell": "/bin/sh"}`
         */
        Data: string;
    };
    /**
     * 描述信息，不可输入空格，且不超过255个字符。
     * @example `test-desc`
     */
    "Description"?: string;
}
