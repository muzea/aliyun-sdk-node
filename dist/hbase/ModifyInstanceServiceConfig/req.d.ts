export interface ModifyInstanceServiceConfigRequest {
    /**
     * 目标实例ID，可调用[DescribeInstances](~~144595~~)接口获取。
     * @example `hb-t4naqsay5gn****`
     */
    "ClusterId": string;
    /**
     * 更改配置项后是否需要重启实例，取值：
     * - **true**：重启。
     * - **false**：不重启。
     * @example `false`
     */
    "Restart"?: boolean;
    /**
     * <props="china">待修改的配置项名称，可调用[ListInstanceServiceConfigurations](~~201980~~)接口查看。</props>
     * <props="intl">待修改的配置项名称。</props>
     * > 如果您需要修改多个配置项，请输入Parameters参数。
     * @example `hbase#hbase-site.xml#hbase.client.keyvalue.maxsize`
     */
    "ConfigureName": string;
    /**
     * <props="china">待修改的配置项值，可调用[ListInstanceServiceConfigurations](~~201980~~)接口查看。</props>
     * <props="intl">待修改的配置项值。</props>
     * > 如果您需要修改多个配置项，请输入Parameters参数。
     * @example `10485770`
     */
    "ConfigureValue": string;
    /**
     * 如果需要修改多个配置项，可以在该参数里配置JSON参数。key表示配置项的名称，value表示配置项的值。
     * @example `{"key1=value1", "key2=value2"}`
     */
    "Parameters"?: string;
}
