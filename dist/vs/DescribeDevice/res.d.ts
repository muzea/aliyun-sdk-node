export interface DescribeDeviceResponse {
    /**
     * 设备类型。取值范围：
     * - ipc（摄像头）
     * - platform（平台）
     * - ied（智能设备）
     * @example `ipc`
     */
    Type: string;
    /**
     * 设备状态。取值范围：
     * - on（在线）
     * - off（离线）
     * - failed（锁定）
     * - new（未注册）
     * @example `on`
     */
    Status: string;
    /**
     * 订阅的国标报警方式。取值范围：
     * - 0（全部）
     * - 5（视频报警）
     * - 7（其他报警）
     * > - 空值表示不订阅。
     * > - 支持多个，用英文逗号（,）分隔。
     * @example `5`
     */
    AlarmMethod: string;
    /**
     * 设备序列号。
     * @example `7D0*****4C0`
     */
    Dsn: string;
    /**
     * 设备端口。
     * @example `8080`
     */
    Port: number;
    /**
     * 位置订阅周期，单位：秒。
     * @example `300`
     */
    PosInterval: number;
    /**
     * 上级设备ID，比如：摄像头所属的平台ID。
     * @example `3238848****092995-cn-qingdao`
     */
    ParentId: string;
    /**
     * 设备密码。
     * @example `admin`
     */
    Password: string;
    /**
     * 是否启用设备位置订阅。
     * @example `false`
     */
    AutoPos: boolean;
    /**
     * 设备其他参数。
     * @example `{}`
     */
    Params: string;
    /**
     * 请求ID。
     * @example `BEA5625F-8FCF-48F4-851B-CA63946DA664`
     */
    RequestId: string;
    /**
     * 设备描述。
     * @example `xxx路口摄像头`
     */
    Description: string;
    /**
     * 设备是否启用。
     * @example `true`
     */
    Enabled: boolean;
    /**
     * 设备名称。
     * @example `xxx路口摄像头`
     */
    Name: string;
    /**
     * 通道同步时间。
     * @example `2019-02-28T17:01:17Z`
     */
    ChannelSyncTime: string;
    /**
     * 设备创建时间。
     * @example `2019-02-28T17:00:17Z`
     */
    CreatedTime: string;
    /**
     * 目录ID。
     * @example `3238848****092994-cn-qingdao`
     */
    DirectoryId: string;
    /**
     * 设备注册时间。
     * @example `2019-02-28T17:00:17Z`
     */
    RegisteredTime: string;
    /**
     * 设备注册协议。
     * @example `gb28181`
     */
    Protocol: string;
    /**
     * 设备IP。
     * @example `10.10.10.10`
     */
    Ip: string;
    /**
     * 设备上的流URL。
     * @example `rtmp://xxx/xxx`
     */
    Url: string;
    /**
     * 是否自动启动流。
     * @example `false`
     */
    AutoStart: boolean;
    /**
     * 设备厂商。
     * @example `公司A`
     */
    Vendor: string;
    /**
     * 设备国标ID。
     * > 仅适用于国标协议。
     * @example `31000000****00000002`
     */
    GbId: string;
    /**
     * 设备所属空间ID。
     * @example `3238848****092994-cn-qingdao`
     */
    GroupId: string;
    /**
     * 设备经度。
     * @example `45.00`
     */
    Longitude: string;
    /**
     * 设备维度。
     * @example `119.20`
     */
    Latitude: string;
    /**
     * 设备ID。
     * @example `3238848****092996-cn-qingdao`
     */
    Id: string;
    /**
     * 设备用户名。
     * @example `admin`
     */
    Username: string;
    /**
     * 设备流统计信息。
     */
    Stats: {
        /**
         * 失败流数量。
         * @example `1`
         */
        FailedNum: number;
        /**
         * 流数量。
         * @example `1`
         */
        StreamNum: number;
        /**
         * 通道数量。
         * @example `1`
         */
        ChannelNum: number;
        /**
         * 在线流数量。
         * @example `1`
         */
        OnlineNum: number;
        /**
         * 离线流数量。
         * @example `1`
         */
        OfflineNum: number;
    };
    /**
     * 目录信息。
     */
    Directory: {
        /**
         * 上级目录ID。
         * @example `3238848****092995-cn-qingdao`
         */
        ParentId: string;
        /**
         * 目录描述。
         * @example `目录1`
         */
        Description: string;
        /**
         * 目录所属空间ID。
         * @example `3238848****092994-cn-qingdao`
         */
        GroupId: string;
        /**
         * 目录名称。
         * @example `目录1`
         */
        Name: string;
        /**
         * 目录创建时间。
         * @example `2019-02-28T17:00:17Z`
         */
        CreatedTime: string;
        /**
         * 目录ID。
         * @example `3238848****092994-cn-qingdao`
         */
        Id: string;
    };
}
