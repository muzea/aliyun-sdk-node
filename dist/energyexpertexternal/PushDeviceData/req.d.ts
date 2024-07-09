export interface PushDeviceDataRequest {
    /**
     * 请求体参数。
     */
    "body"?: {
        /**
         * 设备类型。
         * [查看设备类型定义](https://carbon-doc.oss-cn-hangzhou.aliyuncs.com/%E6%B5%8B%E7%82%B9%E9%99%84%E5%BD%95.pdf)
         * @example `1`
         */
        deviceType: string;
        /**
         * 推送数据的设备列表
         */
        devices: {
            /**
             * deviceType为12、13、17需要传system_id（字段名称仍为device_id)
             * deviceType为15、16不传
             * 其他情况必传。
             * @example `设备ID`
             */
            deviceId: string;
            /**
             * 测点数据产生时间。
             * @example `2021-09-08 18:40:00`
             */
            recordTime: string;
            /**
             * 测点信息
             * 避免精度问题，测点数据统一传字符串
             * 缺少必填字段功能无法正常使用
             * 缺少推荐字段，部分功能可能会收到影响，具体影响详见附录中的设备测点备注
             * [参考测点定义](https://carbon-doc.oss-cn-hangzhou.aliyuncs.com/%E6%B5%8B%E7%82%B9%E9%99%84%E5%BD%95.pdf)
             * @example `{
                        "dp_imp": "329.0",
                        "F": "148.0",
                        "eq_imp": "363.0",
                        "Ep_imp_1": "128.0",
                        "Ep_imp_2": "157.0",
                        "Ua": "226.0",
                        "Ub": "285.0",
                        "Ep_imp": "325.0",
                        "Uc": "342.0",
                        "Ep_imp_3": "109.0",
                        "Ep_imp_4": "94.0",
                        "P": "514.0",
                        "Pa": "443.0",
                        "Q": "265.0",
                        "dp_exp": "261.0",
                        "eq_exp": "399.0",
                        "COSQ": "223.0",
                        "Ia": "240.0",
                        "Ib": "216.0",
                        "Ic": "229.0",
                        "Ep_exp": "115.0",
                        "VdisPer": "120.0"
                    }`
             */
            data: any;
        }[];
    };
}
