export interface ListScenarioResponse {
    /**
     * 请求ID。
     * @example `98027D1F-3AEB-492C-A4AA-E9217992****`
     */
    RequestId: string;
    /**
     * 业务监控详细信息。
     */
    ArmsScenarios: {
        /**
         * 业务监控更新时间。
         * @example `1585214916000`
         */
        UpdateTime: string;
        /**
         * 应用ID。
         * @example `b590lhguqs@28f515462******`
         */
        AppId: string;
        /**
         * 业务监控对应编码。
         * @example `a9f8****`
         */
        Sign: string;
        /**
         * 业务监控创建时间。
         * @example `1585214916000`
         */
        CreateTime: string;
        /**
         * 用户ID。
         * @example `113197164949****`
         */
        UserId: string;
        /**
         * 扩展信息字段JSON串。
         * @example `{"_MODE": "CUSTOM-TRANSACTION","_SCENARIO": "USER-DEFINED"}`
         */
        Extensions: string;
        /**
         * 业务监控名称。
         * @example `测试业务监控`
         */
        Name: string;
        /**
         * 业务监控ID。
         * @example `132`
         */
        Id: number;
        /**
         * 地域ID。
         * @example `cn-zhangjiakou`
         */
        RegionId: string;
    }[];
}
