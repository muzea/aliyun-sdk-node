export interface GetResourceComplianceByPackResponse {
    /**
     * 合规包中资源的合规结果。
     */
    ResourceComplianceResult: {
        /**
         * 合规包ID。
         * @example `cp-541e626622af0087****`
         */
        CompliancePackId: string;
        /**
         * 不合规资源数。
         * @example `7`
         */
        NonCompliantCount: number;
        /**
         * 资源总数。
         * @example `10`
         */
        TotalCount: number;
    };
    /**
     * 请求ID。
     * @example `6EC7AED1-172F-42AE-9C12-295BC2ADB751`
     */
    RequestId: string;
}
