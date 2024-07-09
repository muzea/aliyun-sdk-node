export interface ModifyClientUserDNSRequest {
    /**
     * 智能接入网关APP实例地域ID。
     * @example `cn-shanghai`
     */
    "RegionId": string;
    /**
     * 智能接入网关APP实例ID。
     * @example `sag-9uyg53s6juhpxv****`
     */
    "SmartAGId": string;
    /**
     * 智能接入网关APP实例客户端连接私网时使用的主备DNS配置。
     * >- 若客户端接入阿里云过程中使用了PrivateZone服务，则DNS地址分别为100.100.2.136和100.100.2.138。
     * - Android系统安装客户端2.1.1及以上版本，macOS系统安装客户端2.1.1及以上版本才支持DNS配置。
     * - 此参数为非必填项，如果不指定此DNS配置，系统默认为不配置此参数并会将原有参数值清空。
     * @example `100.XX.XX.100`
     */
    "AppDNS"?: string[];
    /**
     * 智能接入网关APP实例客户端断开私网连接时使用的主备DNS配置。
     * > 此功能暂未上线，敬请期待。
     * @example `100.XX.XX.110`
     */
    "RecoveredDNS"?: string[];
}
