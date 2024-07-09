export interface StopDataSetResponse {
    /**
     * 数据集详情
     */
    result: {
        /**
         * 版本号
         * @example `20181023214546`
         */
        versionId: string;
        /**
         * 数据版本状态（Importing：导入中）
         * @example `Importing`
         */
        state: string;
        /**
         * 最后修改数据源的时间。
         * @example `1544112000000`
         */
        gmtModified: number;
        /**
         * 创建数据源的时间。
         * @example `1544112000000`
         */
        gmtCreate: number;
        /**
         * 实例ID。
         * @example `airec-cn-o400whm78004`
         */
        instanceId: string;
    };
    /**
     * 错误码
     * @example `InternalServerError`
     */
    code: string;
    /**
     * 请求id
     * @example `8F81A922-6C81-46D6-B78C-CC35E16B1691`
     */
    requestId: string;
    /**
     * 错误详情
     * @example `An internal server error occurred`
     */
    message: string;
}
