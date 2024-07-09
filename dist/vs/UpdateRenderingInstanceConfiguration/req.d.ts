export interface UpdateRenderingInstanceConfigurationRequest {
    /**
     * 云应用服务实例ID
     * @example `render-9f8c57355d224ad7beaf95e145f22111`
     */
    "RenderingInstanceId": string;
    /**
     * 配置内容
     */
    "Configuration": {
        /**
         * 真机仿真功能模块名，取值范围包括，
         * 1. ctl：控制模块
         * 2. prop：属性模块
         * 3. location：定位模块
         * 4. battery：电池模块
         * 5. network：网络模块
         * 6. bluetooth：蓝牙模块
         * 7. sim：SIM卡模块
         * 8. display：设备模块
         * 9. system：基础模块
         * @example `location`
         */
        ModuleName: string;
        /**
         * 模块对应的属性列表
         */
        Attributes: {
            /**
             * 属性名
             * @example `lon`
             */
            Name: string;
            /**
             * 属性值
             * @example `100`
             */
            Value: any;
        }[];
    }[];
}
