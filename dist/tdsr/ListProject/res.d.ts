export interface ListProjectResponse {
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
     * 是否有下一页
     * @example `true`
     */
    HasNext: boolean;
    /**
     * 当前页
     * @example `1`
     */
    CurrentPage: number;
    /**
     * 总页数
     * @example `5`
     */
    TotalPage: number;
    /**
     * count
     * @example `100`
     */
    Count: number;
    /**
     * 项目数据
     */
    List: {
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
         * @example `123123`
         */
        CreateTime: number;
        /**
         * 最后修改时间
         * @example `123214`
         */
        ModifiedTime: number;
        /**
         * Token
         * @example `d989623696ab4f87a80b8d5b0b0****`
         */
        Token: string;
    }[];
}
