export interface GetEdgeInstanceMessageRoutingResponse {
    /**
     * 接口返回码：
     * - **Success**：表示成功。
     * - 其它：表示错误码。错误码详情，请参见[错误码](~~135200~~)。
     * @example `Success`
     */
    Code: string;
    /**
     * 调用失败时，返回的出错信息。
     * @example `request parameter error`
     */
    ErrorMessage: string;
    /**
     * 阿里云为该请求生成的唯一标识符。
     * @example `8A248DEC-887C-4A37-8DE5-E128FFA3698D`
     */
    RequestId: string;
    /**
     * 是否调用成功：
     * - **true**：表示调用成功。
     * - **false**：表示调用失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 调用成功时，返回的数据。
     */
    Data: {
        /**
         * 创建消息路由的Unix时间戳。
         * @example `1590407699000`
         */
        GmtCreateTimestamp: number;
        /**
         * 消息过滤条件。
         * @example `all`
         */
        TopicFilter: string;
        /**
         * 最后一次更新消息路由的Unix时间戳。
         * @example `1590407699000`
         */
        GmtModifiedTimestamp: number;
        /**
         * 消息接收者的数据：
         * - **TargetType**为**function**时：此处是边缘应用的ID。
         * - **TargetType**为**IotHub**时：此处为空。
         * @example `58c46749ac934db3925fe5********`
         */
        TargetData: string;
        /**
         * 创建消息路由的时间。
         * @example `2020-05-25 19:54:59`
         */
        GmtCreate: string;
        /**
         * 消息来源：
         * - **device**：表示消息由设备发出。
         * - **function**：表示消息由边缘应用发出。
         * - **IotHub**：表示消息由云端发出。
         * @example `device`
         */
        SourceType: string;
        /**
         * 最后一次更新消息路由的时间。
         * @example `2020-05-25 19:54:59`
         */
        GmtModified: string;
        /**
         * 消息路由名称。
         * @example `sample`
         */
        Name: string;
        /**
         * 消息来源的数据：
         * - **SourceType**为**device**时：
         *     - 此处参数值格式为`/{Your_ProductKey}/{Your_DeviceName}`：表示消息来源为指定产品下的指定设备。
         *         > {Your_ProductKey}和{Your_DeviceName}是您实际设备的ProductKey和DeviceName。
         *     - 此处参数值格式为`/{Your_ProductKey}/+`：表示消息来源为指定产品下的所有设备。
         *         > {Your_ProductKey}是您实际设备的ProductKey。
         *     - 此处参数值为**#**：表示消息来源为边缘实例中所有产品下的所有设备。
         * - **SourceType**为**function**时：此处是边缘应用的ID。
         * -  **SourceType**为**IotHub**时：此处为空。
         * @example `#`
         */
        SourceData: string;
        /**
         * 消息接收者：
         * - **function**：表示消息发送给边缘应用。
         * - **IotHub**：表示消息发送给云端。
         * @example `IotHub`
         */
        TargetType: string;
        /**
         * 消息来源和消息接收者的补充信息。
         */
        RouteContext: {
            /**
             * **TargetType**为**function**，且**TargetData**中指定的边缘应用，是函数计算类型的边缘应用时，返回此参数，表示函数计算类型边缘应用的名称。
             * @example `le_object_detector`
             */
            TargetApplicationName: string;
            /**
             * **SourceType**为**function**，且**SourceData**中指定的边缘应用，是函数计算类型的边缘应用时，返回此参数，表示函数计算类型边缘应用的名称。
             * @example `le_object_detector`
             */
            SourceApplicationName: string;
            /**
             * **TargetType**为**function**，且**TargetData**中指定的边缘应用，是函数计算类型的边缘应用时，返回此参数，表示函数计算类型边缘应用中的函数名称。
             * @example `lightSensorDataFilter`
             */
            TargetFcFunctionName: string;
            /**
             * **SourceType**为**function**，且**SourceData**中指定的边缘应用，是函数计算类型的边缘应用时，返回此参数，表示函数计算类型边缘应用中的函数名称。
             * @example `object_detector_app`
             */
            SourceFcFunctionName: string;
            /**
             * **TargetType**为**function**，且**TargetData**中指定的边缘应用，是函数计算类型的边缘应用时，返回此参数，表示函数计算类型边缘应用中的函数名称。
             * @example `EdgeFC`
             */
            TargetFcServiceName: string;
            /**
             * **SourceType**为**function**，且**SourceData**中指定的边缘应用，是函数计算类型的边缘应用时，返回此参数，表示函数计算类型边缘应用中的服务名称。
             * @example `EdgeFC`
             */
            SourceFcServiceName: string;
            /**
             * 服务级别：
             * - 0：表示消息仅发送一次，不管是否被消息接收者成功接收。
             * - 1：表示最少发送一次消息，直至收到消息接收者的返回信息，则停止发送该消息。
             * @example `1`
             */
            Qos: string;
        };
    };
}
