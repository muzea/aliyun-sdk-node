export interface QueryOTAFirmwareResponse {
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
     * @example `A01829CE-75A1-4920-B775-921146A1AB79`
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
     * 调用成功时，返回的升级包信息。详情参见以下**FirmwareInfo**包含的参数。
     */
    FirmwareInfo: {
        /**
         * OTA升级包的模块名称。
         * 升级包模块用于区分同产品下设备的不同模块的升级。更多信息，请参见[添加升级包中的自定义OTA模块](~~202664~~)。
         * @example `WifiConfigModify`
         */
        ModuleName: string;
        /**
         * OTA升级包类型。
         * - **0**：整包升级包，您上传的升级包文件包含完整的升级包，将推送整包升级包给设备进行升级。
         * - **1**：差分升级包，您上传的升级包文件仅包含新版本升级包与之前版本的差异部分，仅推送差异部分给设备进行升级。
         * @example `0`
         */
        Type: number;
        /**
         * OTA升级包状态。
         * - **-1**：不需要验证。
         * - **0**：未验证。
         * - **1**：已验证。
         * - **2**：验证中。
         * - **3**：验证失败。
         * @example `2`
         */
        Status: number;
        /**
         * OTA升级包所属产品的名称。
         * @example `MyProduct`
         */
        ProductName: string;
        /**
         * OSS存储升级包文件的URL。
         * > OTA升级包中仅有一个升级包文件时，返回该参数。
         * @example `https://ota-***.aliyuncs.com/ota/572ef2fd12ca4791a5b21a9eb948****​/5E962CF83DB1495E8337E9C8A4D1****.bin?Expires=1577587360&OSSAccessKeyId=cS8uRRy54Rsz****&Signature=farzC8%2FVMN4HYdEtXvdiC2OevH****`
         */
        FirmwareUrl: string;
        /**
         * 创建OTA升级包的时间，UTC格式。
         * @example `2019-12-28T02:42:22.000Z`
         */
        UtcCreate: string;
        /**
         * OTA升级包文件大小，单位为字节。
         * > OTA升级包中仅有一个升级包文件时，返回该参数。
         * @example `924`
         */
        FirmwareSize: number;
        /**
         * OTA升级包名称。
         * @example `t3q5rkNm`
         */
        FirmwareName: string;
        /**
         * OTA升级包文件内容的签名值。
         * > OTA升级包中仅有一个升级包文件时，返回该参数。
         * @example `3d04ab6462633508606e5f3daac8****`
         */
        FirmwareSign: string;
        /**
         * OTA升级包所属产品的**ProductKey**。
         * @example `a19mzPZ****`
         */
        ProductKey: string;
        /**
         * OTA升级包最后一次修改时的时间，UTC格式。
         * @example `2019-12-28T02:42:41.000Z`
         */
        UtcModified: string;
        /**
         * 待升级的OTA升级包版本号。
         * > 仅差分升级的升级包返回该参数。升级包类型的说明，请参见参数**Type**的描述。
         * @example `1.0.0`
         */
        SrcVersion: string;
        /**
         * OTA升级包的验证进度。
         * - **0**：未验证。
         * - **100**：已完成验证。
         * - 0至100之间的数值N：表示N%的设备已完成升级。升级包验证状态请根据返回参数**Status**判断。
         * @example `0`
         */
        VerifyProgress: number;
        /**
         * OTA升级包描述信息。
         * @example `modified-WiFi-module`
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
         * OTA升级包ID，升级包的唯一标识符。
         * @example `UfuxnwygsuSkVE0VCN****0100`
         */
        FirmwareId: string;
        /**
         * 推送给设备的自定义信息。不限制文本内容的格式，长度不超过4096个字符。
         * 创建升级任务后，物联网平台向设备推送升级通知时，会将该自定义信息下发给设备。
         * @example `{"ota_notice":"升级底层摄像头驱动，解决视频图像模糊的问题。"}`
         */
        Udi: string;
        /**
         * OTA升级包文件列表信息。OTA升级包中有多个升级包文件时，返回此参数。
         */
        MultiFiles: {
            /**
             * OSS存储升级包文件的URL。
             * @example `https://ota-***.aliyuncs.com/ota/572ef2fd12ca4791a5b21a9eb948****​/5E962CF83DB1495E8337E9C8A4D1****.bin?Expires=1577587360&OSSAccessKeyId=cS8uRRy54Rsz****&Signature=farzC8%2FVMN4HYdEtXvdiC2OevH****`
             */
            Url: string;
            /**
             * OTA升级包文件的MD5值。
             * @example `3d04ab6462633508606e5f3d****`
             */
            FileMd5: string;
            /**
             * OTA升级包文件内容的签名值。
             * @example `3d04ab6462633508606e5f3d****`
             */
            SignValue: string;
            /**
             * OTA升级包文件名称。
             * @example `firmware1`
             */
            Name: string;
            /**
             * OTA升级包文件大小，单位为字节。
             * @example `200`
             */
            Size: number;
        }[];
    };
}
