export interface CreateDeviceRequest {
    /**
     * 设备名称。
     * @example `xxx路口摄像头`
     */
    "Name"?: string;
    /**
     * 设备描述。
     * @example `xxx路口摄像头`
     */
    "Description"?: string;
    /**
     * 设备所属空间ID。
     * @example `348*****174-cn-qingdao`
     */
    "GroupId": string;
    /**
     * 上级设备ID，比如：摄像头所属的平台ID。
     * @example `399*****774-cn-qingdao`
     */
    "ParentId"?: string;
    /**
     * 设备所属目录ID。
     * @example `399*****488-cn-qingdao`
     */
    "DirectoryId"?: string;
    /**
     * 设备类型。取值范围：
     * - ipc（摄像头）
     * - platform（平台）
     * - ied（智能设备）
     * @example `ipc`
     */
    "Type": string;
    /**
     * 是否自动启动流，默认值：false。
     * @example `false`
     */
    "AutoStart"?: boolean;
    /**
     * 设备国标ID。
     * > 仅适用于国标协议。
     * @example `31000000****00000002`
     */
    "GbId"?: string;
    /**
     * 设备IP。
     * @example `10.10.10.10`
     */
    "Ip"?: string;
    /**
     * 设备端口。
     * @example `8080`
     */
    "Port"?: number;
    /**
     * 设备上的流URL。
     * @example `rtmp://xxx/xxx`
     */
    "Url"?: string;
    /**
     * 设备用户名。
     * @example `admin`
     */
    "Username"?: string;
    /**
     * 设备密码。
     * @example `admin`
     */
    "Password"?: string;
    /**
     * 设备厂商。
     * @example `公司A`
     */
    "Vendor"?: string;
    /**
     * 设备序列号。
     * @example `7D0*****4C0`
     */
    "Dsn"?: string;
    /**
     * 设备经度。
     * @example `45.00`
     */
    "Longitude"?: string;
    /**
     * 设备维度。
     * @example `119.20`
     */
    "Latitude"?: string;
    /**
     * 是否启用设备位置订阅，默认值：false。
     * @example `false`
     */
    "AutoPos"?: boolean;
    /**
     * 位置订阅周期，单位：秒。
     * @example `300`
     */
    "PosInterval"?: number;
    /**
     * 订阅的国标报警方式。取值范围：
     * - 0（全部）
     * - 5（视频报警）
     * - 7（其他报警）
     * > - 空值表示不订阅。
     * > - 支持多个，用英文逗号（,）分隔。
     * @example `0`
     */
    "AlarmMethod"?: string;
    /**
     * 设备其他参数，格式为JSON序列化的字符串。
     * @example `{}`
     */
    "Params"?: string;
}
