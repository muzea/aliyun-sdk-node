export interface GetSprintInfoResponse {
    /**
     * 请求id，每次请求都是唯一值，便于后续排查问题
     * @example `ASSDS-ASSASX-XSAXSA-XSAXSAXS`
     */
    requestId: string;
    /**
     * 错误码
     * @example `Openapi.RequestError`
     */
    errorCode: string;
    /**
     * 错误信息
     * @example `error`
     */
    errorMessage: string;
    /**
     * true或者false
     * @example `true`
     */
    success: boolean;
    /**
     * 迭代信息
     */
    sprint: {
        /**
         * 创建人id
         * @example `19xx7043xxxxxxx914`
         */
        creator: string;
        /**
         * 描述信息
         * @example `迭代详细描述`
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
         * 修改人
         * @example `19xx7043xxxxxxx914`
         */
        modifier: string;
        /**
         * 迭代名称
         * @example `demo示例项目`
         */
        name: string;
        /**
         * 项目id
         * @example `5e70xxxxxxcd000xxxxe96`
         */
        spaceIdentifier: string;
        /**
         * 可见范围
         * @example `public`
         */
        scope: string;
        /**
         * 状态
         * 未开始：Todo
         * 进行中：Doing
         * 已完成：Done
         * @example `Todo`
         */
        status: string;
        /**
         * 迭代负责人列表
         */
        owners: string[];
    };
}
