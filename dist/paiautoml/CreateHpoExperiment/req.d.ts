export interface CreateHpoExperimentRequest {
    /**
     * 请求体。
     */
    "body"?: {
        /**
         * HPO实验配置参数结构体。
         */
        HpoExperimentConfiguration: any;
        /**
         * 实验名称
         * @example `my experiment x`
         */
        Name: string;
        /**
         * 工作空间ID。
         * @example `default`
         */
        WorkspaceId: string;
        /**
         * 实验描述信息
         * @example `This is an AutoML HPO experiment.`
         */
        Description: string;
        /**
         * 代码配置的可见性，取值如下。
         * - PUBLIC：在此工作空间中，对所有人可见。
         * - PRIVATE：在此工作空间中，仅对您和管理员可见。
         * @example `PRIVATE`
         */
        Accessibility: string;
    };
}
