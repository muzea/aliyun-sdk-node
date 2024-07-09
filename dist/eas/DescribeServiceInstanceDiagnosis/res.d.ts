export interface DescribeServiceInstanceDiagnosisResponse {
    /**
     * 请求ID。
     * @example `40325405-579C-4D82***`
     */
    RequestId: string;
    /**
     * 诊断信息。
     */
    Diagnosis: {
        /**
         * 识别到的异常。
         * @example `Container worker0 failed to pull image.`
         */
        Error: string;
        /**
         * 异常原因列表。
         */
        Causes: string[];
        /**
         * 修复建议列表。
         */
        Advices: string[];
    };
}
