export interface FinishIncidentRequest {
    /**
     * body参数
     */
    "Body": {
        /**
         * 事件Id，最大传10个
         */
        incidentIds: number[];
        /**
         * 事件完结原因
         * @example `1`
         */
        incidentFinishReason: number;
        /**
         * 事件完结原因描述
         * @example `原因`
         */
        incidentFinishReasonDescription: string;
        /**
         * 解决方案
         * @example `3`
         */
        incidentFinishSolution: number;
        /**
         * 解决方案描述
         * @example `原因`
         */
        incidentFinishSolutionDescription: string;
        /**
         * 幂等校验
         * @example `FD200FAE-E98F-496E-BFE6-4CE61E59A2DC`
         */
        clientToken: string;
    };
}
