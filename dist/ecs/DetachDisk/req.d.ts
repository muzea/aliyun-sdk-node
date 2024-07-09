export interface DetachDiskRequest {
    /**
     * 待卸载的ECS实例ID。
     * @example `i-bp67acfmxazb4p****`
     */
    "InstanceId": string;
    /**
     * 待卸载的磁盘ID。
     * @example `d-bp67acfmxazb4p****`
     */
    "DiskId": string;
    /**
     * 卸载系统盘或数据盘时，设置自动释放属性。表示释放ECS实例时，是否同时释放该系统盘或数据盘。
     * - true：释放。
     * - false：不释放。云盘被转换为按量付费数据盘被保留下来。
     * 默认值：true
     * 您需要注意：
     * - 开启多重挂载特性的云盘，不支持设置该参数。
     * - 如果卸载的是数据盘，默认值为`false`。
     * - 若您需要卸载的目标磁盘为`弹性临时盘`，则必须将`DeleteWithInstance`参数设置为`true`。
     * @example `false`
     */
    "DeleteWithInstance"?: boolean;
}
