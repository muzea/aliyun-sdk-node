export interface ResizeDiskRequest {
    /**
     * 磁盘ID。您可以调用[DescribeDisks](~~25514~~)查询磁盘ID。
     * @example `d-bp67acfmxazb4p****`
     */
    "DiskId": string;
    /**
     * 扩容磁盘的方式。取值范围：
     * - offline（默认）：离线扩容。扩容后，您必须在控制台[重启实例](~~25440~~)或者调用API [RebootInstance](~~25502~~)使操作生效。
     *
     * - online：在线扩容，无需重启实例即可完成扩容。磁盘类型支持高效云盘、SSD云盘、ESSD云盘和弹性临时盘。
     * @example `offline`
     */
    "Type"?: string;
    /**
     * 希望扩容到的磁盘容量大小。单位为GiB。取值范围如下：
     * - 系统盘：
     *   - 普通云盘：20~500。
     *   - ESSD云盘：
     *     - PL0：1~2048。
     *     - PL1：20~2048。
     *     - PL2：461~2048。
     *     - PL3：1261~2048。
     *   - ESSD AutoPL 云盘：1~2048。
     *   - 其他云盘类型：20~2048。
     * - 数据盘：
     *     - 高效云盘（cloud_efficiency）：20~32768。
     *     - SSD云盘（cloud_ssd）：20~32768。
     *     - ESSD云盘（cloud_essd）：具体取值范围与`PerformanceLevel`的取值有关。可以调用[DescribeDisks](~~25514~~)查询云盘信息，再根据查询结果中的`PerformanceLevel`参数查看取值。
     *         - PL0：1~32768。
     *         - PL1：20~32768。
     *         - PL2：461~32768。
     *         - PL3：1261~32768。
     *     - 普通云盘（cloud）：5~2000。
     *     - ESSD AutoPL云盘（cloud_auto）：1~32768。
     * <props="china">
     *     - ESSD Entry云盘（cloud_essd_entry）：10~32768。
     * </props>
     *   - 弹性临时盘-标准版（elastic_ephemeral_disk_standard）：64～8,192。
     *   - 弹性临时盘-高级版（elastic_ephemeral_disk_premium）：64～8,192。
     * >指定的新磁盘容量必须比原磁盘容量大。
     * @example `1900`
     */
    "NewSize": number;
    /**
     * 保证请求幂等性。从您的客户端生成一个参数值，确保不同请求间该参数值唯一。**ClientToken**只支持ASCII字符，且不能超过64个字符。更多信息，请参见[如何保证幂等性](~~25693~~)。
     * @example `123e4567-e89b-12d3-a456-426655440000`
     */
    "ClientToken"?: string;
}
