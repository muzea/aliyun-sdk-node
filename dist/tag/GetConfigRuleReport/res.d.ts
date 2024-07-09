export interface GetConfigRuleReportResponse {
    /**
     * 请求ID。
     * @example `A68BD5BC-5B12-5A9B-8AE9-77884886BE10`
     */
    RequestId: string;
    /**
     * 是否成功。取值：
     * - true：成功。
     * - false：失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 状态码。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 上一次生成的不合规资源检测报告基本信息。
     */
    Data: {
        /**
         * 不合规资源检测报告的ID。
         * @example `crp-ao0786618088006c****`
         */
        ReportId: string;
        /**
         * 报告生成的时间戳。
         * @example `1655089159000`
         */
        CreatedTime: number;
        /**
         * 目标节点ID。
         * > 仅当[GenerateConfigRuleReport](~~433313~~)和当前API的请求参数中同时指定了`TargetType`和`TargetId`时，才会返回该参数。
         * @example `154950938137****`
         */
        TargetId: string;
        /**
         * 目标节点类型。取值：
         * - USER：当前登录账号。适用单账号模式。
         * - ROOT：资源目录中的Root资源夹。适用多账号模式。
         * - FOLDER：资源目录中的资源夹。适用多账号模式。
         * - ACCOUNT：资源目录中的成员。适用多账号模式。
         * > 仅当[GenerateConfigRuleReport](~~433313~~)和当前API的请求参数中同时指定了`TargetType`和`TargetId`，才会返回该参数。
         * @example `ACCOUNT`
         */
        TargetType: string;
    };
}
