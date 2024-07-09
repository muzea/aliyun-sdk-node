export interface CreateOTAFirmwareRequest {
    /**
     * 实例ID。您可在物联网平台控制台的**实例概览**页面，查看当前实例的**ID**。
     * ><notice>
     * - 若有ID值，必须传入该ID值，否则调用会失败。
     * - 若无<props="intl"><ph>**实例概览**页面或</ph></props>ID值，则无需传入。
     * ></notice>
     * 实例的更多信息，请参见[实例概述](~~356505~~)。
     * @example `iot-cn-0pp1n8t****`
     */
    "IotInstanceId"?: string;
    /**
     * OTA升级包名称，需在阿里云账号下唯一，创建后不可修改。支持中文、英文字母、日文、数字、短划线（-）、下划线（_）和半角圆括号（()），必须以中文、英文、日文或数字开头，长度限制为1~40个字符。
     * @example `Firmware2`
     */
    "FirmwareName": string;
    /**
     * 当前OTA升级包的版本号，仅支持英文字母、数字、半角句号（.）、短划线（-）和下划线（_）。长度限制为1~64个字符。
     * @example `2.0.0`
     */
    "DestVersion": string;
    /**
     * OTA升级包文件的URL，即升级包文件在对象存储（OSS）上的存储地址。您可调用[GenerateOTAUploadURL](~~147310~~)生成升级包文件的URL。
     * ><notice>仅当OTA升级包中添加一个文件时，才可传入此参数，且必须传入。
     * ></notice>
     * @example `https://iotx-ota.oss-cn-shanghai.aliyuncs.com/ota/bcd6142594d0183a16d825ad8225****​/A6B3400B70CA4D6D872160D1A91A****.bin`
     */
    "FirmwareUrl"?: string;
    /**
     * OTA升级包文件的签名值。使用**SignMethod**对升级包文件内容加签计算得出的值。
     * ><notice> 仅当OTA升级包中添加一个文件时，才可传入此参数。若不传入，则采用对象存储（OSS）中升级包文件的MD5值作为升级包签名值。
     * ></notice>
     * @example `93230c3bde425a9d7984a594ac55****`
     */
    "FirmwareSign"?: string;
    /**
     * OTA升级包签名方法。目前仅支持取值为**MD5**（MD5签名）。
     * 不传入此参数，默认为**MD5**。
     * @example `MD5`
     */
    "SignMethod"?: string;
    /**
     * OTA升级包文件的大小，单位：字节。
     * ><notice> 仅当OTA升级包中添加一个文件时，才可传入此参数。若不传入，则采用对象存储（OSS）中升级包文件的大小。
     * ></notice>
     * @example `900`
     */
    "FirmwareSize"?: number;
    /**
     * OTA升级包所属产品的**ProductKey**。
     * @example `a1uctKe****`
     */
    "ProductKey"?: string;
    /**
     * OTA升级包描述。长度不可超过100个字符。一个中文汉字算一个字符。
     * @example `OTA function updated`
     */
    "FirmwareDesc"?: string;
    /**
     * OTA升级包类型。可选：
     * - **0**：整包升级包，您上传的升级包文件包含完整的升级包，将推送整包升级包给设备进行升级。
     * - **1**：差分升级包，您上传的升级包文件仅包含新版本升级包与之前版本的差异部分，仅推送差异部分给设备进行升级。
     * 不传入此参数，则默认值为**0**。
     * @example `0`
     */
    "Type"?: number;
    /**
     * 待升级OTA模块版本号，即待升级设备的当前OTA模块版本号。
     * 可以调用[QueryDeviceDetail](~~69594~~)，查看设备OTA模块版本号（**FirmwareVersion**）。
     * > - **Type**为**1**（差分升级包）时，必须传入该参数，且取值不能与当前升级包版本（**DestVersion**）相同。
     * - **Type**为**0**（整包升级包）时，可不传入该参数。
     * @example `1.0.0`
     */
    "SrcVersion"?: string;
    /**
     * OTA模块名称。OTA模块是同产品下设备的不同可升级模块。
     * > - 不传入该参数，则使用default模块，表示整个设备的固件。
     * - 可调用[CreateOTAModule](~~186066~~)创建自定义OTA模块，调用[ListOTAModuleByProduct](~~186532~~)查询产品下已创建的OTA模块。
     * @example `WifiConfigModify`
     */
    "ModuleName"?: string;
    /**
     * 是否需要在创建批量升级任务前通过升级包验证。
     * - **true**（默认）：需要
     * - **false**：不需要
     * @example `true`
     */
    "NeedToVerify"?: boolean;
    /**
     * 推送给设备的自定义信息。不限制文本内容格式，长度不超过4096个字符。
     * 添加该升级包完成，并创建升级任务后，物联网平台向设备推送升级通知时，会将该自定义信息下发给设备。
     * @example `{"ota_notice":"升级底层摄像头驱动，解决视频图像模糊的问题。"}`
     */
    "Udi"?: string;
    /**
     * OTA升级包文件列表信息。
     */
    "MultiFiles"?: {
        /**
         * OTA升级包文件的MD5值。
         * >OTA升级包中添加多个升级包文件时，可传入此参数。若不传入，则采用对象存储（OSS）中升级包文件的MD5值。
         * @example `93230c3bde425a9d7984a594ac56***`
         */
        FileMd5: string;
        /**
         * OTA升级包文件的大小，单位：字节。
         * >OTA升级包中添加多个升级包文件时，可传入此参数。若不传入，则采用对象存储（OSS）中升级包文件的大小。
         * @example `200`
         */
        Size: number;
        /**
         * OTA升级包文件的URL，即升级包文件在对象存储（OSS）上的存储地址。您可调用[GenerateOTAUploadURL](~~147310~~)为每个升级包文件生成文件URL。
         * ><notice>OTA升级包中添加多个升级包文件时，必须传入此参数。
         * ></notice>
         * @example `https://iotx-ota.oss-cn-shanghai.aliyuncs.com/ota/bcd6142594d0183a16d825ad8225****​/A6B3400B70CA4D6D872160D1A91A****.bin`
         */
        Url: string;
        /**
         * OTA升级包文件的签名值。使用**SignMethod**对升级包文件内容加签计算得出的值。
         * >OTA升级包中添加多个升级包文件时，可传入此参数。若不传入，则采用对象存储（OSS）中升级包文件的MD5值作为升级包签名值。
         * @example `93230c3bde425a9d7984a594ac45****`
         */
        SignValue: string;
        /**
         * OTA升级包文件名称，长度限制为1~32个字符。支持最多添加20个文件名称，且多个升级包文件的名称不能重复。
         * ><notice> OTA升级包中添加多个升级包文件时，必须传入此参数。
         * ></notice>
         * @example `Firmware1`
         */
        Name: string;
    }[];
}
