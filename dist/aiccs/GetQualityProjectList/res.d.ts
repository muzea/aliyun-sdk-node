export interface GetQualityProjectListResponse {
    /**
     * 状态码描述。
     * @example `xxxx`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `EE338D98-9BD3-4413-B165`
     */
    RequestId: string;
    /**
     * 质检任务信息。
     */
    Data: {
        /**
         * 质检任务列表。
         */
        QualityProjectList: {
            /**
             * 质检任务状态。
             * @example `0`
             */
            Status: number;
            /**
             * 质检类型	。固定取值为**1**（咨询类）。
             * @example `1`
             */
            QualityType: number;
            /**
             * 质检项规则ID。
             */
            QualityRuleIds: number[];
            /**
             * 创建时间。
             * @example `2021-04-07 18:07:18`
             */
            CreateTime: string;
            /**
             * 质检任务名称。
             * @example `自动化质检任务`
             */
            ProjectName: string;
            /**
             * 质检任务频率。
             * @example `1`
             */
            CheckFreqType: number;
            /**
             * 质检抽样范围。
             */
            DepList: number[];
            /**
             * 质检抽样范围。
             */
            ServicerList: number[];
            /**
             * 质检任务版本号
             * @example `1`
             */
            Version: number;
            /**
             * 质检抽样范围。
             */
            GroupList: number[];
            /**
             * 质检任务ID。
             * @example `15977801`
             */
            Id: number;
            /**
             * 修改时间。
             * @example `2021-04-07 18:07:19`
             */
            ModifyTime: string;
        }[];
        /**
         * 当前页。
         * @example `1`
         */
        PageNo: number;
        /**
         * 每页大小。
         * @example `10`
         */
        PageSize: number;
        /**
         * 总记录数。
         * @example `35`
         */
        Total: number;
    };
    /**
     * 状态码。返回200表示请求成功。
     * @example `200`
     */
    Code: string;
    /**
     * 接口调用是否成功。
     * @example `true`
     */
    Success: boolean;
}
