export interface DescribeDefaultSchemaResponse {
    /**
     * 请求ID
     * @example `6F25F67C-F411-499F-BCE2-67CA563CB064`
     */
    RequestId: string;
    /**
     * 默认schema信息
     * @example `{"ecu":{"node_desc":"动力系统","brake_controll":{"handbrake":"手刹状态"}},"device_info":{"vin":"车架号","uuid":"uuid","brand":"设备品牌","plugin_version":{"ra":"远程诊断","control":"远程控制","node_desc":"插件版本号","yundevice":"yundevice版本号"},"system_version":"系统版本号"},"car_body_hvac":{"node_desc":"车身与HVAC","cigar_lighter":{"node_desc":"点烟器"},"cleaning_fluid":"清洗液"}}`
     */
    Schema: string;
}
