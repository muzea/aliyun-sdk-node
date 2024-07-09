export interface DescribeMonitorDataRequest {
    /**
     * 指定的轻量应用服务器实例所属的地域ID。
     * 您可以调用[ListRegions](~~189315~~)查看支持的阿里云地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 保证请求幂等性。从您的客户端生成一个参数值，确保不同请求间该参数值唯一。**ClientToken**只支持ASCII字符，且不能超过64个字符。更多信息，请参见[如何保证幂等性](~~25693~~)。
     * @example `123e4567-e89b-12d3-a456-426655440000`
     */
    "ClientToken"?: string;
    /**
     * 指定的轻量应用服务器的实例ID。
     * @example `2ad1ae67295445f598017499dc****`
     */
    "InstanceId": string;
    /**
     * 监控指标名称。可能值：
     * - MEMORY_ACTUALUSEDSPACE：内存实际使用大小，单位bytes。
     * - DISKUSAGE_USED：磁盘使用大小，单位bytes。
     * - CPU_UTILIZATION：cpu使用率，百分比。
     * - VPC_PUBLICIP_INTERNETOUT_RATE：网络出带宽速率，单位bits/s。
     * - VPC_PUBLICIP_INTERNETIN_RATE：网络入带宽速率，单位bits/s。
     * - DISK_READ_IOPS：磁盘读iops，单位：count/s。
     * - DISK_WRITE_IOPS：磁盘写iops，单位：count/s。
     * - FLOW_USED：流量使用，单位bytes。
     * @example `DISKUSAGE_USED`
     */
    "MetricName": string;
    /**
     * 时间间隔。
     * 取值：60、300、900。
     * 单位：秒。
     * >
     * 当Metricname为FLOW_USED时，Period值固定为3600s（即一小时），请根据您的实际需求设置该参数。
     * >
     * @example `60`
     */
    "Period": string;
    /**
     * 开始时间。支持的格式：
     * - Unix时间戳：从1970年1月1日开始所经过的毫秒数。
     * - Format格式：YYYY-MM-DDThh:mm:ssZ。
     * > 开始和结束时间执行的是左开右闭的模式，StartTime不能等于或大于EndTime。
     * StartTime和EndTime之间的间隔小于等于31天。
     * >
     * @example `2022-09-07T04:04:44Z`
     */
    "StartTime": string;
    /**
     * 结束时间。支持的格式：
     * - Unix时间戳：从1970年1月1日开始所经过的毫秒数。
     * - Format格式：YYYY-MM-DDThh:mm:ssZ。
     * > StartTime和EndTime之间的间隔小于等于31天。
     * >
     * @example `2022-09-08T08:04:44Z`
     */
    "EndTime": string;
    /**
     * 查询凭证（Token），取值为上一次API调用返回的NextToken参数值，初次调用无需配置。
     * @example `AAAAAV3MpHK1AP0pfERHZN5pu6nOc1nj4M9UaAZ/I8db***`
     */
    "NextToken"?: string;
    /**
     * 每页显示的记录条数，用于分页查询。取值范围：1~1440。
     * @example `100`
     */
    "Length"?: string;
}
