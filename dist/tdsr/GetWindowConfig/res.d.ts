export interface GetWindowConfigResponse {
    /**
     * 返回数据
     * @example `2345****`
     */
    Data: any;
    /**
     * 配置信息JSON字符串
     * @example `"{}"`
     */
    ObjectString: string;
    /**
     * 请求ID
     * @example `4F882EA7-3A1D-0113-94E4-70162C4****`
     */
    RequestId: string;
    /**
     * 是否请求成功
     * @example `success`
     */
    Success: boolean;
    /**
     * 错误信息
     * @example `错误信息`
     */
    ErrMessage: string;
}
