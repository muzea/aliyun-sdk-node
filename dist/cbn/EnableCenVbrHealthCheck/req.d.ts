export interface EnableCenVbrHealthCheckRequest {
    /**
     * 云企业网实例ID。
     * @example `cen-hahhfskfkseig****`
     */
    "CenId": string;
    /**
     * VBR实例所在的地域ID。
     * 您可以通过调用[DescribeChildInstanceRegions](~~132080~~)接口获取地域ID。
     * @example `cn-shenzhen`
     */
    "VbrInstanceRegionId": string;
    /**
     * VBR实例ID。
     * @example `vbr-wz95o9aylj181n5mzk****`
     */
    "VbrInstanceId": string;
    /**
     * 指定健康检查源IP地址。支持以下两种配置方式：
     * - **自动生成源IP**（推荐）：系统将自动分配100.96.0.0/16网段内的IP地址。
     * - **自定义源IP**：源IP地址可以是10.0.0.0/8、192.168.0.0/16、172.16.0.0/12三个网段内任意一个没有被使用的IP地址。但不能与云企业网中要互通的地址冲突，也不能与VBR实例的阿里云侧、客户侧IP地址冲突。
     * @example `192.XX.XX.1`
     */
    "HealthCheckSourceIp"?: string;
    /**
     * 指定健康检查的目标IP地址。
     * 目标IP地址为VBR实例客户侧IP地址。
     * @example `10.XX.XX.1`
     */
    "HealthCheckTargetIp": string;
    /**
     * VBR实例所属的阿里云账号（主账号）ID。
     * > 如果VBR实例和云企业网实例不属于同一个账号，本参数必填。
     * @example `1250123456123456`
     */
    "VbrInstanceOwnerId"?: number;
    /**
     * 指定健康检查发送连续探测报文的时间间隔。单位：秒。 默认值：**2**。取值范围：**2~3**。
     * @example `2`
     */
    "HealthCheckInterval"?: number;
    /**
     * 指定健康检查发送探测报文的个数。单位：个。 取值范围：**3~8**。默认值：**8**。
     * @example `8`
     */
    "HealthyThreshold"?: number;
    /**
     * 是否只开启健康检查的检测功能。取值：
     * - **true**：是。
     *         若只开启健康检查的检测功能，健康检查检测到链路不通时不会触发路由切换。
     *         > 请确保您有其他方式保证链路的冗余性，否则开启本功能后，可能会导致链路中断。
     * - **false**（默认值）：否。
     *
     *         系统默认关闭本功能。健康检查检测到链路不通时，如果云企业网实例中存在冗余的路由，则健康检查会立刻触发路由切换使用可用链路。
     * @example `false`
     */
    "HealthCheckOnly"?: boolean;
    /**
     * 描述。
     * 长度为1~256个字符，但不能以`http:// `或`https://`开头。
     * @example `testdesc`
     */
    "Description"?: string;
}
