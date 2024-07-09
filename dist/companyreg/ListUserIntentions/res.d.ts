export interface ListUserIntentionsResponse {
    /**
     * 当前页码
     * @example `1`
     */
    CurrentPageNum: number;
    /**
     * 总页码
     * @example `1`
     */
    TotalPageNum: number;
    /**
     * 分页属性，每页显示条数
     * @example `20`
     */
    PageSize: number;
    /**
     * 请求id
     * @example `2174AA97-56FB-50FA-B243-0460B9E4CE0C`
     */
    RequestId: string;
    /**
     * 总条数
     * @example `2`
     */
    TotalItemNum: number;
    /**
     * 需求列表
     */
    Data: {
        /**
         * 状态
         * @example `1`
         */
        Status: number;
        /**
         * 更新时间
         * @example `2022-01-24 15:43:58`
         */
        UpdateTime: number;
        /**
         * 描述
         * @example `无`
         */
        Description: string;
        /**
         * 手机号
         * @example `18000000000`
         */
        Mobile: string;
        /**
         * 创建时间
         * @example `2022-01-24 15:43:58`
         */
        CreateTime: number;
        /**
         * 用户uid
         * @example `1219541161213057`
         */
        UserId: string;
        /**
         * 联系人
         * @example `张三`
         */
        ContactName: string;
        /**
         * 业务ID
         * @example `I100000033443`
         */
        BizId: string;
        /**
         * 区域
         * @example `北京市`
         */
        Area: string;
        /**
         * 原因
         * @example `无`
         */
        Reason: string;
        /**
         * 业务类型
         * @example `esp.lgo`
         */
        BizType: string;
        Ext: string;
    }[];
}
