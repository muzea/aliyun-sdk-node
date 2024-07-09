export interface GetHotspotTagResponse {
    /**
     * 请求ID
     * @example `4F882EA7-3A1D-0113-94E4-70162C4B***`
     */
    RequestId: string;
    /**
     * 热点信息字符串
     * @example `"{}"`
     */
    ObjectString: string;
    /**
     * 热点信息
     * @example `{"watermarkImg":[],"enabledTitleTag":0}`
     */
    Data: string;
    /**
     * 错误消息
     * @example `success`
     */
    ErrMessage: string;
    /**
     * 请求是否成功
     * @example `true`
     */
    Success: boolean;
}
