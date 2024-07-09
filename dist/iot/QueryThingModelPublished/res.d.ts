export interface QueryThingModelPublishedResponse {
    /**
     * 调用失败时，返回的错误码。更多信息，请参见[错误码](~~87387~~)。
     * @example `iot.system.SystemException`
     */
    Code: string;
    /**
     * 产品的ProductKey。
     * @example `a1BwAGV****`
     */
    ProductKey: string;
    /**
     * 调用失败时，返回的出错信息。
     * @example `系统异常`
     */
    ErrorMessage: string;
    /**
     * 阿里云为该请求生成的唯一标识符。
     * @example `E4C0FF92-2A86-41DB-92D3-73B60310D25E`
     */
    RequestId: string;
    /**
     * 是否调用成功。
     * - **true**：调用成功。
     * - **false**：调用失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 返回数据。
     */
    Data: {
        /**
         * 物模型的功能定义。ThingModelJson取值的数据格式说明，请参见[ThingModelJson数据说明](~~150457~~)。
         * @example `{\"_ppk\":{\"version\":\"1594253010934\"},\"events\":[],\"productKey\":\"a1BwAGV****\",\"properties\":[{\"configCode\":\"8C03F0EEC63D4897BF2637F89AE36B011594227294067\",\"custom\":true,\"customFlag\":true,\"dataSpecs\":{\"custom\":true,\"dataType\":\"INT\",\"max\":\"1\",\"min\":\"0\",\"step\":\"1\",\"unit\":\"ppb\"},\"dataType\":\"INT\",\"description\":\"1\",\"extendConfig\":\"{\\\"originalDataType\\\":{\\\"specs\\\":{\\\"registerCount\\\":1,\\\"reverseRegister\\\":0,\\\"swap16\\\":0},\\\"type\\\":\\\"bool\\\"},\\\"identifier\\\":\\\"WakeUpData\\\",\\\"registerAddress\\\":\\\"0x04\\\",\\\"scaling\\\":1,\\\"writeFunctionCode\\\":0,\\\"operateType\\\":\\\"inputStatus\\\",\\\"pollingTime\\\":1000,\\\"trigger\\\":1}\",\"identifier\":\"WakeUpData\",\"name\":\"唤醒数据\",\"productKey\":\"a114xeJGj2p\",\"required\":false,\"rwFlag\":\"READ_ONLY\",\"std\":false}],\"services\":[]}`
         */
        ThingModelJson: string;
    };
}
