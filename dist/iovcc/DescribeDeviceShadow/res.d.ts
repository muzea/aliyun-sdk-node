export interface DescribeDeviceShadowResponse {
    /**
     * 请求ID
     * @example `6F25F67C-F411-499F-BCE2-67CA563CB064`
     */
    RequestId: string;
    /**
     * 设备影子信息
     */
    DeviceShadow: {
        /**
         * 设备其它信息
         * @example `[{\"id\":10102,\"name\":\"车门:车门\",\"open\":true,\"pId\":101,\"path\":\"/车身与HVAC/车门/车门\"},{\"id\":10101,\"name\":\"锁止状态:1\",\"open\":true,\"pId\":101,\"path\":\"/车身与HVAC/车门/锁止状态\"}]`
         */
        DeviceShadow: string;
        /**
         * 设备信息
         * @example `{\"schema版本\":\"1.0\",\"uuid\":\"002\",\"制造商\":\"0110446as34\",\"对内型号\":\"test_model_product\",\"对外型号\":\"test_model\",\"插件版本号\":{\"插件版本号\":\"1.0\",\"远程控制\":\"1.0\",\"远程诊断\":\"1.0\"},\"数据更新时间\":\"2018-09-14 22:00:01\",\"最近登录账号ID\":\"4***********\",\"系统版本号\":\"1.0.0\",\"设备品牌\":\"003\",\"设备描述\":\"sample desc1\",\"车架号\":\"001\"}`
         */
        DeviceInfo: string;
    };
}
