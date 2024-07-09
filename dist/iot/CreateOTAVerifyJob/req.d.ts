export interface CreateOTAVerifyJobRequest {
    /**
     * 实例ID。您可在物联网平台控制台的**实例概览**页面，查看当前实例的**ID**。
     * ><notice>
     * - 若有ID值，必须传入该ID值，否则调用会失败。
     * - 若无<props="intl"><ph>**实例概览**页面或</ph></props>ID值，则无需传入。
     * ></notice>
     * 实例的更多信息，请参见[实例概述](~~356505~~)。
     * @example `iot_instc_pu****_c*-v64********`
     */
    "IotInstanceId"?: string;
    /**
     * OTA升级包ID，升级包的唯一标识符。
     * **FirmwareId**是调用[CreateOTAFirmware](~~147311~~)创建OTA升级包时，返回的参数之一。
     * 也可以调用[ListOTAFirmware](~~147450~~)，从返回参数中查看。
     * @example `nx3xxVvFdwvn6dim50PY03****`
     */
    "FirmwareId": string;
    /**
     * 设置设备升级超时时间，单位分钟，范围1~1,440。
     * @example `1440`
     */
    "TimeoutInMinutes"?: number;
    /**
     * OTA升级包所属产品的ProductKey。
     * @example `a1VJwBw****`
     */
    "ProductKey": string;
    /**
     * 物联网平台是否主动向设备推送升级任务。
     * - **true**（默认）：是。批次任务创建完成后，物联网平台主动将升级任务，直接推送给升级范围内的在线设备。
     *
     *     此时，设备仍可主动向物联网平台发起请求，来获取OTA升级任务信息。
     * - **false**：否。设备必须通过向物联网平台发起请求，来获取OTA升级任务信息。
     * @example `true`
     */
    "NeedPush"?: boolean;
    /**
     * 如需自主控制设备OTA升级时，可配置此参数，通过手机App来控制，设备是否可进行OTA升级。手机App需您自行开发。
     * - **false**（默认）：否。直接按照**NeedPush**设置，获取OTA升级任务信息。
     * - **true**：是。设备无法获取OTA升级任务，需App侧确认OTA升级后，才能按照**NeedPush**设置，获取OTA升级任务信息。
     * @example `false`
     */
    "NeedConfirm"?: boolean;
    /**
     * 升级包下载协议，可选：**HTTPS**（默认）或**MQTT**。设备端收到物联网平台推送的升级包下载信息后，通过该协议下载升级包。
     * ><notice>使用MQTT协议下载升级包，必须符合以下条件：
     * - 支持的地域：仅中国的华东2（上海）、华北2（北京）和华南1（深圳）。
     * - OTA升级包：仅包含一个文件，且文件大小不超过16 MB。
     * - 设备端SDK：必须使用物联网平台提供的C语言Link SDK最新版本的软件包，开发OTA升级和MQTT下载文件的能力。详细内容，请参见[使用MQTT协议下载升级包的OTA升级代码示例](~~330985~~)。
     * ></notice>
     * @example `HTTPS`
     */
    "DownloadProtocol"?: string;
    /**
     * 待验证的设备。
     * > - 设备所属产品必须与OTA升级包所属产品一致。
     * - 设备名称不能重复。
     * - 最多可传入10个设备名称。
     * @example `testdevice`
     */
    "TargetDeviceName": string[];
    /**
     * 标签列表。
     */
    "Tag"?: {
        /**
         * 批次标签key。仅支持英文字母、数字、半角句号（.），长度限制为1~30个字符。支持最多添加10个批次标签。
         * 批次标签将在向设备推送升级通知时下发给设备。
         * > 批次标签可以不传入。**是否必选**的**是**，表示如果传入批次标签Tag，**Tag.N.Value**与**Tag.N.Key**必须成对传入。
         * @example `key1`
         */
        Key: string;
        /**
         * 批次标签value。长度限制为1~1024个字符。支持最多添加10个批次标签。所有批次标签key和vlaue的长度总和，不能超过4096个字符。
         * > 批次标签可以不传入。**是否必选**的**是**，表示如果传入批次标签Tag，**Tag.N.Value**与**Tag.N.Key**必须成对传入。
         * @example `value1`
         */
        Value: string;
    }[];
}
