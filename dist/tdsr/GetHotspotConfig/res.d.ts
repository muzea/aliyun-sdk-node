export interface GetHotspotConfigResponse {
    /**
     * 请求ID
     * @example `4F882EA7-3A1D-0113-94E4-70162C4B***`
     */
    RequestId: string;
    /**
     * 返回码
     * @example `200`
     */
    Code: number;
    /**
     * 请求是否成功
     * @example `true`
     */
    Success: boolean;
    /**
     * 错误消息
     * @example `success`
     */
    Message: string;
    /**
     * 热点配置信息
     * @example `config`
     */
    Data: string;
}
