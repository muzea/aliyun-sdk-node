export interface QueryLiveStreamingRequest {
    /**
     * 播放协议类型：
     * - **rtmp**（默认）：RTMP协议。
     * - **hls**：HLS协议。
     * - **flv**：HTTP-FLV协议。
     * @example `rtmp`
     */
    "Scheme"?: string;
    /**
     * 实例ID。您可在物联网平台控制台的**实例概览**页面，查看当前实例的**ID**。
     * ><notice>
     * - 若有ID值，必须传入该ID值，否则调用会失败。
     * - 若无<props="intl"><ph>**实例概览**页面或</ph></props>ID值，则无需传入。
     * ></notice>
     * 实例的更多信息，请参见[实例概述](~~356505~~)。
     * @example `iot-cn-n6w1y59****`
     */
    "IotInstanceId"?: string;
    /**
     * IPC设备所属产品的ProductKey。
     * 您可以在物联网平台控制台**产品**页查看或调用[QueryProductList](~~69271~~)查看当前账号下所有产品的信息。
     * ><notice> 如果传入该参数，需同时传入**DeviceName**。
     * ></notice>
     * @example `a1BwAGV****`
     */
    "ProductKey"?: string;
    /**
     * IPC设备的设备名称。
     * 您可以在物联网平台控制台的**设备**页查看**DeviceName**。
     * ><notice> 如果传入该参数，需同时传入**ProductKey**。
     * ></notice>
     * @example `camera1`
     */
    "DeviceName"?: string;
    "EnableStun"?: boolean;
    /**
     * 码流类型：
     * - **0**（默认）：主码流。
     * - **1**：辅码流。
     * @example `0`
     */
    "StreamType"?: number;
    /**
     * 视频缓存数据时长，取值范围为0~10000，单位为毫秒，默认值为0。
     * @example `0`
     */
    "CacheDuration"?: number;
    /**
     * IPC设备的设备ID。物联网平台为该设备颁发的ID，设备的唯一标识符。可调用物联网平台[QueryDeviceDetail](~~69594~~)查询。
     * ><notice> 如果传入该参数，则无需传入**ProductKey**和**DeviceName**。**IotId**作为设备唯一标识符，和**ProductKey**与**DeviceName**的组合是一一对应的关系。如果您同时传入**IotId**和**ProductKey**与**DeviceName**的组合，则以**IotId**为准。
     * ></notice>
     * @example `C47T6xwp6ms4bNlkHRWCg4****`
     */
    "IotId"?: string;
    /**
     * 是否加密：
     * - **true**：加密。
     * - **false**（默认）：不加密。
     * @example `true`
     */
    "ShouldEncrypt"?: boolean;
    /**
     * URL有效期，取值范围为10~14400，单位为秒。默认值为10。
     * @example `60`
     */
    "UrlValidDuration"?: number;
    /**
     * 播放地址在有效期内是否允许无限次使用：
     * - **true**：允许。
     * - **false**（默认）：不允许。
     * @example `false`
     */
    "PlayUnLimited"?: boolean;
    /**
     * 加密类型：
     * - **1**（默认）：关键帧加密。
     * - **0**：不加密。
     * @example `1`
     */
    "EncryptType"?: number;
    /**
     * 是否给设备下发强制I帧指令：
     * - **true**：下发。
     * - **false**（默认）：不下发。
     * @example `false`
     */
    "ForceIFrame"?: boolean;
}
