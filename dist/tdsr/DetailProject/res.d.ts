export interface DetailProjectResponse {
    /**
     * 请求ID，与入参requestId对应
     * @example `4F882EA7-3A1D-0113-94E4-70162C4B***`
     */
    RequestId: string;
    /**
     * 返回码
     * @example `200`
     */
    Code: number;
    /**
     * 是否请求成功
     * @example `true`
     */
    Success: boolean;
    /**
     * 错误消息
     * @example `success`
     */
    Message: string;
    /**
     * 项目ID
     * @example `1234****`
     */
    Id: string;
    /**
     * 项目名称
     * @example `项目A`
     */
    Name: string;
    /**
     * 业务ID
     * @example `5244****`
     */
    BusinessId: number;
    /**
     * 业务名称
     * @example `默认`
     */
    BusinessName: string;
    /**
     * 创建时间
     * @example `1621236933677`
     */
    GmtCreate: number;
    /**
     * 最后修改时间
     * @example `1621236933677`
     */
    GmtModified: number;
    /**
     * Token
     * @example `d989623696ab4f87a80b8d5b0b00****`
     */
    Token: string;
}
