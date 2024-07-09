export interface SyncSpeechByCombinationRequest {
    /**
     * 设备ID，该参数可以通过调用[QuerySpeechDevice](~~280408~~)获取。
     * >如果传入该参数，则无需传入**ProductKey**和**DeviceName**。**IotId**作为设备唯一标识符，和**ProductKey**与**DeviceName**组合是一一对应的关系。如果您同时传入**IotId**和**ProductKey**与**DeviceName**组合，则以**IotId**为准。
     * @example `Q7uOhVRdZRRlDnTLv****00100`
     */
    "IotId"?: string;
    /**
     * 设备所属的产品**ProductKey**。如果传入该参数，需同时传入**DeviceName**。
     * @example `a1BwAGV****	`
     */
    "ProductKey"?: string;
    /**
     * 设备的**DeviceName**。
     * 如果传入该参数，需同时传入**ProductKey**。
     *
     * @example `test`
     */
    "DeviceName"?: string;
    /**
     * 实例ID。<props="china"><ph>您可在物联网平台控制台的**实例概览**页面，查看当前实例的**ID**。</ph></props>
     * ><notice>
     * - 若有ID值，必须传入该ID值，否则调用会失败。
     * - 若无ID值，则无需传入。
     * ></notice>
     * <props="china">实例的更多信息，请参见[如何获取实例ID](~~267533~~)。</props>
     * @example `iot_instc_pu****_c*-v64********`
     */
    "IotInstanceId"?: string;
    /**
     * 音频格式，仅支持**wav**、**mp3**、**amr**格式。
     * @example `wav`
     */
    "AudioFormat"?: string;
    /**
     * 下发给设备的唯一播报ID。
     * ><notice>
     * 若不传入则由系统生成，若业务上进行重试播报，需传入重试的播报ID，避免出现重复业务播报。
     * ></notice>
     * @example `42000011392021112380********`
     */
    "SpeechId"?: string;
    /**
     * 是否下发强制播报标识给播报设备。
     * - false（默认）：不下发
     * - true：下发
     * @example `false`
     */
    "EnforceFlag"?: boolean;
    /**
     * 组合播报内容，包括以下类型：
     * - 播报已成功推送至设备中的语料，填入语料的标识。
     * - 播报支持的动态内容，根据设备支持的具体规则传入。
     *
     *     示例：金额，格式为`{$xxx}`，xxx为具体的金额数，如`{$1000}`，则设备播报**1000元**。
     *
     * 设备根据下发的CombinationList进行顺序播报。
     * @example `ZFBDZ`
     */
    "CombinationList": string[];
}
