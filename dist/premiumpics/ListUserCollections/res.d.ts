export interface ListUserCollectionsResponse {
    /**
     * 总数
     * @example `20`
     */
    TotalCount: number;
    /**
     * requestId
     * @example `5AF6352F-7F3E-1325-B717-314BDC5A1311`
     */
    RequestId: string;
    /**
     * 每页大小
     * @example `2`
     */
    PageSize: number;
    /**
     * 页码
     * @example `3`
     */
    PageNumber: number;
    /**
     * 错误信息
     * @example `error`
     */
    ErrorMsg: string;
    /**
     * 信息
     */
    Data: {
        /**
         * id
         * @example `cd6c189cc87842afb5985fa1712dc797`
         */
        UnitId: string;
        /**
         * 图片
         * @example `https://pre-logo.aliyun.com/logo/image?goodsId=cd6c189cc87842afb5985fa1712dc797&type=png`
         */
        Image: string;
        /**
         * 名称
         * @example `logo名称`
         */
        UnitName: string;
        /**
         * 扩展信息
         * @example `{"cudId":"P20221026203254000001","from":"cud"}`
         */
        extend: string;
    }[];
    /**
     * 错误码
     * @example `123`
     */
    ErrorCode: string;
    /**
     * 是否成功
     * @example `true`
     */
    Success: boolean;
}
