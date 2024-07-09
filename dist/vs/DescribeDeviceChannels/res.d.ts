export interface DescribeDeviceChannelsResponse {
    /**
     * 第几个分页
     * @example `1`
     */
    PageNum: number;
    /**
     * 分页大小
     * @example `20`
     */
    PageSize: number;
    /**
     * 该条任务请求ID。
     * @example `4641C72D-462E-4AEA-8485-FC267AF90B0A`
     */
    RequestId: string;
    /**
     * 通道总数
     * @example `1`
     */
    TotalCount: number;
    /**
     * 分页总数
     * @example `1`
     */
    PageCount: number;
    /**
     * 通道列表
     */
    Channels: {
        /**
         * 流状态
         * @example `off`
         */
        StreamStatus: string;
        /**
         * 国标ID
         * @example `3100000****000000002`
         */
        GbId: string;
        /**
         * 设备其它配置。
         * @example `{}`
         */
        Params: string;
        /**
         * 设备ID
         * @example `348*****380-cn-qingdao`
         */
        DeviceId: string;
        /**
         * 通道ID。
         * @example `0`
         */
        ChannelId: number;
        /**
         * 设备状态
         * @example `on`
         */
        DeviceStatus: string;
        /**
         * 通道名称
         * @example `通道1`
         */
        Name: string;
        /**
         * 流ID
         * @example `323*****997-cn-qingdao`
         */
        StreamId: string;
    }[];
}
