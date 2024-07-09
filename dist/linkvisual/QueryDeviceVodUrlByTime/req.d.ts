export interface QueryDeviceVodUrlByTimeRequest {
    /**
     * 协议类型：
     * - **rtmp**：RTMP协议。
     * - **flv**：HTTP-FLV协议。
     * - **hls**：HLS协议。
     *  > HLS协议使用限制详细内容，请参见[云端开发](~~208584~~)。
     * @example `rtmp`
     */
    "Scheme"?: string;
    /**
     * 相对于录像开始时间**BeginTime**的偏移量，单位为秒，默认值为0。
     * @example `0`
     */
    "SeekTime"?: number;
    /**
     * 实例ID。您可在物联网平台控制台的**实例概览**页面，查看当前实例的**ID**。
     * ><notice>
     * - 若有ID值，必须传入该ID值，否则调用会失败。
     * - 若无<props="intl"><ph>**实例概览**页面或</ph></props>ID值，则无需传入。
     * ></notice>
     * 实例的更多信息，请参见[实例概述](~~356505~~)。
     * @example `iot-cn-n6w1y****`
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
     * 是否加密：
     * - **true**：加密。
     * - **false**（默认）：不加密。
     * @example `false`
     */
    "ShouldEncrypt"?: boolean;
    /**
     * 录像开始时间，格式为10位时间戳，单位为秒。
     * @example `1508200012`
     */
    "BeginTime": number;
    /**
     * IPC设备的设备ID。物联网平台为该设备颁发的ID，设备的唯一标识符。可调用物联网平台[QueryDeviceDetail](~~69594~~)查询。
     * ><notice> 如果传入该参数，则无需传入**ProductKey**和**DeviceName**。**IotId**作为设备唯一标识符，和**ProductKey**与**DeviceName**的组合是一一对应的关系。如果您同时传入**IotId**和**ProductKey**与**DeviceName**的组合，则以**IotId**为准。
     * ></notice>
     * @example `C47T6xwp6ms4bNlkHRWCg4****`
     */
    "IotId"?: string;
    /**
     * URL有效期，取值范围为10~14400，单位为秒。默认值为10。
     * @example `60`
     */
    "UrlValidDuration"?: number;
    /**
     * 播放地址是否可以无限次使用：
     * - **true**：10秒内可无限次使用。
     * - **false**（默认）：仅可使用一次。
     * @example `false`
     */
    "PlayUnLimited"?: boolean;
    /**
     * 录像结束时间，格式为10位时间戳，单位为秒。
     * @example `1582420940`
     */
    "EndTime": number;
    /**
     * 加密类型。目前仅支持I帧加密，取值为0。
     * @example `0`
     */
    "EncryptType"?: number;
}
