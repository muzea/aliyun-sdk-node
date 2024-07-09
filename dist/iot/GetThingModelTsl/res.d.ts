export interface GetThingModelTslResponse {
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
     * @example `E55E50B7-40EE-4B6B-8BBE-D3ED55CCF565`
     */
    RequestId: string;
    /**
     * 表示是否调用成功。
     * - **true**：调用成功。
     * - **false**：调用失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 调用成功时，返回的物模型信息。
     */
    Data: {
        /**
         * 物模型数据在对象存储（OSS）上的存储地址URI。返回的URI有效期为60分钟。
         * @example `https://iotx-pop-dsl.oss-cn-shanghai.aliyuncs.com/thing/a14TeWI****​/model.json?Expires=1581947119&OSSAccessKeyId=LTAIuFOwFSR9****&Signature=5i389hacjdj3t%2FnrHmQpEUfnxw****`
         */
        TslUri: string;
        /**
         * 物模型的TSL字符串。
         * @example `{\"schema\":\"https://iotx-tsl.oss-ap-southeast-1.aliyuncs.com/schema.json\",\"profile\":{\"productKey\":\"a14TeWI****\"},\"properties\":[{\"identifier\":\"Humidity\"}]}`
         */
        TslStr: string;
    };
}
