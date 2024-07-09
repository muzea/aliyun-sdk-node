export interface CreateTagTaskResponse {
    /**
     * 每个请求分配唯一的服务器请求ID。
     * @example `2a78486316511158013162460e50bc`
     */
    RequestId: string;
    /**
     * 接口返回实体。
     */
    Data: {
        /**
         * 标注集ID。
         * @example `549`
         */
        Id: number;
        /**
         * 创建时间。
         * @example `1651115634000`
         */
        GmtCreate: number;
        /**
         * 标注数据集名称。
         * @example `QS测试`
         */
        Name: string;
        /**
         * 标注描述。
         * @example `QS描述`
         */
        Description: string;
        /**
         * 标注类型。
         * @example `USE_LABEL_SYSTEM`
         */
        LabelType: string;
        /**
         * 标注状态。
         * @example `TAG_SYSTEM_INIT`
         */
        Status: string;
    };
}
