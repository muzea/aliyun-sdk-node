export interface ListSchemaSubscribesResponse {
    /**
     * 请求ID
     * @example `6F25F67C-F411-499F-BCE2-67CA563CB064`
     */
    RequestId: string;
    /**
     * 返回的数据列表信息
     */
    PageList: {
        /**
         * 返回的分页信息
         */
        Pagination: {
            /**
             * 当前页数
             * @example `1`
             */
            PageIndex: number;
            /**
             * 总页数
             * @example `1`
             */
            TotalPageCount: number;
            /**
             * 每页数量
             * @example `10`
             */
            PageSize: number;
            /**
             * 总数量
             * @example `10`
             */
            TotalCount: number;
            /**
             * 是否返回简单数据标志
             * @example `false`
             */
            SimpleSign: boolean;
            /**
             * 是否有下一页
             * @example `true`
             */
            HasNextPage: boolean;
        };
        /**
         * 订阅列表
         */
        List: {
            /**
             * 机型ID
             * @example `120`
             */
            DeviceModelId: number;
            /**
             * 版本
             * @example `1.0`
             */
            Version: string;
            /**
             * 项目ID
             * @example `PIC3UA0V`
             */
            ProjectId: string;
            /**
             * 创建时间
             * @example `1537255540160`
             */
            GmtCreate: number;
            /**
             * 命名空间
             * @example `b09e93ce436aaf0dcfc2fb2004c1fde8`
             */
            Namespace: string;
            /**
             * 验证的schema信息
             * @example `{"ecu":{"node_desc":"动力系统","brake_controll":{"handbrake":"手刹状态"}},"device_info":{"vin":"车架号","uuid":"uuid","brand":"设备品牌","plugin_version":{"ra":"远程诊断","control":"远程控制","node_desc":"插件版本号","yundevice":"yundevice版本号"},"system_version":"系统版本号"},"car_body_hvac":{"node_desc":"车身与HVAC","cigar_lighter":{"node_desc":"点烟器"},"cleaning_fluid":"清洗液"}}`
             */
            ValiditySchema: string;
            /**
             * 机型名称
             * @example `model_2nd`
             */
            DeviceModel: string;
            /**
             * 修改时间
             * @example `1537255540160`
             */
            GmtModified: number;
            /**
             * 数据记录ID
             * @example `12`
             */
            Id: number;
        }[];
    }[];
}
