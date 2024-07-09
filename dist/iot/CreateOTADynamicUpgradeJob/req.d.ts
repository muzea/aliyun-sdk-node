export interface CreateOTADynamicUpgradeJobRequest {
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
     * 升级包ID，升级包的唯一标识符。
     * 升级包ID是调用[CreateOTAFirmware](~~147311~~)创建升级包时，返回的参数之一。
     * 可以调用[ListOTAFirmware](~~147450~~)，从返回参数中查看。
     * @example `nx3xxVvFdwvn6dim50PY03****`
     */
    "FirmwareId": string;
    /**
     * 升级包所属产品的**ProductKey**。
     * @example `a1Le6d0****`
     */
    "ProductKey": string;
    /**
     * 设备升级失败后，自动重试的时间间隔，单位为分钟。可选值：
     * - **0**：立即重试。
     * - **10**：10分钟后重试。
     * - **30**：30分钟后重试。
     * - **60**：60分钟（即1小时）后重试。
     * - **1440**：1,440分钟（即24小时）后重试。
     * ><notice> **RetryInterval**的值需要小于**TimeoutInMinutes**的值。例如：
     * - **TimeoutInMinutes**的值为60分钟，**RetryInterval**的值最大可设置为30。
     * - **TimeoutInMinutes**的值为1440分钟，**RetryInterval**的值最大可设置为60。
     * 若**RetryInterval**需设置为24小时后重试，则建议不传入**TimeoutInMinutes**。因升级超时后，不会再触发升级重试。
     * ></notice>
     * 不传入此参数，则表示不重试。
     * @example `60`
     */
    "RetryInterval"?: number;
    /**
     * 自动重试次数。
     * 如果传入**RetryInterval**参数，则需传入该参数。
     * 可选值：
     * - **1**：1次。
     * - **2**：2次。
     * - **5**：5次。
     * @example `1`
     */
    "RetryCount"?: number;
    /**
     * 设备升级超时时间，超过指定时间后，设备未完成升级，则升级失败。单位为分钟，取值范围为1~1,440。
     * > - 从设备首次上报进度开始计算时间。升级期间若设备多次上下线，触发物联网平台多次推送升级包，都始终以设备最开始的第一次上报升级进度时间作为开始时间。
     * - 因超时而导致的升级失败，物联网平台不会触发自动重试逻辑。
     * 不传入该参数，则表示设备升级没有超时限制。
     * @example `1440`
     */
    "TimeoutInMinutes"?: number;
    /**
     * 每分钟最多向多少个设备推升级包下载URL。取值范围：10~10,000。
     * 不传入该参数，则取默认值10,000。
     * @example `1000`
     */
    "MaximumPerMinute"?: number;
    /**
     * 是否覆盖之前的升级任务。取值：
     * - **1**（默认）：不覆盖。若设备已有升级任务，则只执行已有任务。
     * - **2**：覆盖。设备只执行新的升级任务。此时**MultiModuleMode**不能传入**true**。
     * > 不覆盖升级中的任务。
     * @example `2`
     */
    "OverwriteMode"?: number;
    /**
     * 动态升级模式。取值范围：
     * - **1**（默认）：除了升级当前满足升级条件的设备，还将持续检查设备是否满足升级条件，对满足升级条件的设备进行升级。
     * - **2**：仅对后续上报新版本号的设备生效。
     * @example `1`
     */
    "DynamicMode"?: number;
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
     * 分组ID。
     * - 如果传入该参数，则必须同时传入**GroupType**，且不能传入**SrcVersion.N**。
     * - 如果不传入该参数，则无需传入**GroupType**，且必须传入**SrcVersion.N**。
     * 您可调用[QueryDeviceGroupList](~~93356~~)接口查询分组ID（**GroupId**）。
     * @example `IwOwQj7DJ***`
     */
    "GroupId"?: string;
    /**
     * 分组类型，仅可取值**LINK_PLATFORM_DYNAMIC**（动态分组）。
     * - 如果传入该参数，则必须同时传入**GroupId**，且不能传入**SrcVersion.N**。
     * - 如果不传入该参数，则无需传入**GroupId**，且必须传入**SrcVersion.N**。
     * @example `LINK_PLATFORM_DYNAMIC`
     */
    "GroupType"?: string;
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
     * 设备是否支持多模块同时升级。
     * - **false**（默认）：否，设备不支持多模块同时升级。
     * - **true**：是，设备支持多模块同时升级。此时**OverwriteMode**不能传入**2**。相同模块下的升级任务会被覆盖，但不覆盖升级中的任务。
     * ><notice>
     * - 支持的实例：企业版实例和新版公共实例。
     * - 设备端SDK：必须使用物联网平台提供的设备端C语言4.x版本的Link SDK。
     * - 发起基于分组的动态升级批次：**MultiModuleMode**和**OverwriteMode**的设置，必须与分组对应的存量动态升级批次中的设置保持一致。
     * ></notice>
     * 更多信息，请参见[设备支持多模块同时升级说明表](~~58328~~)。
     * @example `false`
     */
    "MultiModuleMode"?: boolean;
    /**
     * 待升级版本号列表。
     * - 如果传入该参数，则不能传入**GroupId**和**GroupType**。
     * - 如果不传入该参数，则必须传入**GroupId**和**GroupType**。
     * > - 基于版本对差分升级包发起动态升级任务时，该参数值必须与差分升级包的待升级版本号（**SrcVersion**）相同。
     * 基于动态分组对差分升级包发起动态升级任务时，无需传入该参数。
     * - 可以调用[QueryDeviceDetail](~~69594~~)，查看设备OTA模块版本号**FirmwareVersion**。
     * - 列表中不能有重复的版本号。
     * - 最多可传入10个版本号。
     * @example `V1.0.1`
     */
    "SrcVersion"?: string[];
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
