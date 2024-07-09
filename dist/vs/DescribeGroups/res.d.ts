export interface DescribeGroupsResponse {
    /**
     * 第几个分页。
     * @example `5`
     */
    PageNum: number;
    /**
     * 分页大小。
     * @example `20`
     */
    PageSize: number;
    /**
     * 请求ID。
     * @example `BEA5625F-8FCF-48F4-851B-CA63946DA664`
     */
    RequestId: string;
    /**
     * 空间总数。
     * @example `200`
     */
    TotalCount: number;
    /**
     * 分页总数。
     * @example `10`
     */
    PageCount: number;
    /**
     * 空间列表。
     */
    Groups: {
        /**
         * 空间状态。取值范围：
         * - on（已启用）
         * - off（已停用）
         * @example `on`
         */
        Status: string;
        /**
         * 是否启用按需拉流。
         * @example `false`
         */
        LazyPull: boolean;
        /**
         * 空间使用的播流域名。
         * @example `demo.aliyundoc.com`
         */
        PlayDomain: string;
        /**
         * 空监关联的国标信令服务器端口。
         * > 仅适用于使用国标协议接入的空间。
         * @example `5060`
         */
        GbPort: number;
        /**
         * 空间内设备状态更新时的回调。
         * @example `http://example.com/callback`
         */
        Callback: string;
        /**
         * 空间提供的国标ID。
         * > 仅适用于使用国标协议接入的空间。
         * @example `31000000000000000001`
         */
        GbId: string;
        /**
         * 空间提供的国标信令服务器地址。
         * > 仅适用于使用国标协议接入的空间。
         * @example `10.10.10.10`
         */
        GbIp: string;
        /**
         * 空间描述。
         * @example `测试视图计算`
         */
        Description: string;
        /**
         * 空间所属区域，即服务中心。
         * @example `cn-qingdao`
         */
        Region: string;
        /**
         * 空间使用的应用名称。
         * @example `live`
         */
        App: string;
        /**
         * 空间ID别名。
         * @example `337639*****24964-cn-qingdao`
         */
        AliasId: string;
        /**
         * 空间是否启用。
         * @example `true`
         */
        Enabled: boolean;
        /**
         * 空间使用的接入协议。
         * @example `gb28181`
         */
        InProtocol: string;
        /**
         * 空间使用的播放协议。
         * @example `rtmp,flv,hls`
         */
        OutProtocol: string;
        /**
         * 空间使用的推流域名。
         * @example `example.aliyundoc.com`
         */
        PushDomain: string;
        /**
         * 空间名称。
         * @example `我的空间`
         */
        Name: string;
        /**
         * 空间创建时间。
         * @example `2019-02-28T17:00:17Z`
         */
        CreatedTime: string;
        /**
         * 空间ID。
         * @example `33763950877224964-cn-qingdao`
         */
        Id: string;
        GbTcpPorts: string[];
        GbUdpPorts: string[];
        /**
         * 空间设备统计信息。
         */
        Stats: {
            /**
             * 空间内平台数量。
             * @example `0`
             */
            PlatformNum: number;
            /**
             * 空间内设备总数。
             * @example `200`
             */
            DeviceNum: number;
            /**
             * 空间内摄像头数量。
             * @example `200`
             */
            IpcNum: number;
            /**
             * 空间内智能设备数量。
             * @example `0`
             */
            IedNum: number;
        };
    }[];
}
