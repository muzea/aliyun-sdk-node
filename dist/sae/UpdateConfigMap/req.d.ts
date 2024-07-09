export interface UpdateConfigMapRequest {
    /**
     * 需要更新的ConfigMap实例ID。需要调用[ListNamespacedConfigMaps](~~176917~~)接口查看。
     * @example `1`
     */
    "ConfigMapId": number;
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
     * 描述信息。
     * @example `test-desc`
     */
    "Description"?: string;
}
