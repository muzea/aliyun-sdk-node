export interface DescribeStreamResponse {
    /**
     * 流状态。取值：
     * - on（在线）
     * - off（离线）
     * @example `on`
     */
    Status: string;
    /**
     * 流所属播流域名。
     * @example `example.aliyundoc.com`
     */
    PlayDomain: string;
    /**
     * 流协议。
     * @example `gb28181`
     */
    Protocol: string;
    /**
     * 流所属的设备ID。
     * @example `348*****380-cn-qingdao`
     */
    DeviceId: string;
    /**
     * 视频流分辨率高度。
     * @example `720`
     */
    Height: number;
    /**
     * 请求ID。
     * @example `BEA5625F-8FCF-48F4-851B-CA63946DA664`
     */
    RequestId: string;
    /**
     * 流所属的空间ID。
     * @example `348*****174-cn-qingdao`
     */
    GroupId: string;
    /**
     * 视频流分辨率宽度。
     * @example `1280`
     */
    Width: number;
    /**
     * 流所属应用。
     * @example `live`
     */
    App: string;
    /**
     * 流是否启用。
     * @example `true`
     */
    Enabled: boolean;
    /**
     * 流名称。
     * @example `31000000*****0000002`
     */
    Name: string;
    /**
     * 流所属推流域名。
     * @example `demo.aliyundoc.com`
     */
    PushDomain: string;
    /**
     * 流创建时间。
     * @example `2019-02-28T17:00:17Z`
     */
    CreatedTime: string;
    /**
     * 流ID。
     * @example `323*****997-cn-qingdao`
     */
    Id: string;
}
