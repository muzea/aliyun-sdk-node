export interface UpdateShadowSchemaRequest {
    /**
     * 机型ID
     * @example `120`
     */
    "DeviceModelId": string;
    /**
     * 认证类型
     * @example `1`
     */
    "AuthType"?: string;
    /**
     * 命名空间
     * @example `b09e93ce436aaf0dcfc2fb2004c1fde8`
     */
    "Namespace"?: string;
    /**
     * 项目ID
     * @example `PIC3UA0V`
     */
    "ProjectId": string;
    /**
     * schema信息
     * @example `{"ecu":{"node_desc":"动力系统","brake_controll":{"handbrake":"手刹状态"}},"device_info":{"vin":"车架号","uuid":"uuid","brand":"设备品牌","plugin_version":{"ra":"远程诊断","control":"远程控制","node_desc":"插件版本号","yundevice":"yundevice版本号"},"system_version":"系统版本号"},"car_body_hvac":{"node_desc":"车身与HVAC","cigar_lighter":{"node_desc":"点烟器"},"cleaning_fluid":"清洗液"}}`
     */
    "Schema"?: string;
    /**
     * 待修改的数据记录ID
     * @example `12`
     */
    "Id": string;
}
