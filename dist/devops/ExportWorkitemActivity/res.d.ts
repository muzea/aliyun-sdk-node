export interface ExportWorkitemActivityResponse {
    /**
     * 总条数
     * @example `100`
     */
    totalCount: number;
    /**
     * 下一页token，为null表示没有下一页
     * @example `2`
     */
    nextToken: string;
    /**
     * 返回条数
     * @example `10`
     */
    maxResults: number;
    /**
     * 返回结果
     */
    result: {
        /**
         * 记录自增Id
         * @example `4406380356`
         */
        id: number;
        /**
         * 事件时间
         * @example `1714961337000`
         */
        gmtEvent: number;
        /**
         * 唯一标识
         * @example `254662353`
         */
        identifier: string;
        /**
         * 企业id
         * @example `61db9af2148974246bexxxx`
         */
        organizationId: string;
        /**
         * 新值
         * @example `1`
         */
        newValue: string;
        /**
         * 旧值
         * @example `2`
         */
        oldValue: string;
        /**
         * 项目ID
         * @example `2a62349afcbef7f23d8f31xxxx`
         */
        projectId: string;
        /**
         * 来源
         * @example `projex`
         */
        source: string;
        /**
         * 事件类型
         * @example `workitem.update.priority`
         */
        type: string;
        /**
         * 工作项ID
         * @example `ec69eae498acce08ff7260xxxx`
         */
        workitemId: string;
    }[];
}
