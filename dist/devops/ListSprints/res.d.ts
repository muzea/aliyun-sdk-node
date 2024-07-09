export interface ListSprintsResponse {
    /**
     * 总数
     * @example `10`
     */
    totalCount: number;
    /**
     * 分页Token，没有下一页则为空
     * @example `""`
     */
    nextToken: string;
    /**
     * 每页数量
     * @example `20`
     */
    maxResults: number;
    /**
     * 请求id，每次请求都是唯一值，便于后续排查问题
     * @example `ASSDS-ASSASX-XSAXSA-XSAXSAXS`
     */
    requestId: string;
    /**
     * 错误信息
     * @example `error`
     */
    errorMsg: string;
    /**
     * 错误码
     * @example `Openapi.RequestError`
     */
    errorCode: string;
    /**
     * true或者false
     * @example `true`
     */
    success: boolean;
    /**
     * 迭代信息
     */
    sprints: {
        /**
         * 创建人aliyunPk
         * @example `19xx7043xxxxxxx914`
         */
        creator: string;
        /**
         * 描述信息
         * @example `xxx`
         */
        description: string;
        /**
         * 创建时间
         * @example `1623916393000`
         */
        gmtCreate: number;
        /**
         * 修改时间
         * @example `1623916393000`
         */
        gmtModified: number;
        /**
         * 结束时间
         * @example `1623916393000`
         */
        endDate: number;
        /**
         * 开始时间
         * @example `1638403200000`
         */
        startDate: number;
        /**
         * 迭代唯一标识符
         * @example `e8bxxxxxxxxxxxxxxxx23`
         */
        identifier: string;
        /**
         * 修改人aliyunPk
         * @example `19xx7043xxxxxxx914`
         */
        modifier: string;
        /**
         * 迭代名称
         * @example `demo示例项目`
         */
        name: string;
        /**
         * 项目唯一标识
         * @example `5e70xxxxxxcd000xxxxe96`
         */
        spaceIdentifier: string;
        /**
         * 可见范围
         * @example `public`
         */
        scope: string;
        /**
         * 状态，TODO，DOING，DONE，分别代表迭代未开始，进行中和已完成
         * @example `TODO`
         */
        status: string;
    }[];
}
