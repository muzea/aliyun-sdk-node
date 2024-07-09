export interface DescribeGroupResponse {
    /**
     * 空间状态。
     * @example `on`
     */
    Status: string;
    /**
     * 是否启用按需拉流。
     * @example `false`
     */
    LazyPull: boolean;
    /**
     * 空间内设备状态更新时的回调。
     * @example `http://example.com/callback`
     */
    Callback: string;
    /**
     * 请求ID。
     * @example `BEA5625F-8FCF-48F4-851B-CA63946DA664`
     */
    RequestId: string;
    /**
     * 空间描述。
     * @example `上海高速监控`
     */
    Description: string;
    /**
     * 空间使用的应用名称。
     * @example `live`
     */
    App: string;
    /**
     * 空间所属区域，即服务中心。
     * @example `cn-qingdao`
     */
    Region: string;
    /**
     * 空间是否启用。
     * @example `true`
     */
    Enabled: boolean;
    /**
     * 空间使用的接入协议，取值范围：
     * - gb28181
     * - rtmp
     * @example `gb28181`
     */
    InProtocol: string;
    /**
     * 空间使用的播放协议，取值范围：
     * - flv
     * - hls
     * - rtmp
     * > 支持多个，用英文逗号（,）分隔。
     * @example `flv,hls,rtmp`
     */
    OutProtocol: string;
    /**
     * 空间名称。
     * @example `上海高速监控`
     */
    Name: string;
    /**
     * 空间使用的推流域名。
     * @example `demo.aliyundoc.com`
     */
    PushDomain: string;
    /**
     * 空间的创建时间。
     * @example `2019-02-28T17:00:17Z`
     */
    CreatedTime: string;
    /**
     * 空间使用的播流域名。
     * @example `example.aliyundoc.com`
     */
    PlayDomain: string;
    /**
     * 空间关联的国标信令服务器端口。
     * > 仅适用于使用国标协议接入的空间。
     * @example `5060`
     */
    GbPort: number;
    /**
     * 空间关联的国标ID。
     * > 仅适用于使用国标协议接入的空间。
     * @example `3100000*****0000001`
     */
    GbId: string;
    /**
     * 空间关联的国标信令服务器IP地址。
     * > 仅适用于使用国标协议接入的空间。
     * @example `10.10.10.10`
     */
    GbIp: string;
    /**
     * 空间ID别名。
     * @example `337639*****24964-cn-qingdao`
     */
    AliasId: string;
    /**
     * 空间ID。
     * @example `337639****224964-cn-qingdao`
     */
    Id: string;
    /**
     * 空间提供的国标信令服务器TCP端口。
     * > 仅适用于使用国标协议接入的空间。
     */
    GbTcpPorts: string[];
    /**
     * 空间提供的国标信令服务器UDP端口。
     * > 仅适用于使用国标协议接入的空间。
     */
    GbUdpPorts: string[];
    /**
     * 空间内设备的统计信息。
     */
    Stats: {
        /**
         * 空间内平台个数。
         * @example `100`
         */
        PlatformNum: number;
        /**
         * 空间内设备总数。
         * @example `200`
         */
        DeviceNum: number;
        /**
         * 空间内摄像头个数。
         * @example `100`
         */
        IpcNum: number;
        /**
         * 空间内智能设备个数。
         * @example `0`
         */
        IedNum: number;
    };
}
