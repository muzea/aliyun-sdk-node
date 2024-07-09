export interface ListOTAFirmwareResponse {
    /**
     * 当前页码。
     * @example `1`
     */
    CurrentPage: number;
    /**
     * 阿里云为该请求生成的唯一标识符。
     * @example `A01829CE-75A1-4920-B775-921146A1AB79`
     */
    RequestId: string;
    /**
     * 调用失败时，返回的出错信息。
     * @example `系统异常`
     */
    ErrorMessage: string;
    /**
     * 是否调用成功。
     * - **true**：调用成功。
     * - **false**：调用失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 调用失败时，返回的错误码。更多信息，请参见[错误码](~~87387~~)。
     * @example `iot.system.SystemException`
     */
    Code: string;
    /**
     * 每页显示的固件数量。
     * @example `10`
     */
    PageSize: number;
    /**
     * 总页数。
     * @example `1`
     */
    PageCount: number;
    /**
     * OTA升级包数量总计。
     * @example `1`
     */
    Total: number;
    FirmwareInfo: {
        /**
         * 调用成功时，返回的OTA升级包列表。详情参见以下SimpleFirmwareInfo。
         */
        SimpleFirmwareInfo: {
            /**
             * OTA升级包的模块名称。
             * @example `module1234`
             */
            ModuleName: string;
            /**
             * OTA升级包类型。
             * - **0**：整包固件。
             * - **1**：差分固件。
             * @example `0`
             */
            Type: number;
            /**
             * OTA升级包状态。
             * - **0**：未验证。
             * - **1**：已验证。
             * - **2**：验证中。
             * - **3**：验证失败。
             * @example `0`
             */
            Status: number;
            /**
             * OTA升级包所属产品的名称。
             * @example `MyProduct`
             */
            ProductName: string;
            /**
             * OTA升级包创建时的时间，UTC格式。
             * @example `2019-12-28T02:42:22.000Z`
             */
            UtcCreate: string;
            /**
             * OTA升级包大小，单位：字节。
             * @example `924`
             */
            FirmwareSize: number;
            /**
             * OTA升级包名称。
             * @example `t3q5rkNm`
             */
            FirmwareName: string;
            /**
             * OTA升级包内容的签名值。
             * @example `3d04ab6462633508606e5f3daac8****`
             */
            FirmwareSign: string;
            /**
             * OTA升级包所属产品的ProductKey。
             * @example `a19mzPZ****`
             */
            ProductKey: string;
            /**
             * OTA升级包最后一次修改时的时间，UTC格式。
             * @example `2019-12-28T02:42:22.000Z`
             */
            UtcModified: string;
            /**
             * 待升OTA升级包版本号。
             * > 整包OTA升级包返回的该参数为空。
             * @example `V1.0.0`
             */
            SrcVersion: string;
            /**
             * OTA升级包描述信息。
             * @example `firmwareDesc`
             */
            FirmwareDesc: string;
            /**
             * OTA升级包签名方式。
             * @example `MD5`
             */
            SignMethod: string;
            /**
             * 当前OTA升级包版本号。
             * @example `4.0.0`
             */
            DestVersion: string;
            /**
             * OTA升级包ID，OTA升级包的唯一标识符。
             * @example `UfuxnwygsuSkVE0VCN****0100`
             */
            FirmwareId: string;
        }[];
    };
}
