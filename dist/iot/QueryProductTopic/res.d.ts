export interface QueryProductTopicResponse {
    /**
     * 调用失败时，返回的错误码。更多信息，请参见[错误码](~~87387~~)。
     * @example `iot.system.SystemException`
     */
    Code: string;
    /**
     * 调用失败时，返回的出错信息。
     * @example `系统异常`
     */
    ErrorMessage: string;
    /**
     * 阿里云为该请求生成的唯一标识符。
     * @example `B953EAFF-CFF6-4FF8-BC94-8B89F018E4DD`
     */
    RequestId: string;
    /**
     * 是否调用成功。
     * - **true**：调用成功。
     * - **false**：调用失败。
     * @example `true`
     */
    Success: boolean;
    Data: {
        /**
         * 调用成功时，返回的Topic类信息列表。详情参见以下**ProductTopicInfo**。
         */
        ProductTopicInfo: {
            /**
             * 设备对该Topic类的操作权限，取值：
             * - **0**：发布
             * - **1**：订阅
             * - **2**：发布和订阅
             * @example `1`
             */
            Operation: string;
            /**
             * 产品的**ProductKey**。
             * @example `HMyB***`
             */
            ProductKey: string;
            /**
             * 是否开启自定义Topic数据压缩或解压缩。
             * 取值：
             * - **compress**：压缩。
             * - **decompress**：解压缩。
             * 数据压缩功能详细内容，请参见[数据压缩](~~477405~~)。
             * @example `compress`
             */
            Codec: string;
            /**
             * 产品的自定义Topic类。
             * @example `/HMyB***​/${deviceName}/user/get`
             */
            TopicShortName: string;
            /**
             * 是否开启代理订阅。
             * 取值：
             * - **true**：开启。
             * - **false**：不开启。
             * 开启代理订阅后，设备与物联网平台建连时，物联网平台查询已开启代理订阅的Topic，帮助设备完成订阅。
             * @example `false`
             */
            EnableProxySubscribe: boolean;
            /**
             * Topic类的ID。
             * @example `821****`
             */
            Id: string;
            /**
             * Topic类的描述信息。
             * @example `topicDesc`
             */
            Desc: string;
        }[];
    };
}
