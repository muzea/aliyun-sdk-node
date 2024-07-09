export interface CheckBindLicenseDeviceProgressResponse {
    /**
     * 调用失败时，返回的错误码。更多信息，请参见本文下方**错误码**。
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
     * @example `291438BA-6E10-4C4C-B761-243B9A0D324F`
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
     * 返回的查询结果。
     */
    Data: {
        /**
         * 授权License成功的设备数量。
         * @example `9`
         */
        SuccessSum: number;
        /**
         * 为批量设备授权License的进度百分比，即取值范围为1~100。
         * @example `80`
         */
        Progress: number;
        /**
         * 授权完成后的结果文件的URL。即文件在对象存储（OSS）上的存储地址。
         * @example `http://***.oss-***.aliyuncs.com/license_device_***​/***​/d***h/c***.csv?Expires=16***&OSSAccessKeyId=L***&Signature=***`
         */
        ResultCsvFile: string;
        /**
         * 授权License失败的设备数量。
         * @example `1`
         */
        FailSum: number;
    };
}
